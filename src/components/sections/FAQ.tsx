import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const faqs = [
  {
    question: 'What is NovaFlow and who is it for?',
    answer: 'NovaFlow is a fictional productivity workspace concept. This project is a landing page with an interactive dashboard preview, not a live workspace.',
    category: 'Getting Started',
  },
  {
    question: 'Are the workflow features connected?',
    answer: 'No. The workflow and AI feature descriptions are illustrative; there is no connected AI service or workflow engine.',
    category: 'Features',
  },
  {
    question: 'What integrations does NovaFlow support?',
    answer: 'The integration categories are examples only. This frontend has no third-party integrations, webhooks, or API.',
    category: 'Integrations',
  },
  {
    question: 'Is my data secure and private?',
    answer: 'This demo has no account system or product data store. Its security and access-control descriptions are design concepts, not implemented protections or certifications.',
    category: 'Security',
  },
  {
    question: 'Can I import my existing projects and data?',
    answer: 'There is no import flow. The dashboard preview uses illustrative sample data.',
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
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <Badge variant="default" size="sm" className="mb-4">
            Common questions
          </Badge>
          <h2 id="faq-heading" className="heading-lg mb-4">
            A few things to <span className="gradient-text">know</span>
          </h2>
          <p className="text-navy-300 text-lg">
            A quick guide to what this concept includes and how to read the examples.
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
          className="mt-12 text-center md:mt-16"
        >
          <Card variant="outlined" padding="lg" className="max-w-xl mx-auto">
            <h3 className="text-lg font-semibold text-navy-50 mb-2">A portfolio concept, built in the open</h3>
            <p className="text-navy-400 text-sm">The page demonstrates a product direction and frontend interactions. It is not a subscription service.</p>
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
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-[-2px]"
        aria-expanded={isOpen}
        aria-controls={isOpen ? `faq-content-${index}` : undefined}
      >
        <div className="flex items-start gap-3 flex-1">
          <HelpCircle className="w-5 h-5 flex-shrink-0 text-gold-400 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-medium text-navy-100">{faq.question}</span>
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
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
    default: 'bg-gold-500/20 text-gold-300 border border-gold-500/30',
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
