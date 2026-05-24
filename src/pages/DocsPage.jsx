import { useState } from 'react'
import {
  Search, ArrowRight, Book, Code2, Cpu, Boxes, ShieldCheck, Plug,
  Zap, GitBranch, Terminal, ExternalLink, ChevronRight, Clock
} from 'lucide-react'
import Navigation from '../components/Navigation'
import SiteFooter from '../components/SiteFooter'
import Reveal from '../components/Reveal'

/* ─── Data ────────────────────────────────────────────────────────── */
const categories = [
  {
    icon: Zap,
    color: 'teal',
    accent: '#2dd4bf',
    accentBg: 'rgba(45,212,191,0.1)',
    accentBorder: 'rgba(45,212,191,0.2)',
    title: 'Getting Started',
    desc: 'Quickstart guide, platform overview, first agent in 15 minutes.',
    articles: ['Platform overview', 'Your first agent', 'Connect an integration', 'Run a governed flow'],
  },
  {
    id: 'api-reference',
    icon: Code2,
    color: 'violet',
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.1)',
    accentBorder: 'rgba(167,139,250,0.2)',
    title: 'API Reference',
    desc: 'OpenAPI 3.1 spec, typed clients for Python & TypeScript, rate limits.',
    articles: ['Authentication & API keys', 'Agents endpoint', 'Executions endpoint', 'Audit & evidence'],
  },
  {
    icon: Cpu,
    color: 'violet',
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.1)',
    accentBorder: 'rgba(167,139,250,0.2)',
    title: 'Agents & Skills',
    desc: 'Build autonomous agents, configure skill types, manage tool permissions.',
    articles: ['Agent anatomy', '8 skill types explained', 'Execution phases', 'Tool governance'],
  },
  {
    id: 'flow-builder-docs',
    icon: Boxes,
    color: 'coral',
    accent: '#fb923c',
    accentBg: 'rgba(251,146,60,0.1)',
    accentBorder: 'rgba(251,146,60,0.2)',
    title: 'Flow Builder',
    desc: 'DAG composition, node types, HITL gates, test mode, deployment.',
    articles: ['Flow concepts', 'Node types reference', 'HITL approval setup', 'Deploying flows'],
  },
  {
    id: 'policy-engine',
    icon: ShieldCheck,
    color: 'teal',
    accent: '#2dd4bf',
    accentBg: 'rgba(45,212,191,0.1)',
    accentBorder: 'rgba(45,212,191,0.2)',
    title: 'Sirius AI GRC',
    desc: 'Policy engine, ABOM, evidence packs, compliance mapping, Control Tower.',
    articles: ['Policy engine overview', 'Writing policy rules', 'Evidence pack schema', 'Compliance mapping packs'],
  },
  {
    icon: Plug,
    color: 'amber',
    accent: '#fbbf24',
    accentBg: 'rgba(251,191,36,0.1)',
    accentBorder: 'rgba(251,191,36,0.2)',
    title: 'Integrations',
    desc: 'Native connectors, secret vault, custom REST/GraphQL builder.',
    articles: ['Connector catalog', 'OAuth setup guide', 'Custom API builder', 'Secret vault & rotation'],
  },
]

const guides = [
  { icon: GitBranch, title: 'Build a loan-application flow with HITL approval', time: '20 min', tag: 'Flow Builder + AI GRC' },
  { icon: ShieldCheck, title: 'Map your agent deployment to SOC 2 Type II', time: '35 min', tag: 'Compliance' },
  { icon: Cpu, title: 'RAG + Self-Critique: building a research agent', time: '25 min', tag: 'AI Studio' },
  { icon: Plug, title: 'Connect Salesforce and Snowflake in under 10 minutes', time: '10 min', tag: 'Integrations' },
  { icon: Code2, title: 'Multi-tenant agent deployment with the Platform API', time: '30 min', tag: 'Platform API' },
  { icon: Zap, title: 'From first agent to first evidence pack: end-to-end', time: '45 min', tag: 'Getting Started' },
]

const sdks = [
  { lang: 'Python', pkg: 'pip install sirius-sdk', badge: 'Latest: v0.9.2', color: '#3b82f6' },
  { lang: 'TypeScript', pkg: 'npm install @sirius/sdk', badge: 'Latest: v0.9.2', color: '#f59e0b' },
  { lang: 'REST', pkg: 'api.sirius.sudheeksha.co.in/v1.0', badge: 'OpenAPI 3.1', color: '#10b981' },
]

