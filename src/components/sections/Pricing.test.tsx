import { render, screen, fireEvent } from '@testing-library/react';
import { Pricing } from '@/components/sections/Pricing';

describe('Pricing', () => {
  it('renders all three plans', () => {
    render(<Pricing />);
    expect(screen.getAllByText('Free')).toHaveLength(2);
    expect(screen.getByText('Pro')).toBeInTheDocument();
    expect(screen.getByText('Team')).toBeInTheDocument();
  });

  it('shows monthly prices by default', () => {
    render(<Pricing />);
    // Free plan shows "Free" text instead of $0 - there are two "Free" texts (plan name and price)
    expect(screen.getAllByText('Free')).toHaveLength(2);
    expect(screen.getByText('$29')).toBeInTheDocument();
    expect(screen.getByText('$79')).toBeInTheDocument();
    expect(screen.getAllByText('/month')).toHaveLength(2);
  });

  it('switches to yearly prices when toggle clicked', () => {
    render(<Pricing />);

    // Click the yearly toggle
    const toggle = screen.getByRole('switch', { name: /switch to yearly billing/i });
    fireEvent.click(toggle);

    expect(screen.getByText('$24')).toBeInTheDocument();
    expect(screen.getByText('$65')).toBeInTheDocument();
    // Free plan shows "Free" without "/month", so only Pro and Team have "/month"
    expect(screen.getAllByText('/month')).toHaveLength(2);
    expect(screen.getAllByText(/billed yearly/i)).toHaveLength(2);
  });

  it('switches back to monthly when toggle clicked again', () => {
    render(<Pricing />);

    const toggle = screen.getByRole('switch', { name: /switch to yearly billing/i });
    fireEvent.click(toggle);
    fireEvent.click(toggle);

    expect(screen.getByText('$29')).toBeInTheDocument();
    expect(screen.getByText('$79')).toBeInTheDocument();
    // Free plan shows "Free" without "/month", so only Pro and Team have "/month"
    expect(screen.getAllByText('/month')).toHaveLength(2);
  });

  it('shows popular badge on Pro plan', () => {
    render(<Pricing />);
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });

  it('renders feature lists for each plan', () => {
    render(<Pricing />);
    expect(screen.getByText('Up to 3 projects')).toBeInTheDocument();
    expect(screen.getByText('Unlimited projects')).toBeInTheDocument();
    expect(screen.getByText('Everything in Pro')).toBeInTheDocument();
  });

  it('shows check marks for included features', () => {
    render(<Pricing />);
    const checkIcons = screen.getAllByTestId('check-icon');
    expect(checkIcons.length).toBeGreaterThan(0);
  });

  it('shows X marks for excluded features', () => {
    render(<Pricing />);
    const xIcons = screen.getAllByTestId('x-icon');
    expect(xIcons.length).toBeGreaterThan(0);
  });

  it('renders pricing FAQ section', () => {
    render(<Pricing />);
    expect(screen.getByText('Can I switch plans later?')).toBeInTheDocument();
    expect(screen.getByText('Is there a free trial for Pro?')).toBeInTheDocument();
  });

  it('displays concept pricing disclaimer', () => {
    render(<Pricing />);
    expect(screen.getByText(/illustrative concept pricing for this fictional product/i)).toBeInTheDocument();
  });

  it('links plan CTAs to the demo details instead of implying checkout', () => {
    render(<Pricing />);
    const links = screen.getAllByRole('link', { name: /explore the concept/i });
    expect(links).toHaveLength(3);
    links.forEach((link) => expect(link).toHaveAttribute('href', '#cta'));
  });
});
