'use client'

import { motion } from 'framer-motion'
import { trustedCompanies } from '@/lib/data'

export default function TrustedBy() {
  const doubled = [...trustedCompanies, ...trustedCompanies]

  return (
    <section className="py-16 bg-white border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2"
        >
          Trusted by 10,000+ businesses worldwide
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-16 h-0.5 bg-gradient-to-r from-primary to-purple rounded-full mx-auto"
        />
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee" style={{ width: 'max-content' }}>
          {doubled.map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="flex items-center gap-2.5 px-5 py-3 bg-slate-50 border border-border rounded-xl hover:border-primary/30 hover:bg-primary-50 transition-all duration-200 cursor-default flex-shrink-0"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: company.color }}
              >
                {company.name[0]}
              </div>
              <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social proof numbers */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {[
          { value: '10,000+', label: 'Active Businesses', emoji: '🏢' },
          { value: '2.3M+', label: 'Chats Managed', emoji: '💬' },
          { value: '₹500Cr+', label: 'Revenue Generated', emoji: '💰' },
          { value: '99.9%', label: 'Uptime SLA', emoji: '⚡' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-4"
          >
            <div className="text-2xl mb-1">{stat.emoji}</div>
            <div className="text-2xl font-black text-dark">{stat.value}</div>
            <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
