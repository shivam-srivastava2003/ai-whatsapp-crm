'use client'

import { motion } from 'framer-motion'
import { features } from '@/lib/data'
import {
  Bot, Inbox, Users, RefreshCw, Star, BarChart3, Workflow, Bell,
  MessageSquare, Globe, Shield, Zap
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Bot, Inbox, Users, RefreshCw, Star, BarChart3, Workflow, Bell,
  MessageSquare, Globe, Shield, Zap
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-purple text-sm font-semibold mb-4">
            ⚡ Everything you need in one platform
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4 leading-tight">
            Powerful Features Built for
            <span className="gradient-text"> Growth</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From AI-powered replies to full CRM automation — every tool you need to convert WhatsApp leads into paying customers.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Bot
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group premium-card p-5 cursor-pointer relative overflow-hidden hover:shadow-card-hover transition-all duration-300"
              >
                {/* Gradient top border on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: feature.color }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
