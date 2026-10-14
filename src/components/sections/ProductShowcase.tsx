import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  Activity,
  MoreHorizontal,
  Calendar,
  Clock,
  Flag,
  TrendingUp,
  Plus as PlusIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function ProductShowcase() {
  return (
    <section
      id="product-showcase"
      className="section bg-navy-950/50"
      aria-labelledby="showcase-heading"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge variant="info" size="sm" className="mb-4">
            Interactive frontend preview · synthetic data
          </Badge>
          <h2 id="showcase-heading" className="heading-lg mb-4">
            A workspace concept for <span className="gradient-text">collaborative teams</span>
          </h2>
          <p className="text-navy-300 text-lg">
            View switching and task filtering operate on local sample data. Account actions, task creation, and product services are not connected.
          </p>
        </motion.div>

        {/* Dashboard */}
        <DashboardPreview />
      </div>
    </section>
  );
}

function DashboardPreview() {
  const [activeView, setActiveView] = useState<'board' | 'list' | 'timeline'>('board');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const tasks: Task[] = [
    {
      id: 'NF-2341',
      title: 'Redesign onboarding flow',
      status: 'in-progress',
      priority: 'high',
      assignee: { name: 'Sarah Chen', avatar: 'SC', color: 'violet' },
      dueDate: '2026-10-20',
      progress: 65,
      tags: ['Design', 'Frontend'],
      description: 'Complete redesign of the user onboarding experience including new welcome screens, interactive tutorial, and progress tracking.',
    },
    {
      id: 'NF-2340',
      title: 'Implement dark mode toggle',
      status: 'review',
      priority: 'medium',
      assignee: { name: 'Marcus Johnson', avatar: 'MJ', color: 'blue' },
      dueDate: '2026-10-18',
      progress: 90,
      tags: ['Frontend', 'UI'],
      description: 'Add system-aware dark mode with manual toggle, persist preference, and smooth transitions.',
    },
    {
      id: 'NF-2339',
      title: 'Set up analytics pipeline',
      status: 'todo',
      priority: 'high',
      assignee: { name: 'Emily Park', avatar: 'EP', color: 'emerald' },
      dueDate: '2026-10-25',
      progress: 0,
      tags: ['Backend', 'Analytics'],
      description: 'Build event ingestion pipeline with real-time processing, data warehouse integration, and dashboard APIs.',
    },
    {
      id: 'NF-2338',
      title: 'API rate limiting',
      status: 'done',
      priority: 'high',
      assignee: { name: 'Alex Kumar', avatar: 'AK', color: 'amber' },
      dueDate: '2026-10-15',
      progress: 100,
      tags: ['Backend', 'Security'],
      description: 'Implement adaptive rate limiting with sliding window, Redis backend, and customizable tiers.',
    },
    {
      id: 'NF-2337',
      title: 'Performance optimization',
      status: 'in-progress',
      priority: 'medium',
      assignee: { name: 'Lisa Wang', avatar: 'LW', color: 'rose' },
      dueDate: '2026-10-22',
      progress: 40,
      tags: ['Performance', 'Frontend'],
      description: 'Optimize bundle size, implement code splitting, add service worker caching, and improve Core Web Vitals.',
    },
    {
      id: 'NF-2336',
      title: 'Write API documentation',
      status: 'todo',
      priority: 'low',
      assignee: { name: 'James Wilson', avatar: 'JW', color: 'cyan' },
      dueDate: '2026-11-01',
      progress: 15,
      tags: ['Documentation'],
      description: 'Create comprehensive OpenAPI specs, interactive docs, and integration guides for all public endpoints.',
    },
  ];

  const boardTasks = tasks.filter((task) => {
    if (filter === 'active') return task.status !== 'done';
    if (filter === 'completed') return task.status === 'done';
    return true;
  });

  const columns = [
    { id: 'todo', title: 'To Do', count: boardTasks.filter(t => t.status === 'todo').length, color: 'navy' },
    { id: 'in-progress', title: 'In Progress', count: boardTasks.filter(t => t.status === 'in-progress').length, color: 'blue' },
    { id: 'review', title: 'In Review', count: boardTasks.filter(t => t.status === 'review').length, color: 'amber' },
    { id: 'done', title: 'Done', count: boardTasks.filter(t => t.status === 'done').length, color: 'emerald' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'done': return 'emerald';
      case 'in-progress': return 'blue';
      case 'review': return 'amber';
      default: return 'navy';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'rose';
      case 'medium': return 'amber';
      default: return 'emerald';
    }
  };

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/5 to-blue-500/5 rounded-3xl blur-2xl opacity-30" aria-hidden="true" />

      <div className="relative glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 md:p-6 border-b border-white/5 bg-navy-950/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <h3 className="font-semibold text-navy-50">Sample Project Dashboard</h3>
              <p className="text-xs text-navy-400">Synthetic data · No live workspace</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* View Toggle */}
            <div className="flex bg-navy-800/50 rounded-lg p-1 border border-white/5" role="tablist" aria-label="View options">
              {[
                { id: 'board', icon: LayoutDashboard, label: 'Board' },
                { id: 'list', icon: CheckSquare, label: 'List' },
                { id: 'timeline', icon: Activity, label: 'Timeline' },
              ].map((view) => (
                <button
                  key={view.id}
                  id={`view-tab-${view.id}`}
                  role="tab"
                  aria-label={view.label}
                  aria-controls="dashboard-view-panel"
                  aria-selected={activeView === view.id}
                  tabIndex={activeView === view.id ? 0 : -1}
                  onClick={() => setActiveView(view.id as typeof activeView)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    activeView === view.id
                      ? 'bg-white/10 text-navy-50 shadow-sm'
                      : 'text-navy-400 hover:text-navy-200'
                  }`}
                >
                  <view.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{view.label}</span>
                </button>
              ))}
            </div>

            {/* Filter */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className="input py-2 px-3 text-sm bg-navy-800/50 border-white/10"
              aria-label="Filter tasks"
            >
              <option value="all">All Tasks</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>

            <Button variant="secondary" size="sm" icon="plus" disabled title="Task creation is not available in this frontend demo">
              New Task · Demo
            </Button>
          </div>
        </div>

        {/* Board View */}
        <div className="p-4 md:p-6 overflow-x-auto">
          <div id="dashboard-view-panel" role="tabpanel" aria-labelledby={`view-tab-${activeView}`} tabIndex={0}>
            {activeView === 'board' ? (
              <BoardView columns={columns} tasks={boardTasks} getStatusColor={getStatusColor} getPriorityColor={getPriorityColor} />
            ) : activeView === 'list' ? (
              <ListView tasks={tasks} filter={filter} getStatusColor={getStatusColor} getPriorityColor={getPriorityColor} />
            ) : (
              <TimelineView tasks={tasks} filter={filter} getStatusColor={getStatusColor} getPriorityColor={getPriorityColor} />
            )}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 md:px-6 py-4 border-t border-white/5 bg-navy-950/30">
          <div className="flex items-center gap-6 text-sm text-navy-400">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Velocity: <span className="text-navy-100 font-medium">87 pts</span>/sprint</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>Team: <span className="text-navy-100 font-medium">6 members</span></span>
            </span>
            <span className="flex items-center gap-1.5">
              <Flag className="w-4 h-4 text-amber-400" />
              <span>Blockers: <span className="text-navy-100 font-medium">2</span></span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-navy-500">
            <span>Sample data · View and filter controls are interactive</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'high' | 'medium' | 'low';
  assignee: { name: string; avatar: string; color: string };
  dueDate: string;
  progress: number;
  tags: string[];
  description: string;
}

interface Column {
  id: string;
  title: string;
  count: number;
  color: string;
}

function BoardView({
  columns,
  tasks,
  getStatusColor,
  getPriorityColor
}: {
  columns: Column[];
  tasks: Task[];
  getStatusColor: Function;
  getPriorityColor: Function;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[500px]">
      {columns.map((column) => (
        <motion.div
          key={column.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: columns.indexOf(column) * 0.05 }}
          className="flex flex-col"
        >
          <div className="flex items-center justify-between mb-3 px-1">
            <h4 className="font-medium text-navy-300 text-sm uppercase tracking-wider flex items-center gap-2">
              {column.title}
              <Badge variant="default" size="sm" className={`bg-${column.color}-500/20 text-${column.color}-300 border-${column.color}-500/30`}>
                {column.count}
              </Badge>
            </h4>
            <MoreHorizontal className="w-4 h-4 text-navy-500 hover:text-navy-300" />
          </div>

          <div
            className="flex-1 space-y-3 min-h-[400px] p-1 rounded-xl bg-navy-900/30 border border-white/5"
            role="list"
            aria-label={`${column.title} tasks`}
          >
            {tasks
              .filter(t => t.status === column.id)
              .map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  getStatusColor={getStatusColor}
                  getPriorityColor={getPriorityColor}
                />
              ))}

            {/* Empty state / Add task */}
            <button disabled title="Task creation is not available in this frontend demo" className="w-full py-3 text-center text-navy-500 rounded-lg border-2 border-dashed border-white/5 disabled:cursor-not-allowed">
              <PlusIcon className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm">Add task</span>
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TaskCard({
  task,
  index,
  getStatusColor,
  getPriorityColor
}: {
  task: Task;
  index: number;
  getStatusColor: Function;
  getPriorityColor: Function;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="card p-4 cursor-pointer group relative overflow-hidden"
      role="listitem"
      tabIndex={0}
    >
      {/* Priority indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
        style={{
          background: `linear-gradient(90deg, var(--color-${getPriorityColor(task.priority)}-500), var(--color-${getPriorityColor(task.priority)}-400))`
        }}
      />

      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
          style={{ backgroundColor: `var(--color-${getPriorityColor(task.priority)}-500)` }}
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <span className="font-mono text-xs text-navy-400">{task.id}</span>
            <Badge variant={task.status === 'done' ? 'success' : task.status === 'in-progress' ? 'info' : task.status === 'review' ? 'warning' : 'default'} size="sm">
              {task.status.replace('-', ' ')}
            </Badge>
          </div>

          <h5 className="font-medium text-navy-100 mt-1.5 line-clamp-1">{task.title}</h5>

          <p className="text-navy-500 text-xs mt-1 line-clamp-2">{task.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {task.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded bg-white/5 text-navy-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-navy-950"
                style={{ backgroundColor: `var(--color-${task.assignee.color}-400)` }}
              >
                {task.assignee.avatar}
              </div>
              <span className="text-sm text-navy-300">{task.assignee.name}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-navy-500">
              <Calendar className="w-3 h-3" />
              <time dateTime={task.dueDate}>{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-navy-400">Progress</span>
              <span className="font-medium text-navy-100">{task.progress}%</span>
            </div>
            <div className="h-1.5 bg-navy-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${task.progress}%` }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.02, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r"
                style={{
                  background: `linear-gradient(90deg, var(--color-${getStatusColor(task.status)}-500), var(--color-${getStatusColor(task.status)}-400))`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ListView({
  tasks,
  filter,
  getStatusColor,
  getPriorityColor
}: {
  tasks: Task[];
  filter: string;
  getStatusColor: Function;
  getPriorityColor: Function;
}) {
  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return t.status !== 'done';
    if (filter === 'completed') return t.status === 'done';
    return true;
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left" role="table">
        <thead>
          <tr className="border-b border-white/5">
            {['Task', 'Status', 'Priority', 'Assignee', 'Due Date', 'Progress', ''].map((header, i) => (
              <th key={i} className="pb-3 text-xs font-medium text-navy-400 uppercase tracking-wider px-1">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <motion.tr
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="py-4 px-1">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-navy-400">{task.id}</span>
                    <Badge variant={task.status === 'done' ? 'success' : task.status === 'in-progress' ? 'info' : task.status === 'review' ? 'warning' : 'default'} size="sm">
                      {task.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <h5 className="font-medium text-navy-100">{task.title}</h5>
                  <p className="text-navy-500 text-xs mt-0.5 line-clamp-1">{task.description}</p>
                </div>
              </td>
              <td className="py-4 px-1">
                <Badge
                  variant={task.status === 'done' ? 'success' : task.status === 'in-progress' ? 'info' : task.status === 'review' ? 'warning' : 'default'}
                  size="sm"
                  dot
                >
                  {task.status.replace('-', ' ')}
                </Badge>
              </td>
              <td className="py-4 px-1">
                <Badge
                  variant={getPriorityColor(task.priority) as any}
                  size="sm"
                  dot
                >
                  {task.priority}
                </Badge>
              </td>
              <td className="py-4 px-1">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-navy-950"
                    style={{ backgroundColor: `var(--color-${task.assignee.color}-400)` }}
                  >
                    {task.assignee.avatar}
                  </div>
                  <span className="text-sm text-navy-300">{task.assignee.name}</span>
                </div>
              </td>
              <td className="py-4 px-1 text-navy-400 text-sm">
                <time dateTime={task.dueDate}>{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
              </td>
              <td className="py-4 px-1">
                <div className="w-32">
                  <div className="h-1.5 bg-navy-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${task.progress}%` }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r"
                      style={{
                        background: `linear-gradient(90deg, var(--color-${getStatusColor(task.status)}-500), var(--color-${getStatusColor(task.status)}-400))`
                      }}
                    />
                  </div>
                </div>
              </td>
              <td className="py-4 px-1">
                <Button variant="ghost" size="sm" className="p-1.5" disabled title="Task actions are not available in this frontend demo">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TimelineView({
  tasks,
  filter,
  getStatusColor,
  getPriorityColor
}: {
  tasks: Task[];
  filter: string;
  getStatusColor: Function;
  getPriorityColor: Function;
}) {
  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return t.status !== 'done';
    if (filter === 'completed') return t.status === 'done';
    return true;
  }).sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/30 to-blue-500/30" />

      <div className="space-y-6 pl-14">
        {filteredTasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative"
          >
            <div className="absolute left-[-14px] top-1 w-3 h-3 rounded-full border-2 border-navy-900 flex-shrink-0"
              style={{
                backgroundColor: task.status === 'done' ? 'var(--color-emerald-500)' :
                               task.status === 'in-progress' ? 'var(--color-blue-500)' :
                               task.status === 'review' ? 'var(--color-amber-500)' : 'transparent',
                borderColor: task.status === 'todo' ? 'var(--color-navy-500)' :
                           `var(--color-${getStatusColor(task.status)}-500)`
              }}
            />

            <Card variant="default" padding="md" className="pl-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-navy-400">{task.id}</span>
                    <Badge variant={task.status === 'done' ? 'success' : task.status === 'in-progress' ? 'info' : task.status === 'review' ? 'warning' : 'default'} size="sm">
                      {task.status.replace('-', ' ')}
                    </Badge>
                    <Badge variant={getPriorityColor(task.priority) as any} size="sm" dot>
                      {task.priority}
                    </Badge>
                  </div>
                  <h5 className="font-medium text-navy-100 mb-1">{task.title}</h5>
                  <p className="text-navy-400 text-sm mb-3">{task.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-navy-500">
                    <span className="flex items-center gap-1">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-medium text-navy-950"
                        style={{ backgroundColor: `var(--color-${task.assignee.color}-400)` }}
                      >
                        {task.assignee.avatar}
                      </div>
                      {task.assignee.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.progress}% complete
                    </span>
                  </div>
                </div>

                <div className="w-24 h-24 flex-shrink-0">
                  <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${task.progress}%` }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r"
                      style={{
                        background: `linear-gradient(90deg, var(--color-${getStatusColor(task.status)}-500), var(--color-${getStatusColor(task.status)}-400))`
                      }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
