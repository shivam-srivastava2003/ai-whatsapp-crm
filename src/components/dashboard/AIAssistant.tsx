'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Send, Bot, Zap, ChevronDown, Sparkles,
  RefreshCw, FileText, Flame, PenLine, BarChart2,
  MessageSquare, ChevronRight, Minimize2
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'ai'
  text: string
  time: string
}

const quickActions = [
  { id: 'followup', icon: RefreshCw, label: 'Generate follow-up', color: '#2563EB', prompt: 'Generate a personalized follow-up message for Aarav Shah who showed interest in our Pro plan.' },
  { id: 'summarize', icon: FileText, label: 'Summarize chat', color: '#7C3AED', prompt: 'Summarize the latest customer conversation with Priya Menon.' },
  { id: 'hotleads', icon: Flame, label: 'Show hot leads', color: '#EF4444', prompt: 'Which leads have the highest AI scores right now and need immediate action?' },
  { id: 'proposal', icon: PenLine, label: 'Create proposal', color: '#10B981', prompt: 'Draft a quick proposal for Ravi Kumar for the Pro CRM plan at ₹6,999/month.' },
  { id: 'sentiment', icon: BarChart2, label: 'Analyze sentiment', color: '#F59E0B', prompt: 'Analyze the overall customer sentiment from this week\'s WhatsApp conversations.' },
  { id: 'reply', icon: MessageSquare, label: 'Draft AI reply', color: '#06B6D4', prompt: 'Draft a professional reply to a customer asking about WhatsApp API compliance and security.' },
]

const aiResponses: Record<string, string> = {
  followup: "✅ **Follow-up generated for Aarav Shah:**\n\n\"Hi Aarav! 👋 Just checking in — I noticed you were exploring our Pro CRM plan. We have a special 20% discount running this week! Would love to hop on a quick 15-min call to show you the AI automation features. Are you free tomorrow at 11 AM or 3 PM? 🚀\"\n\n*AI Score: 92/100 — High conversion probability*",
  summarize: "📋 **Chat Summary — Priya Menon:**\n\n• Initial contact via Instagram ad\n• Interested in team inbox + AI replies for 3-person startup\n• Budget: ₹75,000/year\n• Concerns: integration with existing tools\n• Last touchpoint: 15 mins ago\n• **Recommended action:** Send feature comparison PDF + schedule demo",
  hotleads: "🔥 **Top 3 Hot Leads Right Now:**\n\n1. **Aarav Shah** — Score 92 · ₹2.5L · Pricing page viewed 4x today\n2. **Dev Sharma** — Score 99 · ₹6L · Ready to sign\n3. **Sneha Patel** — Score 88 · ₹4.5L · Proposal review with team\n\n*Recommended: Contact Aarav Shah immediately — peak intent window detected.*",
  proposal: "📄 **Proposal Draft — Ravi Kumar:**\n\n**WhatsCRM Pro Plan — ₹6,999/month**\n\n✅ 3 WhatsApp numbers\n✅ Unlimited AI replies (GPT-4o)\n✅ 5,000 contacts\n✅ Team inbox (5 agents)\n✅ Full Kanban CRM\n✅ Workflow automation\n✅ 14-day free trial\n\n*Special offer: Annual billing saves ₹16,000/year*",
  sentiment: "📊 **Sentiment Analysis — This Week:**\n\n😊 **Positive:** 74% of chats\n😐 **Neutral:** 18% of chats\n😞 **Negative:** 8% of chats\n\n**Key themes:**\n• Customers love AI auto-reply speed\n• Pricing questions are most common\n• Support response time praised\n\n*Overall NPS trend: +12 vs last week* 🎉",
  reply: "💬 **AI Reply Draft:**\n\n\"Hi! Great question about WhatsApp API compliance 🛡️\n\nWhatsCRM is an official Meta WhatsApp Business API partner. All messages are:\n✅ End-to-end encrypted\n✅ GDPR & DPDP compliant\n✅ Meta terms compliant\n✅ No message storage on our servers\n\nWould you like me to send you our full security documentation? 📄\"",
}

