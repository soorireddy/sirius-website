import { useState } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'platform',
    label: 'Platform',
    icon: '⚙️',
    title: 'Sirius Platform',
    subtitle: 'Complete AI Governance',
    description: 'Enterprise-grade platform with full governance, security, and compliance built-in.',
    image: '📊',
    features: [
      'AI Governance Engine',
      'Policy Management',
      'Audit & Compliance',
      'Role-Based Access Control',
      'Advanced Monitoring',
      'API Management'
    ],
    price: 'Custom'
  },
  {
    id: 'studio',
    label: 'Studio',
    icon: '🎨',
    title: 'Sirius Studio',
    subtitle: 'Visual AI Builder',
    description: 'Low-code visual builder for creating complex AI workflows without coding.',
    image: '🖼️',
    features: [
      'Drag-and-Drop Builder',
      'Visual Debugger',
      'Code Blocks',
      'Template Library',
      'Real-time Preview',
      'Version Control'
    ],
    price: 'Starting $299/mo'
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: '☁️',
    title: 'Sirius Cloud',
    subtitle: 'Managed Hosting',
    description: 'Fully managed cloud infrastructure with automatic scaling and disaster recovery.',
    image: '🌐',
    features: [
      'Auto-scaling',
      'Global CDN',
      'Disaster Recovery',
      '99.99% Uptime SLA',
      'DDoS Protection',
      'Automated Backups'
    ],
    price: 'Pay-as-you-go'
  }
]

export default function Products() {
  const [activeTab, setActiveTab] = useState('platform')
  const activeProduct = products.find(p => p.id === activeTab)

  return (
    <section className="py-20 px-4 sm:px-6 bg-mist">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-teal/10 border border-teal/30">
            <div className="w-1.5 h-1.5 rounded-full bg-teal"></div>
            <span className="text-xs font-bold uppercase text-teal">Product Suite</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-ink">
            Products Designed for Scale
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Choose the perfect solution for your enterprise needs, from governance to deployment.
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(product.id)}
              className={`p-5 rounded-lg border-2 transition-all duration-300 text-left group ${
                activeTab === product.id
                  ? 'border-teal bg-white shadow-lg'
                  : 'border-ink/10 bg-white/50 hover:border-ink/20'
              }`}
            >
              <div className="text-3xl mb-2">{product.icon}</div>
              <div className="font-bold text-ink text-sm mb-1">{product.label}</div>
              <div className="text-xs text-muted">{product.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Product Details */}
        {activeProduct && (
          <div className="bg-white rounded-xl border border-ink/10 shadow-soft overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 sm:p-12">
              {/* Left - Info */}
              <div className="flex flex-col justify-center">
                <div className="text-5xl mb-4">{activeProduct.image}</div>
                <h3 className="text-3xl font-bold text-ink mb-2">{activeProduct.title}</h3>
                <p className="text-lg text-muted mb-6">{activeProduct.description}</p>

                {/* Features List - Data Dense */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {activeProduct.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-ink">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-xs text-muted font-bold uppercase mb-1">Pricing</div>
                    <div className="text-2xl font-bold text-ink">{activeProduct.price}</div>
                  </div>
                  <button className="btn btn-primary ml-auto whitespace-nowrap">
                    Get Started <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right - Feature Breakdown */}
              <div className="bg-gradient-to-br from-teal/5 to-coral/5 rounded-lg p-8 border border-ink/5">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <h4 className="text-xl font-bold text-ink mb-3">Enterprise Ready</h4>
                  <p className="text-muted text-sm mb-6">
                    Built for the most demanding enterprise environments with security, compliance, and scale in mind.
                  </p>

                  {/* Stats */}
                  <div className="space-y-4">
                    {[
                      { label: 'Uptime', value: '99.99%' },
                      { label: 'Response Time', value: '<100ms' },
                      { label: 'API Calls', value: '100M+/day' }
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between py-2 border-t border-ink/10">
                        <span className="text-sm text-muted font-medium">{stat.label}</span>
                        <span className="font-bold text-ink">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
