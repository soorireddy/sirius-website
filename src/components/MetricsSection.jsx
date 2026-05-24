import { ShieldCheck, Zap, Users, TrendingUp, Quote } from 'lucide-react'

const metrics = [
  { value: '99.97%', label: 'Policy compliance rate', sub: 'across all production runs', color: 'teal' },
  { value: '< 350ms', label: 'p95 agent latency', sub: 'full governed run, end-to-end', color: 'violet' },
  { value: '50+', label: 'Enterprise connectors', sub: 'native integrations, day one', color: 'coral' },
  { value: '10×', label: 'Faster to audit-ready', sub: 'vs. custom governance builds', color: 'emerald' },
]

const testimonials = [
  {
    quote: "Sirius is the only platform where governance isn't an afterthought. We deployed 14 production agents with full SOC 2 evidence in eight weeks.",
    name: 'Head of AI, Tier-1 Investment Bank',
    role: 'Fortune 100 · Financial Services',
    metric: '8 weeks to SOC 2 evidence',
  },
  {
    quote: "The ABOM and evidence packs turned a 3-month compliance audit into a 3-day download. Our CISO hasn't stopped talking about it.",
    name: 'VP Enterprise Architecture',
    role: 'Global Healthcare Network',
    metric: '3 days vs. 3 months audit time',
  },
  {
    quote: "We tried three agent frameworks before Sirius. None of them had real governance — they called it 'configurable.' Sirius has it wired into the runtime.",
    name: 'Chief Digital Officer',
    role: 'Top 10 Global Insurer',
    metric: '40+ agents in production Q1',
  },
]

const colorMap = {
  teal: { text: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
  coral: { text: 'text-coral-400', bg: 'bg-coral-400/10', border: 'border-coral-400/20' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
}

export default function MetricsSection() {
  return (
    <section className="relative bg-ink text-white py-24 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh-dark opacity-40" />

      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="eyebrow-dark inline-flex mb-4">
            <TrendingUp size={12} />
            Proven at enterprise scale
          </div>
          <h2 className="font-display text-display-md text-white mb-4">
            Numbers that close deals.<br />
            <span className="text-gradient">Auditors love them too.</span>
          </h2>
          <p className="text-[15px] text-white/55 max-w-lg mx-auto">
            Real production data from Fortune 500 deployments. Not benchmarks. Not labs.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {metrics.map((m) => {
            const c = colorMap[m.color]
            return (
              <div
                key={m.label}
                className={`rounded-2xl border ${c.border} ${c.bg} p-6 text-center`}
              >
                <div className={`text-4xl font-black tracking-tight mb-2 ${c.text}`}>{m.value}</div>
                <div className="text-[13px] font-semibold text-white mb-1">{m.label}</div>
                <div className="text-[11.5px] text-white/45">{m.sub}</div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col"
            >
              <Quote size={20} className="text-teal-400/50 mb-4 flex-shrink-0" />
              <blockquote className="text-[14px] text-white/80 leading-relaxed flex-1 mb-5">
                "{t.quote}"
              </blockquote>
              <div className="pt-4 border-t border-white/10">
                <div className="text-[12.5px] font-semibold text-white mb-0.5">{t.name}</div>
                <div className="text-[11.5px] text-white/45 mb-3">{t.role}</div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-400/10 border border-teal-400/20 text-[10.5px] font-bold text-teal-400 uppercase tracking-wider">
                  <ShieldCheck size={9} />
                  {t.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { Icon: ShieldCheck, label: 'SOC 2 Type II, ISO 27001, HIPAA-ready, EU AI Act, GDPR' },
              { Icon: Zap, label: 'Private cloud, VPC, and on-prem deployment options' },
              { Icon: Users, label: 'Dedicated CSM + 99.9% SLA for enterprise contracts' },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-3">
                <Icon size={16} className="text-teal-400 flex-shrink-0" />
                <span className="text-[12.5px] text-white/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
