'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Plus, Filter, SlidersHorizontal, Search, Bot, Tag,
  Calendar, DollarSign, Phone, ChevronDown, Flame,
  Thermometer, Snowflake, Star, MoreHorizontal, ArrowRight, TrendingUp
} from 'lucide-react'
import { leads, kanbanStages, stageColors, type Lead, type KanbanStage } from '@/lib/data'

const priorityConfig = {
  Hot: { icon: Flame, color: '#EF4444', bg: '#FFF1F2', border: '#FECDD3', label: 'Hot' },
  Warm: { icon: Thermometer, color: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A', label: 'Warm' },
  Cold: { icon: Snowflake, color: '#06B6D4', bg: '#ECFEFF', border: '#A5F3FC', label: 'Cold' },
}

function LeadCard({ lead }: { lead: Lead }) {
  const [showAI, setShowAI] = useState(false)
  const priority = priorityConfig[lead.priority]
  const PriorityIcon = priority.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(37,99,235,0.1)' }}
      className="kanban-card relative group"
    >
      {/* Top: Avatar + Name + menu */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ backgroundColor: lead.color }}
          >
            {lead.avatar}
          </div>
          <div>
            <div className="text-xs font-bold text-dark">{lead.name}</div>
            <div className="text-[10px] text-slate-500 truncate max-w-[120px]">{lead.company}</div>
          </div>
        </div>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 rounded-lg hover:bg-slate-100 flex items-center justify-center">
          <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      {/* Budget & Priority row */}
      <div className="flex items-center gap-2 mb-2.5">
        <div className="flex items-center gap-1 px-2 py-1 bg-slate-50 rounded-lg border border-border">
          <DollarSign className="w-3 h-3 text-slate-400" />
          <span className="text-[11px] font-semibold text-dark">{lead.budget}</span>
        </div>
        <div
          className="flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-semibold"
          style={{ backgroundColor: priority.bg, borderColor: priority.border, color: priority.color }}
        >
          <PriorityIcon className="w-3 h-3" />
          {priority.label}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-2.5">
        {lead.tags.slice(0, 2).map(tag => (
          <span key={tag} className="badge bg-slate-100 text-slate-500 text-[9px]">{tag}</span>
        ))}
        {lead.tags.length > 2 && (
          <span className="badge bg-slate-100 text-slate-400 text-[9px]">+{lead.tags.length - 2}</span>
        )}
      </div>

      {/* AI Score */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1.5">
          <Bot className="w-3 h-3 text-primary" />
          <span className="text-[10px] text-slate-500">AI Score</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${lead.aiScore}%`,
                background: lead.aiScore >= 80 ? 'linear-gradient(90deg, #10B981, #2563EB)' :
                  lead.aiScore >= 60 ? 'linear-gradient(90deg, #F59E0B, #F97316)' :
                  '#EF4444',
              }}
            />
          </div>
          <span className="text-[11px] font-bold" style={{
            color: lead.aiScore >= 80 ? '#10B981' : lead.aiScore >= 60 ? '#F59E0B' : '#EF4444'
          }}>
            {lead.aiScore}
          </span>
        </div>
      </div>

      {/* AI Suggestion toggle */}
      <button
        onClick={() => setShowAI(!showAI)}
        className="w-full flex items-center gap-1.5 text-[10px] text-primary font-semibold hover:underline transition-all mb-1"
      >
        <Bot className="w-3 h-3" />
        AI Suggestion
        <ChevronDown className={`w-3 h-3 ml-auto transition-transform ${showAI ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {showAI && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="text-[10px] text-slate-600 bg-primary-50 border border-primary-100 rounded-lg px-2.5 py-2 mb-2 leading-relaxed">
              💡 {lead.aiSuggestion}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer: Deadline + Source */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <Calendar className="w-3 h-3" />
          {lead.deadline}
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded font-medium">{lead.source}</span>
        </div>
      </div>

      {/* Hover: Quick action buttons */}
      <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1">
        <button className="w-6 h-6 bg-primary text-white rounded-lg flex items-center justify-center hover:opacity-90 shadow-glow">
          <Phone className="w-3 h-3" />
        </button>
        <button className="w-6 h-6 bg-purple text-white rounded-lg flex items-center justify-center hover:opacity-90 shadow-glow-purple">
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  )
}

function KanbanColumn({ stage, leads: stageLeads }: { stage: KanbanStage; leads: Lead[] }) {
  const colors = stageColors[stage]
  const totalBudget = stageLeads.reduce((sum, l) => {
    const num = parseInt(l.budget.replace(/[₹,]/g, ''))
    return sum + (isNaN(num) ? 0 : num)
  }, 0)

  return (
    <div className="flex flex-col w-[calc(100vw-40px)] md:w-72 flex-shrink-0 bg-slate-50/50 p-3 rounded-2xl border border-border/40">
      {/* Column header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
          <div
            className="px-2.5 py-1 rounded-lg text-xs font-bold"
            style={{ backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
          >
            {stage}
          </div>
          <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold flex items-center justify-center">
            {stageLeads.length}
          </span>
        </div>
        <button className="w-6 h-6 rounded-lg hover:bg-slate-200 flex items-center justify-center transition-colors">
          <Plus className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      {/* Budget total */}
      {totalBudget > 0 && (
        <div className="flex items-center gap-1 text-[10px] text-slate-500 mb-2 px-1">
          <TrendingUp className="w-3 h-3" />
          Pipeline: ₹{(totalBudget / 100000).toFixed(1)}L
        </div>
      )}

      {/* Cards list with independent vertical scroll */}
      <div className="flex flex-col gap-2.5 overflow-y-auto custom-scrollbar pr-1 flex-1 max-h-[calc(100vh-280px)] md:max-h-[calc(100vh-240px)]">
        {stageLeads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}

        {/* Add card placeholder */}
        <button
          className="w-full border-2 border-dashed border-border rounded-xl py-3 text-xs text-slate-400 hover:border-primary hover:text-primary hover:bg-primary-50 transition-all duration-200 flex items-center justify-center gap-1.5 flex-shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Lead
        </button>
      </div>
    </div>
  )
}

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredLeads = leads.filter(l =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const summary = {
    total: leads.length,
    hot: leads.filter(l => l.priority === 'Hot').length,
    totalPipeline: leads.reduce((sum, l) => {
      const num = parseInt(l.budget.replace(/[₹,]/g, ''))
      return sum + (isNaN(num) ? 0 : num)
    }, 0),
  }

  return (
    <div className="space-y-5">
      {/* Page header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-black text-dark">Leads CRM</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {summary.total} leads · {summary.hot} hot · ₹{(summary.totalPipeline / 100000).toFixed(1)}L pipeline
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Search */}
          <div className="flex-1 md:flex-none flex items-center gap-2 px-3 py-2 bg-white border border-border rounded-xl min-w-[140px]">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="bg-transparent text-xs text-dark placeholder-slate-400 outline-none w-full md:w-36"
            />
          </div>
          <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-border rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors" title="Filter">
            <Filter className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Filter</span>
          </button>
          <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-border rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors" title="Sort">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Sort</span>
          </button>
          <button className="btn-primary text-xs py-2 px-3 md:px-4" title="Add Lead">
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Add Lead</span>
          </button>
        </div>
      </div>

      {/* Summary badges */}
      <div className="grid grid-cols-2 lg:flex lg:flex-wrap xl:flex gap-2 md:gap-3">
        {[
          { label: 'Hot Leads', count: summary.hot, color: '#EF4444', bg: '#FFF1F2', icon: '🔥' },
          { label: 'In Pipeline', count: summary.total, color: '#2563EB', bg: '#EFF6FF', icon: '📊' },
          { label: 'Avg AI Score', count: Math.round(leads.reduce((s, l) => s + l.aiScore, 0) / leads.length), color: '#7C3AED', bg: '#F5F3FF', icon: '🤖' },
          { label: 'Closed This Month', count: leads.filter(l => l.stage === 'Closed').length, color: '#10B981', bg: '#F0FDF4', icon: '✅' },
        ].map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2.5 px-3.5 py-2 bg-white border border-border rounded-xl shadow-card"
          >
            <span className="text-base">{item.icon}</span>
            <div>
              <div className="text-sm font-black" style={{ color: item.color }}>{item.count}</div>
              <div className="text-[10px] text-slate-500">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-6 custom-scrollbar">
        {kanbanStages.map(stage => (
          <KanbanColumn
            key={stage}
            stage={stage}
            leads={filteredLeads.filter(l => l.stage === stage)}
          />
        ))}
      </div>
    </div>
  )
}
