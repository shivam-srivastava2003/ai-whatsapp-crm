'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Plus, Play, Pause, Trash2, ChevronDown, Zap, Clock,
  MessageCircle, Users, Bell, CheckCircle, ArrowDown, ArrowLeft,
  GitBranch, Filter, Mail, Phone, Star, Settings, ToggleLeft, ToggleRight
} from 'lucide-react'

type BlockType = 'trigger' | 'condition' | 'action' | 'delay' | 'notify'

interface WorkflowBlock {
  id: string
  type: BlockType
  title: string
  subtitle: string
  icon: React.ElementType
  color: string
  bg: string
}

interface Workflow {
  id: string
  name: string
  description: string
  active: boolean
  runs: number
  lastRun: string
  blocks: WorkflowBlock[]
}

const blockTemplates: Record<BlockType, { icon: React.ElementType; color: string; bg: string }> = {
  trigger: { icon: Zap, color: '#7C3AED', bg: '#F5F3FF' },
  condition: { icon: GitBranch, color: '#F59E0B', bg: '#FFFBEB' },
  action: { icon: MessageCircle, color: '#2563EB', bg: '#EFF6FF' },
  delay: { icon: Clock, color: '#06B6D4', bg: '#ECFEFF' },
  notify: { icon: Bell, color: '#10B981', bg: '#F0FDF4' },
}

const workflows: Workflow[] = [
  {
    id: '1',
    name: 'Lead Inactivity Follow-Up',
    description: 'Auto follow-up when a lead goes quiet for 2 days',
    active: true,
    runs: 247,
    lastRun: '2 hours ago',
    blocks: [
      { id: 'b1', type: 'trigger', title: 'Customer Inactive', subtitle: 'For more than 2 days', icon: Clock, color: '#7C3AED', bg: '#F5F3FF' },
      { id: 'b2', type: 'condition', title: 'Check Lead Stage', subtitle: 'Not in Closed stage', icon: Filter, color: '#F59E0B', bg: '#FFFBEB' },
      { id: 'b3', type: 'action', title: 'Send WhatsApp', subtitle: 'AI-crafted follow-up message', icon: MessageCircle, color: '#2563EB', bg: '#EFF6FF' },
      { id: 'b4', type: 'notify', title: 'Notify Sales Team', subtitle: 'Slack + Email alert sent', icon: Bell, color: '#10B981', bg: '#F0FDF4' },
      { id: 'b5', type: 'action', title: 'Move to Follow-Up Stage', subtitle: 'Update CRM pipeline', icon: Star, color: '#EF4444', bg: '#FFF1F2' },
    ],
  },
  {
    id: '2',
    name: 'New Lead Welcome Sequence',
    description: 'Instant greeting when new lead submits form',
    active: true,
    runs: 1240,
    lastRun: '5 mins ago',
    blocks: [
      { id: 'b1', type: 'trigger', title: 'New Lead Captured', subtitle: 'Via website form / WhatsApp', icon: Zap, color: '#7C3AED', bg: '#F5F3FF' },
      { id: 'b2', type: 'action', title: 'Send Welcome Message', subtitle: 'Personalized AI greeting', icon: MessageCircle, color: '#2563EB', bg: '#EFF6FF' },
      { id: 'b3', type: 'delay', title: 'Wait 30 minutes', subtitle: 'Check if replied', icon: Clock, color: '#06B6D4', bg: '#ECFEFF' },
      { id: 'b4', type: 'condition', title: 'Did Customer Reply?', subtitle: 'Branch: Yes / No', icon: GitBranch, color: '#F59E0B', bg: '#FFFBEB' },
      { id: 'b5', type: 'action', title: 'Assign to Agent', subtitle: 'Route to available rep', icon: Users, color: '#10B981', bg: '#F0FDF4' },
    ],
  },
  {
    id: '3',
    name: 'Payment Reminder Flow',
    description: 'Chase overdue invoices automatically',
    active: false,
    runs: 89,
    lastRun: '1 day ago',
    blocks: [
      { id: 'b1', type: 'trigger', title: 'Invoice Overdue', subtitle: 'Payment pending 3+ days', icon: Clock, color: '#7C3AED', bg: '#F5F3FF' },
      { id: 'b2', type: 'action', title: 'Send Payment Reminder', subtitle: 'WhatsApp + Email', icon: Mail, color: '#2563EB', bg: '#EFF6FF' },
      { id: 'b3', type: 'delay', title: 'Wait 24 Hours', subtitle: 'Give time to respond', icon: Clock, color: '#06B6D4', bg: '#ECFEFF' },
      { id: 'b4', type: 'notify', title: 'Escalate to Manager', subtitle: 'Auto-alert finance team', icon: Bell, color: '#EF4444', bg: '#FFF1F2' },
    ],
  },
]

