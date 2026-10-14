import { motion } from 'framer-motion';
import { Building2, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const audienceTypes = [
  { name: 'Plan', type: 'Shape the work', icon: Building2 },
  { name: 'Create', type: 'Build together', icon: TrendingUp },
  { name: 'Review', type: 'Keep work moving', icon: Globe },
  { name: 'Design', type: 'Share context', icon: Users },
  { name: 'Deliver', type: 'See what is next', icon: Shield },
  { name: 'Reflect', type: 'Learn as a team', icon: Award },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Workflows in view',
    description: 'A proposed way to bring project steps and handoffs into one clear view.',
  },
  {
    icon: Users,
    title: 'Shared context',
    description: 'A workspace concept for keeping ownership, updates, and decisions close to the work.',
  },
  {
    icon: Shield,
    title: 'A focused workspace',
    description: 'An interface concept that keeps tasks, progress, and team activity together.',
  },
  {
    icon: Award,
    title: 'Progress at a glance',
    description: 'Sample charts explore how a team might understand momentum and blockers.',
  },
];

export function SocialProof() {
  return (
    <section
      id="social-proof"
      className="section bg-navy-950/50 border-y border-white/5"
      aria-labelledby="social-proof-heading"
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
            The idea behind NovaFlow
          </Badge>
          <h2 id="social-proof-heading" className="heading-lg mb-4">
            A concept for <span className="gradient-text">collaborative teams</span>
          </h2>
          <p className="text-navy-300 text-lg">
            NovaFlow is a fictional productivity workspace concept. This page explores how a calmer, more connected project view could feel.
          </p>
        </motion.div>

        {/* Example workflow stages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 md:mb-18"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            {audienceTypes.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] px-3 py-2 transition-colors hover:border-white/15 sm:px-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-500/20 flex items-center justify-center group-hover:from-gold-500/30 group-hover:to-gold-500/30 transition-colors">
                  <company.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div className="text-left hidden sm:block">
                  <div className="font-medium text-navy-100 text-sm">{company.name}</div>
                  <div className="flex items-center gap-2 text-xs text-navy-400">
                    <span>{company.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Concept highlights */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card variant="default" padding="lg" hover className="h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-navy-50 mb-2">{benefit.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
