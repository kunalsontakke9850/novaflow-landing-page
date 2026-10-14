import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  Link2,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Bring the work together',
    description: 'Imagine project context from planning, communication, and documentation living in one workspace.',
    details: [
      'A shared project view',
      'Connected team context',
      'Clear ownership',
      'A place for project updates',
    ],
    benefits: ['Project context', 'Team workspace', 'Shared updates'],
    color: 'gold',
    gradient: 'from-gold-500 to-gold-600',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Make the next step clear',
    description: 'Map repeatable processes and handoffs in a visual workflow concept.',
    details: [
      'Visual process maps',
      'Reusable workflow patterns',
      'Visible decisions and handoffs',
      'Clear progress through each step',
    ],
    benefits: ['Process clarity', 'Repeatable patterns', 'Visible handoffs'],
    color: 'gold',
    gradient: 'from-gold-500 to-gold-600',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Understand progress',
    description: 'Explore how a team dashboard could surface momentum, blockers, and what needs attention.',
    details: [
      'Project progress snapshots',
      'Potential blockers in view',
      'Workload at a glance',
      'Illustrative delivery trends',
    ],
    benefits: ['Useful context', 'Progress trends', 'Team visibility'],
    color: 'gold',
    gradient: 'from-gold-500 to-gold-600',
  },
];

const integrations = [
  { name: 'Issue tracking', category: 'Project workflow' },
  { name: 'Team chat', category: 'Communication' },
  { name: 'Knowledge base', category: 'Documentation' },
  { name: 'Design files', category: 'Design' },
  { name: 'Deployment', category: 'Delivery' },
  { name: 'Monitoring', category: 'Operations' },
  { name: 'Source control', category: 'Engineering' },
  { name: 'Automation', category: 'Workflow' },
];

function IntegrationIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${className}`} aria-hidden="true">
      <Link2 className="w-5 h-5 text-gold-300" />
    </div>
  );
}
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <Badge variant="default" size="sm" className="mb-4">
            How the concept fits together
          </Badge>
          <h2 id="how-it-works-heading" className="heading-lg mb-4">
            From shared context to <span className="gradient-text">clear progress</span>
          </h2>
          <p className="text-navy-300 text-lg">
            These workflow steps and integration categories are examples for the concept. They are not connected to external services.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold-500/30 via-gold-400/30 to-gold-300/30" aria-hidden="true" />

          <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <StepCard step={step} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 md:mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="heading-md mb-2">Designed to fit your toolkit</h3>
            <p className="text-navy-400">Illustrative integration categories. No external connectors are configured.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + integrations.indexOf(integration) * 0.05 }}
                className="card p-4 text-center hover:card-hover transition-all group"
              >
                <IntegrationIcon className="mx-auto mb-2 group-hover:border-gold-500/50 transition-colors" />
                <div className="font-medium text-navy-100 text-sm">{integration.name}</div>
                <div className="text-xs text-navy-500">{integration.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center md:mt-16"
        >
          <Link to="pricing" smooth duration={500} offset={-80} className="btn btn-primary btn-lg gap-3">
            View pricing concept
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <Card variant="default" padding="lg" className="h-full relative">
      {/* Number badge */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-navy-800 font-mono">{step.number}</span>
      </div>

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient}/20 flex items-center justify-center mb-6`}
      >
        <step.icon className="w-7 h-7" style={{ color: `var(--color-${step.color}-400)` }} aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-navy-50 mb-3">{step.title}</h3>

      {/* Description */}
      <p className="text-navy-400 text-base leading-relaxed mb-6">{step.description}</p>

      {/* Details */}
      <ul className="space-y-2 mb-6" role="list">
        {step.details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-navy-300">
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: `var(--color-${step.color}-400)` }} />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {/* Benefits */}
      <div className="flex flex-wrap gap-2 mb-6">
        {step.benefits.map((benefit, i) => (
          <Badge key={i} variant="default" size="sm">
            {benefit}
          </Badge>
        ))}
      </div>

      {/* Learn more */}
      <Link to="features" smooth duration={500} offset={-80} className="btn btn-ghost btn-sm w-fit">
        Learn more
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}
