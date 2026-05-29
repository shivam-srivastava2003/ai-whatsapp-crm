'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp, MessageCircle, Target, Zap, ArrowUpRight, ArrowDownRight,
  Bot, Users, Clock, Activity
} from 'lucide-react'
import dynamic from 'next/dynamic'
import { dashboardStats, aiInsights, recentActivity } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, MessageCircle, Target, Zap, Bot, Users, Clock, Activity
}

const RevenueConversionChart = dynamic(
  () => import('@/components/dashboard/DashboardCharts').then((mod) => mod.RevenueConversionChart),
  {
    ssr: false,
    loading: () => (
      <div className="grid lg:grid-cols-3 gap-4 animate-pulse">
        <div className="lg:col-span-2 h-[320px] bg-slate-50 border rounded-2xl" />
        <div className="h-[320px] bg-slate-50 border rounded-2xl" />
      </div>
    )
  }
)

const ResponseTimeChart = dynamic(
  () => import('@/components/dashboard/DashboardCharts').then((mod) => mod.ResponseTimeChart),
  {
    ssr: false,
    loading: () => <div className="h-[220px] bg-slate-50 border rounded-2xl animate-pulse" />
  }
)

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat, i) => {
          const Icon = iconMap[stat.icon] || TrendingUp
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="premium-card p-5 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <span
                  className={`flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    stat.positive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
                  }`}
                >
                  {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-black text-dark group-hover:text-primary transition-colors">{stat.value}</div>
              <div className="text-xs font-medium text-slate-600 mt-0.5">{stat.title}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{stat.subtitle}</div>
            </motion.div>
          )
        })}
      </div>

      {/* Revenue & Conversion Charts */}
      <RevenueConversionChart />

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Response Time Chart */}
        <ResponseTimeChart />

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="premium-card p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-dark">AI Insights</h3>
              <p className="text-[10px] text-slate-500">Powered by GPT-4o</p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="space-y-2.5">
            {aiInsights.map((insight) => (
              <div
                key={insight.id}
                className="flex items-start gap-3 p-3 rounded-xl border transition-all hover:shadow-card cursor-pointer"
                style={{ borderColor: `${insight.color}25`, backgroundColor: `${insight.color}08` }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: insight.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-dark truncate">{insight.title}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-2">{insight.description}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="premium-card p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-dark">Recent Activity</h3>
            <button className="text-[10px] text-primary font-semibold hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{
                    backgroundColor: typeof item.avatar === 'string' && (item.avatar.includes('🤖') || item.avatar.includes('⚡'))
                      ? '#F1F5F9'
                      : item.color
                  }}
                >
                  {item.avatar.length > 2 ? item.avatar : <span className="text-base">{item.avatar}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-dark">{item.user}</div>
                  <div className="text-[10px] text-slate-500 truncate">{item.action}</div>
                </div>
                <div className="text-[10px] text-slate-400 flex-shrink-0">{item.time}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
