'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Zap, TrendingUp, MessageCircle, Bot, Star, CheckCircle2 } from 'lucide-react'

const floatingCards = [
  {
    id: 1,
    label: 'AI Reply Sent',
    sublabel: 'Response in 0.3s',
    icon: '🤖',
    color: '#EFF6FF',
    border: '#BFDBFE',
    delay: 0,
    position: 'top-24 -left-4 md:left-8',
  },
  {
    id: 2,
    label: '₹6,00,000 Deal Closed!',
    sublabel: 'InnovateTech Corp',
    icon: '🎉',
    color: '#F0FDF4',
    border: '#BBF7D0',
    delay: 1,
    position: 'top-40 -right-4 md:right-8',
  },
  {
    id: 3,
    label: 'Lead Score: 92/100',
    sublabel: 'Aarav Shah — Hot Lead',
    icon: '🔥',
    color: '#FFF7ED',
    border: '#FED7AA',
    delay: 2,
    position: 'bottom-40 -left-4 md:left-12',
  },
  {
    id: 4,
    label: '+24.5% Revenue',
    sublabel: 'vs last month',
    icon: '📈',
    color: '#F5F3FF',
    border: '#DDD6FE',
    delay: 0.5,
    position: 'bottom-20 -right-4 md:right-4',
  },
]

const stats = [
  { value: '10,000+', label: 'Businesses' },
  { value: '2.3M+', label: 'Chats Managed' },
  { value: '68%', label: 'Avg Conversion' },
  { value: '4.9★', label: 'Rating' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan/6 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              🚀 Now with GPT-4o powered AI replies
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-black text-dark leading-[1.05] tracking-tight mb-6"
            >
              AI-Powered{' '}
              <span className="gradient-text block">WhatsApp CRM</span>
              for Modern{' '}
              <span className="relative inline-block">
                Businesses
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple rounded-full origin-left"
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg"
            >
              Manage leads, automate follow-ups, reply faster with AI, and grow your business smarter. Built for freelancers, agencies, and startups.
            </motion.p>

            {/* Feature bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              {['No credit card required', '14-day free trial', 'Setup in 5 minutes'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/dashboard" prefetch={false} className="btn-primary animate-pulse-glow">
                <Zap className="w-4 h-4" />
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn-secondary">
                <Play className="w-4 h-4 text-primary" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-4 gap-4 pt-8 border-t border-border"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl font-black text-dark">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Dashboard Card */}
              <div className="glass-card p-5 animate-float shadow-premium">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs text-slate-400 font-mono">WhatsCRM Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="status-online" />
                    <span className="text-xs text-slate-500">Live</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Revenue', value: '₹19.8L', trend: '+24%', color: '#2563EB' },
                    { label: 'Active Chats', value: '247', trend: '+18', color: '#7C3AED' },
                    { label: 'AI Replies', value: '1,420', trend: '+67%', color: '#06B6D4' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-50 rounded-xl p-3 border border-border">
                      <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                      <div className="text-lg font-black text-dark">{stat.value}</div>
                      <div className="text-xs font-semibold mt-0.5" style={{ color: stat.color }}>{stat.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Chat preview */}
                <div className="space-y-2.5">
                  {[
                    { name: 'Aarav Shah', msg: 'Can you send me the pricing details?', time: '2m', unread: 3, color: '#2563EB', avatar: 'AS' },
                    { name: 'Priya Menon', msg: 'I will get back to you tomorrow 👍', time: '15m', unread: 1, color: '#7C3AED', avatar: 'PM' },
                    { name: 'Ravi Kumar', msg: 'When can we schedule a demo?', time: '1h', unread: 0, color: '#06B6D4', avatar: 'RK' },
                  ].map((chat) => (
                    <div key={chat.name} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: chat.color }}
                      >
                        {chat.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-dark truncate">{chat.name}</span>
                          <span className="text-xs text-slate-400">{chat.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">{chat.msg}</p>
                      </div>
                      {chat.unread > 0 && (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-[10px] text-white font-bold">{chat.unread}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* AI suggestion */}
                <div className="mt-3 p-3 bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl border border-primary-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold text-primary">AI Suggestion</span>
                  </div>
                  <p className="text-xs text-slate-600">3 leads need follow-up today. Aarav Shah has high buying intent — reach out now!</p>
                </div>
              </div>

              {/* Floating Cards */}
              {floatingCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { delay: 0.5 + card.delay * 0.2, duration: 0.4 },
                    scale: { delay: 0.5 + card.delay * 0.2, duration: 0.4 },
                    y: { duration: 4 + card.delay, repeat: Infinity, ease: 'easeInOut', delay: card.delay },
                  }}
                  className={`absolute ${card.position} bg-white rounded-2xl px-4 py-3 shadow-glass border flex items-center gap-3 z-10`}
                  style={{ borderColor: card.border, backgroundColor: card.color }}
                >
                  <span className="text-xl">{card.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-dark">{card.label}</div>
                    <div className="text-[10px] text-slate-500">{card.sublabel}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
