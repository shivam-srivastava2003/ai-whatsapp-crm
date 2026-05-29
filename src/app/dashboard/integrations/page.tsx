'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Plus, Search, RefreshCw, ExternalLink } from 'lucide-react'

interface Integration {
  id: string
  name: string
  description: string
  category: string
  emoji: string
  color: string
  bg: string
  connected: boolean
  popular?: boolean
}

const integrations: Integration[] = [
  { id: 'whatsapp', name: 'WhatsApp Business', description: 'Official Meta API for business messaging', category: 'Messaging', emoji: '📱', color: '#25D366', bg: '#F0FDF4', connected: true, popular: true },
  { id: 'gmail', name: 'Gmail', description: 'Sync email threads with CRM contacts', category: 'Email', emoji: '📧', color: '#EA4335', bg: '#FFF1F2', connected: true },
  { id: 'instagram', name: 'Instagram', description: 'Manage DMs and leads from Instagram', category: 'Social', emoji: '📸', color: '#E1306C', bg: '#FDF2F8', connected: true, popular: true },
  { id: 'facebook', name: 'Facebook Pages', description: 'Respond to Messenger conversations', category: 'Social', emoji: '👥', color: '#1877F2', bg: '#EFF6FF', connected: false },
  { id: 'slack', name: 'Slack', description: 'Get CRM alerts and AI notifications in Slack', category: 'Team', emoji: '💬', color: '#4A154B', bg: '#F5F3FF', connected: true },
  { id: 'zoom', name: 'Zoom', description: 'Schedule demo calls directly from CRM', category: 'Meetings', emoji: '🎥', color: '#2D8CFF', bg: '#EFF6FF', connected: false },
  { id: 'stripe', name: 'Stripe', description: 'Track payments and invoice status in CRM', category: 'Payments', emoji: '💳', color: '#635BFF', bg: '#F5F3FF', connected: true, popular: true },
  { id: 'razorpay', name: 'Razorpay', description: 'Accept payments and send payment links via WhatsApp', category: 'Payments', emoji: '💰', color: '#3395FF', bg: '#EFF6FF', connected: false },
  { id: 'gcalendar', name: 'Google Calendar', description: 'Sync meetings and follow-up reminders', category: 'Meetings', emoji: '📅', color: '#4285F4', bg: '#EFF6FF', connected: false },
  { id: 'notion', name: 'Notion', description: 'Export deals, notes and contacts to Notion', category: 'Productivity', emoji: '📋', color: '#000000', bg: '#F8FAFC', connected: false },
  { id: 'trello', name: 'Trello', description: 'Sync lead pipeline with Trello boards', category: 'Productivity', emoji: '📌', color: '#0079BF', bg: '#EFF6FF', connected: false },
  { id: 'openai', name: 'OpenAI GPT-4o', description: 'Power AI replies and lead scoring with GPT-4o', category: 'AI', emoji: '🤖', color: '#10A37F', bg: '#F0FDF4', connected: true, popular: true },
  { id: 'hubspot', name: 'HubSpot', description: 'Two-way sync contacts and deals with HubSpot', category: 'CRM', emoji: '🔶', color: '#FF7A59', bg: '#FFF7ED', connected: false },
  { id: 'zapier', name: 'Zapier', description: 'Connect to 5,000+ apps with no-code Zaps', category: 'Automation', emoji: '⚡', color: '#FF4F00', bg: '#FFF7ED', connected: false },
  { id: 'sheets', name: 'Google Sheets', description: 'Export lead data and reports to Sheets', category: 'Productivity', emoji: '📊', color: '#34A853', bg: '#F0FDF4', connected: false },
  { id: 'typeform', name: 'Typeform', description: 'Capture leads from beautiful forms into CRM', category: 'Forms', emoji: '📝', color: '#262627', bg: '#F8FAFC', connected: false },
]

const categories = ['All', 'Messaging', 'Email', 'Social', 'Team', 'Meetings', 'Payments', 'Productivity', 'AI', 'Automation', 'Forms', 'CRM']

