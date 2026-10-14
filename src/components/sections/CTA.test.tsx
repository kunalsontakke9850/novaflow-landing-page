import { render, screen } from '@testing-library/react';
import { CTA } from '@/components/sections/CTA';

describe('CTA', () => {
  it('provides working links to the product preview and concept pricing', () => {
    render(<CTA />);

    expect(screen.getByRole('link', { name: /explore product preview/i })).toHaveAttribute('href', '#product-showcase');
    expect(screen.getByRole('link', { name: /view pricing concept/i })).toHaveAttribute('href', '#pricing');
  });

  it('explains that product services are not connected', () => {
    render(<CTA />);

    expect(screen.getByText(/frontend demo only/i)).toBeInTheDocument();
    expect(screen.getByText(/has no accounts, integrations, or payments connected/i)).toBeInTheDocument();
  });
});
