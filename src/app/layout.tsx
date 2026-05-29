import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'WhatsCRM — AI-Powered WhatsApp CRM for Modern Businesses',
  description: 'Manage leads, automate follow-ups, reply faster with AI, and grow your business smarter. The #1 WhatsApp CRM for freelancers, agencies, and startups.',
  keywords: 'WhatsApp CRM, AI CRM, WhatsApp Business, Lead Management, CRM Automation',
  openGraph: {
    title: 'WhatsCRM — AI-Powered WhatsApp CRM',
    description: 'Manage leads, automate follow-ups, reply faster with AI.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
