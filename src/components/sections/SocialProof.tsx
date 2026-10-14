import { motion } from 'framer-motion';
import { Building2, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const audienceTypes = [
  { name: 'Engineering', type: 'Sample workflow audience', icon: Building2 },
  { name: 'Product', type: 'Sample workflow audience', icon: TrendingUp },
  { name: 'Analytics', type: 'Sample workflow audience', icon: Globe },
  { name: 'Design', type: 'Sample workflow audience', icon: Users },
  { name: 'Operations', type: 'Sample workflow audience', icon: Shield },
  { name: 'Agencies', type: 'Sample workflow audience', icon: Award },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Workflow concepts',
    description: 'The page illustrates possible automation flows; no workflow engine is connected.',
  },
  {
    icon: Users,
    title: 'Collaboration preview',
    description: 'The dashboard mockup shows a possible collaboration interface using synthetic sample data.',
  },
  {
    icon: Shield,
    title: 'Security is not implemented',
    description: 'This frontend concept has no account system and does not claim a security certification.',
  },
  {
    icon: Award,
    title: 'Analytics preview',
    description: 'Charts and dashboard figures are static illustrative values, not connected to a data source.',
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="info" size="sm" className="mb-4">
            Illustrative content only
          </Badge>
          <h2 id="social-proof-heading" className="heading-lg mb-4">
            A concept for <span className="gradient-text">collaborative teams</span>
          </h2>
          <p className="text-navy-300 text-lg">
            No customer endorsements, operating metrics, or real service capabilities are represented here.
          </p>
        </motion.div>

        {/* Company Logos / Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {audienceTypes.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-blue-500/30 transition-colors">
                  <company.icon className="w-5 h-5 text-violet-400" />
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

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card variant="default" padding="lg" hover className="h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-violet-400" />
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