export default function IntegrationsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [connectingId, setConnectingId] = useState<string | null>(null)
  const [connected, setConnected] = useState<Set<string>>(
    new Set(integrations.filter(i => i.connected).map(i => i.id))
  )

  const handleConnect = (id: string) => {
    setConnectingId(id)
    setTimeout(() => {
      setConnected(prev => {
        const next = new Set(prev)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        return next
      })
      setConnectingId(null)
    }, 1200)
  }

  const filtered = integrations.filter(i => {
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase()) || i.description.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || i.category === category
    return matchSearch && matchCat
  })

  const connectedCount = connected.size

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-dark">Integrations</h2>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Connect your favorite tools · {connectedCount} of {integrations.length} connected</p>
        </div>
        <button className="flex-1 sm:flex-none btn-primary text-[11px] sm:text-xs py-2 px-3 sm:px-4 flex items-center justify-center gap-1.5">
          <Plus className="w-3.5 h-3.5" />
          Request Integration
        </button>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {[
          { label: 'Connected', value: connectedCount, color: '#10B981', emoji: '✅' },
          { label: 'Available', value: integrations.length - connectedCount, color: '#2563EB', emoji: '🔌' },
          { label: 'Data Synced Today', value: '4,281', color: '#7C3AED', emoji: '🔄' },
          { label: 'API Calls', value: '12.4K', color: '#06B6D4', emoji: '⚡' },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            className="premium-card p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl flex-shrink-0">{s.emoji}</span>
            <div className="min-w-0">
              <div className="text-base sm:text-lg font-black truncate" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 truncate">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-border rounded-xl flex-1 shadow-card">
          <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search integrations..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent text-sm text-dark placeholder-slate-400 outline-none flex-1"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
          {categories.slice(0, 8).map(cat => (
            <button key={cat} onClick={() => setCategory(cat)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                category === cat ? 'bg-primary text-white shadow-glow' : 'bg-white border border-border text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Popular */}
      {category === 'All' && !search && (
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="text-base">⭐</span> Most Popular
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {integrations.filter(i => i.popular).map((intg, i) => {
              const isConnected = connected.has(intg.id)
              return (
                <motion.div key={intg.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="premium-card p-4 group relative overflow-hidden hover:shadow-card-hover transition-all duration-300">
                  {isConnected && (
                    <div className="absolute top-3 right-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 text-2xl transition-transform group-hover:scale-110" style={{ backgroundColor: intg.bg }}>
                    {intg.emoji}
                  </div>
                  <div className="text-sm font-bold text-dark mb-0.5">{intg.name}</div>
                  <div className="text-[11px] text-slate-500 mb-3 line-clamp-2">{intg.description}</div>
                  <button
                    onClick={() => handleConnect(intg.id)}
                    className={`w-full py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                      isConnected
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200'
                        : 'bg-primary text-white hover:opacity-90 shadow-glow'
                    }`}
                    style={{ minWidth: 0 }}
                  >
                    {connectingId === intg.id ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : isConnected ? (
                      <>✓ Connected</>
                    ) : (
                      <>Connect</>
                    )}
                  </button>

                  {/* Glow on connected */}
                  {isConnected && (
                    <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-5"
                      style={{ background: `radial-gradient(circle at 50% 50%, ${intg.color}, transparent)` }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      )}

      {/* All Integrations Grid */}
      <div>
        {category === 'All' && !search && (
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">All Integrations ({filtered.length})</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((intg, i) => {
            const isConnected = connected.has(intg.id)
            return (
              <motion.div key={intg.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                className="premium-card p-4 group relative overflow-hidden hover:shadow-card-hover transition-all duration-300">
                {/* Connected glow ring */}
                {isConnected && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ backgroundColor: intg.color }} />
                )}

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: intg.bg }}>
                    {intg.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-sm font-bold text-dark truncate">{intg.name}</span>
                      {isConnected && <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />}
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: intg.bg, color: intg.color }}>
                      {intg.category}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 mb-3 leading-relaxed line-clamp-2">{intg.description}</p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleConnect(intg.id)}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                      isConnected
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200'
                        : 'bg-slate-50 text-slate-700 border border-border hover:bg-primary hover:text-white hover:border-primary'
                    }`}
                  >
                    {connectingId === intg.id
                      ? <RefreshCw className="w-3 h-3 animate-spin" />
                      : isConnected ? '✓ Connected' : '+ Connect'
                    }
                  </button>
                  <button className="w-8 h-8 rounded-xl border border-border hover:bg-slate-50 flex items-center justify-center transition-colors">
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
