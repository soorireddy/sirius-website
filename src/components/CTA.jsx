import { Mail, Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-ink via-ink/95 to-ink/90 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Messaging */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Ready to Transform Your AI Strategy?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Join leading enterprises using Sirius to build, govern, and scale AI agents with confidence.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Deploy AI agents in minutes, not months',
                'Maintain complete governance and compliance',
                'Scale from pilot to production seamlessly'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-primary">
              Start Free Trial <ArrowRight size={18} />
            </button>
          </div>

          {/* Right - Contact Panel */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:hello@sirius.ai"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <Mail size={20} className="text-teal" />
                <div>
                  <div className="text-sm font-bold">Email</div>
                  <div className="text-xs text-white/60">hello@sirius.ai</div>
                </div>
              </a>

              <a
                href="tel:+14155551234"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <Phone size={20} className="text-teal" />
                <div>
                  <div className="text-sm font-bold">Phone</div>
                  <div className="text-xs text-white/60">+1 (415) 555-1234</div>
                </div>
              </a>
            </div>

            {/* Quick Contact Form */}
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </form>

            <p className="text-xs text-white/50 mt-4">
              We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
