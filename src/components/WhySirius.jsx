import { CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react'

export default function WhySirius() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-mist">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-coral/10 border border-coral/30">
            <div className="w-1.5 h-1.5 rounded-full bg-coral"></div>
            <span className="text-xs font-bold uppercase text-coral">Why Sirius</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-ink">
            Why Enterprise Leaders Choose Sirius
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Governance, Control, and Enterprise Scale. Built from day one for mission-critical AI.
          </p>
        </div>

        {/* The Problem */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-ink mb-6 flex items-center gap-3">
              <AlertCircle size={28} className="text-coral flex-shrink-0" />
              The AI Governance Gap
            </h3>
            <p className="text-muted mb-6 leading-relaxed">
              Traditional AI platforms promise autonomy but deliver chaos at scale. They lack governance, audit trails, and the controls enterprises demand. Teams resort to building governance layers on top—expensive, fragile, and never quite right.
            </p>
            <ul className="space-y-3">
              {[
                'LLM APIs have no governance layer',
                'Agent frameworks lack compliance controls',
                'Audit trails are afterthoughts or missing',
                'Policy enforcement is manual and error-prone',
                'Approval workflows require expensive custom work'
              ].map((issue) => (
                <li key={issue} className="flex items-start gap-3 text-muted">
                  <span className="text-coral font-bold text-lg mt-0.5">✗</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-coral/20 p-8 shadow-soft">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coral/10 mb-4">
                <AlertCircle size={32} className="text-coral" />
              </div>
              <h4 className="text-lg font-bold text-ink">Enterprise Pain Points</h4>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Time to Governance', value: '6-12 months' },
                { label: 'Custom Build Cost', value: '$500K+' },
                { label: 'Compliance Risk', value: 'High' },
                { label: 'Audit Readiness', value: '0% of companies' }
              ].map((metric) => (
                <div key={metric.label} className="flex items-center justify-between py-3 border-b border-ink/10">
                  <span className="text-sm text-muted font-medium">{metric.label}</span>
                  <span className="font-bold text-coral">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-teal/5 rounded-xl border border-teal/20 p-12 mb-16">
          <h3 className="text-2xl font-bold text-ink mb-6 flex items-center gap-3">
            <CheckCircle2 size={28} className="text-teal flex-shrink-0" />
            Sirius: Governance-First AI
          </h3>
          <p className="text-muted mb-8 leading-relaxed">
            Sirius embeds governance, risk, compliance, and audit capabilities into every layer of the platform. It's not bolted on. It's not an afterthought. It's the foundation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Policy Engine',
                desc: 'Define and enforce AI governance rules in real-time across all agents and flows'
              },
              {
                title: 'HITL Approval',
                desc: 'Route critical decisions to humans with full audit trail and approval workflows'
              },
              {
                title: 'Complete Audit',
                desc: 'Every decision, input, output, and policy evaluation is logged for compliance'
              },
              {
                title: 'Control Tower',
                desc: 'Real-time monitoring, intervention, and override capabilities for all AI operations'
              }
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg bg-white border border-teal/10">
                <h4 className="font-bold text-ink mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-ink mb-8 text-center">How Sirius Solves It</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '⚡ 3 Weeks to Governance',
                description: 'Pre-built AEGIS framework lets you define policies and deploy in weeks, not months',
                metrics: ['Policy engine ready', 'Audit logging enabled', 'Compliance templates included']
              },
              {
                title: '💰 90% Faster ROI',
                description: 'No custom development for governance layer. Deploy agents immediately with controls in place',
                metrics: ['Zero custom build time', 'Pre-built integrations', 'Turnkey platform']
              },
              {
                title: '✅ Audit-Ready Day One',
                description: 'Complete evidence trail baked in. Pass compliance audits with confidence',
                metrics: ['SOC2/ISO27001 ready', 'Evidence collection', 'Audit reports auto-generated']
              }
            ].map((benefit) => (
              <div key={benefit.title} className="p-8 rounded-lg bg-white border border-ink/10 hover:border-teal/30 transition-colors shadow-soft">
                <h4 className="text-xl font-bold text-ink mb-3">{benefit.title}</h4>
                <p className="text-muted text-sm mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.metrics.map((metric) => (
                    <li key={metric} className="flex items-center gap-2 text-sm text-ink">
                      <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Now */}
        <div className="bg-gradient-to-r from-teal/10 via-violet/10 to-coral/10 rounded-xl border border-teal/20 p-12 text-center">
          <h3 className="text-2xl font-bold text-ink mb-4 flex items-center justify-center gap-2">
            <TrendingUp size={28} className="text-teal" />
            The Market Timing
          </h3>
          <p className="text-muted mb-8 max-w-3xl mx-auto">
            AI agents are moving from pilot projects to production. Enterprise adoption requires governance. Sirius is the only platform purpose-built to solve enterprise AI governance at scale. The demand is here. Now.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'AI Enterprise Adoption', value: '78%' },
              { label: 'Governance Priority', value: '#1' },
              { label: 'Market Growth', value: '45% YoY' },
              { label: 'TAM in 2026', value: '$8.2B' }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-teal">{stat.value}</div>
                <div className="text-xs text-muted font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
