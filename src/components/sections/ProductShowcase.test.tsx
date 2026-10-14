import { fireEvent, render, screen } from '@testing-library/react';
import { ProductShowcase } from '@/components/sections/ProductShowcase';

describe('ProductShowcase', () => {
  it('applies the task filter to the board view', () => {
    render(<ProductShowcase />);

    fireEvent.change(screen.getByRole('combobox', { name: /filter tasks/i }), {
      target: { value: 'completed' },
    });

    expect(screen.getByText('API rate limiting')).toBeInTheDocument();
    expect(screen.queryByText('Redesign onboarding flow')).not.toBeInTheDocument();
  });

  it('exposes the active dashboard view to assistive technology', () => {
    render(<ProductShowcase />);

    const listTab = screen.getByRole('tab', { name: 'List' });
    fireEvent.click(listTab);

    expect(listTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /scrollable task table/i })).toBeInTheDocument();
  });

  it('switches dashboard tabs with arrow and Home/End keys', () => {
    render(<ProductShowcase />);

    const boardTab = screen.getByRole('tab', { name: 'Board' });
    const listTab = screen.getByRole('tab', { name: 'List' });
    const timelineTab = screen.getByRole('tab', { name: 'Timeline' });

    fireEvent.keyDown(boardTab, { key: 'ArrowRight' });
    expect(listTab).toHaveAttribute('aria-selected', 'true');
    expect(listTab).toHaveFocus();

    fireEvent.keyDown(listTab, { key: 'End' });
    expect(timelineTab).toHaveAttribute('aria-selected', 'true');
    expect(timelineTab).toHaveFocus();

    fireEvent.keyDown(timelineTab, { key: 'ArrowRight' });
    expect(boardTab).toHaveAttribute('aria-selected', 'true');
    expect(boardTab).toHaveFocus();
  });

  it('makes unavailable task creation controls visibly disabled', () => {
    render(<ProductShowcase />);

    expect(screen.getByRole('button', { name: /new task/i })).toBeDisabled();
    expect(screen.getAllByRole('button', { name: /add task/i }).every((button) => (button as HTMLButtonElement).disabled)).toBe(true);
  });

  it('labels the scrollable dashboard content region', () => {
    render(<ProductShowcase />);

    expect(screen.getByRole('region', { name: /dashboard content/i })).toBeInTheDocument();
  });
});
