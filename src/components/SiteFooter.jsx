import { useState } from 'react'
import { ArrowRight, ShieldCheck, Github, Twitter, Linkedin, CheckCircle } from 'lucide-react'
import { useDemo } from '../context/DemoModalContext'
import ContactModal from './ContactModal'
import AboutModal from './AboutModal'
import LegalModal from './LegalModal'

const nav = [
  {
    heading: 'Product',
    links: [
      { label: 'Sirius AI GRC',     href: '/products#ai-grc' },
      { label: 'AI Studio',          href: '/products#ai-studio' },
      { label: 'Flow Builder',       href: '/products#flow-builder' },
      { label: 'Integration Studio', href: '/products#integration-studio' },
      { label: 'Platform API',       href: '/products#platform-api' },
      { label: 'Pricing',            href: '/#pricing' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Financial Services',        href: '/#solutions' },
      { label: 'Healthcare & Life Sciences', href: '/#solutions' },
      { label: 'Insurance',                 href: '/#solutions' },
      { label: 'Enterprise IT',             href: '/#solutions' },
      { label: 'Regulated Industries',      href: '/#solutions' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation',     href: '/docs' },
      { label: 'Architecture Guide', href: '/#architecture' },
      { label: 'API Reference',      href: '/docs#api-reference' },
      { label: 'Quick Start',        href: '/docs#quick-start' },
      { label: 'Guides',             href: '/docs#guides' },
      { label: 'SDK Downloads',      href: '/docs#sdks' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Sudheeksha', action: 'about' },
      { label: 'Book a Demo',      action: 'demo' },
      { label: 'Customers',        href: '/#customers' },
      { label: 'Pricing',          href: '/#pricing' },
      { label: 'Contact',          action: 'contact' },
    ],
  },
]

const compliance = ['SOC 2 Type II', 'ISO 27001', 'HIPAA-ready', 'EU AI Act', 'GDPR']

export default function SiteFooter() {
  const { openDemo } = useDemo()
  const [contactOpen, setContactOpen] = useState(false)
  const [aboutOpen,   setAboutOpen]   = useState(false)
  const [legalType,   setLegalType]   = useState(null) // 'privacy' | 'terms' | 'security'

  // Newsletter form state
  const [email, setEmail]       = useState('')
  const [subStatus, setSubStatus] = useState('idle') // idle | loading | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setSubStatus('loading')
    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setSubStatus('success')
      setEmail('')
    } catch {
      setSubStatus('error')
      setTimeout(() => setSubStatus('idle'), 3000)
    }
  }

  const renderLink = (link) => {
    if (link.action === 'about') {
      return (
        <button
          key={link.label}
          onClick={() => setAboutOpen(true)}
          className="text-[13px] text-white/55 hover:text-white transition-colors text-left"
        >
          {link.label}
        </button>
      )
    }
    if (link.action === 'demo') {
      return (
        <button
          key={link.label}
          onClick={openDemo}
          className="text-[13px] text-white/55 hover:text-white transition-colors text-left"
        >
          {link.label}
        </button>
      )
    }
    if (link.action === 'contact') {
      return (
        <button
          key={link.label}
          onClick={() => setContactOpen(true)}
          className="text-[13px] text-white/55 hover:text-white transition-colors text-left"
        >
          {link.label}
        </button>
      )
    }
    return (
      <a
        key={link.label}
        href={link.href}
        className="text-[13px] text-white/55 hover:text-white transition-colors"
      >
        {link.label}
      </a>
    )
  }

  return (
    <>
      <footer className="bg-ink text-white border-t border-white/[0.07]">
        {/* Main footer body */}
        <div className="container-wide py-16">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Brand + newsletter */}
            <div>
              {/* Brand mark */}
              <a href="/" className="flex items-center gap-2.5 mb-6">
                <span className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/10">
                  <span className="absolute inset-0 bg-gradient-to-br from-teal via-violet to-coral" />
                  <span className="absolute inset-[2px] rounded-[7px] bg-ink/85 grid place-items-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2 14 9l7 1-5 4.5L17.5 22 12 18l-5.5 4L8 14.5 3 10l7-1z"/>
                    </svg>
                  </span>
                </span>
                <div className="leading-none">
                  <div className="text-[15px] font-bold text-white tracking-tight">Sirius</div>
                  <div className="text-[9.5px] font-semibold text-white/40 uppercase tracking-[0.14em] mt-0.5">
                    by Sudheeksha
                  </div>
                </div>
              </a>

              <p className="text-[13px] text-white/55 leading-relaxed mb-6 max-w-[240px]">
                The AI-first enterprise platform for governed agents, integrations,
                flows, and AI GRC. Purpose-built for regulated Fortune 500 teams.
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2.5">
                  Platform updates
                </div>

                {subStatus === 'success' ? (
                  <div className="flex items-center gap-2 text-[13px] text-teal-400 font-medium">
                    <CheckCircle size={15} />
                    Subscribed! Check your inbox.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@company.com"
                      className="flex-1 min-w-0 h-9 px-3 rounded-lg bg-white/[0.06] border border-white/10 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.09] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={subStatus === 'loading'}
                      className="h-9 px-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-colors flex-shrink-0 grid place-items-center disabled:opacity-60"
                    >
                      {subStatus === 'loading'
                        ? <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        : <ArrowRight size={14} />
                      }
                    </button>
                  </form>
                )}

                {subStatus === 'error' && (
                  <p className="mt-1.5 text-[11.5px] text-red-400">Something went wrong — try again.</p>
                )}
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { Icon: Github,   href: '#github',   label: 'GitHub' },
                  { Icon: Twitter,  href: '#twitter',  label: 'Twitter' },
                  { Icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] grid place-items-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {nav.map((col) => (
                <div key={col.heading}>
                  <div className="text-[10.5px] font-bold uppercase tracking-wider text-white/35 mb-4">
                    {col.heading}
                  </div>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {renderLink(link)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07]">
          <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Compliance badges */}
            <div className="flex flex-wrap items-center gap-3">
              {compliance.map((c) => (
                <div key={c} className="flex items-center gap-1 text-[10.5px] text-white/35">
                  <ShieldCheck size={10} className="text-teal-400/60" />
                  {c}
                </div>
              ))}
            </div>

            {/* Legal */}
            <div className="flex items-center gap-4 text-[11.5px] text-white/35">
              <span>© 2026 Sudheeksha Software Solutions Pvt. Ltd.</span>
              <button onClick={() => setLegalType('privacy')}  className="hover:text-white/70 transition-colors">Privacy</button>
              <button onClick={() => setLegalType('terms')}    className="hover:text-white/70 transition-colors">Terms</button>
              <button onClick={() => setLegalType('security')} className="hover:text-white/70 transition-colors">Security</button>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <AboutModal   open={aboutOpen}   onClose={() => setAboutOpen(false)} />
      <LegalModal   type={legalType}   onClose={() => setLegalType(null)} />
    </>
  )
}
