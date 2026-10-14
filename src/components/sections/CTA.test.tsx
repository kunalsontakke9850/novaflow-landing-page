import { render, screen } from '@testing-library/react';
import { CTA } from '@/components/sections/CTA';

describe('CTA', () => {
  it('provides working links to the product preview and concept pricing', () => {
    render(<CTA />);

    expect(screen.getByRole('link', { name: /explore the dashboard/i })).toHaveAttribute('href', '#product-showcase');
    expect(screen.getByRole('link', { name: /see example pricing/i })).toHaveAttribute('href', '#pricing');
  });

  it('explains that product services are not connected', () => {
    render(<CTA />);

    expect(screen.getByText(/take a closer look/i)).toBeInTheDocument();
    expect(screen.getByText(/no product services are connected/i)).toBeInTheDocument();
  });
});
