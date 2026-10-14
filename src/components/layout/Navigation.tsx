import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#product-showcase', label: 'Product' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-white/5 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? 'bg-navy-950/95 shadow-lg shadow-black/10' : 'bg-navy-950/80'
      }`}
      role="banner"
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex shrink-0 items-center gap-2 font-display text-xl font-bold text-navy-50"
            aria-label="NovaFlow Home"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-violet-400"
            >
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8B5CF6"/>
                  <stop offset="100%" stopColor="#3B82F6"/>
                </linearGradient>
              </defs>
              <path d="M4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16Z" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 8V16L22 20" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>NovaFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-7">
            <div className="flex items-center gap-3 xl:gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href.replace('#', '')}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="rounded-md px-1 py-2 text-sm font-medium text-navy-300 transition-colors duration-200 hover:text-navy-50 focus-visible:outline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <Link
                to="product-showcase"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-primary btn-sm"
              >
                View dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="min-h-11 min-w-11 rounded-lg p-2 text-navy-300 transition-colors hover:bg-white/5 hover:text-navy-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          aria-hidden={!isMobileMenuOpen}
          inert={!isMobileMenuOpen}
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="space-y-2 border-t border-white/5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href.replace('#', '')}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                className="block min-h-11 rounded-lg px-3 py-3 text-base font-medium text-navy-200 transition-colors hover:bg-white/5 hover:text-navy-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-white/5 pt-4">
              <Link
                to="product-showcase"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-primary btn-lg w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
