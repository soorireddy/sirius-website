import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import ProductShowcase from './components/ProductShowcase'
import ArchitectureSection from './components/ArchitectureSection'
import MetricsSection from './components/MetricsSection'
import PricingSection from './components/PricingSection'
import CTASection from './components/CTASection'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="bg-ink overflow-hidden">
      <Navigation />
      <Hero />
      <LogoCloud />
      <ProductShowcase />
      <ArchitectureSection />
      <MetricsSection />
      <PricingSection />
      <CTASection />
      <SiteFooter />
    </div>
  )
}
