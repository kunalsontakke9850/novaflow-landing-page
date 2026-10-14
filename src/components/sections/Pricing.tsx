import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const plans = [
  {
    name: 'Free',
    description: 'A starting point for the concept',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { name: 'Up to 3 projects', included: true },
      { name: '1,000 automation runs/month', included: true },
      { name: 'Basic task management', included: true },
      { name: 'Community support', included: true },
      { name: 'AI workflow builder', included: false },
      { name: 'Advanced analytics', included: false },
      { name: 'Team workspaces', included: false },
      { name: 'SSO & SAML', included: false },
      { name: 'Audit logs', included: false },
      { name: 'Priority support', included: false },
    ],
    cta: 'Explore the concept',
    variant: 'secondary' as const,
    popular: false,
  },
  {
    name: 'Pro',
    description: 'An expanded workspace concept',
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      { name: 'Unlimited projects', included: true },
      { name: '100,000 automation runs/month', included: true },
      { name: 'AI workflow builder', included: true },
      { name: 'Advanced analytics & reports', included: true },
      { name: 'Team workspaces (up to 10)', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Priority email support', included: true },
      { name: 'SSO & SAML', included: false },
      { name: 'Audit logs', included: false },
      { name: 'Dedicated success manager', included: false },
    ],
    cta: 'Explore the concept',
    variant: 'primary' as const,
    popular: true,
  },
  {
    name: 'Team',
    description: 'A larger team concept',
    monthlyPrice: 79,
    yearlyPrice: 65,
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'Unlimited team members', included: true },
      { name: 'Unlimited automation runs', included: true },
      { name: 'SSO & SAML authentication', included: true },
      { name: 'Advanced audit logs', included: true },
      { name: 'Custom contracts & SLAs', included: true },
      { name: 'Dedicated success manager', included: true },
      { name: 'On-premise deployment option', included: true },
      { name: 'Custom AI model training', included: true },
      { name: '24/7 phone support', included: true },
    ],
    cta: 'Explore the concept',
    variant: 'secondary' as const,
    popular: false,
  },
];

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'No plans are available. The pricing cards are illustrative interface content for this frontend concept.',
  },
  {
    question: 'Is there a free trial for Pro?',
    answer: 'There is no free trial or signup flow. This page does not connect to a product service.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'No payment methods are accepted because checkout and payment processing are not implemented.',
  },
  {
    question: 'Do you offer discounts for nonprofits or education?',
    answer: 'The prices and discount information are not real offers. No sales team or discount program is connected.',
  },
  {
    question: 'What happens if I exceed my automation limits?',
    answer: 'Usage limits and automation runs are sample content only. This demo does not execute workflows or track usage.',
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section
      id="pricing"
      className="section bg-navy-950/50"
      aria-labelledby="pricing-heading"
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
            Example pricing
          </Badge>
          <h2 id="pricing-heading" className="heading-lg mb-4">
            Plans as a <span className="gradient-text">starting point</span>
          </h2>
          <p className="text-navy-300 text-lg">
            Illustrative plan names, features, and prices to show how a future offer might be presented. No plans are available.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-navy-100' : 'text-navy-400'}`}>
            Monthly
          </span>

          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-14 h-8 rounded-full bg-navy-800 border border-white/10 flex items-center p-1 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500"
            role="switch"
            aria-checked={billingCycle === 'yearly'}
            aria-label={`Switch to ${billingCycle === 'monthly' ? 'yearly' : 'monthly'} billing`}
          >
            <motion.div
              animate={{
                x: billingCycle === 'yearly' ? '100%' : 0,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 shadow-lg"
            />
          </button>

          <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-navy-100' : 'text-navy-400'}`}>
            Yearly
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard plan={plan} billingCycle={billingCycle} />
            </motion.div>
          ))}
        </div>

        {/* Pricing FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="heading-md text-center mb-8">Common questions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              >
                <PricingFAQ faq={faq} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-navy-500 text-sm mt-12"
        >
          <HelpCircle className="w-4 h-4 inline mr-1" />
          Pricing shown is illustrative concept pricing for this fictional product. No actual payment processing exists.
        </motion.p>
      </div>
    </section>
  );
}

function PricingCard({ plan, billingCycle }: { plan: typeof plans[0]; billingCycle: 'monthly' | 'yearly' }) {
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  const isFree = price === 0;

  return (
    <Card
      variant={plan.popular ? 'elevated' : 'default'}
      padding="lg"
      className={`relative h-full flex flex-col ${plan.popular ? 'border-violet-500/30 shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)]' : ''}`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="info" size="sm">
            Most Popular
          </Badge>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-navy-50 mb-2">{plan.name}</h3>
        <p className="text-navy-400 text-sm">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {isFree ? (
            <span className="text-4xl font-bold text-navy-50">Free</span>
          ) : (
            <>
              <span className="text-4xl font-bold text-navy-50">${price}</span>
              <span className="text-navy-400">/month</span>
            </>
          )}
        </div>
        {billingCycle === 'yearly' && !isFree && (
          <p className="text-navy-500 text-sm mt-1">
            Billed yearly: <span className="font-medium text-navy-300">${price * 12}/year</span>
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1" role="list">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
            ) : (
              <X className="w-5 h-5 flex-shrink-0 text-navy-600 mt-0.5" />
            )}
            <span className={`text-sm ${feature.included ? 'text-navy-300' : 'text-navy-500 line-through'}`}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link to="cta" smooth duration={500} offset={-80} className={`btn ${plan.variant === 'primary' ? 'btn-primary' : 'btn-secondary'} btn-lg w-full`}>
        {plan.cta}
        {plan.variant === 'primary' && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
      </Link>
    </Card>
  );
}

function PricingFAQ({ faq }: { faq: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card p-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-medium text-navy-100 pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-5 h-5 text-navy-400"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        id={`faq-answer-${faq.question.replace(/\s+/g, '-').toLowerCase()}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden mt-4 pt-4 border-t border-white/5"
      >
        <p className="text-navy-400 text-sm leading-relaxed">{faq.answer}</p>
      </motion.div>
    </div>
  );
}
