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
  });

  it('makes unavailable task creation controls visibly disabled', () => {
    render(<ProductShowcase />);

    expect(screen.getByRole('button', { name: /new task/i })).toBeDisabled();
    expect(screen.getAllByRole('button', { name: /add task/i }).every((button) => (button as HTMLButtonElement).disabled)).toBe(true);
  });
});
