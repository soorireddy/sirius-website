import { Check, X } from 'lucide-react'

const comparisonData = [
  { feature: 'AI Governance Framework', sirius: true, alternative: false },
  { feature: 'Policy Engine (AEGIS)', sirius: true, alternative: false },
  { feature: 'HITL Approval Workflows', sirius: true, alternative: false },
  { feature: 'Complete Audit Trail', sirius: true, alternative: false },
  { feature: 'Compliance Pre-Built (SOC2/ISO)', sirius: true, alternative: false },
  { feature: 'Visual Workflow Builder', sirius: true, alternative: true },
  { feature: '50+ Pre-Built Integrations', sirius: true, alternative: false },
  { feature: 'Multi-Platform LLM Support', sirius: true, alternative: false },
  { feature: 'Enterprise Security', sirius: true, alternative: true },
  { feature: 'Control Tower UI', sirius: true, alternative: false },
  { feature: 'Bill of Materials (ABOM)', sirius: true, alternative: false },
  { feature: 'Evidence Generation', sirius: true, alternative: false },
]

export default function Comparison() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-violet/10 border border-violet/30">
            <div className="w-1.5 h-1.5 rounded-full bg-violet"></div>
            <span className="text-xs font-bold uppercase text-violet">Platform Comparison</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-ink">
            Sirius vs. The Rest
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Enterprise AI governance isn't a feature. It's the foundation. Sirius is built from day one for governance. Others bolt it on.
          </p>
        </div>

        {/* Comparison Table - Data Dense */}
        <div className="border border-ink/10 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-teal/5 to-violet/5 border-b border-ink/10">
            <div className="p-4 font-bold text-ink">Capability</div>
            <div className="p-4 font-bold text-ink flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-teal">✨ Sirius</div>
                <div className="text-xs text-muted font-bold">Governance-First</div>
              </div>
            </div>
            <div className="p-4 font-bold text-ink flex items-center justify-center">
              <div className="text-right">
                <div className="text-sm text-muted">Traditional</div>
                <div className="text-xs text-muted font-bold">AI Platforms</div>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, idx) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 ${
                idx !== comparisonData.length - 1 ? 'border-b border-ink/10' : ''
              } hover:bg-teal/2 transition-colors`}
            >
              <div className="p-4 font-medium text-ink text-sm">{row.feature}</div>
              <div className="p-4 flex items-center justify-center">
                {row.sirius ? (
                  <Check size={20} className="text-teal font-bold" strokeWidth={3} />
                ) : (
                  <X size={20} className="text-muted/20" strokeWidth={3} />
                )}
              </div>
              <div className="p-4 flex items-center justify-center">
                {row.alternative ? (
                  <Check size={20} className="text-muted/40" strokeWidth={2} />
                ) : (
                  <X size={20} className="text-muted/20" strokeWidth={2} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted mb-4">
            Ready to experience the difference?
          </p>
          <button className="btn btn-dark">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
