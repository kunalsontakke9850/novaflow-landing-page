import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';

describe('Hero', () => {
  it('introduces the workspace concept and provides a dashboard path', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
    expect(screen.getByRole('link', { name: /explore dashboard/i })).toHaveAttribute(
      'href',
      '#product-showcase',
    );
    expect(screen.getByText(/illustrative dashboard data/i)).toBeVisible();
  });

  it('does not present connection counts as product metrics', () => {
    render(<Hero />);

    expect(screen.queryByText(/connected product services/i)).not.toBeInTheDocument();
  });
});