const defaultMessages: Message[] = [
  {
    id: '1',
    role: 'ai',
    text: "👋 Hi! I'm your **WhatsCRM AI Assistant**.\n\nI can help you:\n• Generate AI replies\n• Analyze leads & sentiment\n• Create proposals\n• Summarize conversations\n\nWhat would you like to do?",
    time: 'Now',
  }
]

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(defaultMessages)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open])

  const sendMessage = (text: string, actionKey?: string) => {
    if (!text.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      const responseText = actionKey && aiResponses[actionKey]
        ? aiResponses[actionKey]
        : `I've analyzed your request. Here's what I found:\n\n✅ Based on current CRM data, I recommend prioritizing **Aarav Shah** and **Dev Sharma** for immediate follow-up.\n\nWould you like me to generate personalized messages or create a workflow automation for these leads?`

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages(prev => [...prev, aiMsg])
    }, 1400)
  }

  const handleAction = (action: typeof quickActions[0]) => {
    sendMessage(action.prompt, action.id)
  }

  // Format markdown-ish text
  const formatText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>')
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Notification badge when closed */}
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="bg-white rounded-2xl px-4 py-2.5 shadow-glass border border-border flex items-center gap-2.5 cursor-pointer hover:shadow-card-hover transition-all"
              onClick={() => setOpen(true)}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-dark">3 leads need attention</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main button */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-premium"
          style={{
            background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
          }}
        >
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-2xl animate-ping opacity-20"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
          />
          <span className="absolute -inset-1 rounded-2xl opacity-10"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', animation: 'pulseGlow 2s ease-in-out infinite' }}
          />

          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="fixed bottom-24 right-3 md:right-6 z-50 w-[calc(100vw-24px)] md:w-[380px] flex flex-col rounded-3xl overflow-hidden shadow-premium border border-border/60"
            style={{ maxHeight: minimized ? '60px' : '580px', transition: 'max-height 0.3s ease' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' }}>
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-white">WhatsCRM AI</div>
                <div className="text-[10px] text-white/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Powered by GPT-4o · Always available
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setMinimized(!minimized)} className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Minimize2 className="w-3.5 h-3.5 text-white" />
                </button>
                <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <X className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3 bg-slate-50/80 backdrop-blur-sm">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      {msg.role === 'ai' && (
                        <div className="w-7 h-7 rounded-xl flex-shrink-0 mt-0.5 flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}>
                          <Bot className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                      <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-primary text-white rounded-br-sm'
                          : 'bg-white border border-border shadow-card text-dark rounded-bl-sm'
                      }`}>
                        <div dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
                        <div className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-white/60 text-right' : 'text-slate-400'}`}>
                          {msg.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  <AnimatePresence>
                    {typing && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex gap-2.5">
                        <div className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}>
                          <Bot className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="bg-white border border-border shadow-card rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                          {[0, 150, 300].map(delay => (
                            <motion.span
                              key={delay}
                              className="w-1.5 h-1.5 rounded-full bg-slate-400"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: delay / 1000 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                <div className="bg-white border-t border-border px-3 py-2.5">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Quick Actions</div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {quickActions.map((action) => (
                      <motion.button
                        key={action.id}
                        onClick={() => handleAction(action)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-border transition-all"
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${action.color}18` }}>
                          <action.icon className="w-3.5 h-3.5" style={{ color: action.color }} />
                        </div>
                        <span className="text-[10px] text-slate-600 font-medium leading-tight text-center">{action.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="bg-white border-t border-border px-3 py-3 flex items-center gap-2">
                  <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-50 border border-border rounded-xl focus-within:border-primary focus-within:bg-white transition-all">
                    <Zap className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') sendMessage(input) }}
                      placeholder="Ask AI anything..."
                      className="bg-transparent text-xs text-dark placeholder-slate-400 outline-none flex-1"
                    />
                  </div>
                  <motion.button
                    onClick={() => sendMessage(input)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-xl flex items-center justify-center shadow-glow flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