/* ─── Code snippets ───────────────────────────────────────────────── */
const snippets = {
  python: `from sirius import SiriusClient

client = SiriusClient(api_key="sk-sirius-...")

# Create a governed agent
agent = client.agents.create(
    name="risk-assessor",
    platform="anthropic",
    model="claude-opus-4-7",
    skills=["rag.policy_docs", "self_critique"],
    tools=["credit_bureau.lookup"],
    governance={"policy": "strict"},
)

# Run it — policy is enforced automatically
execution = agent.run(
    input="Assess loan application #LA-2847",
    context={"applicant_id": "usr_abc123"},
)

print(execution.output)
print(execution.evidence_pack_id)  # sha of the sealed pack`,

  typescript: `import { SiriusClient } from '@sirius/sdk';

const client = new SiriusClient({ apiKey: 'sk-sirius-...' });

// Create a governed agent
const agent = await client.agents.create({
  name: 'risk-assessor',
  platform: 'anthropic',
  model: 'claude-opus-4-7',
  skills: ['rag.policy_docs', 'self_critique'],
  tools: ['credit_bureau.lookup'],
  governance: { policy: 'strict' },
});

// Run it — policy is enforced automatically
const execution = await agent.run({
  input: 'Assess loan application #LA-2847',
  context: { applicantId: 'usr_abc123' },
});

console.log(execution.output);
console.log(execution.evidencePackId); // sha of the sealed pack`,

  rest: `# Create an agent
curl -X POST https://api.sirius.sudheeksha.co.in/v1.0/ai-studio/agents \\
  -H "Authorization: Bearer sk-sirius-..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "risk-assessor",
    "platform": "anthropic",
    "model": "claude-opus-4-7",
    "skills": ["rag.policy_docs", "self_critique"],
    "tools": ["credit_bureau.lookup"],
    "governance": { "policy": "strict" }
  }'

# Run it
curl -X POST https://api.sirius.sudheeksha.co.in/v1.0/executions \\
  -H "Authorization: Bearer sk-sirius-..." \\
  -d '{ "agent_id": "agt_b21c…", "input": "Assess #LA-2847" }'`,
}

