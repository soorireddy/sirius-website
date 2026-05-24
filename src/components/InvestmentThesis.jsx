import { TrendingUp, Users, Zap, Award } from 'lucide-react'

export default function InvestmentThesis() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-ink text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-teal/20 border border-teal/40">
            <div className="w-1.5 h-1.5 rounded-full bg-teal"></div>
            <span className="text-xs font-bold uppercase text-teal">Investment Thesis</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Sirius is the Enterprise AI Governance Platform
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            A massive market gap. Proven technology. Perfect timing. Sirius captures enterprise AI governance—a $8.2B market growing at 45% annually.
          </p>
        </div>

        {/* Four Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: TrendingUp,
              title: 'Massive TAM',
              stats: ['$8.2B', 'by 2026'],
              desc: 'Enterprise AI governance is the #1 unmet need for Fortune 500 companies deploying agents'
            },
            {
              icon: Zap,
              title: 'First-Mover',
              stats: ['Only Player', 'in Segment'],
              desc: 'No competitor offers governance-first approach. Competitors bolt compliance on top'
            },
            {
              icon: Award,
              title: 'Sticky Moat',
              stats: ['High', 'Switching Cost'],
              desc: 'Once governance is embedded in workflows, switching to another platform is impossible'
            },
            {
              icon: Users,
              title: 'Enterprise Love',
              stats: ['78%', 'Want Governance'],
              desc: 'Enterprise CIOs demand AI governance before deploying agents. Sirius is the answer'
            }
          ].map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className="p-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <Icon size={32} className="text-teal mb-4" />
                <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-teal">{pillar.stats[0]}</div>
                  <div className="text-xs text-white/60 font-bold">{pillar.stats[1]}</div>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{pillar.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Key Metrics */}
        <div className="bg-gradient-to-br from-teal/20 to-coral/20 rounded-xl border border-teal/30 p-12 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">The Opportunity</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Market Drivers',
                points: [
                  '45% YoY growth in enterprise AI',
                  'Compliance mandates (EU AI Act)',
                  'Risk of AI-driven incidents',
                  'Fortune 500 deploying agents now'
                ]
              },
              {
                title: 'Sirius Advantages',
                points: [
                  'First governance-first platform',
                  'Pre-built enterprise integrations',
                  'Complete audit trail (proven tech)',
                  'Multi-platform LLM support'
                ]
              },
              {
                title: 'Go-to-Market',
                points: [
                  'Enterprise-direct sales motion',
                  'Partners: cloud providers, SI firms',
                  'Starting at $5K/month, scaling to $500K+',
                  'High CAC payback ratio (3-6 months)'
                ]
              }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-bold mb-4 text-teal">{section.title}</h4>
                <ul className="space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="text-teal font-bold mt-1">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Projection */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Revenue Potential</h3>
            <p className="text-white/70 mb-6">
              Conservative projections based on enterprise SaaS benchmarks and AI governance market growth.
            </p>
            <div className="space-y-4">
              {[
                { year: 'Year 1', customers: '50-80', arr: '$2-3M', note: 'Early adopters, Fortune 500' },
                { year: 'Year 2', customers: '150-200', arr: '$8-12M', note: 'Enterprise expansion, partners' },
                { year: 'Year 3', customers: '400-500', arr: '$25-35M', note: 'Market leadership' }
              ].map((proj) => (
                <div key={proj.year} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">{proj.year}</span>
                    <span className="text-teal font-bold">{proj.arr}</span>
                  </div>
                  <div className="text-xs text-white/60 mb-1">{proj.customers} customers</div>
                  <div className="text-xs text-white/50">{proj.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal/20 to-violet/20 rounded-lg border border-teal/30 p-8">
            <h4 className="font-bold mb-6 text-center">Competitive Moat</h4>
            <div className="space-y-4">
              {[
                {
                  title: 'Technology',
                  desc: '5+ person-years of AEGIS framework development'
                },
                {
                  title: 'Customer Lock-in',
                  desc: 'Governance layer is embedded in workflows. Switching costs are prohibitive'
                },
                {
                  title: 'Data Advantage',
                  desc: 'Every execution generates compliance and performance data. ML models improve moat'
                },
                {
                  title: 'Enterprise Relationships',
                  desc: 'Direct relationships with CIOs, GRC teams, and IT leaders'
                }
              ].map((moat) => (
                <div key={moat.title} className="pb-4 border-b border-white/10">
                  <h5 className="font-bold text-sm mb-1">{moat.title}</h5>
                  <p className="text-xs text-white/70">{moat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Mitigation */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6">Risk Mitigation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                risk: 'Market Adoption',
                mitigation: 'AI governance is a compliance mandate, not a nice-to-have. Enterprises are already budgeting'
              },
              {
                risk: 'Competition from Big Tech',
                mitigation: 'AWS/Azure/GCP focus on LLMs, not governance. Sirius owns the governance layer'
              },
              {
                risk: 'Pricing Sensitivity',
                mitigation: 'Enterprise willingness to pay for governance is high. ROI is 3-6 months'
              },
              {
                risk: 'Product-Market Fit',
                mitigation: 'Already building with enterprise customers. Governance demand is proven'
              }
            ].map((item) => (
              <div key={item.risk} className="pb-4 border-b border-white/10">
                <h4 className="font-bold text-white mb-2 text-sm">Risk: {item.risk}</h4>
                <p className="text-sm text-white/70">✓ {item.mitigation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            Join us in building the enterprise AI governance platform. Sirius is raising for growth.
          </p>
          <a href="mailto:investors@sirius.ai" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-ink font-bold hover:bg-mist transition-colors">
            Connect with the Team
            <TrendingUp size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