const addableBlocks = [
  { type: 'trigger' as BlockType, label: 'Trigger', desc: 'Start the workflow' },
  { type: 'condition' as BlockType, label: 'Condition', desc: 'If/else branch logic' },
  { type: 'action' as BlockType, label: 'Action', desc: 'Send message or update CRM' },
  { type: 'delay' as BlockType, label: 'Delay', desc: 'Wait before next step' },
  { type: 'notify' as BlockType, label: 'Notify', desc: 'Alert team members' },
]

function WorkflowCard({ workflow, selected, onClick }: {
  workflow: Workflow
  selected: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -2 }}
      className={`premium-card p-4 cursor-pointer transition-all duration-200 ${selected ? 'ring-2 ring-primary shadow-glow' : ''}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-bold text-dark truncate">{workflow.name}</span>
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${workflow.active ? 'bg-emerald-400' : 'bg-slate-300'}`} />
          </div>
          <p className="text-[11px] text-slate-500">{workflow.description}</p>
        </div>
        <button
          onClick={e => e.stopPropagation()}
          className={`ml-2 flex-shrink-0 w-10 h-5 rounded-full transition-all duration-300 ${workflow.active ? 'bg-primary' : 'bg-slate-200'}`}
        >
          <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 mx-0.5 ${workflow.active ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
      </div>

      <div className="flex items-center gap-1 mb-3 overflow-hidden">
        {workflow.blocks.slice(0, 5).map((block, i) => {
          const cfg = blockTemplates[block.type]
          return (
            <div key={block.id} className="flex items-center gap-0.5">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: cfg.bg }}>
                <cfg.icon className="w-3 h-3" style={{ color: cfg.color }} />
              </div>
              {i < workflow.blocks.length - 1 && <div className="w-3 h-px bg-border" />}
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400">
        <span>🔁 {workflow.runs} runs</span>
        <span>Last: {workflow.lastRun}</span>
      </div>
    </motion.div>
  )
}

function ConnectorLine() {
  return (
    <div className="flex justify-center py-1">
      <div className="flex flex-col items-center gap-0.5">
        <div className="w-px h-4 bg-border" />
        <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
      </div>
    </div>
  )
}

export default function AutomationPage() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow>(workflows[0])
  const [showAddBlock, setShowAddBlock] = useState(false)
  const [activeView, setActiveView] = useState<'list' | 'builder'>('list')

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-dark">Workflow Automation</h2>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Build powerful automations without writing code</p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto w-full sm:w-auto">
          <button className="flex-1 sm:flex-none btn-secondary text-[11px] sm:text-xs py-2 px-3 sm:px-4 flex items-center justify-center gap-1.5">
            <Play className="w-3.5 h-3.5 text-slate-500" />
            <span>Test Workflow</span>
          </button>
          <button className="flex-1 sm:flex-none btn-primary text-[11px] sm:text-xs py-2 px-3 sm:px-4 flex items-center justify-center gap-1.5">
            <Plus className="w-3.5 h-3.5" />
            <span>New Workflow</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {[
          { label: 'Active Workflows', value: '8', icon: '⚡', color: '#2563EB' },
          { label: 'Total Runs Today', value: '1,576', icon: '🔁', color: '#7C3AED' },
          { label: 'Messages Sent', value: '892', icon: '💬', color: '#06B6D4' },
          { label: 'Leads Auto-Moved', value: '47', icon: '📊', color: '#10B981' },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            className="premium-card p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl flex-shrink-0">{s.icon}</span>
            <div className="min-w-0">
              <div className="text-base sm:text-lg font-black truncate" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 truncate">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Tab Switcher */}
      <div className="flex lg:hidden bg-slate-100 p-1 rounded-xl">
        <button
          onClick={() => setActiveView('list')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
            activeView === 'list'
              ? 'bg-white text-dark shadow-sm'
              : 'text-slate-500 hover:text-dark'
          }`}
        >
          My Workflows ({workflows.length})
        </button>
        <button
          onClick={() => setActiveView('builder')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
            activeView === 'builder'
              ? 'bg-white text-dark shadow-sm'
              : 'text-slate-500 hover:text-dark'
          }`}
        >
          Builder: {selectedWorkflow.name.split(' ')[0]}...
        </button>
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        {/* Workflow List */}
        <div className={`lg:col-span-2 space-y-3 ${activeView === 'list' ? 'block' : 'hidden lg:block'}`}>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">My Workflows ({workflows.length})</div>
          {workflows.map(wf => (
            <WorkflowCard
              key={wf.id}
              workflow={wf}
              selected={selectedWorkflow.id === wf.id}
              onClick={() => {
                setSelectedWorkflow(wf)
                setActiveView('builder')
              }}
            />
          ))}
          <button className="w-full py-3 border-2 border-dashed border-border rounded-2xl text-xs text-slate-400 hover:border-primary hover:text-primary hover:bg-primary-50 transition-all flex items-center justify-center gap-2">
            <Plus className="w-3.5 h-3.5" /> Create New Workflow
          </button>
        </div>

        {/* Workflow Builder Canvas */}
        <div className={`lg:col-span-3 ${activeView === 'builder' ? 'block' : 'hidden lg:block'}`}>
          <div className="premium-card overflow-hidden">
            {/* Canvas header */}
            <div className="px-4 sm:px-5 py-3.5 border-b border-border flex items-center justify-between bg-slate-50/60">
              <div className="flex items-center gap-2 min-w-0">
                <button
                  onClick={() => setActiveView('list')}
                  className="lg:hidden p-1.5 hover:bg-slate-200 rounded-lg transition-colors flex-shrink-0"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-500" />
                </button>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-dark truncate">{selectedWorkflow.name}</div>
                  <div className="text-[10px] text-slate-500">{selectedWorkflow.blocks.length} steps · {selectedWorkflow.runs} total runs</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`badge ${selectedWorkflow.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'} text-[10px]`}>
                  {selectedWorkflow.active ? '● Active' : '○ Paused'}
                </span>
                <button className="w-7 h-7 rounded-lg hover:bg-slate-200 flex items-center justify-center transition-colors">
                  <Settings className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Flow canvas */}
            <div className="p-5 overflow-y-auto max-h-[500px] custom-scrollbar">
              <div className="flex flex-col items-center">
                {selectedWorkflow.blocks.map((block, i) => {
                  const cfg = blockTemplates[block.type]
                  return (
                    <div key={block.id} className="w-full flex flex-col items-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08 }}
                        className="w-full max-w-sm"
                      >
                        <div className="group relative flex items-start gap-3 p-4 rounded-2xl border-2 transition-all duration-200 hover:shadow-card-hover cursor-pointer"
                          style={{ borderColor: `${cfg.color}30`, backgroundColor: `${cfg.color}06` }}>
                          {/* Step number */}
                          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 flex items-center justify-center text-[10px] font-bold shadow-card"
                            style={{ borderColor: cfg.color, color: cfg.color }}>
                            {i + 1}
                          </div>

                          {/* Icon */}
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ml-2"
                            style={{ backgroundColor: cfg.bg }}>
                            <block.icon className="w-5 h-5" style={{ color: cfg.color }} />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-[10px] font-semibold uppercase tracking-wider"
                                style={{ color: cfg.color }}>{block.type}</span>
                            </div>
                            <div className="text-sm font-bold text-dark">{block.title}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{block.subtitle}</div>
                          </div>

                          {/* Actions on hover */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                            <button className="w-6 h-6 rounded-lg hover:bg-white flex items-center justify-center">
                              <Settings className="w-3 h-3 text-slate-400" />
                            </button>
                            <button className="w-6 h-6 rounded-lg hover:bg-red-50 flex items-center justify-center">
                              <Trash2 className="w-3 h-3 text-red-400" />
                            </button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Connector */}
                      {i < selectedWorkflow.blocks.length - 1 && <ConnectorLine />}
                    </div>
                  )
                })}

                {/* Add block button */}
                <ConnectorLine />
                <div className="relative w-full max-w-sm">
                  <button
                    onClick={() => setShowAddBlock(!showAddBlock)}
                    className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-primary/30 rounded-2xl text-xs text-primary font-semibold hover:bg-primary-50 hover:border-primary transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Step
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAddBlock ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showAddBlock && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full mt-2 left-0 right-0 bg-white border border-border rounded-2xl shadow-glass p-3 z-10 grid grid-cols-5 gap-2"
                      >
                        {addableBlocks.map((b) => {
                          const cfg = blockTemplates[b.type]
                          return (
                            <button key={b.type}
                              onClick={() => setShowAddBlock(false)}
                              className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-border">
                              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: cfg.bg }}>
                                <cfg.icon className="w-4 h-4" style={{ color: cfg.color }} />
                              </div>
                              <span className="text-[10px] font-semibold text-slate-600">{b.label}</span>
                            </button>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
