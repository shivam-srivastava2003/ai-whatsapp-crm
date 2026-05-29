'use client'

import { motion } from 'framer-motion'
import {
  AreaChart, Area, BarChart, Bar, RadarChart,
  PolarGrid, PolarAngleAxis, Radar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from 'recharts'

const growthData = [
  { month: 'Jan', customers: 120, churned: 8 },
  { month: 'Feb', customers: 145, churned: 6 },
  { month: 'Mar', customers: 178, churned: 12 },
  { month: 'Apr', customers: 210, churned: 9 },
  { month: 'May', customers: 265, churned: 14 },
  { month: 'Jun', customers: 298, churned: 10 },
  { month: 'Jul', customers: 354, churned: 18 },
  { month: 'Aug', customers: 412, churned: 15 },
  { month: 'Sep', customers: 489, churned: 22 },
  { month: 'Oct', customers: 567, churned: 19 },
  { month: 'Nov', customers: 638, churned: 24 },
  { month: 'Dec', customers: 742, churned: 28 },
]

const aiMetrics = [
  { subject: 'Reply Speed', A: 92 },
  { subject: 'Lead Scoring', A: 88 },
  { subject: 'Sentiment', A: 79 },
  { subject: 'Automation', A: 95 },
  { subject: 'Conversion', A: 84 },
  { subject: 'Retention', A: 71 },
]

// Use static generation instead of dynamic generation on every import to avoid hydration mismatch
const hourlyActivity = [
  { hour: '0:00', messages: 15, ai: 8 },
  { hour: '2:00', messages: 12, ai: 5 },
  { hour: '4:00', messages: 10, ai: 6 },
  { hour: '6:00', messages: 22, ai: 12 },
  { hour: '8:00', messages: 45, ai: 25 },
  { hour: '10:00', messages: 78, ai: 42 },
  { hour: '12:00', messages: 85, ai: 51 },
  { hour: '14:00', messages: 68, ai: 40 },
  { hour: '16:00', messages: 72, ai: 45 },
  { hour: '18:00', messages: 90, ai: 55 },
  { hour: '20:00', messages: 55, ai: 30 },
  { hour: '22:00', messages: 30, ai: 18 }
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white border border-border rounded-xl px-3 py-2 shadow-glass text-xs">
        <p className="font-bold text-dark mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} style={{ color: p.color || p.stroke }} className="font-medium">
            {p.name}: {typeof p.value === 'number' && p.value > 999 ? `₹${(p.value / 100000).toFixed(1)}L` : p.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function CustomerGrowthChart() {
  return (
    <motion.div className="lg:col-span-2 premium-card p-5"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-dark">Customer Growth</h3>
          <p className="text-[11px] text-slate-500 mt-0.5">Monthly active customers vs churn</p>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-primary" /><span className="text-slate-500">Customers</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="text-slate-500">Churned</span></div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={growthData}>
          <defs>
            <linearGradient id="custGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="churnGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EF4444" stopOpacity={0.12} />
              <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="customers" name="Customers" stroke="#2563EB" strokeWidth={2} fill="url(#custGrad)" dot={false} activeDot={{ r: 4 }} />
          <Area type="monotone" dataKey="churned" name="Churned" stroke="#EF4444" strokeWidth={1.5} strokeDasharray="4 4" fill="url(#churnGrad)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export function AIPerformanceRadarChart() {
  return (
    <motion.div className="premium-card p-5"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
      <div className="mb-3">
        <h3 className="text-sm font-bold text-dark">AI Performance Score</h3>
        <p className="text-[11px] text-slate-500 mt-0.5">Across 6 key metrics</p>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <RadarChart data={aiMetrics}>
          <PolarGrid stroke="#E2E8F0" />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fill: '#94A3B8' }} />
          <Radar name="AI" dataKey="A" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.15} strokeWidth={2} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {aiMetrics.map(m => (
          <div key={m.subject} className="flex items-center justify-between">
            <span className="text-[10px] text-slate-500">{m.subject}</span>
            <span className="text-[10px] font-bold text-purple">{m.A}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function HourlyActivityChart() {
  return (
    <motion.div className="premium-card p-5"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-dark">Hourly Message Activity</h3>
          <p className="text-[11px] text-slate-500">Today's chat volume vs AI auto-replies</p>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-primary" /><span className="text-slate-500">Messages</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-purple" /><span className="text-slate-500">AI Replies</span></div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={hourlyActivity} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
          <XAxis dataKey="hour" tick={{ fontSize: 9, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 9, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="messages" name="Messages" fill="#2563EB" radius={[3, 3, 0, 0]} opacity={0.8} />
          <Bar dataKey="ai" name="AI Replies" fill="#7C3AED" radius={[3, 3, 0, 0]} opacity={0.7} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
