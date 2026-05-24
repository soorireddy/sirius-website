import { useState } from 'react'
import { CheckCircle2, ArrowRight, Lock, BarChart3, Zap, Code, Eye, Layers } from 'lucide-react'

const products = [
  {
    id: 'ai-grc',
    label: 'AI GRC',
    icon: '🛡️',
    title: 'AEGIS: Enterprise AI Governance',
    subtitle: 'Governance, Risk, Compliance, Evidence at Scale',
    description: 'The industry\'s first comprehensive AI Governance, Risk, and Compliance (GRC) platform purpose-built for enterprise AI agents. AEGIS provides policy-driven governance, runtime control, and complete audit trails across all agents, skills, tools, and flows.',
    enterprise_value: [
      'Policy Engine — Define and enforce AI governance rules in real-time',
      'HITL Gates — Approve critical decisions with approval workflows',
      'ABOM Generation — Automatic Bill of Materials for AI transparency',
      'Evidence Trail — Complete audit logs for compliance audits',
      'Industry Mapping — Pre-built mappings to SOC2, ISO 27001, HIPAA',
      'Control Tower — Real-time monitoring of all AI operations'
    ],
    use_cases: [
      'Financial services: Regulated trading and lending decisions',
      'Healthcare: Medical diagnosis assistance with audit trails',
      'Enterprise AI: Governance-first agent deployments',
      'Compliance audits: Full evidence collection and reporting'
    ],
    differentiator: 'Only platform with built-in AI GRC from day one',
    price: 'Custom Enterprise'
  },
  {
    id: 'ai-studio',
    label: 'AI Studio',
    icon: '🧠',
    title: 'Agent Studio: AI-First Platform',
    subtitle: 'Build Autonomous Agents with Complete Governance',
    description: 'Purpose-built platform for creating, testing, and deploying AI agents that reason, decide, and act autonomously. Each agent combines LLM reasoning with governed tools and skills to solve complex business problems.',
    enterprise_value: [
      'Agent Hierarchy — Workflows coordinate multiple agents (agents → skills → tools)',
      'Skill System — Pre-built behaviors (RAG, Chain-of-Thought, Few-Shot, Self-Critique)',
      'Tool Integration — Connect to 50+ enterprise systems via APIs',
      'Runtime Control — Monitor, pause, and override agent decisions',
      'Version History — Complete versioning of agents and flows',
      'Multi-Platform — Deploy on Anthropic, OpenAI, or custom models'
    ],
    use_cases: [
      'Customer service agents that reason before responding',
      'Enterprise process automation with intelligent decision-making',
      'Research and analysis agents with RAG capabilities',
      'HR/Finance agents for policy-aware decisions'
    ],
    differentiator: 'Agents are first-class citizens, not bolted-on features',
    price: 'Starting $5K/month'
  },
  {
    id: 'builder-ui',
    label: 'Builder',
    icon: '🎨',
    title: 'Visual Workflow Builder',
    subtitle: 'Drag-and-Drop AI Workflow Designer',
    description: 'Low-code visual builder for designing complex AI agent workflows and integrations. Design DAGs (Directed Acyclic Graphs) that coordinate agents, decision logic, and integrations without writing code.',
    enterprise_value: [
      'Visual DAG Editor — Drag-and-drop flow design with real-time preview',
      'Node Types — Agent nodes, Decision nodes, Integration nodes, Code blocks',
      'Input Mapping — Context-aware data flow from previous steps',
      'Code Blocks — Embed custom logic for complex transformations',
      'Real-time Testing — Test flows with sample data before deployment',
      'Version Control — Track all changes and rollback capabilities'
    ],
    use_cases: [
      'Complex process automation (procurement, approvals, escalations)',
      'Multi-agent orchestration (research → analyze → report)',
      'Event-driven workflows (customer request → triage → resolution)',
      'Data pipeline coordination with AI augmentation'
    ],
    differentiator: 'Visual builder that doesn\'t sacrifice power for simplicity',
    price: 'Included with Studio'
  },
  {
    id: 'integration-studio',
    label: 'Integration',
    icon: '🔗',
    title: 'Integration Studio: API-First Connectivity',
    subtitle: '50+ Pre-Built Connectors + Custom APIs',
    description: 'Enterprise integration platform with pre-built connectors to major systems (Salesforce, SAP, ServiceNow, etc.) plus custom API builder for connecting any system. Full support for OAuth, API keys, connection strings.',
    enterprise_value: [
      'Pre-Built Connectors — Salesforce, SAP, ServiceNow, HubSpot, Slack, Teams, etc.',
      'Secret Management — Encrypted API keys, OAuth tokens, connection strings',
      'API Builder — Create custom connectors for proprietary systems',
      'Request/Response Mapping — Transform data between systems',
      'Rate Limiting & Retry Logic — Production-grade reliability',
      'Webhook Support — Event-driven integrations'
    ],
    use_cases: [
      'Salesforce: AI agents that pull context and update records',
      'SAP: Financial data queries with governance controls',
      'ServiceNow: IT ticket automation with AI triage',
      'Custom systems: Build connectors for legacy/proprietary systems'
    ],
    differentiator: 'Connectors with built-in governance and security',
    price: 'Connector library included'
  },
  {
    id: 'fullstack-api',
    label: 'Platform API',
    icon: '⚙️',
    title: 'Full-Stack Platform API',
    subtitle: 'Programmatic Access to All Capabilities',
    description: 'Complete REST API for building custom applications on top of Sirius. Programmatic access to agents, flows, executions, integrations, and governance policies.',
    enterprise_value: [
      'Agent Management API — Create, update, test agents programmatically',
      'Flow Orchestration API — Build complex workflows via API',
      'Execution API — Run agents/flows and get real-time results',
      'Governance API — Define and enforce policies programmatically',
      'Integration API — Manage connectors and secrets',
      'Audit API — Query execution history and compliance logs'
    ],
    use_cases: [
      'Custom web application built on Sirius (SaaS offering)',
      'Internal tools for enterprise agent management',
      'CI/CD integration for automated agent deployment',
      'Third-party system integration with Sirius'
    ],
    differentiator: 'First-class API makes Sirius a platform, not just a tool',
    price: 'API included in all plans'
  }
]

