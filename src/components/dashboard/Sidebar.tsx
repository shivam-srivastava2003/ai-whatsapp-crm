'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  MessageCircle, LayoutDashboard, Users, Zap, Bell, Settings,
  ChevronLeft, BarChart3, Workflow, Search, HelpCircle, LogOut,
  Plug, X, Menu
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: MessageCircle, label: 'Inbox', href: '/dashboard/inbox', badge: 6 },
  { icon: Users, label: 'Leads CRM', href: '/dashboard/leads' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Workflow, label: 'Automation', href: '/dashboard/automation' },
  { icon: Plug, label: 'Integrations', href: '/dashboard/integrations' },
  { icon: Bell, label: 'Notifications', href: '/dashboard', badge: 3 },
]

const bottomItems = [
  { icon: HelpCircle, label: 'Help & Support', href: '#' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex flex-col h-full ${mobile ? 'w-64' : collapsed ? 'w-16' : 'w-60'} bg-white transition-all duration-300`}>
      {/* Logo */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-border flex-shrink-0">
        {(!collapsed || mobile) && (
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center shadow-glow">
              <MessageCircle className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-dark text-base tracking-tight">
              Whats<span className="gradient-text">CRM</span>
            </span>
          </Link>
        )}
        {collapsed && !mobile && (
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center mx-auto">
            <MessageCircle className="w-3.5 h-3.5 text-white" />
          </div>
        )}
        {!mobile && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors flex-shrink-0 ml-auto"
          >
            <ChevronLeft className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        )}
        {mobile && (
          <button onClick={() => setMobileOpen(false)} className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center ml-auto">
            <X className="w-4 h-4 text-slate-500" />
          </button>
        )}
      </div>

      {/* AI Status */}
      {(!collapsed || mobile) && (
        <div className="mx-3 mt-3 p-2.5 bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl border border-primary-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-3 h-3 text-primary" />
            </div>
            <div>
              <div className="text-xs font-semibold text-dark">AI Active</div>
              <div className="text-[10px] text-slate-500">247 chats monitored</div>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
      )}

      {/* Search */}
      {(!collapsed || mobile) && (
        <div className="px-3 mt-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-border rounded-xl text-sm text-slate-400">
            <Search className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-xs">Search...</span>
            <span className="ml-auto text-[10px] bg-slate-200 px-1.5 py-0.5 rounded font-mono">⌘K</span>
          </div>
        </div>
      )}

      {/* Main Nav */}
      <nav className="flex-1 px-2 mt-3 space-y-0.5 overflow-y-auto custom-scrollbar">
        {(!collapsed || mobile) && (
          <div className="px-2 pb-2">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Main Menu</span>
          </div>
        )}
        {navItems.map((item) => {
          const isActive = item.href === '/dashboard'
            ? pathname === '/dashboard'
            : pathname.startsWith(item.href)
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`sidebar-item relative ${isActive ? 'active' : ''} ${(collapsed && !mobile) ? 'justify-center px-0' : ''}`}
              title={(collapsed && !mobile) ? item.label : undefined}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {(!collapsed || mobile) && <span className="flex-1">{item.label}</span>}
              {item.badge && (!collapsed || mobile) && (
                <span className="w-5 h-5 bg-primary rounded-full text-[10px] text-white font-bold flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              {item.badge && collapsed && !mobile && (
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-primary rounded-full text-[8px] text-white font-bold flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-2 pb-4 border-t border-border pt-3 space-y-0.5 mt-2">
        {bottomItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`sidebar-item ${(collapsed && !mobile) ? 'justify-center px-0' : ''}`}
            title={(collapsed && !mobile) ? item.label : undefined}
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            {(!collapsed || mobile) && <span>{item.label}</span>}
          </Link>
        ))}

        {/* User profile */}
        <div className={`flex items-center gap-3 p-2.5 mt-2 rounded-xl bg-slate-50 border border-border ${(collapsed && !mobile) ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            RK
          </div>
          {(!collapsed || mobile) && (
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-dark truncate">Rahul Kumar</div>
              <div className="text-[10px] text-slate-500 truncate">Admin • Pro Plan</div>
            </div>
          )}
          {(!collapsed || mobile) && (
            <LogOut className="w-3.5 h-3.5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
          )}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={`hidden md:flex flex-col h-screen border-r border-border flex-shrink-0 overflow-hidden transition-all duration-300 ${collapsed ? 'w-16' : 'w-60'}`}>
        <SidebarContent />
      </aside>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 w-10 h-10 bg-white border border-border rounded-xl flex items-center justify-center shadow-card"
      >
        <Menu className="w-5 h-5 text-slate-600" />
      </button>

      {/* Mobile overlay drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-dark/30 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="md:hidden fixed top-0 left-0 bottom-0 z-50 shadow-premium overflow-hidden border-r border-border"
            >
              <SidebarContent mobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
