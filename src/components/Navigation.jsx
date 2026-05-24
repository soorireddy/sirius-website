import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck, Workflow, Boxes, Plug, Code2 } from 'lucide-react'
import { useDemo } from '../context/DemoModalContext'

const productMenu = [
  { icon: ShieldCheck, name: 'Sirius AI GRC',    desc: 'Governance, Risk & Compliance', tag: 'Flagship', href: '/products#ai-grc' },
  { icon: Workflow,    name: 'AI Studio',         desc: 'Agents, skills, tools',         tag: 'Core',     href: '/products#ai-studio' },
  { icon: Boxes,       name: 'Flow Builder',      desc: 'Visual DAG composer',           tag: '',         href: '/products#flow-builder' },
  { icon: Plug,        name: 'Integration Studio',desc: '50+ connectors',                tag: '',         href: '/products#integration-studio' },
  { icon: Code2,       name: 'Platform API',      desc: 'Full-stack REST API',           tag: 'Dev',      href: '/products#platform-api' },
]

const navLinks = [
  { label: 'Products',      href: '/products',     isPage: true },
  { label: 'Solutions',     href: '/#solutions' },
  { label: 'Architecture',  href: '/#architecture' },
  { label: 'Customers',     href: '/#customers' },
  { label: 'Pricing',       href: '/#pricing' },
  { label: 'Docs',          href: '/docs',         isPage: true },
]

export default function Navigation() {
  const { openDemo } = useDemo()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  const opaque = scrolled || !isHome

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        opaque
          ? 'bg-ink/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="h-16 flex items-center justify-between">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
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
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Products mega-menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link
                to="/products"
                className="flex items-center gap-1 h-9 px-3 rounded-md text-[13.5px] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                Products
                <ChevronDown size={13} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </Link>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]">
                  {/* Caret connecting dropdown to trigger */}
                  <div className="flex justify-center mb-0">
                    <div className="w-3 h-1.5 overflow-hidden">
                      <div className="w-3 h-3 rotate-45 bg-[#1a1c23] border-l border-t border-white/[0.12] -translate-y-1.5 mx-auto" />
                    </div>
                  </div>
                  <div
                    className="rounded-2xl border border-white/[0.12] p-2"
                    style={{
                      background: '#1a1c23',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35)',
                    }}
                  >
                    {productMenu.map((p) => {
                      const Icon = p.icon
                      return (
                        <a
                          key={p.name}
                          href={p.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.07] transition-colors group"
                        >
                          <span className="w-10 h-10 rounded-xl border border-white/[0.1] grid place-items-center text-teal-400 flex-shrink-0 group-hover:border-teal-500/40 group-hover:bg-teal-500/10 transition-colors"
                            style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <Icon size={17} strokeWidth={1.8} />
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-[14px] font-semibold text-white leading-none">{p.name}</span>
                              {p.tag && (
                                <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-teal-500/15 text-teal-400 border border-teal-500/25 leading-none">
                                  {p.tag}
                                </span>
                              )}
                            </div>
                            <div className="text-[12px] text-white/45 leading-snug">{p.desc}</div>
                          </div>
                          <ArrowRight size={13} className="text-white/20 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other nav links */}
            {navLinks.filter(l => l.label !== 'Products').map((l) =>
              l.isPage ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className={`h-9 px-3 inline-flex items-center rounded-md text-[13.5px] font-medium transition-colors ${
                    location.pathname === l.href
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="h-9 px-3 inline-flex items-center rounded-md text-[13.5px] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={openDemo}
              className="h-9 px-4 inline-flex items-center gap-1.5 rounded-md text-[13.5px] font-semibold bg-white text-ink hover:bg-white/90 transition-colors"
            >
              Book a demo
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-md border border-white/15 grid place-items-center text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-6 pt-2 border-t border-white/10 mt-px">
            <div className="grid gap-0.5">
              {navLinks.map((l) =>
                l.isPage ? (
                  <Link
                    key={l.label}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="h-11 px-3 flex items-center rounded-md text-sm font-medium text-white/80 hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="h-11 px-3 flex items-center rounded-md text-sm font-medium text-white/80 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                )
              )}
              <div className="pt-3 px-3">
                <button
                  onClick={() => { setOpen(false); openDemo() }}
                  className="flex w-full h-11 items-center justify-center rounded-md text-sm font-semibold bg-white text-ink"
                >
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
