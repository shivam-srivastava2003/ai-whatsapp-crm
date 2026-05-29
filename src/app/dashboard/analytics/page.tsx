'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp, TrendingDown, Users, MessageCircle, Bot,
  ArrowUpRight, Clock, Star, Target, Activity
} from 'lucide-react'
import dynamic from 'next/dynamic'

const conversionFunnel = [
  { stage: 'Leads Captured', value: 1240, color: '#2563EB' },
  { stage: 'Contacted', value: 892, color: '#7C3AED' },
  { stage: 'Interested', value: 634, color: '#06B6D4' },
  { stage: 'Proposal Sent', value: 421, color: '#10B981' },
  { stage: 'Closed Won', value: 289, color: '#F59E0B' },
]

const channelPerformance = [
  { channel: 'WhatsApp', leads: 520, conversion: 72, revenue: 8400000 },
  { channel: 'Instagram', leads: 240, conversion: 58, revenue: 3200000 },
  { channel: 'Website', leads: 180, conversion: 65, revenue: 4100000 },
  { channel: 'LinkedIn', leads: 90, conversion: 81, revenue: 2900000 },
  { channel: 'Facebook', leads: 60, conversion: 44, revenue: 1200000 },
  { channel: 'Referral', leads: 150, conversion: 89, revenue: 5600000 },
]

const statCards = [
  { title: 'Total Revenue', value: '₹1.98Cr', change: '+24.5%', up: true, color: '#2563EB', icon: TrendingUp, bg: '#EFF6FF' },
  { title: 'New Customers', value: '742', change: '+18.3%', up: true, color: '#7C3AED', icon: Users, bg: '#F5F3FF' },
  { title: 'AI Chats Handled', value: '12,400', change: '+67%', up: true, color: '#06B6D4', icon: Bot, bg: '#ECFEFF' },
  { title: 'Avg Response Time', value: '1.8 min', change: '-42%', up: true, color: '#10B981', icon: Clock, bg: '#F0FDF4' },
  { title: 'Conversion Rate', value: '68.4%', change: '+5.2%', up: true, color: '#F59E0B', icon: Target, bg: '#FFFBEB' },
  { title: 'Churn Rate', value: '3.2%', change: '-1.1%', up: true, color: '#EF4444', icon: TrendingDown, bg: '#FFF1F2' },
]

const CustomerGrowthChart = dynamic(
  () => import('@/components/dashboard/AnalyticsCharts').then((mod) => mod.CustomerGrowthChart),
  {
    ssr: false,
    loading: () => <div className="lg:col-span-2 h-[280px] bg-slate-50 border rounded-2xl animate-pulse" />
  }
)

const AIPerformanceRadarChart = dynamic(
  () => import('@/components/dashboard/AnalyticsCharts').then((mod) => mod.AIPerformanceRadarChart),
  {
    ssr: false,
    loading: () => <div className="h-[280px] bg-slate-50 border rounded-2xl animate-pulse" />
  }
)

const HourlyActivityChart = dynamic(
  () => import('@/components/dashboard/AnalyticsCharts').then((mod) => mod.HourlyActivityChart),
  {
    ssr: false,
    loading: () => <div className="h-[240px] bg-slate-50 border rounded-2xl animate-pulse" />
  }
)

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-dark">Analytics & Insights</h2>
          <p className="text-xs text-slate-500 mt-0.5">Full-year performance overview · AI-powered insights</p>
        </div>
        <div className="flex items-center gap-2">
          {['7D', '30D', '90D', '1Y'].map((p, i) => (
            <button key={p} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${i === 3 ? 'bg-primary text-white shadow-glow' : 'bg-white border border-border text-slate-600 hover:bg-slate-50'}`}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {statCards.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            className="premium-card p-4 hover:shadow-card-hover transition-all group">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: s.bg }}>
                <s.icon className="w-4 h-4" style={{ color: s.color }} />
              </div>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 ${s.up ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                <ArrowUpRight className={`w-2.5 h-2.5 ${!s.up ? 'rotate-180' : ''}`} />
                {s.change}
              </span>
            </div>
            <div className="text-xl font-black text-dark group-hover:text-primary transition-colors">{s.value}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{s.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Main charts row */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Customer Growth */}
        <CustomerGrowthChart />

        {/* AI Performance Radar */}
        <AIPerformanceRadarChart />
      </div>

      {/* Conversion Funnel + Channel */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Conversion Funnel */}
        <motion.div className="premium-card p-5"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="mb-4">
            <h3 className="text-sm font-bold text-dark">Conversion Funnel</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Lead to customer journey</p>
          </div>
          <div className="space-y-2.5">
            {conversionFunnel.map((stage, i) => {
              const pct = Math.round((stage.value / conversionFunnel[0].value) * 100)
              return (
                <div key={stage.stage}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-slate-700">{stage.stage}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-dark">{stage.value.toLocaleString()}</span>
                      <span className="text-[10px] text-slate-400">{pct}%</span>
                    </div>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: stage.color }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-4 p-3 bg-primary-50 rounded-xl border border-primary-100">
            <div className="text-xs font-semibold text-primary">Overall Conversion: 23.3%</div>
            <div className="text-[10px] text-slate-500 mt-0.5">1,240 leads → 289 customers this year</div>
          </div>
        </motion.div>

        {/* Channel Performance */}
        <motion.div className="premium-card p-5"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-dark">Channel Performance</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Leads & conversion by source</p>
            </div>
          </div>
          <div className="space-y-2.5">
            {channelPerformance.map((ch, i) => (
              <div key={ch.channel} className="flex items-center gap-3">
                <div className="w-20 text-xs font-medium text-slate-700 flex-shrink-0">{ch.channel}</div>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(ch.leads / 520) * 100}%` }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-purple"
                  />
                </div>
                <div className="text-xs font-bold text-dark w-8 text-right">{ch.leads}</div>
                <div className="w-10 text-right">
                  <span className="text-[10px] font-bold text-emerald-600">{ch.conversion}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hourly Activity Heatmap */}
      <HourlyActivityChart />
    </div>
  )
}
