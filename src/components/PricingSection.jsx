import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const tiers = [
  {
    name: 'Growth',
    tag: '',
    tagline: 'For teams piloting governed AI',
    price: 'From $4,000',
    period: '/ month',
    cta: 'Start a pilot',
    ctaStyle: 'secondary',
    features: [
      'Up to 5 agents in production',
      'Flow builder — unlimited flows',
      'AI Studio — 3 skill types',
      '10 integration connectors',
      'Basic AI GRC policy engine',
      'Audit log (90-day retention)',
      'Email + Slack support',
      'Community Slack channel',
    ],
    excluded: ['HITL approval workflows', 'ABOM generation', 'Compliance mapping packs', 'Custom SLA'],
  },
  {
    name: 'Enterprise',
    tag: 'Most popular',
    tagline: 'For regulated production deployments',
    price: 'Custom',
    period: 'pricing',
    cta: 'Book a demo',
    ctaStyle: 'primary',
    features: [
      'Unlimited agents + flows',
      'Full AI Studio — all 8 skill types',
      '50+ integration connectors',
      'Full Sirius AI GRC suite',
      'HITL approval workflows',
      'ABOM on every deployment',
      'Evidence packs: SOC 2, ISO 27001, HIPAA, EU AI Act, GDPR',
      'Control Tower + runtime inspector',
      'Unlimited audit log retention',
      'Dedicated CSM + 99.9% SLA',
      'Private cloud / VPC / on-prem',
      'Custom SSO + SCIM provisioning',
    ],
    excluded: [],
  },
  {
    name: 'Platform',
    tag: 'Coming Q4 2026',
    tagline: 'For SI / MSP partners & multi-tenant',
    price: 'Contact us',
    period: '',
    cta: 'Talk to partnerships',
    ctaStyle: 'secondary',
    features: [
      'Everything in Enterprise',
      'Multi-tenant control plane',
      'White-label ready',
      'Partner portal + revenue share',
      'Dedicated integration engineering',
      'Priority roadmap influence',
    ],
    excluded: [],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-cream py-24 border-t border-line overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh-light" />

      <div className="container-wide">
        {/* Header */}
        <Reveal className="text-center mb-14">
          <div className="eyebrow inline-flex mb-4">
            Transparent pricing
          </div>
          <h2 className="font-display text-display-md text-ink mb-4">
            Built for how enterprises<br className="hidden sm:block" /> actually buy.
          </h2>
          <p className="text-[15px] text-muted max-w-lg mx-auto">
            No per-seat surprises. No hidden compliance add-ons. Governance is included, not a premium tier.
          </p>
        </Reveal>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => {
            const isEnterprise = tier.name === 'Enterprise'
            return (
              <Reveal
                key={tier.name}
                delay={i * 100}
                className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                  isEnterprise
                    ? 'bg-ink text-white shadow-elevated ring-1 ring-teal-500/30 lg:-mt-4 lg:pb-10'
                    : 'bg-white text-ink border border-line shadow-card hover:shadow-card-hover hover:-translate-y-1'
                }`}
              >
                {tier.tag && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-widest whitespace-nowrap ${
                    isEnterprise
                      ? 'bg-teal-500 text-white'
                      : 'bg-mist border border-line text-muted'
                  }`}>
                    {tier.tag}
                  </div>
                )}

                <div className="mb-6">
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${isEnterprise ? 'text-teal-400' : 'text-teal'}`}>
                    {tier.name}
                  </div>
                  <div className={`text-[13px] mb-4 ${isEnterprise ? 'text-white/60' : 'text-muted'}`}>{tier.tagline}</div>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-black text-3xl tracking-tight ${isEnterprise ? 'text-white' : 'text-ink'}`}>{tier.price}</span>
                    {tier.period && (
                      <span className={`text-[13px] ${isEnterprise ? 'text-white/50' : 'text-muted'}`}>{tier.period}</span>
                    )}
                  </div>
                </div>

                <a
                  href="#demo"
                  className={`btn mb-7 w-full justify-center ${
                    tier.ctaStyle === 'primary'
                      ? 'bg-white text-ink hover:bg-white/90'
                      : isEnterprise
                        ? 'btn-glass'
                        : 'btn-primary'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={14} />
                </a>

                <div className={`text-[10.5px] font-bold uppercase tracking-wider mb-3 ${isEnterprise ? 'text-white/40' : 'text-muted-light'}`}>
                  Included
                </div>
                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={13} className={`flex-shrink-0 mt-0.5 ${isEnterprise ? 'text-teal-400' : 'text-teal'}`} />
                      <span className={`text-[13px] ${isEnterprise ? 'text-white/80' : 'text-ink-700'}`}>{f}</span>
                    </li>
                  ))}
                  {tier.excluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 opacity-40">
                      <span className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 rounded-full border border-current opacity-50 inline-block" />
                      <span className="text-[13px] line-through">{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        {/* Footer note */}
        <Reveal delay={300} className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[12.5px] text-muted">
          {[
            { text: 'All plans include SOC 2 Type II infrastructure' },
            { text: 'No data used for LLM training' },
            { text: 'GDPR DPA available on request' },
          ].map(({ text }) => (
            <div key={text} className="flex items-center gap-2">
              <ShieldCheck size={13} className="text-teal" />
              {text}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
