import { Brain, Code, Lock, Zap, Globe, BarChart3 } from 'lucide-react'

const studios = [
  {
    id: 'agents',
    icon: Brain,
    title: 'AI Governance',
    description: 'Build and manage intelligent agents with complete governance policies and compliance controls.',
    features: ['Policy Engine', 'Audit Logs', 'Role-Based Access'],
    color: 'teal'
  },
  {
    id: 'integrations',
    icon: Globe,
    title: 'Integrations Hub',
    description: 'Connect to 50+ enterprise systems seamlessly with pre-built connectors and custom APIs.',
    features: ['Pre-built Connectors', 'API Builder', 'Webhooks'],
    color: 'coral'
  },
  {
    id: 'builder',
    icon: Code,
    title: 'Workflow Builder',
    description: 'Design complex agent workflows visually with low-code drag-and-drop interface.',
    features: ['Visual Designer', 'Logic Nodes', 'Code Blocks'],
    color: 'gold'
  },
  {
    id: 'runtime',
    icon: Zap,
    title: 'Runtime Control',
    description: 'Monitor, control, and optimize agent performance in real-time with advanced debugging.',
    features: ['Live Monitoring', 'Performance Metrics', 'Debug Tools'],
    color: 'violet'
  },
  {
    id: 'security',
    icon: Lock,
    title: 'AI Security',
    description: 'Enterprise-grade security with encrypted communications and compliance management.',
    features: ['End-to-End Encryption', 'Compliance', 'Threat Detection'],
    color: 'green'
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'AI GRC',
    description: 'Governance, Risk, and Compliance framework designed for AI-first organizations.',
    features: ['Risk Assessment', 'Compliance Reports', 'Audit Trail'],
    color: 'ink'
  }
]

const colorClasses = {
  teal: { bg: 'bg-teal-2', text: 'text-teal', border: 'border-teal/20' },
  coral: { bg: 'bg-coral-2', text: 'text-coral', border: 'border-coral/20' },
  gold: { bg: 'bg-gold-2', text: 'text-gold', border: 'border-gold/20' },
  violet: { bg: 'bg-violet-2', text: 'text-violet', border: 'border-violet/20' },
  green: { bg: 'bg-green-100', text: 'text-green', border: 'border-green/20' },
  ink: { bg: 'bg-ink-2/10', text: 'text-ink', border: 'border-ink/20' }
}

export default function Studios() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-teal/10 border border-teal/30">
            <div className="w-1.5 h-1.5 rounded-full bg-teal"></div>
            <span className="text-xs font-bold uppercase text-teal">Comprehensive Suite</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-ink">
            Everything You Need to Build AI
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            A complete platform with every tool required to design, deploy, and govern enterprise AI agents at scale.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studios.map((studio) => {
            const Icon = studio.icon
            const colors = colorClasses[studio.color]
            return (
              <div
                key={studio.id}
                className="card card-hover p-6 group"
              >
                {/* Icon Badge */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colors.bg} ${colors.text}`}>
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-ink mb-2">{studio.title}</h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">{studio.description}</p>

                {/* Features Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {studio.features.map((feature) => (
                    <span
                      key={feature}
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase ${colors.bg} ${colors.text}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <a href="#" className={`inline-flex items-center gap-2 text-sm font-bold ${colors.text} hover:underline group-hover:translate-x-1 transition-transform`}>
                  Learn More →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
