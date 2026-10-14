import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Polyfill window.scrollTo for jsdom
window.scrollTo = vi.fn();

// Mock react-scroll
vi.mock('react-scroll', () => ({
  Link: ({ children, to, smooth: _smooth, duration: _duration, offset: _offset, spy: _spy, className, onClick, 'aria-label': _ariaLabel, ...props }: any) => (
    <a href={`#${to}`} className={className} onClick={onClick} {...props}>{children}</a>
  ),
  animateScroll: {
    scrollToTop: vi.fn(),
  },
}));

// Mock framer-motion
const motionPropsToFilter = ['initial', 'animate', 'exit', 'transition', 'variants', 'whileInView', 'viewport', 'whileHover', 'whileTap', 'whileFocus', 'whileDrag'];

function createMotionComponent(tag: string) {
  return ({ children, ...props }: any) => {
    const filteredProps = { ...props };
    motionPropsToFilter.forEach(key => delete filteredProps[key]);
    return React.createElement(tag, filteredProps, children);
  };
}

vi.mock('framer-motion', () => ({
  motion: {
    div: createMotionComponent('div'),
    h1: createMotionComponent('h1'),
    h2: createMotionComponent('h2'),
    h3: createMotionComponent('h3'),
    p: createMotionComponent('p'),
    span: createMotionComponent('span'),
    button: createMotionComponent('button'),
    section: createMotionComponent('section'),
    article: createMotionComponent('article'),
    ul: createMotionComponent('ul'),
    li: createMotionComponent('li'),
    tr: createMotionComponent('tr'),
    path: createMotionComponent('path'),
    circle: createMotionComponent('circle'),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock lucide-react
vi.mock('lucide-react', () => ({
  Menu: () => <svg data-testid="menu-icon" />,
  X: () => <svg data-testid="x-icon" />,
  Sun: () => <svg data-testid="sun-icon" />,
  Moon: () => <svg data-testid="moon-icon" />,
  ArrowRight: () => <svg data-testid="arrow-right-icon" />,
  ExternalLink: () => <svg data-testid="external-link-icon" />,
  CheckCircle: () => <svg data-testid="check-circle-icon" />,
  Zap: () => <svg data-testid="zap-icon" />,
  Shield: () => <svg data-testid="shield-icon" />,
  Users: () => <svg data-testid="users-icon" />,
  BarChart3: () => <svg data-testid="bar-chart-icon" />,
  Building2: () => <svg data-testid="building-icon" />,
  Globe: () => <svg data-testid="globe-icon" />,
  Award: () => <svg data-testid="award-icon" />,
  TrendingUp: () => <svg data-testid="trending-up-icon" />,
  CheckSquare2: () => <svg data-testid="check-square-icon" />,
  CheckSquare: () => <svg data-testid="check-square-icon" />,
  Bell: () => <svg data-testid="bell-icon" />,
  LayoutDashboard: () => <svg data-testid="layout-dashboard-icon" />,
  Settings: () => <svg data-testid="settings-icon" />,
  Search: () => <svg data-testid="search-icon" />,
  Filter: () => <svg data-testid="filter-icon" />,
  Plus: () => <svg data-testid="plus-icon" />,
  MoreHorizontal: () => <svg data-testid="more-horizontal-icon" />,
  ChevronDown: () => <svg data-testid="chevron-down-icon" />,
  Calendar: () => <svg data-testid="calendar-icon" />,
  Clock: () => <svg data-testid="clock-icon" />,
  Flag: () => <svg data-testid="flag-icon" />,
  MessageSquare: () => <svg data-testid="message-square-icon" />,
  Activity: () => <svg data-testid="activity-icon" />,
  ArrowUpRight: () => <svg data-testid="arrow-up-right-icon" />,
  ArrowDownRight: () => <svg data-testid="arrow-down-right-icon" />,
  Minus: () => <svg data-testid="minus-icon" />,
  Link2: () => <svg data-testid="link2-icon" />,
  Cpu: () => <svg data-testid="cpu-icon" />,
  Github: () => <svg data-testid="github-icon" />,
  Twitter: () => <svg data-testid="twitter-icon" />,
  Linkedin: () => <svg data-testid="linkedin-icon" />,
  Mail: () => <svg data-testid="mail-icon" />,
  HelpCircle: () => <svg data-testid="help-circle-icon" />,
  PlusIcon: () => <svg data-testid="plus-icon" />,
  Check: () => <svg data-testid="check-icon" />,
}));

// Global test utilities
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

HTMLDialogElement.prototype.showModal = vi.fn();
HTMLDialogElement.prototype.close = vi.fn();
