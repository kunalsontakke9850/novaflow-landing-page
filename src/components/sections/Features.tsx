import { motion } from 'framer-motion';
import {
  Zap,
  CheckSquare2,
  Users,
  BarChart3,
  Bell,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Link } from 'react-scroll';

const features = [
  {
    icon: Zap,
    title: 'Workflow automation',
    description:
      'A proposed visual builder for mapping repeatable steps, handoffs, and decisions.',
    highlights: ['Visual workflow maps', 'Reusable templates', 'Clear handoffs', 'Flexible process steps'],
    category: 'Automation',
    color: 'violet',
  },
  {
    icon: CheckSquare2,
    title: 'Tasks with clear ownership',
    description:
      'A shared view of priorities, owners, due dates, and the work that depends on them.',
    highlights: ['Visible priorities', 'Owners and due dates', 'Task dependencies', 'Progress at a glance'],
    category: 'Tasks',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'A place for teams to keep updates and project context alongside their work.',
    highlights: ['Shared project views', 'Activity and updates', 'Team context', 'Connected conversations'],
    category: 'Collaboration',
    color: 'emerald',
  },
  {
    icon: BarChart3,
    title: 'Project Analytics',
    description:
      'Illustrative dashboards for exploring momentum, workload, and potential bottlenecks.',
    highlights: ['Progress trends', 'Bottleneck visibility', 'Workload overview', 'Delivery snapshots'],
    category: 'Analytics',
    color: 'amber',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description:
      'A concept for keeping important project updates easy to find and act on.',
    highlights: ['Activity summaries', 'Relevant updates', 'Clear next steps', 'Less scattered context'],
    category: 'Notifications',
    color: 'rose',
  },
  {
    icon: Shield,
    title: 'Thoughtful access',
    description:
      'A design exploration of how workspace roles and activity history might be presented.',
    highlights: ['Role-based views', 'Clear permissions', 'Activity history', 'Designed for clarity'],
    category: 'Security',
    color: 'cyan',
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="section"
      aria-labelledby="features-heading"
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
            Product concept
          </Badge>
          <h2 id="features-heading" className="heading-lg mb-4">
            A workspace shaped around <span className="gradient-text">the way teams work</span>
          </h2>
          <p className="text-navy-300 text-lg">
            Explore ideas for planning, collaboration, and project visibility. All features are illustrative; no product services are connected.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link to="how-it-works" smooth duration={500} offset={-80} className="btn btn-secondary btn-lg gap-3">
            Explore the workflow
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const IconComponent = feature.icon;
  const colorClasses = {
    violet: 'from-violet-500 to-violet-600',
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600',
    amber: 'from-amber-500 to-amber-600',
    rose: 'from-rose-500 to-rose-600',
    cyan: 'from-cyan-500 to-cyan-600',
  };

  return (
    <Card variant="default" padding="lg" hover className="h-full flex flex-col relative overflow-hidden group">
      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Category badge */}
        <Badge variant="default" size="sm" className="mb-4 w-fit">
          {feature.category}
        </Badge>

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses]}/20 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-violet-500/30 group-hover:to-blue-500/30 transition-colors`}
        >
          <IconComponent className="w-6 h-6" style={{ color: `var(--color-${feature.color}-400)` }} aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-navy-50 mb-3">{feature.title}</h3>

        {/* Description */}
        <p className="text-navy-400 text-sm leading-relaxed mb-5 flex-1">{feature.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6 flex-1" role="list">
          {feature.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-navy-300">
              <svg
                className="w-4 h-4 flex-shrink-0 mt-0.5 text-violet-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Learn more link */}
        <Link to="how-it-works" smooth duration={500} offset={-80} className="btn btn-ghost btn-sm w-fit group">
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}
