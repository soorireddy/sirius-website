import { useState, useEffect, useRef } from 'react'
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react'

const EMPTY = { name: '', email: '', company: '', message: '' }

export default function ContactModal({ open, onClose }) {
  const [form, setForm]     = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('')
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) { setStatus('idle'); setForm(EMPTY); setErrMsg('') }
  }, [open])

  if (!open) return null

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(d.error || 'Something went wrong.')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrMsg(err.message)
    }
  }

  const input = 'w-full h-10 px-3 rounded-lg bg-white/[0.06] border border-white/10 text-[13.5px] text-white placeholder-white/25 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.09] transition-all'
  const label = 'block text-[10.5px] font-bold uppercase tracking-wider text-white/40 mb-1.5'

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-white/[0.12] p-8"
        style={{ background: '#1a1c23', boxShadow: '0 24px 64px rgba(0,0,0,0.75)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg border border-white/10 grid place-items-center text-white/40 hover:text-white hover:border-white/20 transition-all"
        >
          <X size={15} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-teal-500/15 border border-teal-500/25 grid place-items-center mx-auto mb-5">
              <CheckCircle size={32} className="text-teal-400" />
            </div>
            <h3 className="text-[22px] font-bold text-white mb-2">Message sent!</h3>
            <p className="text-[14px] text-white/50 mb-8 max-w-[280px] mx-auto leading-relaxed">
              We'll get back to you within 1 business day. No cold calls — promise.
            </p>
            <button onClick={onClose} className="btn btn-glass px-8">Close</button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-[22px] font-bold text-white mb-1">Get in touch</h2>
              <p className="text-[13px] text-white/50">
                Tell us about your AI governance challenge — no deck, no fluff.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={label}>Full name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Jane Smith"
                    className={input}
                  />
                </div>
                <div>
                  <label className={label}>Work email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="jane@company.com"
                    className={input}
                  />
                </div>
              </div>

              <div>
                <label className={label}>Company</label>
                <input
                  value={form.company}
                  onChange={set('company')}
                  placeholder="Acme Corp"
                  className={input}
                />
              </div>

              <div>
                <label className={label}>Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us about your AI governance challenge or what you'd like to explore…"
                  className="w-full px-3 py-2.5 rounded-lg bg-white/[0.06] border border-white/10 text-[13.5px] text-white placeholder-white/25 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.09] transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-[12.5px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  {errMsg || 'Something went wrong. Please try again.'}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full h-11 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send message
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-white/30">
                We respond within 1 business day · NDA on request
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
