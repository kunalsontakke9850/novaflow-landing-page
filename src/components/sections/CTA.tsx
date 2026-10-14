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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gold-500/10 to-gold-500/10 rounded-full blur-3xl" />
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
          className="mx-auto max-w-4xl text-center"
        >
          <Badge variant="default" size="sm" className="mb-6">
            Take a closer look
          </Badge>

          <h2 id="cta-heading" className="heading-xl mb-6 text-balance">
            See how NovaFlow could <span className="gradient-text">bring work into focus.</span>
          </h2>

          <p className="text-navy-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore the interactive dashboard and the ideas behind the workspace. Features, sample data, and pricing are illustrative; no product services are connected.
          </p>

          <div className="mb-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 md:mb-16">
            <Link to="product-showcase" smooth duration={500} offset={-80} className="btn btn-primary btn-lg w-full sm:w-auto gap-3">
              Explore the dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="pricing" smooth duration={500} offset={-80} className="btn btn-secondary btn-lg w-full sm:w-auto">
              See example pricing
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-navy-300">
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
              <span>Sample dashboard data</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>No product services connected</span>
            </div>
          </div>
        </motion.div>

        {/* Project context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card variant="outlined" padding="md" className="max-w-2xl mx-auto">
            <p className="text-center text-navy-300 text-sm">
              NovaFlow is a fictional product concept created to demonstrate a responsive landing page and interactive dashboard.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
