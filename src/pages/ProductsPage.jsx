import { ShieldCheck, Workflow, Boxes, Plug, Code2, ArrowRight, CheckCircle2, Lock, Zap, GitBranch, Cpu, Activity, BarChart3, Eye } from 'lucide-react'
import Navigation from '../components/Navigation'
import CTASection from '../components/CTASection'
import SiteFooter from '../components/SiteFooter'
import Reveal from '../components/Reveal'
import { useDemo } from '../context/DemoModalContext'

/* ─── Product data ───────────────────────────────────────────────── */
const products = [
  {
    id: 'ai-grc',
    Icon: ShieldCheck,
    color: 'teal',
    accent: '#2dd4bf',
    accentBg: 'rgba(45,212,191,0.1)',
    accentBorder: 'rgba(45,212,191,0.25)',
    label: 'Sirius AI GRC',
    tag: 'Flagship · Governance & Risk',
    title: 'AI governance baked into every run.',
    desc: 'The industry\'s first AI Governance, Risk & Compliance platform built into the runtime — not bolted on. Policy engine, ABOM, HITL gates, evidence packs, and a live Control Tower, all wired in from day one.',
    features: [
      { icon: Lock, text: 'Policy engine with pre/post checkpoints — agents, tools, and flows' },
      { icon: ShieldCheck, text: 'Approval gates and HITL routing with full reviewer audit trail' },
      { icon: Activity, text: 'Agent Bill of Materials (ABOM) generated on every release' },
      { icon: BarChart3, text: 'Evidence packs mapped to SOC 2, ISO 27001, HIPAA, EU AI Act, GDPR' },
      { icon: Eye, text: 'Control Tower — real-time monitoring, pause, and override of all agents' },
      { icon: Zap, text: 'Pre-built compliance mappings — go from zero to audit-ready in weeks' },
    ],
    visual: <AiGrcVisual />,
  },
  {
    id: 'ai-studio',
    Icon: Workflow,
    color: 'violet',
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.1)',
    accentBorder: 'rgba(167,139,250,0.25)',
    label: 'AI Studio',
    tag: 'Core · Agents, Skills & Tools',
    title: 'Compose autonomous agents like building blocks.',
    desc: 'Workflows orchestrate Agents. Agents reason. Skills shape how they reason. Tools execute what they do. A deliberate four-layer hierarchy you can reason about, version, and govern — not a black box.',
    features: [
      { icon: Cpu, text: '8 first-class skill types: RAG, CoT, Few-Shot, Self-Critique, Structured Output, Summarization, Prompt Template, Custom' },
      { icon: Zap, text: 'Execution phases: pre_prompt, pre_llm, post_llm, inline — complete control of the agent loop' },
      { icon: GitBranch, text: 'Platform-agnostic LLM adapters: Anthropic, OpenAI, Azure, Bedrock, Vertex AI' },
      { icon: Activity, text: 'Versioned agents, skills, and tools with rollback and A/B test surfaces' },
      { icon: ShieldCheck, text: 'Every agent run is governed — policy is not optional configuration' },
      { icon: BarChart3, text: 'Runtime inspector with step-by-step trace and token analytics' },
    ],
    visual: <AiStudioVisual />,
  },
  {
    id: 'flow-builder',
    Icon: Boxes,
    color: 'coral',
    accent: '#fb923c',
    accentBg: 'rgba(251,146,60,0.1)',
    accentBorder: 'rgba(251,146,60,0.25)',
    label: 'Flow Builder',
    tag: 'Visual DAG Composer',
    title: 'The flow graph is the source of truth.',
    desc: 'Drag agents, decisions, integrations, and code blocks onto a canvas. The DAG you build is the DAG that runs in production — no translation layer, no drift, no surprises.',
    features: [
      { icon: GitBranch, text: 'Typed input bindings: static, context, previous-step, manual — all resolved at runtime' },
      { icon: Lock, text: 'Prompt-node versioning with required promptVersionId — no silent prompt drift' },
      { icon: Eye, text: 'Inline test mode that never touches the production run path' },
      { icon: Activity, text: 'Live runtime inspector with step-by-step replay and diff view' },
      { icon: ShieldCheck, text: 'HITL gate nodes — insert human approval at any point in the flow' },
      { icon: Zap, text: 'One-click deployment with automatic ABOM generation' },
    ],
    visual: <FlowBuilderVisual />,
  },
  {
    id: 'integration-studio',
    Icon: Plug,
    color: 'amber',
    accent: '#fbbf24',
    accentBg: 'rgba(251,191,36,0.1)',
    accentBorder: 'rgba(251,191,36,0.25)',
    label: 'Integration Studio',
    tag: '50+ Connectors + Custom API Builder',
    title: 'Reach every system. Without writing glue code.',
    desc: 'Pre-built connectors to the enterprise apps your teams already run, plus a full custom API builder for anything else. Every credential stays encrypted; every call inherits agent governance.',
    features: [
      { icon: Plug, text: 'Native connectors: Salesforce, ServiceNow, SAP, Workday, Snowflake, Databricks, Slack, Jira, M365 and 40+ more' },
      { icon: Lock, text: 'AES-256-GCM encrypted secret vault with automated rotation and least-privilege scoping' },
      { icon: Zap, text: 'Custom REST/GraphQL builder with retries, rate limits, pagination, and webhook support' },
      { icon: ShieldCheck, text: 'Every tool call inherits agent policy context and writes to the audit log' },
      { icon: Activity, text: 'OAuth 2.0 flow management with token refresh and multi-tenant credential isolation' },
      { icon: BarChart3, text: 'Connector health dashboard — live call counts, error rates, and latency' },
    ],
    visual: <IntegrationVisual />,
  },
  {
    id: 'platform-api',
    Icon: Code2,
    color: 'emerald',
    accent: '#34d399',
    accentBg: 'rgba(52,211,153,0.1)',
    accentBorder: 'rgba(52,211,153,0.25)',
    label: 'Platform API',
    tag: 'Full-Stack REST · Multi-Tenant · OpenAPI 3.1',
    title: 'A platform you can build on, not just buy.',
    desc: 'Every surface of Sirius — agents, flows, executions, policies, secrets, audit — is exposed as a typed REST API. Multi-tenant by default. BaseEntity bakes soft-delete, versioning, and audit into every record.',
    features: [
      { icon: Code2, text: 'OpenAPI 3.1 schema with typed clients for TypeScript and Python (auto-generated)' },
      { icon: ShieldCheck, text: 'Multi-tenant isolation with tenant_id propagated through the entire call stack' },
      { icon: Lock, text: 'BaseEntity model: id, sys_id, tenant_id, created/updated, soft-delete, version — on every resource' },
      { icon: Zap, text: 'JWT-secured with role-based access control, request-state injection, and API key support' },
      { icon: Activity, text: '10,000 req/min rate limit per tenant with burst allowance and per-endpoint overrides' },
      { icon: BarChart3, text: 'Structured webhook delivery with exponential backoff, dead-letter queue, and replay' },
    ],
    visual: <PlatformApiVisual />,
  },
]

