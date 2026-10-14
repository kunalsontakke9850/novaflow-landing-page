import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const faqs = [
  {
    question: 'What is NovaFlow and who is it for?',
    answer: 'NovaFlow in this repository is a fictional product concept. The project contains a landing page and simulated dashboard preview, not a live productivity workspace.',
    category: 'Getting Started',
  },
  {
    question: 'How does the AI workflow automation work?',
    answer: 'The page describes a proposed AI workflow feature, but no AI service or workflow engine is connected.',
    category: 'Features',
  },
  {
    question: 'What integrations does NovaFlow support?',
    answer: 'The integrations shown are illustrative. This frontend demo has no OAuth flows, third-party integrations, webhooks, or API.',
    category: 'Integrations',
  },
  {
    question: 'Is my data secure and private?',
    answer: 'There is no account system or product data store in this demo, and no security certification is claimed. Security-related feature text is concept content only.',
    category: 'Security',
  },
  {
    question: 'Can I import my existing projects and data?',
    answer: 'No import flow is implemented. The dashboard preview uses static, synthetic sample data.',
    category: 'Migration',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'No support service is connected. The support options listed in the pricing concept are illustrative only.',
    category: 'Support',
  },
  {
    question: 'How does pricing work for growing teams?',
    answer: 'All displayed prices and plan features are sample content for the page design. There is no billing, signup, or sales system.',
    category: 'Pricing',
  },
  {
    question: 'Can I self-host NovaFlow?',
    answer: 'This repository contains a static frontend concept. It does not include a product backend or self-hosting package.',
    category: 'Deployment',
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="section"
      aria-labelledby="faq-heading"
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
            Frequently Asked Questions
          </Badge>
          <h2 id="faq-heading" className="heading-lg mb-4">
            Everything you need to <span className="gradient-text">know</span>
          </h2>
          <p className="text-navy-300 text-lg">
            This concept does not connect to a contact or support service.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4" role="region" aria-label="Frequently asked questions">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <FAQItem faq={faq} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Card variant="outlined" padding="lg" className="max-w-xl mx-auto">
            <h3 className="text-lg font-semibold text-navy-50 mb-2">Still have questions?</h3>
            <p className="text-navy-400 text-sm">Support contact is not available in this frontend demo.</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card variant="default" padding="none" className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500 focus-visible:outline-offset-[-2px]"
        aria-expanded={isOpen}
        aria-controls={isOpen ? `faq-content-${index}` : undefined}
      >
        <div className="flex items-start gap-3 flex-1">
          <HelpCircle className="w-5 h-5 flex-shrink-0 text-violet-400 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-medium text-navy-100">{faq.question}</span>
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
              {faq.category}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 text-navy-400"
          aria-hidden="true"
        >
          <Plus className="w-6 h-6" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-content-${index}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-white/5">
              <p className="text-navy-300 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

function Badge({ variant = 'default', size = 'md', children, className = '' }: {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
}) {
  const variants = {
    default: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
    success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    error: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
    info: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
