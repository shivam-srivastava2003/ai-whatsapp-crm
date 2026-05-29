'use client'

import Sidebar from '@/components/dashboard/Sidebar'
import TopBar from '@/components/dashboard/TopBar'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

const AIAssistant = dynamic(() => import('@/components/dashboard/AIAssistant'), {
  ssr: false,
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar
          title="Dashboard"
          subtitle="Welcome back, Rahul 👋"
        />
        <main className={`flex-1 ${pathname === '/dashboard/inbox' ? 'overflow-hidden' : 'overflow-y-auto custom-scrollbar'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      {/* Global floating AI assistant */}
      <AIAssistant />
    </div>
  )
}
