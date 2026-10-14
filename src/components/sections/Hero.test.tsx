import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';

describe('Hero', () => {
  it('explains the project management demo to first-time visitors', () => {
    render(<Hero />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /plan projects, manage tasks, and track progress in one workspace/i,
      }),
    ).toBeVisible();
    expect(
      screen.getByText(/interactive portfolio demo of a project workspace/i),
    ).toBeVisible();
    expect(
      screen.getByText(/using sample data; it isn’t a live service/i),
    ).toBeVisible();
  });

  it('introduces the workspace concept and provides a dashboard path', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
    expect(screen.getByRole('link', { name: /explore dashboard/i })).toHaveAttribute(
      'href',
      '#product-showcase',
    );
  });

  it('does not present connection counts as product metrics', () => {
    render(<Hero />);

    expect(screen.queryByText(/connected product services/i)).not.toBeInTheDocument();
  });
});