export default function DetailedProducts() {
  const [activeTab, setActiveTab] = useState('ai-grc')
  const activeProduct = products.find(p => p.id === activeTab)

  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-teal/10 border border-teal/30">
            <div className="w-1.5 h-1.5 rounded-full bg-teal"></div>
            <span className="text-xs font-bold uppercase text-teal">Core Products</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-ink">
            Enterprise AI Platform Stack
          </h2>
          <p className="text-lg text-muted max-w-3xl">
            Five core products working together to deliver complete AI governance, agency, and integration capabilities. Designed from day one for enterprises deploying mission-critical AI.
          </p>
        </div>

        {/* Product Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-12">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(product.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-center ${
                activeTab === product.id
                  ? 'border-teal bg-teal/5 shadow-lg'
                  : 'border-ink/10 hover:border-teal/30'
              }`}
            >
              <div className="text-3xl mb-2">{product.icon}</div>
              <div className="font-bold text-sm text-ink">{product.label}</div>
              <div className="text-xs text-muted mt-1">{product.subtitle.split(':')[0]}</div>
            </button>
          ))}
        </div>

        {/* Product Details */}
        {activeProduct && (
          <div className="bg-gradient-to-br from-mist to-white rounded-xl border border-ink/10 shadow-soft overflow-hidden">
            <div className="p-8 sm:p-12">
              {/* Header */}
              <div className="mb-10">
                <div className="text-5xl mb-4">{activeProduct.icon}</div>
                <h3 className="text-3xl font-bold text-ink mb-2">{activeProduct.title}</h3>
                <p className="text-lg text-muted mb-4">{activeProduct.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/10 border border-teal/30">
                  <span className="text-xs font-bold text-teal">💡 {activeProduct.differentiator}</span>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-12 mb-10">
                {/* Left - Features & Enterprise Value */}
                <div>
                  <h4 className="text-xl font-bold text-ink mb-6 flex items-center gap-2">
                    <Zap size={20} className="text-teal" />
                    Enterprise Capabilities
                  </h4>
                  <div className="space-y-3">
                    {activeProduct.enterprise_value.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-teal flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <span className="font-bold text-ink">{feature.split(' — ')[0]} —</span>
                          <span className="text-muted"> {feature.split(' — ')[1]}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Use Cases */}
                <div>
                  <h4 className="text-xl font-bold text-ink mb-6 flex items-center gap-2">
                    <BarChart3 size={20} className="text-coral" />
                    Real-World Use Cases
                  </h4>
                  <div className="space-y-4">
                    {activeProduct.use_cases.map((useCase) => (
                      <div key={useCase} className="p-4 rounded-lg bg-white border border-ink/5 hover:border-coral/20 transition-colors">
                        <p className="text-sm text-ink font-medium">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-8 border-t border-ink/10 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-xs text-muted font-bold uppercase mb-1">Pricing</div>
                  <div className="text-2xl font-bold text-ink">{activeProduct.price}</div>
                </div>
                <button className="btn btn-dark">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Key Differentiators Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🏢',
              title: 'Enterprise-Grade',
              desc: 'Built for Fortune 500 companies. SOC2, HIPAA, ISO27001 ready. Multi-tenancy, data residency, and role-based access controls.'
            },
            {
              icon: '🔐',
              title: 'AI Governance First',
              desc: 'Not bolted-on compliance. Governance is embedded in every agent, skill, tool, and flow from day one.'
            },
            {
              icon: '📊',
              title: 'Measurable ROI',
              desc: 'Clear metrics on cost savings, time reduction, and quality improvement. Typical ROI within 6 months.'
            }
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold text-ink mb-2">{item.title}</h4>
              <p className="text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
