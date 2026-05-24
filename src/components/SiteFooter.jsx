import { ArrowRight, ShieldCheck, Github, Twitter, Linkedin } from 'lucide-react'

const nav = [
  {
    heading: 'Product',
    links: [
      { label: 'AEGIS Governance', href: '#aegis' },
      { label: 'AI Studio', href: '#studio' },
      { label: 'Flow Builder', href: '#builder' },
      { label: 'Integration Studio', href: '#integrations' },
      { label: 'Platform API', href: '#api' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Financial Services', href: '#finserv' },
      { label: 'Healthcare & Life Sciences', href: '#healthcare' },
      { label: 'Insurance', href: '#insurance' },
      { label: 'Enterprise IT', href: '#enterprise' },
      { label: 'Regulated Industries', href: '#regulated' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Architecture Guide', href: '#architecture' },
      { label: 'API Reference', href: '#api-ref' },
      { label: 'Security Whitepaper', href: '#security' },
      { label: 'Changelog', href: '#changelog' },
      { label: 'Status', href: '#status' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Sudheeksha', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Partners', href: '#partners' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

const compliance = ['SOC 2 Type II', 'ISO 27001', 'HIPAA-ready', 'EU AI Act', 'GDPR']

export default function SiteFooter() {
  return (
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
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="your@company.com"
                  className="flex-1 min-w-0 h-9 px-3 rounded-lg bg-white/[0.06] border border-white/10 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.09] transition-colors"
                />
                <button
                  type="submit"
                  className="h-9 px-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-colors flex-shrink-0 grid place-items-center"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { Icon: Github, href: '#github', label: 'GitHub' },
                { Icon: Twitter, href: '#twitter', label: 'Twitter' },
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {nav.map((col) => (
              <div key={col.heading}>
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-white/35 mb-4">
                  {col.heading}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-white/55 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
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
            <span>© 2026 Sudheeksha Inc.</span>
            <a href="#privacy" className="hover:text-white/70 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white/70 transition-colors">Terms</a>
            <a href="#security" className="hover:text-white/70 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
