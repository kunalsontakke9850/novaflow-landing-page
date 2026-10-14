import { Link } from 'react-scroll';

const currentYear = new Date().getFullYear();

export function Footer() {
  const footerLinks = {
    product: [
      { label: 'Product Preview', href: '#product-showcase' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How it works', href: '#how-it-works' },
    ],
    company: [
      { label: 'Overview', href: '#hero' },
      { label: 'Demo details', href: '#cta' },
      { label: 'FAQ', href: '#faq' },
    ],
    resources: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Workflow concepts', href: '#how-it-works' },
      { label: 'Sample dashboard', href: '#product-showcase' },
    ],
    legal: [
      { label: 'About this concept', href: '#social-proof' },
      { label: 'Demo limitations', href: '#cta' },
      { label: 'Illustrative pricing', href: '#pricing' },
    ],
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5" role="contentinfo">
      <div className="container py-14 md:py-18">
        <div className="mb-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mb-16 md:grid-cols-2 md:gap-x-10 lg:grid-cols-6 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
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
                className="text-violet-400"
              >
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#8B5CF6"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
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

          {/* Product */}
          <nav aria-label="Product links">
            <h4 className="font-semibold text-navy-50 mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href.replace('#', '')}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="text-navy-400 hover:text-navy-100 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h4 className="font-semibold text-navy-50 mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href.replace('#', '')}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="text-navy-400 hover:text-navy-100 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources links">
            <h4 className="font-semibold text-navy-50 mb-4">Examples</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href.replace('#', '')}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="text-navy-400 hover:text-navy-100 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <h4 className="font-semibold text-navy-50 mb-4">Project</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href.replace('#', '')}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="text-navy-400 hover:text-navy-100 text-sm transition-colors"
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

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
            <Link to="cta" smooth={true} duration={500} offset={-80} className="text-navy-500 hover:text-navy-300 text-sm transition-colors">
              Demo limitations
            </Link>
            <Link to="pricing" smooth={true} duration={500} offset={-80} className="text-navy-500 hover:text-navy-300 text-sm transition-colors">
              Pricing concept
            </Link>
            <Link to="faq" smooth={true} duration={500} offset={-80} className="text-navy-500 hover:text-navy-300 text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
