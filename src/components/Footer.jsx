import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal to-coral flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <div className="font-bold text-white">Sirius</div>
            </div>
            <p className="text-sm text-white/50">
              Enterprise AI governance platform for the next generation.
            </p>
          </div>

          {/* Links Sections */}
          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Security', 'Roadmap']
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers', 'Contact']
            },
            {
              title: 'Resources',
              links: ['Documentation', 'API Docs', 'Community', 'Support']
            },
            {
              title: 'Legal',
              links: ['Privacy', 'Terms', 'Compliance', 'Cookies']
            }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-white mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
            <div className="text-white/50">
              © 2024 Sirius by Sudheeksha. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
