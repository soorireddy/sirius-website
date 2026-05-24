import { ShieldCheck, Workflow, Cpu, Wrench, Plug } from 'lucide-react'
import Reveal from './Reveal'

const layers = [
  {
    id: 'workflows',
    Icon: Workflow,
    color: '#2dd4bf',
    bg: 'rgba(45,212,191,0.12)',
    border: 'rgba(45,212,191,0.3)',
    label: 'Workflows',
    sub: 'Orchestration layer',
    desc: 'DAG-based flow composer. Coordinates agents, gates, code nodes, and integrations. The flow graph is the source of truth — what you build is what runs in prod.',
    nodes: ['loan-application', 'customer-onboarding', 'fraud-review'],
  },
  {
    id: 'agents',
    Icon: Cpu,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.3)',
    label: 'Agents',
    sub: 'Reasoning layer',
    desc: 'LLM-powered autonomous units. Each agent has a persona, memory, and skill set. They reason, plan, and decide — under policy the whole time.',
    nodes: ['risk_assessor', 'intake_agent', 'decisioner'],
  },
  {
    id: 'skills-tools',
    Icon: Wrench,
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.12)',
    border: 'rgba(251,146,60,0.3)',
    label: 'Skills + Tools',
    sub: 'Execution layer',
    desc: '8 skill types shape how agents reason (RAG, CoT, Few-Shot, Self-Critique…). Tools execute actions — API calls, DB reads, file writes — with governed permissions.',
    nodes: ['rag.search', 'cot.plan', 'credit_bureau.lookup'],
  },
  {
    id: 'integrations',
    Icon: Plug,
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
    border: 'rgba(52,211,153,0.3)',
    label: 'Integrations',
    sub: '50+ connectors',
    desc: 'Native connectors to Salesforce, ServiceNow, SAP, Workday, Snowflake, Databricks, Slack, and more. Fully OAuth-managed with secret rotation and audit logs.',
    nodes: ['salesforce', 'servicenow', 'snowflake', '+47 more'],
  },
]