/* ─── Product section (alternating layout) ───────────────────────── */
function ProductSection({ product, index }) {
  const { openDemo } = useDemo()
  const { id, Icon, accent, accentBg, accentBorder, label, tag, title, desc, features, visual } = product
  const isEven = index % 2 === 0

  return (
    <section
      id={id}
      className={`relative py-24 border-t border-white/[0.06] overflow-hidden ${
        isEven ? 'bg-ink' : 'bg-ink-800'
      }`}
    >
      {/* Subtle accent glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 60% at ${isEven ? '10%' : '90%'} 50%, ${accentBg}, transparent)`,
        }}
      />

      <div className="container-wide">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          {/* Copy */}
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10.5px] font-bold uppercase tracking-widest mb-6"
              style={{ background: accentBg, borderColor: accentBorder, color: accent }}
            >
              <Icon size={12} />
              {tag}
            </div>
            <h2 className="font-display text-display-md text-white mb-5 leading-tight">
              {title}
            </h2>
            <p className="text-[16px] text-white/65 leading-relaxed mb-8">
              {desc}
            </p>
            <ul className="space-y-3.5 mb-10">
              {features.map(({ icon: FIcon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-md grid place-items-center flex-shrink-0 mt-0.5"
                    style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
                  >
                    <FIcon size={12} style={{ color: accent }} />
                  </span>
                  <span className="text-[13.5px] text-white/75 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href="/docs"
                className="btn h-11 px-5 text-ink font-semibold"
                style={{ background: accent }}
              >
                View docs <ArrowRight size={15} />
              </a>
              <button onClick={openDemo} className="btn btn-glass h-11 px-5">
                Book a demo
              </button>
            </div>
          </Reveal>

          {/* Visual */}
          <Reveal delay={180} className="min-w-0">
            {visual}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Visuals ─────────────────────────────────────────────────────── */

function Shell({ title, children, badge }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-ink-800/80 backdrop-blur-xl shadow-elevated">
      <div className="h-10 px-3 sm:px-4 flex items-center gap-1.5 border-b border-white/10 bg-black/30">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 sm:ml-3 min-w-0 truncate text-[11px] font-mono text-white/45">{title}</span>
        {badge && <div className="ml-auto hidden sm:block flex-shrink-0">{badge}</div>}
      </div>
      {children}
    </div>
  )
}

function AiGrcVisual() {
  const policies = [
    { id: 'GRC-001', name: 'PII Redaction before LLM call',     sev: 'Critical', status: 'Enforced', color: '#fb923c' },
    { id: 'GRC-002', name: 'Tool allow-list · finance.txn',      sev: 'High',     status: 'Enforced', color: '#fbbf24' },
    { id: 'GRC-003', name: 'HITL on disbursements > $10k',       sev: 'High',     status: 'Active',   color: '#fbbf24' },
    { id: 'GRC-004', name: 'Region pinning · EU → eu-west',      sev: 'Critical', status: 'Enforced', color: '#fb923c' },
    { id: 'GRC-005', name: 'Self-critique on CX-facing replies',  sev: 'Medium',   status: 'Active',   color: '#a78bfa' },
  ]
  return (
    <Shell title="sirius-ai-grc / policy-registry" badge={
      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" /> 21 active
      </span>
    }>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { l: 'Policies', v: '21' }, { l: 'Pass rate', v: '99.97%' },
            { l: 'HITL queue', v: '3', hot: true }, { l: 'Evidence packs', v: '8.4k/mo' },
          ].map((m) => (
            <div key={m.l} className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 text-center">
              <div className="text-[9px] font-mono uppercase tracking-wider text-white/40">{m.l}</div>
              <div className={`text-[16px] font-bold mt-1 ${m.hot ? 'text-coral-400' : 'text-white'}`}>{m.v}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 overflow-x-auto">
          <div className="min-w-[480px]">
            <div className="grid grid-cols-[72px_1fr_80px_76px] px-3 h-8 items-center bg-white/[0.04] text-[9.5px] font-mono uppercase tracking-wider text-white/40">
              <span>ID</span><span>Policy</span><span>Severity</span><span className="text-right">Status</span>
            </div>
            {policies.map((p) => (
              <div key={p.id} className="grid grid-cols-[72px_1fr_80px_76px] px-3 h-11 items-center border-t border-white/[0.06] hover:bg-white/[0.03] transition-colors">
                <span className="font-mono text-[10px] text-white/35">{p.id}</span>
                <span className="text-[12px] font-medium text-white/80 truncate pr-2">{p.name}</span>
                <span className="text-[10px] font-bold" style={{ color: p.color }}>{p.sev}</span>
                <span className="text-right text-[10.5px] font-semibold text-emerald-400">{p.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-teal-500/25 bg-teal-500/[0.08] p-3 flex flex-wrap sm:flex-nowrap items-center gap-3">
          <ShieldCheck size={16} className="text-teal-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-semibold text-white">Evidence pack sealed</div>
            <div className="text-[10.5px] font-mono text-white/45 truncate">sha 8f3a9d…b21c · SOC2-CC7.2, ISO-A.8.16, EU-AI-Art.12</div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 flex-shrink-0">Sealed</span>
        </div>
      </div>
    </Shell>
  )
}

function AiStudioVisual() {
  return (
    <Shell title="ai-studio / agents / risk-assessor.v3">
      <div className="p-4 space-y-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="min-w-0">
              <div className="text-[13px] font-bold text-white">risk_assessor</div>
              <div className="text-[11px] text-white/45 font-mono">claude-opus-4-7 · 6 skills · 4 tools</div>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Healthy
            </span>
          </div>
          <div className="font-mono text-[11.5px] text-white/80 bg-black/40 rounded-lg p-3 leading-relaxed overflow-x-auto">
            <div><span className="text-violet-400">skills</span>: [</div>
            <div className="pl-4"><span className="text-teal-400">"rag.policy_docs"</span>,</div>
            <div className="pl-4"><span className="text-teal-400">"few_shot.loan_cases"</span>,</div>
            <div className="pl-4"><span className="text-teal-400">"self_critique"</span>,</div>
            <div className="pl-4"><span className="text-teal-400">"structured_output"</span></div>
            <div>]</div>
            <div className="mt-2"><span className="text-violet-400">tools</span>: [<span className="text-amber-400">"credit_bureau.lookup"</span>, <span className="text-amber-400">"ledger.read"</span>]</div>
            <div className="mt-2"><span className="text-violet-400">governance</span>: <span className="text-emerald-400">{ '{' }</span> <span className="text-white/50">policy: "strict"</span> <span className="text-emerald-400">{ '}' }</span></div>
          </div>
        </div>
        <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-2">
          {[
            { l: 'p95 latency', v: '312ms' }, { l: 'Tokens/run', v: '4.1k' }, { l: 'Cost/1k', v: '$0.08' },
          ].map((m) => (
            <div key={m.l} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
              <div className="text-[9px] font-mono uppercase tracking-wider text-white/40">{m.l}</div>
              <div className="text-[17px] font-bold text-white mt-1">{m.v}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.07] p-3">
          <div className="text-[11px] font-semibold text-violet-400 mb-1.5">Skill execution phases</div>
          <div className="space-y-1.5">
            {[
              { phase: 'pre_llm',  skills: 'rag.policy_docs, few_shot',   pct: '72%', color: 'bg-violet-500' },
              { phase: 'post_llm', skills: 'self_critique, struct_output', pct: '18%', color: 'bg-teal-500' },
              { phase: 'inline',   skills: 'credit_bureau.lookup',         pct: '10%', color: 'bg-amber-500' },
            ].map((s) => (
              <div key={s.phase} className="flex items-center gap-3">
                <span className="text-[9.5px] font-mono text-white/40 w-14 flex-shrink-0">{s.phase}</span>
                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className={`h-full ${s.color}`} style={{ width: s.pct }} />
                </div>
                <span className="text-[10px] text-white/50 w-8 text-right">{s.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  )
}

function FlowBuilderVisual() {
  return (
    <Shell title="flow-builder / loan-application.v3" badge={
      <span className="text-[10px] font-mono text-white/40">DAG · 5 nodes · valid</span>
    }>
      <div className="overflow-x-auto">
      <div className="relative min-w-[480px] bg-white/[0.02] p-4" style={{ minHeight: 320 }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 320" preserveAspectRatio="none">
          <defs>
            <marker id="fl-arr" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.25)" />
            </marker>
          </defs>
          {[
            'M 100,80  C 180,80  180,155  240,155',
            'M 340,155 C 390,155  390,80   440,80',
            'M 340,155 C 390,155  390,235  440,235',
            'M 440,80  C 460,80   460,290  240,290',
            'M 440,235 C 460,235  460,290  240,290',
          ].map((d, i) => (
            <path key={i} d={d} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"
              strokeDasharray="6 5" markerEnd="url(#fl-arr)">
              <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="1.6s" repeatCount="indefinite" />
            </path>
          ))}
        </svg>

        <div className="relative z-10">
          {[
            { x: 'left-4',   y: 'top-10',    label: 'Intake form',      sub: 'trigger',        accent: '#2dd4bf' },
            { x: 'left-1/2 -translate-x-1/2', y: 'top-28', label: 'KYC Agent', sub: 'agent · RAG + CoT', accent: '#a78bfa' },
            { x: 'right-4',  y: 'top-10',    label: 'Approve',          sub: 'HITL gate',      accent: '#fbbf24' },
            { x: 'right-4',  y: 'top-44',    label: 'Auto-reject',      sub: 'decision',       accent: '#fb923c' },
            { x: 'left-1/2 -translate-x-1/2', y: 'bottom-4', label: 'Notify customer', sub: 'integration', accent: '#34d399' },
          ].map((n) => (
            <div
              key={n.label}
              className={`absolute ${n.x} ${n.y} rounded-xl border border-white/10 bg-ink-800/90 backdrop-blur px-3 py-2.5 w-[140px] shadow-elevated`}
            >
              <div className="text-[9px] font-mono uppercase tracking-wider mb-0.5" style={{ color: n.accent }}>{n.sub}</div>
              <div className="text-[12px] font-bold text-white">{n.label}</div>
              <div className="mt-1.5 w-6 h-1 rounded-full" style={{ background: n.accent, opacity: 0.7 }} />
            </div>
          ))}
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-ink-800/90 px-2.5 py-1.5">
          <Eye size={11} className="text-white/45" />
          <span className="text-[10px] font-mono text-white/45">test mode · isolated</span>
        </div>
      </div>
      </div>
    </Shell>
  )
}

function IntegrationVisual() {
  const connectors = [
    { name: 'Salesforce', kind: 'CRM',      active: true,  initial: 'S' },
    { name: 'ServiceNow', kind: 'ITSM',     active: true,  initial: 'N' },
    { name: 'SAP S/4',   kind: 'ERP',      active: true,  initial: 'A' },
    { name: 'Workday',   kind: 'HR',        active: false, initial: 'W' },
    { name: 'Snowflake', kind: 'Warehouse', active: true,  initial: 'F' },
    { name: 'Slack',     kind: 'Comms',     active: true,  initial: 'L' },
    { name: 'Jira',      kind: 'PM',        active: true,  initial: 'J' },
    { name: 'M365',      kind: 'Comms',     active: false, initial: 'M' },
    { name: 'Custom API',kind: 'Builder',   active: true,  initial: '+', custom: true },
  ]
  return (
    <Shell title="integration-studio / connectors" badge={
      <span className="text-[10px] font-mono text-white/45">7 of 9 active · 0 incidents</span>
    }>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {connectors.map((c) => (
            <div
              key={c.name}
              className={`rounded-xl border p-3 ${
                c.custom
                  ? 'border-dashed border-amber-400/30 bg-amber-400/[0.06]'
                  : c.active
                    ? 'border-white/10 bg-white/[0.04]'
                    : 'border-white/[0.06] bg-white/[0.02] opacity-50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg grid place-items-center text-[13px] font-black ${c.custom ? 'bg-amber-400/20 text-amber-400' : 'bg-white/10 text-white'}`}>
                  {c.initial}
                </div>
                {c.active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1" />
                )}
              </div>
              <div className="text-[11.5px] font-bold text-white">{c.name}</div>
              <div className="text-[10px] text-white/40">{c.kind}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 flex flex-wrap sm:flex-nowrap items-center gap-3">
          <Lock size={14} className="text-amber-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-semibold text-white">Secret Vault · AES-256-GCM</div>
            <div className="text-[10.5px] font-mono text-white/45">14 secrets · rotated avg every 47 days · 0 expired</div>
          </div>
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex-shrink-0">Encrypted</span>
        </div>
      </div>
    </Shell>
  )
}

function PlatformApiVisual() {
  return (
    <Shell title="platform-api · openapi 3.1" badge={
      <span className="text-[10px] font-mono text-white/45">142 endpoints · v1.0</span>
    }>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">GET</span>
          <span className="text-[12px] font-mono text-white/80 break-all">/v1.0/ai-studio/agents</span>
          <span className="sm:ml-auto text-[10px] font-bold text-emerald-400">200 OK · 42ms</span>
        </div>
        <div className="rounded-xl bg-black/50 border border-white/10 font-mono text-[11.5px] leading-relaxed p-4 overflow-x-auto">
          <div><span className="text-white/40">{'// Response'}</span></div>
          <div><span className="text-emerald-400">[</span></div>
          <div className="pl-4"><span className="text-emerald-400">{'{'}</span></div>
          <div className="pl-8"><span className="text-amber-400">"id"</span>: <span className="text-teal-400">"agt_b21c9f…"</span>,</div>
          <div className="pl-8"><span className="text-amber-400">"name"</span>: <span className="text-teal-400">"risk_assessor"</span>,</div>
          <div className="pl-8"><span className="text-amber-400">"platform"</span>: <span className="text-teal-400">"anthropic"</span>,</div>
          <div className="pl-8"><span className="text-amber-400">"skills"</span>: <span className="text-violet-400">["rag.policy_docs", "self_critique"]</span>,</div>
          <div className="pl-8"><span className="text-amber-400">"tenant_id"</span>: <span className="text-teal-400">"tnt_acme"</span>,</div>
          <div className="pl-8"><span className="text-amber-400">"version"</span>: <span className="text-teal-400">"3.2.0"</span>,</div>
          <div className="pl-8"><span className="text-amber-400">"governance"</span>: <span className="text-violet-400">{'{ "policy": "strict", "abom_id": "ab_…" }'}</span></div>
          <div className="pl-4"><span className="text-emerald-400">{'}'}</span></div>
          <div><span className="text-emerald-400">]</span></div>
        </div>
        <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-2">
          {[
            { l: 'p99 latency', v: '88ms' },
            { l: 'Uptime SLA', v: '99.99%' },
            { l: 'Rate limit', v: '10k/min' },
          ].map((m) => (
            <div key={m.l} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
              <div className="text-[9px] font-mono uppercase tracking-wider text-white/40">{m.l}</div>
              <div className="text-[16px] font-bold text-white mt-1">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function ProductsPage() {
  return (
    <div className="bg-ink overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-ink text-white pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh-dark" />
        <div
          className="absolute inset-0 -z-10 bg-grid-dark opacity-40"
          style={{ backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, black, transparent 90%)', WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, black, transparent 90%)' }}
        />
        <div className="container-wide text-center">
          <Reveal>
            <div className="eyebrow-dark inline-flex h-auto min-h-7 py-1 mb-6">Five products · One governed runtime</div>
            <h1 className="font-display text-display-xl text-white mb-5">
              The complete AI platform<br className="hidden sm:block" />
              <span className="text-gradient"> for the enterprise.</span>
            </h1>
            <p className="text-[17px] text-white/65 leading-relaxed max-w-2xl mx-auto mb-10">
              Every component you need to build, deploy, and govern AI agents at scale —
              from the policy engine to the flow graph to the 50+ connector library.
              Purpose-built for regulated industries.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {products.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-white/15 bg-white/[0.06] text-[13px] font-semibold text-white/80 hover:bg-white/[0.12] hover:text-white hover:border-white/25 transition-all"
                >
                  <p.Icon size={13} />
                  {p.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product sections */}
      {products.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} />
      ))}

      <CTASection />
      <SiteFooter />
    </div>
  )
}
