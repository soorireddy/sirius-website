import { useEffect, useRef } from 'react'
import { X, Calendar } from 'lucide-react'

// ← Replace with your actual Calendly scheduling link
const CALENDLY_URL = 'https://calendly.com/soori-sudheeksha/30min'

export default function DemoModal({ open, onClose }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/[0.12] overflow-hidden flex flex-col"
        style={{
          background: '#1a1c23',
          boxShadow: '0 24px 64px rgba(0,0,0,0.75)',
          height: 'min(700px, 90vh)',
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.08] flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/25 grid place-items-center">
            <Calendar size={15} className="text-teal-400" />
          </div>
          <div>
            <div className="text-[14px] font-bold text-white leading-none">Book a 30-min demo</div>
            <div className="text-[11.5px] text-white/45 mt-0.5">Pick a time that works for you</div>
          </div>
          <button
            onClick={onClose}
            className="ml-auto w-8 h-8 rounded-lg border border-white/10 grid place-items-center text-white/40 hover:text-white hover:border-white/20 transition-all"
          >
            <X size={15} />
          </button>
        </div>

        {/* Calendly embed */}
        <iframe
          src={`${CALENDLY_URL}?embed_domain=${typeof window !== 'undefined' ? window.location.hostname : ''}&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&background_color=13141a&text_color=ffffff&primary_color=2dd4bf`}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Book a demo"
          className="flex-1 min-h-0"
        />
      </div>
    </div>
  )
}
