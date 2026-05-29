'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Bot, TrendingUp, MessageCircle, Target } from 'lucide-react'

const overlayCards = [
  {
    icon: TrendingUp,
    title: 'Revenue This Month',
    value: '₹19.8L',
    trend: '+24.5%',
    color: '#2563EB',
    bg: '#EFF6FF',
    position: '-top-6 -left-8 md:-left-12',
    delay: 0.2,
  },
  {
    icon: MessageCircle,
    title: 'Active Chats',
    value: '247',
    trend: '18 new today',
    color: '#7C3AED',
    bg: '#F5F3FF',
    position: '-top-6 -right-8 md:-right-12',
    delay: 0.4,
  },
  {
    icon: Bot,
    title: 'AI Replies Sent',
    value: '1,420',
    trend: '+67% automation',
    color: '#06B6D4',
    bg: '#ECFEFF',
    position: '-bottom-6 -left-8 md:-left-12',
    delay: 0.3,
  },
  {
    icon: Target,
    title: 'Conversion Rate',
    value: '68.4%',
    trend: '+5.2% vs last month',
    color: '#10B981',
    bg: '#F0FDF4',
    position: '-bottom-6 -right-8 md:-right-12',
    delay: 0.5,
  },
]

export default function DashboardPreview() {
  return (
    <section className="py-28 bg-gradient-to-b from-background to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-100 rounded-full text-cyan text-sm font-semibold mb-4">
            🖥️ See it in action
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            Your Entire Business,
            <span className="gradient-text-cyan"> One Dashboard</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            A single command center for all your WhatsApp conversations, leads, analytics, and AI automation.
          </p>
        </motion.div>

        {/* Dashboard showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Overlay cards */}
          {overlayCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay }}
              style={{ y: [0, -8, 0] as unknown as number }}
              className={`absolute ${card.position} z-20 hidden md:block`}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                className="bg-white rounded-2xl px-4 py-3 shadow-glass border border-border flex items-center gap-3 min-w-[180px]"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: card.bg }}
                >
                  <card.icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{card.title}</div>
                  <div className="text-base font-black text-dark">{card.value}</div>
                  <div className="text-xs font-semibold" style={{ color: card.color }}>{card.trend}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Main dashboard mockup */}
          <div className="glass-card p-1 shadow-premium rounded-3xl border border-border/50 overflow-x-auto custom-scrollbar">
            {/* Window chrome */}
            <div className="bg-slate-50 rounded-2xl px-4 py-3 flex items-center gap-3 border-b border-border mb-1 min-w-[720px]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-lg px-3 py-1.5 text-xs text-slate-400 font-mono border border-border">
                app.whatscrm.io/dashboard
              </div>
            </div>

            {/* Dashboard body */}
            <div className="flex h-80 bg-background rounded-2xl overflow-hidden min-w-[720px]">
              {/* Sidebar */}
              <div className="w-14 bg-white border-r border-border flex flex-col items-center py-4 gap-4">
                {['💬', '👥', '📊', '⚡', '🔔', '⚙️'].map((icon, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm cursor-pointer transition-all ${i === 0 ? 'bg-primary shadow-glow' : 'hover:bg-slate-100'}`}
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 overflow-hidden">
                {/* Top stats */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: 'Revenue', value: '₹19.8L', color: '#2563EB' },
                    { label: 'Chats', value: '247', color: '#7C3AED' },
                    { label: 'Leads', value: '89', color: '#06B6D4' },
                    { label: 'Closed', value: '34', color: '#10B981' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl p-3 border border-border shadow-card">
                      <div className="text-[10px] text-slate-500">{s.label}</div>
                      <div className="text-base font-black text-dark mt-0.5">{s.value}</div>
                      <div className="mt-1 h-0.5 rounded-full w-2/3" style={{ backgroundColor: s.color }} />
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="bg-white rounded-xl p-3 border border-border shadow-card h-36 flex items-end gap-1 relative overflow-hidden">
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-dark">Revenue Trend</span>
                    <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">+24.5%</span>
                  </div>
                  {[40, 55, 45, 70, 80, 72, 95, 110, 105, 125, 140, 160].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h * 0.55}px` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className="flex-1 rounded-t-sm"
                      style={{
                        background: i === 11
                          ? 'linear-gradient(to top, #2563EB, #7C3AED)'
                          : `rgba(37, 99, 235, ${0.2 + (i / 11) * 0.4})`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Right sidebar */}
              <div className="w-44 bg-white border-l border-border p-3 flex flex-col gap-3">
                <div className="text-xs font-bold text-dark mb-1">AI Insights</div>
                {[
                  { text: '3 leads need follow-up', color: '#EF4444', dot: '🔴' },
                  { text: 'Aarav Shah: High intent', color: '#2563EB', dot: '🔵' },
                  { text: 'Deal closed: ₹6L', color: '#10B981', dot: '🟢' },
                ].map((insight, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 bg-slate-50 rounded-lg">
                    <span className="text-[10px] mt-0.5">{insight.dot}</span>
                    <span className="text-[9px] text-slate-600 leading-tight">{insight.text}</span>
                  </div>
                ))}
                <div className="mt-auto">
                  <div className="text-[10px] font-semibold text-dark mb-1.5">Recent Leads</div>
                  {['Aarav S.', 'Priya M.', 'Ravi K.'].map((name, i) => (
                    <div key={i} className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[8px] font-bold text-primary">
                        {name[0]}
                      </div>
                      <span className="text-[10px] text-slate-600">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/dashboard" prefetch={false} className="btn-primary">
            Explore the Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
