import { useState } from 'react'
import { ShieldCheck, Workflow, Boxes, Plug, Code2, ArrowRight, CheckCircle2, Lock, BarChart3, Eye, AlertTriangle } from 'lucide-react'
import Reveal from './Reveal'

const products = [
  {
    id: 'aegis',
    Icon: ShieldCheck,
    label: 'AI GRC',
    sub: 'Governance & Risk',
    accent: 'teal',
    title: 'AI governance, baked into every run.',
    lede: 'Policy engine, ABOM, evidence packs, HITL gates, and a control tower — all wired into the runtime, not bolted on after the fact.',
    bullets: [
      'Policy engine with pre/post checkpoints across agents, tools, and flows',
      'Approval gates and HITL routing with full reviewer audit trail',
      'Agent Bill of Materials (ABOM) generated on every release',
      'Evidence packs mapped to SOC 2, ISO 27001, HIPAA, EU AI Act',
    ],
  },
  {
    id: 'studio',
    Icon: Workflow,
    label: 'AI Studio',
    sub: 'Agents · Skills · Tools',
    accent: 'violet',
    title: 'Compose autonomous agents like building blocks.',
    lede: 'Workflows orchestrate agents. Agents reason. Skills shape *how* they reason. Tools execute *what* they do. A clean four-layer architecture you can actually reason about.',
    bullets: [
      '8 first-class skill types: RAG, Chain-of-Thought, Few-Shot, Self-Critique, Structured Output, Summarization, Prompt Template, Custom',
      'Execution phases: pre_prompt, pre_llm, post_llm, inline — full control over the agent loop',
      'Platform-agnostic LLM adapters: Anthropic, OpenAI, Azure, Bedrock, Vertex',
      'Versioned agents, skills, and tools with rollback and A/B test surfaces',
    ],
  },
  {
    id: 'builder',
    Icon: Boxes,
    label: 'Flow Builder',
    sub: 'Visual DAG composer',
    accent: 'coral',
    title: 'The flow graph is the source of truth.',
    lede: 'Drag agents, decisions, integrations, and code blocks onto a canvas. The DAG you ship is the DAG that runs in production — no translation layer.',
    bullets: [
      'Typed input bindings: static, context, previous-step, manual',
      'Prompt-node versioning with required promptVersionId enforcement',
      'Inline test mode that never touches the production run path',
      'Live runtime inspector with step-by-step replay',
    ],
  },
  {
    id: 'integration',
    Icon: Plug,
    label: 'Integration Studio',
    sub: '50+ connectors + custom API builder',
    accent: 'amber',
    title: 'Reach every system. Without writing glue code.',
    lede: 'Pre-built connectors to the apps your enterprise already runs, plus a custom API builder for whatever else. Secrets stay encrypted; governance follows the call across the wire.',
    bullets: [
      'Native connectors: Salesforce, ServiceNow, SAP, Workday, Snowflake, Slack, Jira, M365…',
      'Encrypted secret vault (AES-256-GCM) with rotation and least-privilege scoping',
      'Custom REST/GraphQL builder with retries, rate limits, and webhooks',
      'Every tool call inherits agent policies and audit context',
    ],
  },
  {
    id: 'api',
    Icon: Code2,
    label: 'Platform API',
    sub: 'Full-stack REST · BaseEntity · Multi-tenant',
    accent: 'emerald',
    title: 'A platform you can build on, not just buy.',
    lede: 'FastAPI-backed REST surface across agents, flows, executions, policies, secrets, and audit. Multi-tenant by default. BaseEntity model means every record has soft-delete, versioning, audit, and tenant scoping out of the box.',
    bullets: [
      'OpenAPI 3.1 schema, typed clients for TS/Python',
      'Multi-tenant isolation with tenant_id propagation through the stack',
      'BaseEntity: id, sys_id, tenant_id, created/updated audit, soft-delete, version',
      'JWT-secured with role-based access control and request-state injection',
    ],
  },
]

