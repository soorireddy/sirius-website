import { useState } from 'react'
import { ArrowRight, Calendar, ShieldCheck, Clock, Mail } from 'lucide-react'
import NetworkCanvas from './NetworkCanvas'
import Reveal from './Reveal'
import ContactModal from './ContactModal'
import { useDemo } from '../context/DemoModalContext'

export default function CTASection() {
  const { openDemo } = useDemo()
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <section id="demo" className="relative bg-ink text-white py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh-dark" />
        <NetworkCanvas className="absolute inset-0 -z-10 w-full h-full opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-teal-950/20 to-transparent" />

        <div className="container-wide">
          <Reveal className="max-w-2xl mx-auto text-center">
            <div className="eyebrow-dark inline-flex mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-soft" />
              Sirius AI GRC · GA Q3 2026 · Limited early access
            </div>

            <h2 className="font-display text-display-lg text-white mb-5">
              Ready to govern the AI<br />
              <span className="text-gradient">that runs your business?</span>
            </h2>

            <p className="text-[16px] text-white/65 leading-relaxed mb-10 max-w-lg mx-auto">
              Book a 30-minute session with our enterprise team. We'll walk through
              your AI governance gaps, map them to Sirius AI GRC capabilities, and scope
              a pilot — no deck, no fluff.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <button
                onClick={openDemo}
                className="btn h-12 px-6 bg-white text-ink hover:bg-white/90 shadow-elevated w-full sm:w-auto justify-center"
              >
                <Calendar size={16} />
                Book a 30-min demo
                <ArrowRight size={15} />
              </button>
              <a
                href="#architecture"
                className="btn btn-glass h-12 px-6 w-full sm:w-auto justify-center"
              >
                Explore the architecture
              </a>
              <button
                onClick={() => setContactOpen(true)}
                className="btn btn-glass h-12 px-6 w-full sm:w-auto justify-center"
              >
                <Mail size={15} />
                Contact us
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {[
                { icon: Clock,       text: 'Response within 1 business day' },
                { icon: ShieldCheck, text: 'NDA on request' },
                { icon: ShieldCheck, text: 'No cold-call follow-ups' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[12px] text-white/50">
                  <Icon size={12} className="text-teal-400" />
                  {text}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200} className="mt-16 pt-8 border-t border-white/[0.08]">
            <div className="mono-label !text-white/35 text-center mb-5">Compliance certifications</div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
              {['SOC 2 Type II', 'ISO 27001', 'HIPAA-ready', 'EU AI Act', 'GDPR', 'FedRAMP-ready'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-[11.5px] font-semibold text-white/50">
                  <ShieldCheck size={12} className="text-teal-400/70" />
                  {badge}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
