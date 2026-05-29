import Link from 'next/link'
import { MessageCircle, Heart, ExternalLink } from 'lucide-react'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Dashboard', 'Inbox', 'Integrations', 'API'],
  Company: ['About Us', 'Blog', 'Careers', 'Press', 'Partners'],
  Support: ['Documentation', 'Help Center', 'Status Page', 'Contact Us', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
}

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Whats<span className="text-primary">CRM</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-xs">
              The AI-powered WhatsApp CRM for modern businesses. Manage leads, automate follow-ups, and grow smarter.
            </p>
            <div className="flex items-center gap-3">
              {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-primary/30"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 WhatsCRM. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-current" /> for growing businesses
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