const accentMap = {
  teal:    { chip: 'bg-teal-50 text-teal-700 border-teal/20',       dot: 'bg-teal-500',    ring: 'ring-teal-500/30',    text: 'text-teal-600',    bar: 'bg-teal' },
  violet:  { chip: 'bg-violet-50 text-violet-700 border-violet/20', dot: 'bg-violet-500',  ring: 'ring-violet-500/30',  text: 'text-violet-600',  bar: 'bg-violet' },
  coral:   { chip: 'bg-coral-50 text-coral-600 border-coral/20',    dot: 'bg-coral-500',   ring: 'ring-coral-500/30',   text: 'text-coral-600',   bar: 'bg-coral' },
  amber:   { chip: 'bg-amber-50 text-amber-700 border-amber/20',    dot: 'bg-amber-500',   ring: 'ring-amber-500/30',   text: 'text-amber-600',   bar: 'bg-amber' },
  emerald: { chip: 'bg-emerald-50 text-emerald-700 border-emerald/20', dot: 'bg-emerald-500', ring: 'ring-emerald-500/30', text: 'text-emerald-600', bar: 'bg-emerald' },
}

export default function ProductShowcase() {
  const [active, setActive] = useState(products[0].id)
  const current = products.find((p) => p.id === active)
  const a = accentMap[current.accent]

  return (
    <section id="solutions" className="bg-cream py-24 sm:py-32 border-y border-line">
      <div className="container-wide">
        {/* Header */}
        <Reveal className="max-w-3xl mb-14">
          <div className="eyebrow eyebrow-dot">The Sirius Platform</div>
          <h2 className="mt-5 font-display text-display-lg text-ink">
            Five products. One governed runtime.
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Sirius AI GRC sits underneath everything else. Studio composes the agents.
            Builder draws the flows. Integration Studio reaches every system.
            Platform API exposes it all so your team can build on top.
          </p>
        </Reveal>

        {/* Tab rail */}
        <div className="relative">
          <div className="overflow-x-auto -mx-6 px-6 pb-1 lg:overflow-visible">
            <div role="tablist" className="inline-flex lg:flex gap-2 min-w-max lg:min-w-0">
              {products.map((p) => {
                const isActive = p.id === active
                const pa = accentMap[p.accent]
                return (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(p.id)}
                    className={`group flex items-center gap-2.5 h-11 pl-2.5 pr-4 rounded-full border transition-all ${
                      isActive
                        ? `bg-ink text-white border-ink shadow-card`
                        : 'bg-white text-ink-700 border-line hover:border-ink/25'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-full grid place-items-center ${isActive ? 'bg-white/10' : pa.chip + ' border'}`}>
                      <p.Icon size={14} />
                    </span>
                    <span className="text-[13px] font-semibold tracking-tight">{p.label}</span>
                    <span className={`hidden sm:inline text-[10.5px] font-mono uppercase tracking-wider ${isActive ? 'text-white/55' : 'text-muted-soft'}`}>
                      {p.sub}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 lg:gap-14 items-start">
          {/* Left: copy */}
          <div className="lg:pt-2">
            <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md border text-[11px] font-bold uppercase tracking-wider ${a.chip}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
              {current.label} · {current.sub}
            </div>
            <h3 className="mt-5 font-display text-display-md text-ink">
              {current.title}
            </h3>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              {current.lede}
            </p>
            <ul className="mt-7 space-y-3.5">
              {current.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[14.5px] text-ink-700 leading-relaxed">
                  <CheckCircle2 size={18} className={`flex-shrink-0 mt-0.5 ${a.text}`} strokeWidth={2.25} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex items-center gap-3">
              <a href={`#${current.id}-details`} className="btn btn-primary">
                Explore {current.label} <ArrowRight size={15} />
              </a>
              <a href="#docs" className="btn btn-secondary">Read the docs</a>
            </div>
          </div>

          {/* Right: mockup */}
          <div className="relative">
            {active === 'aegis' &&     <AegisMockup />}
            {active === 'studio' &&    <StudioMockup />}
            {active === 'builder' &&   <BuilderMockup />}
            {active === 'integration' && <IntegrationMockup />}
            {active === 'api' &&       <ApiMockup />}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------ MOCKUPS ------------ */

function MockShell({ title, children, badge }) {
  return (
    <div className="relative rounded-2xl bg-paper border border-line shadow-elevated overflow-hidden">
      <div className="h-10 px-4 flex items-center gap-1.5 border-b border-line bg-mist">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-3 text-[11px] font-mono text-muted">{title}</div>
        {badge && <div className="ml-auto">{badge}</div>}
      </div>
      {children}
    </div>
  )
}

function AegisMockup() {
  const rows = [
    { id: 'POL-014', name: 'PII Redaction · before LLM call',          scope: 'agents/*',     status: 'Enforced',  severity: 'Critical' },
    { id: 'POL-022', name: 'Tool allow-list · finance.transactions',   scope: 'flows/loan-*', status: 'Enforced',  severity: 'High' },
    { id: 'POL-031', name: 'HITL on > $10k disbursements',             scope: 'flows/loan-*', status: 'Active',    severity: 'High' },
    { id: 'POL-047', name: 'Region pinning · EU residents → eu-west',  scope: 'tenant',       status: 'Enforced',  severity: 'Critical' },
    { id: 'POL-051', name: 'Self-critique on customer-facing replies', scope: 'agents/cx-*',  status: 'Active',    severity: 'Medium' },
  ]
  const sevColor = { Critical: 'bg-coral-50 text-coral-600 border-coral-500/30', High: 'bg-amber-50 text-amber-700 border-amber-500/30', Medium: 'bg-violet-50 text-violet-700 border-violet-500/30' }
  return (
    <MockShell title="aegis / policy-registry" badge={
      <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-emerald-600">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" /> 21 active
      </span>
    }>
      <div className="p-4">
        {/* Top stat strip */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { l: 'Policies', v: '21', d: 'Active' },
            { l: 'Pass rate', v: '99.97%', d: '24h' },
            { l: 'HITL queue', v: '3', d: 'Pending', hot: true },
            { l: 'Evidence', v: '8.4k', d: 'Packs / mo' },
          ].map((m) => (
            <div key={m.l} className="rounded-lg border border-line bg-mist/40 p-2.5">
              <div className="mono-label text-[9px]">{m.l}</div>
              <div className="mt-1 text-[16px] font-bold text-ink">{m.v}</div>
              <div className={`text-[10px] font-semibold ${m.hot ? 'text-coral-600' : 'text-muted-soft'}`}>{m.d}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-lg border border-line overflow-hidden overflow-x-auto">
          <div className="min-w-[560px]">
            <div className="grid grid-cols-[88px_1fr_140px_110px_84px] bg-mist/60 px-3 h-9 items-center mono-label">
              <span>ID</span><span>Policy</span><span>Scope</span><span>Severity</span><span className="text-right">Status</span>
            </div>
            <div>
              {rows.map((r) => (
                <div key={r.id} className="grid grid-cols-[88px_1fr_140px_110px_84px] px-3 h-12 items-center border-t border-line hover:bg-mist/40 transition-colors">
                  <span className="font-mono text-[11px] text-muted">{r.id}</span>
                  <div className="min-w-0 flex items-center gap-2">
                    <Lock size={13} className="text-muted-soft flex-shrink-0" />
                    <span className="text-[12.5px] font-medium text-ink truncate">{r.name}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted">{r.scope}</span>
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase border w-fit ${sevColor[r.severity]}`}>{r.severity}</span>
                  <span className="text-right text-[11px] font-semibold text-emerald-600">{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evidence banner */}
        <div className="mt-4 rounded-lg border border-teal/30 bg-teal-50 p-3 flex items-center gap-3">
          <ShieldCheck size={18} className="text-teal-600" />
          <div className="flex-1 min-w-0">
            <div className="text-[12.5px] font-semibold text-ink">Evidence pack written</div>
            <div className="text-[11px] text-muted font-mono truncate">sha 8f3a9d…b21c · mapped: SOC2-CC7.2, ISO-A.8.16, EU-AI-Art.12</div>
          </div>
          <span className="text-[10.5px] font-bold uppercase tracking-wider text-teal-700">Sealed</span>
        </div>
      </div>
    </MockShell>
  )
}

function StudioMockup() {
  return (
    <MockShell title="ai-studio / agents / risk-assessor.v3" badge={
      <span className="text-[10.5px] font-mono text-muted">execution_mode: interactive</span>
    }>
      <div className="grid sm:grid-cols-[170px_1fr]">
        <aside className="hidden sm:block border-r border-line bg-mist/40 p-2.5 space-y-0.5 min-h-[420px]">
          <div className="mono-label px-2 pb-2">Agent loop</div>
          {[
            { l: 'system prompt', phase: 'pre_prompt' },
            { l: 'rag · policy docs', phase: 'pre_llm', active: true },
            { l: 'few-shot examples', phase: 'pre_llm' },
            { l: 'LLM call', phase: 'llm' },
            { l: 'self-critique', phase: 'post_llm' },
            { l: 'structured output', phase: 'post_llm' },
            { l: 'tool: credit_bureau', phase: 'inline' },
            { l: 'tool: ledger.read', phase: 'inline' },
          ].map((r) => (
            <div key={r.l} className={`px-2.5 py-2 rounded-md ${r.active ? 'bg-violet-50 border border-violet-500/25' : 'hover:bg-white/60'}`}>
              <div className={`text-[12px] font-semibold ${r.active ? 'text-violet-700' : 'text-ink'}`}>{r.l}</div>
              <div className="text-[9.5px] font-mono uppercase tracking-wider text-muted-soft">{r.phase}</div>
            </div>
          ))}
        </aside>

        <div className="p-4 bg-grid bg-[length:32px_32px]">
          <div className="rounded-lg bg-paper border border-line shadow-card p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[13px] font-bold text-ink">risk_assessor</div>
                <div className="text-[11px] text-muted">claude-opus-4-7 · skills: 6 · tools: 4</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Healthy
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { l: 'p95', v: '312ms' }, { l: 'tokens / run', v: '4.1k' }, { l: 'cost / 1k', v: '$0.08' },
              ].map((m) => (
                <div key={m.l} className="rounded-md border border-line p-2">
                  <div className="mono-label text-[9px]">{m.l}</div>
                  <div className="text-[15px] font-bold text-ink mt-0.5">{m.v}</div>
                </div>
              ))}
            </div>

            <div className="rounded-md bg-ink text-white/85 font-mono text-[11.5px] leading-relaxed p-3">
              <span className="text-violet-400">skill</span> <span className="text-amber-400">rag.policy_docs</span> {'{'}<br/>
              {'  '}<span className="text-white/55">phase:</span> <span className="text-emerald-400">"pre_llm"</span>,<br/>
              {'  '}<span className="text-white/55">retriever:</span> <span className="text-emerald-400">"weaviate://policies"</span>,<br/>
              {'  '}<span className="text-white/55">k:</span> <span className="text-coral-400">6</span><br/>
              {'}'}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-line bg-paper p-3">
              <div className="mono-label text-[9.5px]">Last 24h</div>
              <div className="text-[18px] font-bold text-ink mt-1">8,412 <span className="text-[11px] font-semibold text-muted">runs</span></div>
              <svg viewBox="0 0 120 28" className="mt-1 w-full">
                <polyline fill="none" stroke="#7c3aed" strokeWidth="1.5" points="0,22 12,18 24,20 36,12 48,14 60,8 72,10 84,4 96,8 108,5 120,2"/>
              </svg>
            </div>
            <div className="rounded-lg border border-line bg-paper p-3">
              <div className="mono-label text-[9.5px]">Skill phase mix</div>
              <div className="mt-2 space-y-1.5">
                {[{l:'pre_llm', w:'72%', c:'bg-violet-500'},{l:'post_llm', w:'18%', c:'bg-teal'},{l:'inline', w:'10%', c:'bg-amber-500'}].map(s=>(
                  <div key={s.l} className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-muted w-12">{s.l}</span>
                    <span className="flex-1 h-1.5 rounded-full bg-mist overflow-hidden">
                      <span className={`block h-full ${s.c}`} style={{width:s.w}} />
                    </span>
                    <span className="text-[10px] font-semibold text-ink w-8 text-right">{s.w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  )
}

function BuilderMockup() {
  return (
    <MockShell title="flow-builder / customer-onboarding.v2" badge={
      <span className="text-[10.5px] font-mono text-muted">DAG · 7 nodes · valid</span>
    }>
      <div className="relative h-[440px] bg-grid bg-[length:24px_24px] bg-mist/40">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 440" preserveAspectRatio="none">
          <defs>
            <marker id="arr" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#a8a29e"/>
            </marker>
          </defs>
          {[
            ['M 100,80  C 180,80  180,160  260,160'],
            ['M 360,160 C 420,160  420,80   480,80'],
            ['M 360,160 C 420,160  420,240  480,240'],
            ['M 480,80  C 540,80   540,330  300,330'],
            ['M 480,240 C 540,240  540,330  300,330'],
          ].map((d, i) => (
            <path key={i} d={d[0]} fill="none" stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#arr)">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.4s" repeatCount="indefinite"/>
            </path>
          ))}
        </svg>

        {[
          { x: 28,  y: 50,  label: 'Intake form', sub: 'trigger',  color: 'teal' },
          { x: 200, y: 130, label: 'KYC agent',   sub: 'agent · RAG', color: 'violet' },
          { x: 420, y: 50,  label: 'Approve',     sub: 'HITL gate', color: 'amber' },
          { x: 420, y: 210, label: 'Auto-reject', sub: 'decision', color: 'coral' },
          { x: 240, y: 300, label: 'Notify customer', sub: 'integration · email', color: 'emerald' },
        ].map((n) => (
          <div key={n.label} className="absolute rounded-xl bg-paper border border-line shadow-card px-3 py-2.5 w-[150px]" style={{ left: n.x, top: n.y }}>
            <div className={`mono-label !text-[9px] ${
              n.color==='teal'?'!text-teal-600': n.color==='violet'?'!text-violet-600': n.color==='amber'?'!text-amber-600': n.color==='coral'?'!text-coral-600':'!text-emerald-600'
            }`}>{n.sub}</div>
            <div className="text-[12.5px] font-bold text-ink mt-0.5">{n.label}</div>
          </div>
        ))}

        <div className="absolute bottom-3 right-3 rounded-lg bg-paper border border-line shadow-card px-2.5 py-1.5 flex items-center gap-2">
          <Eye size={12} className="text-muted" />
          <span className="text-[10.5px] font-mono text-muted">test mode · isolated</span>
        </div>
      </div>
    </MockShell>
  )
}

function IntegrationMockup() {
  const tiles = [
    { name: 'Salesforce', kind: 'CRM',     v: 'OAuth 2',  active: true },
    { name: 'ServiceNow', kind: 'ITSM',    v: 'Bearer',   active: true },
    { name: 'SAP S/4',    kind: 'ERP',     v: 'OAuth 2',  active: true },
    { name: 'Workday',    kind: 'HR',      v: 'Bearer',   active: false },
    { name: 'Snowflake',  kind: 'Warehouse', v: 'Key-pair', active: true },
    { name: 'Slack',      kind: 'Comms',   v: 'OAuth 2',  active: true },
    { name: 'Jira',       kind: 'PM',      v: 'API key',  active: true },
    { name: 'M365',       kind: 'Comms',   v: 'OAuth 2',  active: false },
    { name: 'Custom REST',kind: 'Builder', v: 'OAuth 2',  active: true, custom: true },
  ]
  return (
    <MockShell title="integration-studio / connectors" badge={
      <span className="text-[10.5px] font-mono text-muted">7 of 9 enabled · 0 incidents</span>
    }>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2.5">
          {tiles.map((t) => (
            <div key={t.name} className={`rounded-xl border p-3 ${t.active ? 'bg-paper border-line shadow-card' : 'bg-mist/40 border-line/70'} ${t.custom ? '!border-dashed !border-teal/40 bg-teal-50/40' : ''}`}>
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-lg bg-ink text-white grid place-items-center font-bold text-[14px]">{t.name[0]}</div>
                {t.active ? (
                  <span className="inline-flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-wider text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> live
                  </span>
                ) : (
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-muted-soft">idle</span>
                )}
              </div>
              <div className="mt-2.5 text-[13px] font-bold text-ink">{t.name}</div>
              <div className="text-[10.5px] text-muted">{t.kind}</div>
              <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono text-muted-soft">
                <Lock size={9} /> {t.v}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-line bg-mist/30 p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-ink text-white grid place-items-center"><Lock size={14}/></div>
          <div className="flex-1 min-w-0">
            <div className="text-[12.5px] font-semibold text-ink">Secret Vault · AES-256-GCM</div>
            <div className="text-[11px] text-muted font-mono">14 secrets · rotated avg every 47 days · 0 expired</div>
          </div>
          <span className="text-[10.5px] font-bold uppercase tracking-wider text-teal-700">Encrypted</span>
        </div>
      </div>
    </MockShell>
  )
}

function ApiMockup() {
  return (
    <MockShell title="platform-api · openapi 3.1" badge={
      <span className="text-[10.5px] font-mono text-muted">v1.0 · 142 endpoints</span>
    }>
      <div className="grid sm:grid-cols-[180px_1fr]">
        <aside className="hidden sm:block border-r border-line bg-mist/40 p-2.5 space-y-0.5 min-h-[420px]">
          <div className="mono-label px-2 pb-2">Resources</div>
          {[
            { m: 'GET',  p: '/agents', active: true },
            { m: 'POST', p: '/agents' },
            { m: 'GET',  p: '/flows' },
            { m: 'POST', p: '/executions' },
            { m: 'GET',  p: '/policies' },
            { m: 'GET',  p: '/secrets' },
            { m: 'GET',  p: '/audit' },
          ].map((e) => (
            <div key={e.p} className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${e.active ? 'bg-paper border border-line shadow-card' : ''}`}>
              <span className={`text-[9px] font-bold w-9 text-center rounded ${e.m === 'GET' ? 'bg-emerald-50 text-emerald-700' : 'bg-violet-50 text-violet-700'}`}>{e.m}</span>
              <span className="text-[11.5px] font-mono text-ink">{e.p}</span>
            </div>
          ))}
        </aside>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">GET</span>
            <span className="text-[12.5px] font-mono text-ink">/v1.0/ai-studio/agents</span>
            <span className="ml-auto text-[10.5px] font-bold uppercase tracking-wider text-emerald-600">200 OK · 42ms</span>
          </div>

          <div className="rounded-lg bg-ink text-white/85 font-mono text-[11px] leading-relaxed p-3 overflow-hidden">
            <div><span className="text-emerald-400">[</span></div>
            <div>{'  '}<span className="text-emerald-400">{'{'}</span></div>
            <div>{'    '}<span className="text-amber-400">"id"</span>: <span className="text-teal-400">"agt_b21c…"</span>,</div>
            <div>{'    '}<span className="text-amber-400">"name"</span>: <span className="text-teal-400">"risk_assessor"</span>,</div>
            <div>{'    '}<span className="text-amber-400">"platform"</span>: <span className="text-teal-400">"anthropic"</span>,</div>
            <div>{'    '}<span className="text-amber-400">"skills"</span>: <span className="text-coral-400">[ "rag.policy", "self_critique", … ]</span>,</div>
            <div>{'    '}<span className="text-amber-400">"tools"</span>: <span className="text-coral-400">[ "credit_bureau.lookup", … ]</span>,</div>
            <div>{'    '}<span className="text-amber-400">"tenant_id"</span>: <span className="text-teal-400">"tnt_acme"</span>,</div>
            <div>{'    '}<span className="text-amber-400">"execution_mode"</span>: <span className="text-teal-400">"interactive"</span>,</div>
            <div>{'    '}<span className="text-amber-400">"version"</span>: <span className="text-teal-400">"3.2.0"</span></div>
            <div>{'  '}<span className="text-emerald-400">{'}'}</span></div>
            <div><span className="text-emerald-400">]</span></div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { l: 'p99', v: '88ms' },
              { l: 'Uptime', v: '99.99%' },
              { l: 'Rate-limit', v: '10k / min' },
            ].map((m) => (
              <div key={m.l} className="rounded-md border border-line p-2">
                <div className="mono-label text-[9px]">{m.l}</div>
                <div className="text-[14px] font-bold text-ink mt-0.5">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockShell>
  )
}
