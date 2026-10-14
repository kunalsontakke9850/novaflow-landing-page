import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export function CTA() {
  return (
    <section
      id="cta"
      className="section relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3e%3cpath fill='none' stroke='%23ffffff' stroke-opacity='0.02' stroke-width='0.5' d='M0 30h60M30 0v60'/%3e%3c/svg%3e")`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge variant="info" size="sm" className="mb-6">
            Frontend demo only
          </Badge>

          <h2 id="cta-heading" className="heading-xl mb-6 text-balance">
            Explore the NovaFlow <span className="gradient-text">workspace concept.</span>
          </h2>

          <p className="text-navy-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            This page is an interactive frontend concept. It has no accounts, integrations, or payments connected.
            Product features, sample data, and pricing are illustrative.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="product-showcase" smooth duration={500} offset={-80} className="btn btn-primary btn-lg w-full sm:w-auto gap-3">
              Explore product preview
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="pricing" smooth duration={500} offset={-80} className="btn btn-secondary btn-lg w-full sm:w-auto">
              View pricing concept
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-navy-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Local UI interactions only</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Synthetic preview data</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>No account flow</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>No external product services</span>
            </div>
          </div>
        </motion.div>

        {/* Demo limitations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card variant="outlined" padding="md" className="max-w-2xl mx-auto">
            <p className="text-center text-navy-300 text-sm">
              Product actions are intentionally not connected to sign-up, sales, support, or payment services.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
