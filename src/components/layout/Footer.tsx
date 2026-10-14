import { Link } from 'react-scroll';

const currentYear = new Date().getFullYear();

export function Footer() {
  const footerLinks = [
    { label: 'Overview', href: 'hero' },
    { label: 'Dashboard', href: 'product-showcase' },
    { label: 'Features', href: 'features' },
    { label: 'How it works', href: 'how-it-works' },
    { label: 'Pricing', href: 'pricing' },
    { label: 'FAQ', href: 'faq' },
  ];

  return (
    <footer className="bg-navy-950 border-t border-white/5" role="contentinfo">
      <div className="container py-14 md:py-18">
        <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-2 md:items-start">
          {/* Brand */}
          <div>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 text-navy-50 font-display font-bold text-xl mb-4"
              aria-label="NovaFlow Home"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-gold-300"
              >
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F3D98E"/>
                    <stop offset="100%" stopColor="#C99F3F"/>
                  </linearGradient>
                </defs>
                <path d="M4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16Z" stroke="url(#footerLogoGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8V16L22 20" stroke="url(#footerLogoGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>NovaFlow</span>
            </Link>
            <p className="text-navy-400 text-sm mb-6 max-w-xs leading-relaxed">
              A fictional productivity workspace, explored through a responsive landing page and interactive dashboard.
            </p>
          </div>

          <nav aria-label="Explore NovaFlow sections">
            <h4 className="mb-4 font-semibold text-navy-50">Explore</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="text-sm text-navy-300 transition-colors hover:text-navy-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          {/* Copyright */}
          <p className="text-navy-500 text-sm">
            © {currentYear} NovaFlow. All rights reserved.
            <span className="mx-2">·</span>
            <span className="text-navy-600">A portfolio concept. Features and sample data are illustrative.</span>
          </p>

        </div>
      </div>
    </footer>
  );
}
