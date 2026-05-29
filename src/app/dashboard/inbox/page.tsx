'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, Filter, Phone, Video, MoreVertical, Send,
  Smile, Paperclip, Mic, Bot, Zap, Star, Tag, Clock,
  ChevronRight, Pin, CheckCheck, Circle, MessageCircle,
  ChevronLeft, X
} from 'lucide-react'
import { contacts, chatMessages, aiReplySuggestions, quickReplies } from '@/lib/data'

export default function InboxPage() {
  const [selectedId, setSelectedId] = useState<string>('1')
  const [mobileView, setMobileView] = useState<'list' | 'chat' | 'profile'>('list')
  const [message, setMessage] = useState('')
  const [filter, setFilter] = useState<'All' | 'Unread' | 'AI' | 'Pinned'>('All')
  const [search, setSearch] = useState('')
  const [messages, setMessages] = useState(chatMessages)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const selected = contacts.find(c => c.id === selectedId)!
  const currentMessages = messages[selectedId] || []

  const filteredContacts = contacts.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(search.toLowerCase())
    if (filter === 'Unread') return c.unread > 0 && matchesSearch
    if (filter === 'Pinned') return c.pinned && matchesSearch
    return matchesSearch
  })

  const sendMessage = () => {
    if (!message.trim()) return
    const newMsg = {
      id: Date.now().toString(),
      sender: 'me' as const,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text' as const,
    }
    setMessages(prev => ({
      ...prev,
      [selectedId]: [...(prev[selectedId] || []), newMsg]
    }))
    setMessage('')
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const reply = {
        id: (Date.now() + 1).toString(),
        sender: 'them' as const,
        text: 'Got it! Let me check and get back to you shortly. 🙏',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text' as const,
      }
      setMessages(prev => ({
        ...prev,
        [selectedId]: [...(prev[selectedId] || []), reply]
      }))
    }, 2000)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentMessages, isTyping])

  return (
    <div className="h-[calc(100vh-64px)] flex overflow-hidden">
      {/* Contact List */}
      <div className={`w-full md:w-64 bg-white border-r border-border flex flex-col flex-shrink-0 min-w-0 ${mobileView === 'list' ? 'flex' : 'hidden'} md:flex`}>
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-dark">All Conversations</h2>
            <button className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <MessageCircle className="w-3.5 h-3.5" />
            </button>
          </div>
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-border rounded-xl">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search chats..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent text-xs placeholder-slate-400 outline-none w-full text-dark"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-1.5 px-3 py-2 border-b border-border overflow-x-auto">
          {(['All', 'Unread', 'AI', 'Pinned'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                filter === f
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Pinned section */}
        {filter !== 'Unread' && (
          <div className="px-3 pt-3 pb-1">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Pin className="w-3 h-3" /> Pinned
            </span>
          </div>
        )}

        {/* Contact list */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {filteredContacts.map((contact) => (
            <motion.button
              key={contact.id}
              onClick={() => {
                setSelectedId(contact.id)
                setMobileView('chat')
              }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-3 py-3 hover:bg-slate-50 transition-all border-b border-border/50 text-left ${
                selectedId === contact.id ? 'bg-primary-50 border-l-2 border-l-primary' : ''
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: contact.color }}
                >
                  {contact.avatar}
                </div>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-xs font-bold text-dark truncate">{contact.name}</span>
                  <span className="text-[10px] text-slate-400 flex-shrink-0">{contact.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[10px] text-slate-500 truncate flex-1">{contact.lastMessage}</p>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {contact.tags.slice(0, 1).map(tag => (
                      <span
                        key={tag}
                        className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase ${
                          tag.includes('Hot') ? 'bg-red-50 text-red-500 border border-red-100' :
                          tag.includes('Warm') ? 'bg-amber-50 text-amber-500 border border-amber-100' :
                          'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                      >
                        {tag.replace(' Lead', '')}
                      </span>
                    ))}
                    {contact.unread > 0 && (
                      <span className="w-4 h-4 bg-primary rounded-full text-[9px] text-white font-bold flex items-center justify-center">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className={`flex-1 flex flex-col min-w-0 bg-background ${mobileView === 'chat' ? 'flex' : 'hidden'} md:flex`}>
        {/* Chat header */}
        <div className="h-16 bg-white border-b border-border px-4 flex items-center justify-between gap-3 flex-shrink-0 min-w-0">
          {/* Back button on mobile */}
          <button
            onClick={() => setMobileView('list')}
            className="md:hidden p-1.5 -ml-1 rounded-lg hover:bg-slate-100 flex items-center justify-center flex-shrink-0"
            title="Back to Chats"
          >
            <ChevronLeft className="w-5 h-5 text-slate-500" />
          </button>

          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="relative flex-shrink-0">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: selected.color }}
              >
                {selected.avatar}
              </div>
              {selected.online && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-dark truncate">{selected.name}</div>
              <div className="text-[10px] text-slate-500 flex items-center gap-1 truncate">
                {selected.online
                  ? <><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block flex-shrink-0" /><span>Online</span></>
                  : <span>Last seen recently</span>
                }
                <span className="flex-shrink-0">·</span>
                <span className="truncate">{selected.phone}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            {/* View Profile Action on Mobile */}
            <button
              onClick={() => setMobileView('profile')}
              className="md:hidden w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors mr-0.5"
              title="View Profile"
            >
              <Tag className="w-4 h-4 text-slate-500" />
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <Phone className="w-4 h-4 text-slate-500" />
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <Video className="w-4 h-4 text-slate-500" />
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <MoreVertical className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-4 space-y-3">
          {/* Date divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] text-slate-400 bg-background px-2 font-medium">Today</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {currentMessages.filter(m => m.type !== 'ai').map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} items-end gap-2`}
            >
              {msg.sender === 'them' && (
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mb-1"
                  style={{ backgroundColor: selected.color }}
                >
                  {selected.avatar}
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                <div className={msg.sender === 'me' ? 'bubble-sent' : 'bubble-received'}>
                  {msg.text}
                </div>
                <div className={`flex items-center gap-1 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-[10px] text-slate-400">{msg.time}</span>
                  {msg.sender === 'me' && <CheckCheck className="w-3 h-3 text-primary" />}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-end gap-2"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                  style={{ backgroundColor: selected.color }}
                >
                  {selected.avatar}
                </div>
                <div className="bubble-received flex items-center gap-1 py-3 px-4">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* AI Suggestions bar */}
        <div className="bg-gradient-to-r from-primary-50 to-purple-50 border-t border-primary-100 px-4 py-2.5">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">AI Reply Suggestions</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse ml-1" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
            {aiReplySuggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => setMessage(s)}
                className="flex-shrink-0 text-[11px] text-slate-700 bg-white border border-primary-100 rounded-xl px-3 py-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 max-w-xs text-left"
              >
                {s.slice(0, 80)}...
              </button>
            ))}
          </div>
        </div>

        {/* Quick replies */}
        <div className="bg-white border-t border-border px-4 py-2 flex gap-2 overflow-x-auto">
          {quickReplies.map((qr) => (
            <button
              key={qr}
              onClick={() => setMessage(qr)}
              className="flex-shrink-0 text-[11px] font-medium text-slate-600 bg-slate-100 hover:bg-primary-50 hover:text-primary border border-transparent hover:border-primary-100 rounded-lg px-2.5 py-1.5 transition-all"
            >
              {qr}
            </button>
          ))}
        </div>

        {/* Input area */}
        <div className="bg-white border-t border-border px-4 py-3 flex items-center gap-3">
          <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors flex-shrink-0">
            <Paperclip className="w-4 h-4 text-slate-500" />
          </button>
          <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors flex-shrink-0">
            <Smile className="w-4 h-4 text-slate-500" />
          </button>
          <div className="flex-1 flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-border rounded-xl focus-within:border-primary focus-within:bg-white transition-all">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm text-dark placeholder-slate-400 outline-none"
            />
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors flex-shrink-0">
            <Mic className="w-4 h-4 text-slate-500" />
          </button>
          <button
            onClick={sendMessage}
            className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow hover:opacity-90 transition-all flex-shrink-0"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Customer Info Panel */}
      <div className={`w-full md:w-56 bg-white border-l border-border flex flex-col overflow-y-auto custom-scrollbar flex-shrink-0 ${mobileView === 'profile' ? 'flex' : 'hidden'} md:flex`}>
        <div className="p-3 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-dark">Customer Profile</h3>
            <button
              onClick={() => setMobileView('chat')}
              className="md:hidden p-1 rounded-lg hover:bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0"
              title="Back to Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {/* Avatar & Name */}
          <div className="flex flex-col items-center text-center mb-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-base mb-2"
              style={{ backgroundColor: selected.color }}
            >
              {selected.avatar}
            </div>
            <div className="text-sm font-bold text-dark w-full truncate px-1">{selected.name}</div>
            <div className="text-[10px] text-slate-500 mt-0.5 w-full truncate px-1">{selected.phone}</div>
            {/* Tags — wrap & truncate */}
            <div className="flex flex-wrap justify-center gap-1 mt-2 w-full overflow-hidden">
              {selected.tags.slice(0, 2).map(tag => (
                <span key={tag} className="badge bg-primary-50 text-primary border border-primary-100 text-[10px] max-w-[80px] truncate">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Info rows — stacked label + value to prevent clipping */}
          <div className="space-y-2">
            {[
              { label: 'Budget', value: selected.budget, icon: '💰' },
              { label: 'Source', value: selected.source, icon: '📡' },
              { label: 'Stage', value: selected.stage, icon: '📋' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-500 flex items-center gap-1 flex-shrink-0">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                <span className="font-semibold text-dark text-right truncate min-w-0">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Score */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-dark flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-primary" /> AI Lead Score
            </span>
            <span className="text-lg font-black text-primary">{selected.aiScore}</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${selected.aiScore}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${
                  selected.aiScore >= 80 ? '#10B981' :
                  selected.aiScore >= 60 ? '#F59E0B' : '#EF4444'
                }, ${
                  selected.aiScore >= 80 ? '#2563EB' :
                  selected.aiScore >= 60 ? '#F97316' : '#EF4444'
                })`,
              }}
            />
          </div>
          <div className="text-[10px] text-slate-500 mt-1.5">
            {selected.aiScore >= 80 ? '🔥 Hot lead — priority contact' :
             selected.aiScore >= 60 ? '⚡ Warm lead — follow up soon' :
             '❄️ Cold lead — nurture sequence'}
          </div>
        </div>

        {/* Quick actions */}
        <div className="p-4">
          <div className="text-xs font-semibold text-dark mb-3">Quick Actions</div>
          <div className="space-y-1.5">
            {[
              { label: 'View in CRM', icon: ChevronRight },
              { label: 'Add to pipeline', icon: Star },
              { label: 'Set reminder', icon: Clock },
              { label: 'Add tag', icon: Tag },
            ].map(action => (
              <button
                key={action.label}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-primary-50 transition-colors text-xs font-medium text-slate-600 hover:text-primary border border-transparent hover:border-primary-100"
              >
                <action.icon className="w-3.5 h-3.5 flex-shrink-0" />
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
