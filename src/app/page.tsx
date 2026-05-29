import dynamic from 'next/dynamic'
import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'

const TrustedBy = dynamic(() => import('@/components/landing/TrustedBy'), {
  loading: () => <div className="h-[200px] w-full bg-white animate-pulse" />
})
const Features = dynamic(() => import('@/components/landing/Features'), {
  loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse" />
})
const DashboardPreview = dynamic(() => import('@/components/landing/DashboardPreview'), {
  loading: () => <div className="h-[500px] w-full bg-white animate-pulse" />
})
const Pricing = dynamic(() => import('@/components/landing/Pricing'), {
  loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse" />
})
const Footer = dynamic(() => import('@/components/landing/Footer'), {
  loading: () => <div className="h-[200px] w-full bg-slate-900 animate-pulse" />
})

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <DashboardPreview />
      <Pricing />
      <Footer />
    </main>
  )
}
