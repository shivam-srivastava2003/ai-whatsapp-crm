'use client'

import { useState } from 'react'
import { Bell, Search, Zap, ChevronDown, Plus } from 'lucide-react'
import Link from 'next/link'

interface TopBarProps {
  title: string
  subtitle?: string
}

export default function TopBar({ title, subtitle }: TopBarProps) {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-4 md:px-6 flex-shrink-0">
      {/* Title - add left margin on mobile for hamburger */}
      <div className="ml-10 md:ml-0">
        <h1 className="text-lg font-bold text-dark">{title}</h1>
        {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-1.5 md:gap-3 flex-shrink-0">
        {/* Search - hidden on mobile */}
        <div className={`hidden md:flex items-center gap-2 px-3 py-2 bg-slate-50 border rounded-xl transition-all duration-200 ${searchFocused ? 'border-primary shadow-glow w-64' : 'border-border w-44'}`}>
          <Search className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search contacts, leads..."
            className="bg-transparent text-xs text-dark placeholder-slate-400 outline-none w-full"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>

        {/* New message CTA - compact on mobile */}
        <Link
          href="/dashboard/inbox"
          prefetch={false}
          className="flex items-center justify-center w-9 h-9 md:w-auto md:h-auto md:gap-1.5 md:px-3 md:py-2 bg-primary text-white text-xs font-semibold rounded-xl hover:opacity-90 transition-all shadow-glow flex-shrink-0"
          title="New Chat"
        >
          <Plus className="w-4 h-4 md:w-3.5 md:h-3.5 flex-shrink-0" />
          <span className="hidden md:inline">New Chat</span>
        </Link>

        {/* AI badge - compact on mobile */}
        <div className="flex items-center justify-center w-9 h-9 md:w-auto md:h-auto md:gap-1.5 md:px-3 md:py-2 bg-purple-50 border border-purple-100 rounded-xl flex-shrink-0" title="AI Active">
          <Zap className="w-4 h-4 md:w-3.5 md:h-3.5 text-purple flex-shrink-0" />
          <span className="hidden md:inline text-xs font-semibold text-purple">AI On</span>
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-xl bg-slate-50 border border-border flex items-center justify-center hover:bg-slate-100 transition-colors flex-shrink-0" title="Notifications">
          <Bell className="w-4 h-4 text-slate-600 flex-shrink-0" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>

        {/* Profile - compact on mobile */}
        <button className="flex items-center gap-2 p-1 md:pl-1.5 md:pr-3 md:py-1.5 bg-slate-50 border border-border rounded-xl hover:bg-slate-100 transition-colors flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            RK
          </div>
          <span className="hidden md:inline text-xs font-semibold text-dark">Rahul</span>
          <ChevronDown className="hidden md:inline w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
        </button>
      </div>
    </header>
  )
}
