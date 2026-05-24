import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck, Workflow, Boxes, Plug, Code2 } from 'lucide-react'

const productMenu = [
  { icon: ShieldCheck, name: 'AEGIS Governance', desc: 'AI GRC + policy engine', tag: 'Flagship' },
  { icon: Workflow, name: 'AI Studio', desc: 'Agents, skills, tools', tag: 'Core' },
  { icon: Boxes, name: 'Flow Builder', desc: 'Visual DAG composer', tag: '' },
  { icon: Plug, name: 'Integration Studio', desc: '50+ connectors', tag: '' },
  { icon: Code2, name: 'Platform API', desc: 'Full-stack REST API', tag: 'Dev' },
]

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Customers', href: '#customers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/85 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2.5 group">
            <span className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/10">
              <span className="absolute inset-0 bg-gradient-to-br from-teal via-violet to-coral" />
              <span className="absolute inset-[2px] rounded-[7px] bg-ink/85 grid place-items-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2 14 9l7 1-5 4.5L17.5 22 12 18l-5.5 4L8 14.5 3 10l7-1z"/>
                </svg>
              </span>
            </span>
            <div className="leading-none">
              <div className="text-[15px] font-bold text-white tracking-tight">Sirius</div>
              <div className="text-[9.5px] font-semibold text-white/45 uppercase tracking-[0.14em] mt-0.5">
                by Sudheeksha
              </div>
            </div>
          </a>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products mega-menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 h-9 px-3 rounded-md text-[13.5px] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                Products
                <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px]">
                  <div className="rounded-2xl bg-ink-800/95 backdrop-blur-2xl border border-white/10 shadow-elevated p-2">
                    <div className="grid grid-cols-1 gap-0.5">
                      {productMenu.map((p) => {
                        const Icon = p.icon
                        return (
                          <a key={p.name} href={`#${p.name}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                            <span className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 grid place-items-center text-teal-400 group-hover:bg-teal/15 group-hover:border-teal/30 transition-colors">
                              <Icon size={16} strokeWidth={2} />
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[13.5px] font-semibold text-white">{p.name}</span>
                                {p.tag && (
                                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-teal/15 text-teal-400 border border-teal/25">
                                    {p.tag}
                                  </span>
                                )}
                              </div>
                              <div className="text-[12px] text-white/55 mt-0.5">{p.desc}</div>
                            </div>
                            <ArrowRight size={14} className="text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all" />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="h-9 px-3 inline-flex items-center rounded-md text-[13.5px] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="#signin" className="h-9 px-3 inline-flex items-center text-[13.5px] font-medium text-white/70 hover:text-white">
              Sign in
            </a>
            <a href="#demo" className="h-9 px-4 inline-flex items-center gap-1.5 rounded-md text-[13.5px] font-semibold bg-white text-ink hover:bg-white/90 transition-colors">
              Book a demo
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 rounded-md border border-white/15 grid place-items-center text-white">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-6 pt-2 border-t border-white/10 mt-px">
            <div className="grid gap-1">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="h-11 px-3 flex items-center rounded-md text-sm font-medium text-white/80 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <div className="pt-3 grid gap-2">
                <a href="#signin" className="h-11 px-3 flex items-center rounded-md text-sm font-medium text-white border border-white/15">Sign in</a>
                <a href="#demo" className="h-11 px-3 flex items-center justify-center rounded-md text-sm font-semibold bg-white text-ink">Book a demo</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
