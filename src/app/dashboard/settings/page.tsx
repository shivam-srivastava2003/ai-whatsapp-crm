'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Bell, CreditCard, Plug, Bot, Shield, ChevronRight,
  Check, Camera, Save, Eye, EyeOff, Zap, Lock, Globe,
  Smartphone, Moon, Sun, Volume2, Mail, MessageCircle, Palette
} from 'lucide-react'

const settingsSections = [
  { id: 'profile', label: 'Profile', icon: User, color: '#2563EB' },
  { id: 'workspace', label: 'Workspace', icon: Palette, color: '#7C3AED' },
  { id: 'notifications', label: 'Notifications', icon: Bell, color: '#F59E0B' },
  { id: 'billing', label: 'Billing', icon: CreditCard, color: '#10B981' },
  { id: 'integrations', label: 'Integrations', icon: Plug, color: '#06B6D4' },
  { id: 'ai', label: 'AI Settings', icon: Bot, color: '#7C3AED' },
  { id: 'security', label: 'Security', icon: Shield, color: '#EF4444' },
]

type SectionId = 'profile' | 'workspace' | 'notifications' | 'billing' | 'integrations' | 'ai' | 'security'

function Toggle({ value, onChange }: { value: boolean; onChange: () => void }) {
  return (
    <button onClick={onChange}
      className={`w-11 h-6 rounded-full transition-all duration-300 relative flex-shrink-0 ${value ? 'bg-primary' : 'bg-slate-200'}`}>
      <motion.div
        className="w-5 h-5 rounded-full bg-white shadow absolute top-0.5"
        animate={{ left: value ? 22 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  )
}

function SettingRow({ label, sublabel, children }: { label: string; sublabel?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-border last:border-0">
      <div>
        <div className="text-sm font-semibold text-dark">{label}</div>
        {sublabel && <div className="text-xs text-slate-500 mt-0.5">{sublabel}</div>}
      </div>
      <div className="ml-4 flex-shrink-0">{children}</div>
    </div>
  )
}

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile')
  const [showPassword, setShowPassword] = useState(false)
  const [saved, setSaved] = useState(false)
  const [toggles, setToggles] = useState({
    emailNotifs: true,
    pushNotifs: true,
    whatsappAlerts: true,
    weeklyReport: true,
    aiAutoReply: true,
    leadScoring: true,
    sentimentAnalysis: false,
    smartSuggestions: true,
    twoFactor: false,
    sessionAlert: true,
    apiAccess: true,
    darkMode: false,
    compactView: false,
    soundAlerts: true,
  })

  const toggle = (key: keyof typeof toggles) =>
    setToggles(prev => ({ ...prev, [key]: !prev[key] }))

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-5 bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl border border-primary-100">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center text-white text-xl font-black">
                  RK
                </div>
                <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-glow">
                  <Camera className="w-3 h-3 text-white" />
                </button>
              </div>
              <div>
                <div className="text-base font-black text-dark">Rahul Kumar</div>
                <div className="text-xs text-slate-500">Admin · Pro Plan · Since Jan 2026</div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-semibold text-emerald-700">Active</span>
                  </div>
                  <div className="text-[11px] text-slate-500">Pro Plan — ₹6,999/mo</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'First Name', value: 'Rahul', placeholder: 'First name' },
                  { label: 'Last Name', value: 'Kumar', placeholder: 'Last name' },
                ].map(f => (
                  <div key={f.label}>
                    <label className="text-xs font-semibold text-dark block mb-1.5">{f.label}</label>
                    <input defaultValue={f.value} placeholder={f.placeholder}
                      className="w-full px-3 py-2.5 border border-border rounded-xl text-sm text-dark bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                  </div>
                ))}
              </div>
              {[
                { label: 'Email Address', value: 'rahul@company.com', type: 'email' },
                { label: 'Phone Number', value: '+91 98765 43210', type: 'tel' },
                { label: 'Company Name', value: 'TechCorp Solutions', type: 'text' },
                { label: 'Website', value: 'https://techcorp.io', type: 'url' },
              ].map(f => (
                <div key={f.label}>
                  <label className="text-xs font-semibold text-dark block mb-1.5">{f.label}</label>
                  <input defaultValue={f.value} type={f.type}
                    className="w-full px-3 py-2.5 border border-border rounded-xl text-sm text-dark bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                </div>
              ))}
              <div>
                <label className="text-xs font-semibold text-dark block mb-1.5">Bio</label>
                <textarea rows={3} defaultValue="Building innovative products with AI-powered automation."
                  className="w-full px-3 py-2.5 border border-border rounded-xl text-sm text-dark bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none" />
              </div>
            </div>
          </div>
        )

      case 'workspace':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-dark mb-3">Appearance</h4>
              <SettingRow label="Theme" sublabel="Choose your preferred color theme">
                <div className="flex gap-2">
                  {['Light', 'Dark', 'Auto'].map(t => (
                    <button key={t} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${t === 'Light' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                      {t === 'Light' ? <><Sun className="w-3 h-3 inline mr-1" />Light</> : t === 'Dark' ? <><Moon className="w-3 h-3 inline mr-1" />Dark</> : 'Auto'}
                    </button>
                  ))}
                </div>
              </SettingRow>
              <SettingRow label="Compact View" sublabel="Show more content with smaller spacing">
                <Toggle value={toggles.compactView} onChange={() => toggle('compactView')} />
              </SettingRow>
              <SettingRow label="Sound Alerts" sublabel="Play sounds for new messages and notifications">
                <Toggle value={toggles.soundAlerts} onChange={() => toggle('soundAlerts')} />
              </SettingRow>
            </div>

            <div className="pt-2">
              <h4 className="text-sm font-bold text-dark mb-3">Language & Region</h4>
              {[
                { label: 'Language', value: 'English (India)' },
                { label: 'Timezone', value: 'IST (UTC+5:30)' },
                { label: 'Date Format', value: 'DD/MM/YYYY' },
              ].map(s => (
                <SettingRow key={s.label} label={s.label}>
                  <select className="px-3 py-1.5 border border-border rounded-lg text-xs text-dark bg-white focus:border-primary focus:outline-none">
                    <option>{s.value}</option>
                  </select>
                </SettingRow>
              ))}
            </div>

            <div className="pt-2">
              <h4 className="text-sm font-bold text-dark mb-3">Workspace Branding</h4>
              <div className="flex items-center gap-4 p-4 border border-border rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-dark">WhatsCRM Workspace</div>
                  <div className="text-xs text-slate-500">Custom logo and brand colors for your team</div>
                </div>
                <button className="text-xs text-primary font-semibold hover:underline">Upload Logo</button>
              </div>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-dark mb-3">Notification Preferences</h4>
            {[
              { key: 'emailNotifs', label: 'Email Notifications', sub: 'Receive daily summaries and alerts via email', icon: Mail },
              { key: 'pushNotifs', label: 'Push Notifications', sub: 'Browser and mobile push alerts for real-time updates', icon: Bell },
              { key: 'whatsappAlerts', label: 'WhatsApp Alerts', sub: 'Get critical CRM notifications on your WhatsApp', icon: MessageCircle },
              { key: 'weeklyReport', label: 'Weekly Report', sub: 'AI-generated performance report every Monday', icon: Globe },
              { key: 'soundAlerts', label: 'Sound Alerts', sub: 'Play notification sounds for new messages', icon: Volume2 },
            ].map(n => (
              <div key={n.key} className="flex items-center gap-4 p-3.5 rounded-xl border border-border hover:bg-slate-50 transition-all">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <n.icon className="w-4 h-4 text-slate-500" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-dark">{n.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{n.sub}</div>
                </div>
                <Toggle value={toggles[n.key as keyof typeof toggles]} onChange={() => toggle(n.key as keyof typeof toggles)} />
              </div>
            ))}

            <div className="pt-4">
              <h4 className="text-sm font-bold text-dark mb-3">Alert Thresholds</h4>
              <div className="space-y-3">
                {[
                  { label: 'Lead inactivity alert after', value: '2', unit: 'days' },
                  { label: 'Low response rate alert below', value: '40', unit: '%' },
                ].map(t => (
                  <div key={t.label} className="flex items-center justify-between p-3.5 rounded-xl border border-border">
                    <span className="text-sm text-dark">{t.label}</span>
                    <div className="flex items-center gap-2">
                      <input type="number" defaultValue={t.value}
                        className="w-16 px-2 py-1 border border-border rounded-lg text-sm text-center text-dark focus:border-primary focus:outline-none" />
                      <span className="text-xs text-slate-500">{t.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'billing':
        return (
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-primary to-purple rounded-2xl text-white">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs font-semibold text-white/70 uppercase tracking-wider">Current Plan</div>
                  <div className="text-2xl font-black mt-1">Pro Plan</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black">₹6,999</div>
                  <div className="text-xs text-white/70">/month</div>
                </div>
              </div>
              <div className="text-xs text-white/80 mb-4">Next billing: June 28, 2026 · Auto-renew enabled</div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-xs font-semibold transition-all">Upgrade Plan</button>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs transition-all">Cancel</button>
              </div>
            </div>

            <div className="premium-card p-4">
              <div className="text-sm font-bold text-dark mb-3">Payment Method</div>
              <div className="flex items-center gap-3 p-3 border border-border rounded-xl bg-slate-50">
                <div className="w-10 h-7 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md flex items-center justify-center text-white text-[10px] font-bold">VISA</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-dark">•••• •••• •••• 4242</div>
                  <div className="text-xs text-slate-500">Expires 09/2028</div>
                </div>
                <button className="text-xs text-primary font-semibold">Change</button>
              </div>
              <button className="mt-3 w-full py-2.5 border-2 border-dashed border-border rounded-xl text-xs text-slate-500 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
                <CreditCard className="w-3.5 h-3.5" /> Add Payment Method
              </button>
            </div>

            <div className="premium-card p-4">
              <div className="text-sm font-bold text-dark mb-3">Invoice History</div>
              {[
                { date: 'May 28, 2026', amount: '₹6,999', status: 'Paid' },
                { date: 'Apr 28, 2026', amount: '₹6,999', status: 'Paid' },
                { date: 'Mar 28, 2026', amount: '₹6,999', status: 'Paid' },
              ].map((inv, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                  <div className="text-xs text-slate-600">{inv.date}</div>
                  <div className="text-xs font-bold text-dark">{inv.amount}</div>
                  <span className="badge bg-emerald-50 text-emerald-700 text-[10px]">✓ {inv.status}</span>
                  <button className="text-xs text-primary hover:underline">Download</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 'ai':
        return (
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl border border-primary-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-dark">AI Engine: GPT-4o</div>
                <div className="text-xs text-slate-500">1,420 AI replies sent this month · 4.8★ satisfaction</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-600">Active</span>
              </div>
            </div>

            <div className="premium-card p-4">
              <h4 className="text-sm font-bold text-dark mb-3">AI Features</h4>
              {[
                { key: 'aiAutoReply', label: 'AI Auto-Reply', sub: 'Automatically respond to routine customer queries' },
                { key: 'leadScoring', label: 'AI Lead Scoring', sub: 'Score leads 0–100 based on behavior and engagement' },
                { key: 'sentimentAnalysis', label: 'Sentiment Analysis', sub: 'Detect customer mood from conversation tone' },
                { key: 'smartSuggestions', label: 'Smart Suggestions', sub: 'Show AI reply suggestions while chatting' },
              ].map(f => (
                <SettingRow key={f.key} label={f.label} sublabel={f.sub}>
                  <Toggle value={toggles[f.key as keyof typeof toggles]} onChange={() => toggle(f.key as keyof typeof toggles)} />
                </SettingRow>
              ))}
            </div>

            <div className="premium-card p-4">
              <h4 className="text-sm font-bold text-dark mb-3">AI Personality</h4>
              <div className="grid grid-cols-3 gap-2">
                {['Professional', 'Friendly', 'Concise'].map((tone, i) => (
                  <button key={tone}
                    className={`py-2.5 rounded-xl text-xs font-semibold border transition-all ${i === 1 ? 'bg-primary text-white border-primary' : 'bg-white border-border text-slate-600 hover:border-primary hover:text-primary'}`}>
                    {tone}
                  </button>
                ))}
              </div>
              <div className="mt-3">
                <label className="text-xs font-semibold text-dark block mb-1.5">Custom AI Instructions</label>
                <textarea rows={3} placeholder="Always respond in Hindi if customer writes in Hindi. Never mention competitor products..."
                  className="w-full px-3 py-2.5 border border-border rounded-xl text-xs text-dark bg-white focus:border-primary focus:outline-none resize-none placeholder-slate-400" />
              </div>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-4">
            <div className="premium-card p-4">
              <h4 className="text-sm font-bold text-dark mb-4">Password & Authentication</h4>
              <div className="space-y-3">
                {['Current Password', 'New Password', 'Confirm Password'].map((label, i) => (
                  <div key={label}>
                    <label className="text-xs font-semibold text-dark block mb-1.5">{label}</label>
                    <div className="relative">
                      <input type={showPassword ? 'text' : 'password'} placeholder={`Enter ${label.toLowerCase()}`}
                        className="w-full px-3 py-2.5 border border-border rounded-xl text-sm text-dark bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all pr-10" />
                      {i > 0 && (
                        <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                          {showPassword ? <EyeOff className="w-4 h-4 text-slate-400" /> : <Eye className="w-4 h-4 text-slate-400" />}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card p-4">
              <h4 className="text-sm font-bold text-dark mb-3">Security Controls</h4>
              {[
                { key: 'twoFactor', label: 'Two-Factor Authentication', sub: 'Require OTP for every login' },
                { key: 'sessionAlert', label: 'Login Alerts', sub: 'Email me when a new device logs in' },
                { key: 'apiAccess', label: 'API Access', sub: 'Allow third-party apps to access your account' },
              ].map(s => (
                <SettingRow key={s.key} label={s.label} sublabel={s.sub}>
                  <Toggle value={toggles[s.key as keyof typeof toggles]} onChange={() => toggle(s.key as keyof typeof toggles)} />
                </SettingRow>
              ))}
            </div>

            <div className="premium-card p-4">
              <h4 className="text-sm font-bold text-dark mb-3">Active Sessions</h4>
              {[
                { device: 'Chrome on Windows', location: 'Mumbai, India', time: 'Now', current: true },
                { device: 'Safari on iPhone', location: 'Mumbai, India', time: '2h ago', current: false },
                { device: 'Firefox on macOS', location: 'Bangalore, India', time: '3d ago', current: false },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-dark">{s.device}</div>
                      <div className="text-[10px] text-slate-500">{s.location} · {s.time}</div>
                    </div>
                  </div>
                  {s.current
                    ? <span className="badge bg-emerald-50 text-emerald-700 text-[10px]">Current</span>
                    : <button className="text-xs text-red-500 hover:underline font-medium">Revoke</button>
                  }
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return <div className="text-sm text-slate-500">Coming soon...</div>
    }
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-black text-dark">Settings</h2>
          <p className="text-xs text-slate-500 mt-0.5">Manage your account, workspace, and preferences</p>
        </div>
        <motion.button
          onClick={handleSave}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            saved ? 'bg-emerald-500 text-white' : 'bg-primary text-white shadow-glow hover:opacity-90'
          }`}
        >
          {saved ? <><Check className="w-3.5 h-3.5" /> Saved!</> : <><Save className="w-3.5 h-3.5" /> Save Changes</>}
        </motion.button>
      </div>

      <div className="grid lg:grid-cols-4 gap-5">
        {/* Sidebar nav */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {settingsSections.map(s => (
              <button key={s.id} onClick={() => setActiveSection(s.id as SectionId)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all text-left ${
                  activeSection === s.id ? 'bg-primary-50 text-primary border border-primary-100' : 'text-slate-600 hover:bg-slate-50'
                }`}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: activeSection === s.id ? `${s.color}15` : '#F8FAFC' }}>
                  <s.icon className="w-4 h-4" style={{ color: s.color }} />
                </div>
                {s.label}
                <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${activeSection === s.id ? 'rotate-90 text-primary' : 'text-slate-300'}`} />
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 premium-card p-6 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-base font-black text-dark mb-5">
                {settingsSections.find(s => s.id === activeSection)?.label}
              </h3>
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
