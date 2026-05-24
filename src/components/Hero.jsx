import { ArrowRight, ShieldCheck, Activity, GitBranch, CheckCircle2, Sparkles } from 'lucide-react'
import NetworkCanvas from './NetworkCanvas'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white pt-28 lg:pt-36 pb-24">
      {/* Mesh + grid background */}
      <div className="absolute inset-0 -z-10 bg-mesh-dark" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-60" style={{maskImage:'radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent 80%)', WebkitMaskImage:'radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent 80%)'}} />
      <NetworkCanvas className="absolute inset-0 -z-10 w-full h-full opacity-40" />

      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-ink to-transparent -z-10" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="eyebrow-dark inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-soft" />
              Sirius AI GRC · Enterprise Governance, GA Q3 2026
            </div>

            <h1 className="mt-6 font-display text-display-xl text-white">
              Govern the AI that <br className="hidden sm:block" />
              <span className="text-gradient">runs your business.</span>
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Sirius is the AI-first enterprise platform for governed agents, integrations,
              builder flows, runtime control, and AI GRC — purpose-built so Fortune 500
              teams can deploy autonomous AI without losing the audit trail.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#demo" className="btn h-12 px-5 bg-white text-ink hover:bg-white/90 shadow-elevated">
                Book a 30-min demo <ArrowRight size={16} />
              </a>
              <a href="#architecture" className="btn btn-glass h-12 px-5">
                See the architecture
              </a>
            </div>

            {/* Compliance bar */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="mono-label !text-white/50 mb-4">Built for regulated enterprises</div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {['SOC 2 Type II', 'ISO 27001', 'HIPAA-ready', 'EU AI Act', 'GDPR'].map((b) => (
                  <div key={b} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/70">
                    <ShieldCheck size={13} className="text-teal-400" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — console mockup */}
          <div className="relative">
            {/* Floating accent badges */}
            <div className="absolute -top-4 -left-6 z-20 rounded-xl bg-ink-800/90 backdrop-blur-xl border border-white/10 p-3 shadow-elevated hidden sm:flex items-center gap-2.5 animate-float">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 grid place-items-center">
                <CheckCircle2 size={14} className="text-emerald-400" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold text-white">Policy passed</div>
                <div className="text-[10px] text-white/55 font-mono">aegis.pii.redact</div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 z-20 rounded-xl bg-ink-800/90 backdrop-blur-xl border border-white/10 p-3 shadow-elevated hidden sm:flex items-center gap-2.5 animate-float" style={{animationDelay:'1.4s'}}>
              <span className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/25 grid place-items-center">
                <Activity size={14} className="text-violet-400" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold text-white">12,840 runs / hr</div>
                <div className="text-[10px] text-white/55">p95 · 312 ms</div>
              </div>
            </div>

            {/* Console */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-ink-800/70 backdrop-blur-2xl shadow-elevated">
              {/* Chrome */}
              <div className="window-chrome">
                <span className="window-dot bg-red-400/80" />
                <span className="window-dot bg-amber-400/80" />
                <span className="window-dot bg-emerald-400/80" />
                <div className="ml-3 text-[11px] font-mono text-white/55">control-tower / runtime-inspector</div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                  <span className="text-[10.5px] font-semibold text-white/65 uppercase tracking-wider">Live</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-[150px_1fr] min-h-[380px] sm:min-h-[440px]">
                {/* Sidebar */}
                <aside className="hidden sm:block border-r border-white/8 bg-black/20 p-2.5 space-y-0.5">
                  {[
                    { label: 'Control Tower', active: true },
                    { label: 'Agents', count: 14 },
                    { label: 'Flows', count: 32 },
                    { label: 'Skills', count: 48 },
                    { label: 'Tools', count: 67 },
                    { label: 'Policies', count: 21 },
                    { label: 'Approvals', count: 3, hot: true },
                    { label: 'Evidence' },
                  ].map((it) => (
                    <div key={it.label} className={`flex items-center justify-between px-2.5 h-8 rounded-md text-[12px] font-medium transition-colors ${it.active ? 'bg-teal/15 text-teal-400 border border-teal/25' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                      <span>{it.label}</span>
                      {it.count !== undefined && (
                        <span className={`text-[10px] font-bold px-1.5 rounded ${it.hot ? 'bg-coral/20 text-coral-400' : 'bg-white/10 text-white/60'}`}>{it.count}</span>
                      )}
                    </div>
                  ))}
                </aside>

                {/* Main */}
                <div className="p-4 space-y-3 bg-grid-dark bg-[length:32px_32px]">
                  {/* Top metrics strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { l: 'Active agents', v: '14', d: '+2' },
                      { l: 'Runs / hr', v: '12.8k', d: '+18%' },
                      { l: 'p95 latency', v: '312ms', d: '-4%' },
                      { l: 'Policy pass', v: '99.97%', d: '+0.04' },
                    ].map((m) => (
                      <div key={m.l} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                        <div className="text-[9.5px] uppercase font-bold tracking-wider text-white/45">{m.l}</div>
                        <div className="mt-1 flex items-baseline gap-1.5">
                          <span className="text-[16px] font-bold text-white">{m.v}</span>
                          <span className="text-[10px] font-semibold text-emerald-400">{m.d}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Flow diagram */}
                  <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <GitBranch size={12} className="text-violet-400" />
                        <span className="text-[11px] font-semibold text-white/85">flow / loan-application</span>
                      </div>
                      <span className="text-[9.5px] font-mono text-white/45">v3.2 · running</span>
                    </div>
                    <svg viewBox="0 0 360 110" className="w-full h-[110px]">
                      <defs>
                        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9"/>
                        </linearGradient>
                      </defs>
                      {[
                        { x: 20, label: 'Intake', sub: 'agent', color: '#2dd4bf' },
                        { x: 120, label: 'Risk', sub: 'agent + RAG', color: '#a78bfa' },
                        { x: 220, label: 'Approval', sub: 'HITL gate', color: '#fb923c' },
                        { x: 320, label: 'Decision', sub: 'evidence', color: '#34d399' },
                      ].map((n, i) => (
                        <g key={n.label}>
                          {i < 3 && (
                            <path d={`M ${n.x + 20} 55 L ${n.x + 80} 55`} stroke="url(#edge)" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite"/>
                            </path>
                          )}
                          <circle cx={n.x} cy={55} r={14} fill={n.color} fillOpacity="0.18" stroke={n.color} strokeWidth="1"/>
                          <circle cx={n.x} cy={55} r={4} fill={n.color}/>
                          <text x={n.x} y={85} fill="rgba(255,255,255,0.92)" fontSize="9" fontWeight="700" textAnchor="middle">{n.label}</text>
                          <text x={n.x} y={97} fill="rgba(255,255,255,0.45)" fontSize="7.5" fontWeight="500" textAnchor="middle">{n.sub}</text>
                        </g>
                      ))}
                    </svg>
                  </div>

                  {/* Event log */}
                  <div className="rounded-lg border border-white/10 bg-black/30">
                    <div className="px-3 py-2 border-b border-white/8 flex items-center justify-between">
                      <span className="mono-label !text-white/55">Event stream</span>
                      <span className="text-[10px] text-white/40">last 30s</span>
                    </div>
                    <ul className="divide-y divide-white/5">
                      {[
                        { t: '0.4s', tag: 'POLICY', text: 'aegis.pii.redact → allow', cls: 'bg-emerald-500/15 !text-emerald-400 border-emerald-500/25' },
                        { t: '1.2s', tag: 'AGENT',  text: 'risk_assessor invoked tool credit_bureau.lookup', cls: 'bg-teal/15 !text-teal-400 border-teal/25' },
                        { t: '2.1s', tag: 'GATE',   text: 'HITL required — reviewer.assigned("ops-2")', cls: 'bg-amber-500/15 !text-amber-400 border-amber-500/25' },
                        { t: '3.6s', tag: 'AUDIT',  text: 'evidence pack written — sha 8f3a…', cls: 'bg-violet-500/15 !text-violet-400 border-violet-500/25' },
                      ].map((e) => (
                        <li key={e.text} className="px-3 py-2 flex items-center gap-3 text-[11.5px]">
                          <span className="font-mono text-white/40 w-9">{e.t}</span>
                          <span className={`mono-label px-1.5 py-0.5 rounded border ${e.cls}`}>{e.tag}</span>
                          <span className="text-white/80 truncate">{e.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