/* ─── Components ──────────────────────────────────────────────────── */
function CategoryCard({ cat, delay }) {
  const { id, icon: Icon, accent, accentBg, accentBorder, title, desc, articles } = cat
  return (
    <Reveal id={id} delay={delay} className="rounded-2xl border border-line bg-white p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div
        className="w-11 h-11 rounded-xl grid place-items-center mb-5 flex-shrink-0"
        style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
      >
        <Icon size={20} style={{ color: accent }} />
      </div>
      <h3 className="text-[16px] font-bold text-ink mb-2">{title}</h3>
      <p className="text-[13px] text-muted leading-relaxed mb-4 flex-1">{desc}</p>
      <ul className="space-y-1.5">
        {articles.map((a) => (
          <li key={a}>
            <a
              href="#"
              className="flex items-center gap-2 text-[12.5px] text-ink/70 hover:text-ink font-medium group transition-colors"
            >
              <ChevronRight size={12} style={{ color: accent }} className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              {a}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

function CodeBlock({ lang, code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md border border-white/15 bg-white/[0.08] text-[10.5px] font-semibold text-white/60 hover:text-white hover:bg-white/[0.15] transition-all"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="rounded-xl bg-black/60 border border-white/10 p-5 overflow-x-auto text-[12.5px] font-mono leading-relaxed text-white/80 whitespace-pre">
        <code>{code}</code>
      </pre>
    </div>
  )
}

/* ─── Page ─────────────────────────────────────────────────────────── */
export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('python')

  return (
    <div className="bg-paper overflow-hidden">
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
            <div className="eyebrow-dark inline-flex h-auto min-h-7 py-1 mb-6">
              <Book size={12} />
              Documentation
            </div>
            <h1 className="font-display text-display-xl text-white mb-5">
              Build governed AI agents<br className="hidden sm:block" />
              <span className="text-gradient"> at enterprise scale.</span>
            </h1>
            <p className="text-[17px] text-white/65 leading-relaxed max-w-xl mx-auto mb-10">
              Everything you need — from your first agent to full SOC 2 evidence packs.
              Guides, API reference, and SDK docs all in one place.
            </p>

            {/* Search bar */}
            <div className="max-w-lg mx-auto relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none" />
              <input
                type="text"
                placeholder="Search docs — e.g. 'policy engine', 'RAG skill', 'evidence pack'…"
                className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/15 bg-white/[0.07] text-[14px] text-white placeholder-white/35 focus:outline-none focus:border-teal-500/60 focus:bg-white/[0.1] transition-all backdrop-blur"
              />
              <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-white/30 border border-white/15 rounded px-1.5 py-0.5 hidden sm:block">⌘K</kbd>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {[
                { label: 'Quick Start',    href: '#quick-start' },
                { label: 'API Reference',  href: '#api-reference' },
                { label: 'Policy Engine',  href: '#policy-engine' },
                { label: 'Flow Builder',   href: '#flow-builder-docs' },
                { label: 'SDK Downloads',  href: '#sdks' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full border border-white/15 bg-white/[0.06] text-[12.5px] font-semibold text-white/70 hover:text-white hover:bg-white/[0.12] hover:border-white/25 transition-all"
                >
                  {label}
                  <ArrowRight size={11} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category grid */}
      <section className="bg-cream py-20 border-t border-line">
        <div className="container-wide">
          <Reveal className="mb-12">
            <div className="eyebrow mb-4">Browse by topic</div>
            <h2 className="font-display text-display-md text-ink">
              Everything in one place.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick start with code */}
      <section id="quick-start" className="bg-ink text-white py-20 border-t border-white/[0.06]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-start">
            {/* Left: copy */}
            <Reveal className="lg:sticky lg:top-28">
              <div className="eyebrow-dark inline-flex mb-6">
                <Terminal size={12} />
                Quick start
              </div>
              <h2 className="font-display text-display-md text-white mb-5">
                First agent in<br />
                <span className="text-gradient">under 15 minutes.</span>
              </h2>
              <p className="text-[15px] text-white/65 leading-relaxed mb-8">
                Install the SDK, set your API key, and create a governed agent with
                RAG and self-critique skills — all with policy enforcement and a
                full evidence pack on every run.
              </p>

              <div className="space-y-4">
                {[
                  { step: '1', title: 'Install the SDK', desc: 'Python, TypeScript, or plain REST.' },
                  { step: '2', title: 'Create an agent', desc: 'Define skills, tools, and governance mode.' },
                  { step: '3', title: 'Run with governance', desc: 'Policy is enforced automatically — no extra config.' },
                  { step: '4', title: 'Collect your evidence pack', desc: 'SHA-signed, compliance-mapped, immutable.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/30 grid place-items-center text-[11px] font-bold text-teal-400 flex-shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <div className="text-[13.5px] font-semibold text-white">{s.title}</div>
                      <div className="text-[12.5px] text-white/50 mt-0.5">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#" className="btn btn-glass mt-8 inline-flex gap-2">
                Read the full guide <ExternalLink size={14} />
              </a>
            </Reveal>

            {/* Right: code block */}
            <Reveal delay={150} className="min-w-0">
              {/* Tab switcher */}
              <div className="flex gap-1 p-1 rounded-xl bg-white/[0.06] border border-white/10 mb-4 w-full min-[420px]:w-fit overflow-x-auto">
                {[
                  { key: 'python', label: 'Python' },
                  { key: 'typescript', label: 'TypeScript' },
                  { key: 'rest', label: 'REST' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`h-8 px-4 rounded-lg text-[12.5px] font-semibold transition-all whitespace-nowrap ${
                      activeTab === key
                        ? 'bg-white/15 text-white'
                        : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <CodeBlock lang={activeTab} code={snippets[activeTab]} />

              <p className="mt-4 text-[12px] text-white/40 text-center">
                The evidence pack is sealed and compliance-mapped automatically on every run.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Popular guides */}
      <section className="bg-cream py-20 border-t border-line">
        <div className="container-wide">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="eyebrow mb-4">Guides</div>
              <h2 className="font-display text-display-md text-ink">Popular guides.</h2>
            </div>
            <a href="#" className="btn btn-secondary inline-flex gap-2 self-start sm:self-auto flex-shrink-0">
              View all guides <ArrowRight size={14} />
            </a>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((g, i) => {
              const Icon = g.icon
              return (
                <Reveal key={g.title} delay={i * 60}>
                  <a
                    href="#"
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-line bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="w-10 h-10 rounded-xl bg-mist border border-line grid place-items-center flex-shrink-0 group-hover:bg-teal-50 group-hover:border-teal/30 transition-colors">
                      <Icon size={18} className="text-muted group-hover:text-teal transition-colors" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold text-ink leading-snug mb-2 group-hover:text-teal transition-colors">{g.title}</div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted-light px-2 py-0.5 rounded-full bg-mist border border-line">
                          {g.tag}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-muted">
                          <Clock size={10} /> {g.time}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-muted-light flex-shrink-0 mt-1 group-hover:text-teal group-hover:translate-x-0.5 transition-all" />
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* SDK strip */}
      <section id="sdks" className="bg-ink text-white py-16 border-t border-white/[0.06]">
        <div className="container-wide">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-[28px] font-bold text-white mb-2">SDKs & clients</h2>
            <p className="text-[14px] text-white/50">Auto-generated from the OpenAPI schema. Always in sync.</p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {sdks.map((sdk, i) => (
              <Reveal key={sdk.lang} delay={i * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[15px] font-bold text-white">{sdk.lang}</span>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                      style={{ color: sdk.color, borderColor: `${sdk.color}40`, background: `${sdk.color}15` }}
                    >
                      {sdk.badge}
                    </span>
                  </div>
                  <div className="font-mono text-[12px] text-white/60 bg-black/30 rounded-lg px-3 py-2.5 mb-4 overflow-x-auto">
                    {sdk.pkg}
                  </div>
                  <a href="#" className="flex items-center gap-2 text-[12.5px] font-semibold text-white/60 group-hover:text-white transition-colors">
                    View on docs <ExternalLink size={12} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
