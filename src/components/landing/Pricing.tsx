'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Zap, Star } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '₹2,999',
    period: '/month',
    description: 'Perfect for freelancers and small businesses just getting started.',
    color: '#06B6D4',
    features: [
      '1 WhatsApp Number',
      'Up to 500 contacts',
      'AI auto-replies (100/month)',
      'Basic analytics',
      'Email support',
      'Chat inbox',
      'Lead management',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Pro',
    price: '₹6,999',
    period: '/month',
    description: 'Best for growing agencies and startups scaling their sales.',
    color: '#2563EB',
    features: [
      '3 WhatsApp Numbers',
      'Up to 5,000 contacts',
      'AI auto-replies (unlimited)',
      'Advanced analytics',
      'Priority support',
      'Team inbox (5 agents)',
      'Workflow automation',
      'Lead scoring',
      'Kanban CRM',
      'WhatsApp broadcasts',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '₹14,999',
    period: '/month',
    description: 'For established businesses and large teams with custom needs.',
    color: '#7C3AED',
    features: [
      'Unlimited WhatsApp Numbers',
      'Unlimited contacts',
      'GPT-4o AI replies',
      'Custom analytics & reports',
      'Dedicated account manager',
      'Unlimited agents',
      'Custom workflow builder',
      'AI lead scoring',
      'API access',
      'White-label option',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary text-sm font-semibold mb-4">
            💰 Simple, transparent pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            Start Free,{' '}
            <span className="gradient-text">Scale as You Grow</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            No hidden fees. No surprises. Cancel anytime. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-7 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary to-purple text-white shadow-premium scale-105'
                  : 'bg-white border border-border shadow-card hover:shadow-card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-white text-primary rounded-full text-xs font-bold shadow-card border border-primary-100">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div
                  className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold mb-3"
                  style={{
                    backgroundColor: plan.popular ? 'rgba(255,255,255,0.2)' : `${plan.color}15`,
                    color: plan.popular ? 'white' : plan.color,
                  }}
                >
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-dark'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1.5 ${plan.popular ? 'text-white/70' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.popular ? 'text-white/80' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-7">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: plan.popular ? 'rgba(255,255,255,0.2)' : `${plan.color}15` }}
                    >
                      <Check
                        className="w-2.5 h-2.5"
                        style={{ color: plan.popular ? 'white' : plan.color }}
                      />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/dashboard"
                prefetch={false}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-primary-50 shadow-card'
                    : 'bg-primary text-white hover:opacity-90 shadow-glow'
                }`}
              >
                <Zap className="w-4 h-4" />
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mt-10"
        >
          All plans include 14-day free trial • No credit card required • Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}
