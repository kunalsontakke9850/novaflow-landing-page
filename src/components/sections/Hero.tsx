import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Users, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const featureHighlights = [
  { icon: Zap, label: 'Workflow concept', desc: 'Static automation preview' },
  { icon: Shield, label: 'UI demonstration', desc: 'Frontend only, no service connected' },
  { icon: Users, label: 'Sample workspace', desc: 'Uses synthetic preview data' },
  { icon: BarChart3, label: 'Dashboard mockup', desc: 'Metrics are illustrative' },
];

const stats = [
  { value: 'React', label: 'Frontend concept' },
  { value: '0', label: 'Connected product services' },
  { value: '4', label: 'Interactive UI patterns' },
  { value: 'Demo', label: 'Synthetic sample data' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Radial gradients */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl animate-float" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath fill='none' stroke='%23ffffff' stroke-opacity='0.03' stroke-width='0.5' d='M0 16h32M16 0v32'/%3e%3c/svg%3e")`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-6 flex flex-wrap justify-center lg:justify-start gap-2"
            >
              <Badge variant="info" dot size="sm" className="animate-slide-down" style={{ animationDelay: '0.1s' }}>
                Responsive landing page concept
              </Badge>
              <Badge variant="success" dot size="sm" className="animate-slide-down" style={{ animationDelay: '0.2s' }}>
                No backend services connected
              </Badge>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="heading-xl text-navy-50 mb-6 text-balance"
            >
              A workspace concept.{' '}
              <span className="gradient-text">Designed for flow.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="text-lg md:text-xl text-navy-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Explore a fictional productivity workspace through a responsive dashboard preview and interactive page sections. No account or product service is connected.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
            >
              <Link to="product-showcase" smooth duration={500} offset={-80} className="btn btn-primary btn-lg w-full sm:w-auto">
                Explore product preview
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link to="features" smooth duration={500} offset={-80} className="btn btn-secondary btn-lg w-full sm:w-auto">
                Explore page features
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="grid grid-cols-2 gap-6 md:gap-8 max-w-xl mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-navy-50 gradient-text">{stat.value}</div>
                  <div className="text-navy-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <DashboardPreview />
          </motion.div>
        </div>

        {/* Feature highlights below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          role="list"
          aria-label="Key features"
        >
          {featureHighlights.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="card p-5 md:p-6 hover:card-hover transition-all duration-300 group"
              role="listitem"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-violet-500/30 group-hover:to-blue-500/30 transition-colors">
                <feature.icon className="w-5 h-5 text-violet-400" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-navy-50 mb-1">{feature.label}</h3>
              <p className="text-navy-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-500 opacity-60 hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-float">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

// Dashboard Preview Component
function DashboardPreview() {
  const tasks = [
    { id: 1, title: 'Design new dashboard UI', status: 'in-progress', assignee: 'Sarah Chen', priority: 'high', progress: 65 },
    { id: 2, title: 'Implement user authentication', status: 'review', assignee: 'Marcus Johnson', priority: 'high', progress: 90 },
    { id: 3, title: 'Write API documentation', status: 'todo', assignee: 'Emily Park', priority: 'medium', progress: 0 },
    { id: 4, title: 'Set up CI/CD pipeline', status: 'done', assignee: 'Alex Kumar', priority: 'high', progress: 100 },
    { id: 5, title: 'Performance optimization', status: 'in-progress', assignee: 'Lisa Wang', priority: 'medium', progress: 40 },
  ];

  const activity = [
    { time: '2 min ago', user: 'Sarah Chen', action: 'moved task to Review', task: 'Design new dashboard UI' },
    { time: '15 min ago', user: 'Marcus Johnson', action: 'completed', task: 'Implement user authentication' },
    { time: '1 hour ago', user: 'Emily Park', action: 'commented on', task: 'Write API documentation' },
    { time: '3 hours ago', user: 'Alex Kumar', action: 'deployed', task: 'Set up CI/CD pipeline' },
    { time: '5 hours ago', user: 'Lisa Wang', action: 'started working on', task: 'Performance optimization' },
  ];

  const chartData = [45, 52, 48, 61, 55, 67, 72, 69, 78, 82, 79, 88];

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-3xl blur-2xl opacity-50" aria-hidden="true" />

      <div className="relative glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        {/* Header bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-navy-950/50 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="flex-1 text-center text-xs text-navy-400 font-mono">NovaFlow Dashboard — Sample data</div>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy-400">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
        </div>

        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Top Row: Project Progress + Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Project Progress */}
            <Card variant="default" padding="md" className="md:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-navy-50">Project Progress</h4>
                  <p className="text-navy-400 text-sm mt-0.5">Overall completion across all workstreams</p>
                </div>
                <Badge variant="info" size="sm">Illustrative data</Badge>
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                {[
                  { label: 'Design', value: 85, color: 'violet' },
                  { label: 'Development', value: 72, color: 'blue' },
                  { label: 'Testing', value: 58, color: 'amber' },
                  { label: 'Documentation', value: 45, color: 'emerald' },
                ].map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-300">{item.label}</span>
                      <span className="font-medium text-navy-100">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, var(--color-${item.color}-500), var(--color-${item.color}-400))`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-3">
              {[
                { label: 'Active Tasks', value: '12', icon: CheckCircle, color: 'violet', trend: '+3 this week' },
                { label: 'Team Velocity', value: '87 pts', icon: Zap, color: 'blue', trend: '+12% vs last sprint' },
                { label: 'Blockers', value: '2', icon: Shield, color: 'amber', trend: '1 resolved today' },
              ].map((stat) => (
                <Card key={stat.label} variant="default" padding="md" className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-navy-50 gradient-text">{stat.value}</div>
                  <div className="text-xs text-navy-400 mt-1">{stat.label}</div>
                  <div className="text-xs text-navy-500 mt-1.5">{stat.trend}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Row: Task Board + Activity */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Task Board */}
            <Card variant="default" padding="none" className="overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <h4 className="font-semibold text-navy-50">Task Board</h4>
                <Badge variant="default" size="sm">12 tasks</Badge>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + tasks.indexOf(task) * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-navy-900/50 border border-white/5 hover:border-white/10 transition-colors group"
                    >
                      <div className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: task.priority === 'high' ? '#f43f5e' : task.priority === 'medium' ? '#f59e0b' : '#10b981'
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-navy-100 truncate">{task.title}</span>
                          <Badge
                            variant={task.status === 'done' ? 'success' : task.status === 'in-progress' ? 'info' : task.status === 'review' ? 'warning' : 'default'}
                            size="sm"
                          >
                            {task.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-navy-400">
                          <span className="flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 6v6l4 2" />
                            </svg>
                            {task.progress}%
                          </span>
                          <span className="flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            {task.assignee}
                          </span>
                        </div>
                      </div>
                      <div className="w-16 h-2 bg-navy-800 rounded-full overflow-hidden flex-shrink-0">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${task.progress}%` }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Activity Feed */}
            <Card variant="default" padding="none" className="overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <h4 className="font-semibold text-navy-50">Recent Activity</h4>
                <Badge variant="info" size="sm">Sample</Badge>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {activity.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet-400">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-navy-300">
                          <span className="font-medium text-navy-100">{item.user}</span> {item.action}
                          <span className="font-medium text-navy-100 ml-1">"{item.task}"</span>
                        </p>
                        <p className="text-xs text-navy-500 mt-0.5">{item.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Mini Chart */}
          <Card variant="default" padding="md" className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-navy-50">Velocity Trend</h4>
              <Badge variant="default" size="sm">Last 12 sprints</Badge>
            </div>
            <div className="h-32 relative">
              <svg viewBox="0 0 300 128" className="w-full h-full" aria-label="Velocity trend chart showing upward trajectory over 12 sprints">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
                  {[25, 50, 75, 100].map(y => (
                    <line key={y} x1="0" y1={y} x2="300" y2={y} />
                  ))}
                  {[50, 100, 150, 200, 250].map(x => (
                    <line key={x} x1={x} y1="0" x2={x} y2="128" />
                  ))}
                </g>

                {/* Area */}
                <path
                  d={getAreaPath(chartData)}
                  fill="url(#chartGradient)"
                />

                {/* Line */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
                  d={getLinePath(chartData)}
                  stroke="url(#lineGradient)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Points */}
                {chartData.map((value, index) => (
                  <motion.circle
                    key={index}
                    initial={{ r: 0 }}
                    animate={{ r: 4 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                    cx={40 + index * 23.6}
                    cy={110 - (value - 45) * 1.2}
                    fill="#8B5CF6"
                    stroke="#151622"
                    strokeWidth="2"
                    className="hover:r-5 hover:stroke-violet-300 transition-all"
                  />
                ))}
              </svg>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function getLinePath(data: number[]): string {
  const points = data.map((value, index) => ({
    x: 40 + index * 23.6,
    y: 110 - (value - 45) * 1.2,
  }));

  return `M${points[0].x} ${points[0].y} ` +
    points.slice(1).map((p, i) => {
      const prev = points[i];
      const cpX1 = prev.x + (p.x - prev.x) / 2;
      const cpY1 = prev.y;
      const cpX2 = prev.x + (p.x - prev.x) / 2;
      const cpY2 = p.y;
      return `C${cpX1} ${cpY1} ${cpX2} ${cpY2} ${p.x} ${p.y}`;
    }).join(' ');
}

function getAreaPath(data: number[]): string {
  const linePath = getLinePath(data);
  return linePath + ' L285 128 L40 128 Z';
}
