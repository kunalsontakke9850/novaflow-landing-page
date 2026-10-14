import { act, render, screen, fireEvent, within } from '@testing-library/react';
import { Navigation } from '@/components/layout/Navigation';

// Mock react-scroll
vi.mock('react-scroll', () => ({
  Link: ({ children, to, smooth: _smooth, duration: _duration, offset: _offset, spy: _spy, ...props }: any) => (
    <a href={`#${to}`} {...props}>{children}</a>
  ),
}));

describe('Navigation', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.scrollTo(0, 0);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders logo and brand name', () => {
    render(<Navigation />);
    expect(screen.getByText('NovaFlow')).toBeInTheDocument();
    expect(screen.getByLabelText('NovaFlow Home')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navigation />);
    // Each link appears twice (desktop and mobile nav)
    expect(screen.getAllByText('Product')).toHaveLength(2);
    expect(screen.getAllByText('Features')).toHaveLength(2);
    expect(screen.getAllByText('Pricing')).toHaveLength(2);
    expect(screen.getAllByText('FAQ')).toHaveLength(2);
  });

  it('keeps one focused action for exploring the dashboard', () => {
    render(<Navigation />);
    expect(screen.getAllByText('View dashboard')).toHaveLength(2);
    expect(screen.queryByText('Demo details')).not.toBeInTheDocument();
  });

  it('shows mobile menu button on small screens', () => {
    render(<Navigation />);
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('opens mobile menu when button clicked', () => {
    render(<Navigation />);
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    // Mobile menu should have its own navigation with links
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' });
    expect(mobileNav).toBeInTheDocument();
    expect(within(mobileNav).getByText('Product')).toBeInTheDocument();
  });

  it('closes mobile menu when link clicked', () => {
    render(<Navigation />);
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);

    // Click product link in mobile nav specifically
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' });
    const productLink = within(mobileNav).getByText('Product');
    fireEvent.click(productLink);

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('closes the mobile menu when Escape is pressed', () => {
    render(<Navigation />);
    fireEvent.click(screen.getByLabelText('Open menu'));
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(document.getElementById('mobile-menu')).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies scrolled styles when page is scrolled', () => {
    render(<Navigation />);
    const header = screen.getByRole('banner');

    // Initially not scrolled
    expect(header).not.toHaveClass('bg-navy-950/95');

    // Simulate scroll - need to set scrollY directly in jsdom
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(header).toHaveClass('bg-navy-950/95');
  });

  it('has correct aria attributes', () => {
    render(<Navigation />);
    const mainNav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(mainNav).toHaveAttribute('aria-label', 'Main navigation');
    
    // Also verify mobile navigation has correct aria
    expect(document.getElementById('mobile-menu')).toHaveAttribute('aria-hidden', 'true');
    fireEvent.click(screen.getByLabelText('Open menu'));
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' });
    expect(mobileNav).toHaveAttribute('aria-label', 'Mobile navigation');
  });

  it('mobile menu has correct aria attributes', () => {
    render(<Navigation />);
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' });
    expect(mobileNav).toBeInTheDocument();
  });
});