function LayerCard({ layer, index }) {
  const { Icon, color, bg, border, label, sub, desc, nodes } = layer
  return (
    <div className="relative flex gap-3 sm:gap-5 min-w-0">
      <div className="flex flex-col items-center">
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex-shrink-0 grid place-items-center"
          style={{ background: bg, border: `1px solid ${border}` }}
        >
          <Icon size={18} style={{ color }} />
        </div>
        {index < layers.length - 1 && (
          <div className="w-px flex-1 mt-2" style={{ background: `linear-gradient(to bottom, ${color}50, transparent)` }} />
        )}
      </div>
      <div className="pb-8 flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <span className="text-[15px] font-bold text-white break-words">{label}</span>
          <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">{sub}</span>
        </div>
        <p className="text-[13px] text-white/60 leading-relaxed mb-3">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {nodes.map((n) => (
            <span
              key={n}
              className="inline-flex max-w-full items-center min-h-6 px-2 py-1 rounded text-[10.5px] font-mono font-semibold break-all"
              style={{ background: bg, color, border: `1px solid ${border}` }}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="relative scroll-mt-20 bg-ink text-white py-20 sm:py-24 overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 -z-10 bg-mesh-dark opacity-60" />
      <div
        className="absolute inset-0 -z-10 bg-grid-dark opacity-30"
        style={{
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent 90%)',
        }}
      />

      <div className="container-wide">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <Reveal className="min-w-0 lg:sticky lg:top-28">
            <div className="eyebrow-dark inline-flex h-auto min-h-7 py-1 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Platform architecture
            </div>

            <h2 className="font-display text-display-lg text-white mb-5 break-words">
              Four clean layers.<br />
              <span className="text-gradient">One governance spine.</span>
            </h2>

            <p className="text-[16px] text-white/65 leading-relaxed mb-8 max-w-md break-words">
              Every component in Sirius sits in a deliberate hierarchy.
              Workflows orchestrate Agents. Agents invoke Skills and Tools.
              Skills shape reasoning; Tools execute actions. Sirius AI GRC wraps the
              entire stack with policy, audit, and control.
            </p>

            <div className="rounded-2xl border border-teal-500/25 bg-teal-500/[0.07] p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 grid place-items-center flex-shrink-0">
                  <ShieldCheck size={16} className="text-teal-400" />
                </span>
                <div>
                  <div className="text-[13px] font-bold text-white">Sirius AI GRC</div>
                  <div className="text-[11px] text-teal-400/80 font-mono uppercase tracking-wider">Wraps every layer</div>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  'Policy checkpoints at pre/post for every agent run',
                  'HITL gates block execution until approved',
                  'Evidence packs written to immutable audit log',
                  'ABOM generated on every flow deployment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12.5px] text-white/70">
                    <span className="w-1 h-1 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: architecture diagram */}
          <Reveal delay={200} className="min-w-0">
            <div className="relative rounded-2xl border border-teal-500/30 bg-teal-500/[0.03] p-3 sm:p-6">
              {/* AEGIS label */}
              <div className="absolute -top-3.5 left-3 sm:left-6 max-w-[calc(100%-1.5rem)] flex items-center gap-2 px-3 py-1 rounded-full bg-ink border border-teal-500/40 text-[10.5px] font-bold text-teal-400 uppercase tracking-widest">
                <ShieldCheck size={10} />
                <span className="min-w-0 truncate">Sirius AI GRC · Governed runtime</span>
              </div>

              {/* Runtime status bar */}
              <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2.5">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-white/70">Runtime · Production</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-[10.5px] font-mono text-white/45 flex-wrap">
                  <span>12,840 runs/hr</span>
                  <span>p95 312ms</span>
                  <span className="text-emerald-400">99.97% policy pass</span>
                </div>
              </div>

              {/* SVG flow diagram */}
              <div className="mb-5 rounded-xl border border-white/10 bg-black/30 p-3 sm:p-4 overflow-hidden">
                <div className="text-[10.5px] font-mono text-white/40 uppercase tracking-wider mb-3">Active flow · loan-application v3.2</div>
                <svg viewBox="0 0 480 80" className="w-full min-w-0" style={{ height: 80 }}>
                  <defs>
                    <linearGradient id="arch-edge" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8" />
                    </linearGradient>
                    <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
                      <path d="M 0 0 L 6 3 L 0 6 z" fill="url(#arch-edge)" />
                    </marker>
                  </defs>
                  {[80, 196, 312].map((x) => (
                    <path
                      key={x}
                      d={`M ${x + 20} 40 L ${x + 90} 40`}
                      stroke="url(#arch-edge)"
                      strokeWidth="1.5"
                      strokeDasharray="5 4"
                      fill="none"
                      markerEnd="url(#arrow)"
                    >
                      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.4s" repeatCount="indefinite" />
                    </path>
                  ))}
                  {[
                    { x: 40,  label: 'Intake',    color: '#2dd4bf' },
                    { x: 160, label: 'Risk',      color: '#a78bfa' },
                    { x: 280, label: 'HITL Gate', color: '#fb923c' },
                    { x: 400, label: 'Decision',  color: '#34d399' },
                  ].map((n) => (
                    <g key={n.label}>
                      <circle cx={n.x} cy={40} r={18} fill={n.color} fillOpacity="0.15" stroke={n.color} strokeWidth="1" />
                      <circle cx={n.x} cy={40} r={5} fill={n.color} />
                      <text x={n.x} y={68} fill="rgba(255,255,255,0.8)" fontSize="8.5" fontWeight="700" textAnchor="middle">{n.label}</text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Layer stack */}
              <div className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-4">
                {layers.map((layer, i) => (
                  <LayerCard key={layer.id} layer={layer} index={i} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
