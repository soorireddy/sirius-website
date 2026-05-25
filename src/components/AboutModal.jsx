import { useEffect, useRef } from 'react'
import { X, ShieldCheck, Zap, Globe, Users, Star, ArrowRight, Trophy, BadgeCheck } from 'lucide-react'
import { useDemo } from '../context/DemoModalContext'

const founder = {
  initials: 'SRP',
  name: 'Surender Reddy Palakala',
  role: 'Founder & CEO',
  color: '#2dd4bf',
  bg: 'rgba(45,212,191,0.12)',
  bio: 'A technology thought leader with over two decades of experience building enterprise-grade platforms, identity systems, and AI-driven solutions. Surender has led digital transformation initiatives across regulated industries — insurance, clinical trials, financial services, and enterprise IT — from identity access management to ESG intelligence and now AI governance. His work spans ServiceNow, SAP BTP, and large-scale enterprise architecture, combining deep engineering expertise with a visionary approach to emerging technology adoption.',
  tags: ['Enterprise Architecture', 'AI/ML Architecture', 'Identity & Access Management', 'ServiceNow', 'SAP BTP', 'Insurance', 'Clinical Trials', 'ESG Technology', 'GRC Strategy'],
  awards: [
    { icon: Trophy,     label: 'AI Innovation Award Winner',  color: '#fbbf24', bg: 'rgba(251,191,36,0.12)',  border: 'rgba(251,191,36,0.3)' },
    { icon: BadgeCheck, label: 'Certified AI/ML Developer',   color: '#2dd4bf', bg: 'rgba(45,212,191,0.12)', border: 'rgba(45,212,191,0.3)' },
  ],
}

const advisors = [
  { initials: 'MG', name: 'Mr. Gill',  role: 'GRC Founder & Strategic Advisor', color: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
  { initials: 'MR', name: 'Mrs. Ruby', role: 'GRC Founder & Compliance Advisor', color: '#fb923c', bg: 'rgba(251,146,60,0.12)'  },
]

const values = [
  {
    icon: ShieldCheck,
    color: '#2dd4bf',
    bg: 'rgba(45,212,191,0.1)',
    title: 'Compliance-first, always',
    desc: 'Governance is baked into the runtime — not a checkbox you tick at the end. Every agent run produces an evidence pack before a single line of output ships.',
  },
  {
    icon: Zap,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
    title: 'Emerging tech, fast',
    desc: 'We adopt new AI capabilities — new models, new agent patterns, new tool types — faster than anyone. Regulated industries shouldn\'t be last in line for the best technology.',
  },
  {
    icon: Globe,
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.1)',
    title: 'Open by design',
    desc: 'OpenAPI 3.1, platform-agnostic LLM adapters, open evidence pack schema. We build on open standards so you\'re never locked to us.',
  },
  {
    icon: Users,
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.1)',
    title: 'Partnership, not pitching',
    desc: 'We scope pilots with you, not at you. No slide decks, no cold calls. We walk through your actual AI governance gaps and map them to what Sirius does.',
  },
]

const milestones = [
  { year: '2026', title: 'Sirius AI GRC',      event: 'Launched Sirius — the AI-first enterprise platform for governed agents, flows, and AI GRC. Purpose-built for regulated Fortune 500 teams.', color: '#fbbf24' },
  { year: '2024', title: 'Redwoods ESG',       event: 'Launched Redwoods — an AI-powered ESG intelligence platform helping enterprises track, report, and act on environmental, social, and governance data.', color: '#fb923c' },
  { year: '2018', title: 'Sudheeksha Founded', event: 'Incorporated Sudheeksha Software Solutions Private Ltd in Hyderabad — with a mission to solve the hardest enterprise technology challenges.', color: '#2dd4bf' },
  { year: '2016', title: 'Secure UAM',         event: 'Built Secure UAM — a robust Identity & Access Management platform serving enterprise clients across regulated sectors.', color: '#a78bfa' },
]

export default function AboutModal({ open, onClose }) {
  const overlayRef = useRef(null)
  const { openDemo } = useDemo()

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
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-white/[0.12] flex flex-col"
        style={{ background: '#13141a', boxShadow: '0 32px 80px rgba(0,0,0,0.8)', maxHeight: '92vh' }}
      >
        {/* Sticky header */}
        <div className="flex items-center gap-3 px-4 sm:px-8 py-5 border-b border-white/[0.08] flex-shrink-0"
          style={{ background: '#13141a' }}>
          <span className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/10 flex-shrink-0">
            <span className="absolute inset-0 bg-gradient-to-br from-teal-400 via-violet-500 to-orange-400" />
            <span className="absolute inset-[2px] rounded-[7px] bg-[#13141a]/90 grid place-items-center">
              <Star size={14} className="text-white" />
            </span>
          </span>
          <div className="min-w-0">
            <div className="text-[15px] font-bold text-white">About Sudheeksha</div>
            <div className="text-[11px] text-white/45">The team building governed AI for the enterprise</div>
          </div>
          <button
            onClick={onClose}
            className="ml-auto w-8 h-8 rounded-lg border border-white/10 grid place-items-center text-white/40 hover:text-white hover:border-white/20 transition-all"
          >
            <X size={15} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-4 sm:px-8 py-6 sm:py-8 space-y-10 sm:space-y-12">

          {/* Origin story */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/25 bg-teal-500/10 text-[10.5px] font-bold uppercase tracking-wider text-teal-400 mb-5">
              Our story
            </div>
            <h2 className="font-display text-[28px] font-bold text-white leading-tight mb-4">
              We built the platform we<br />wished existed.
            </h2>
            <div className="space-y-4 text-[14px] text-white/65 leading-relaxed">
              <p>
                Sudheeksha — from Sanskrit, meaning <em className="text-white/80">"well-intentioned, guided by wisdom"</em> — was
                incorporated in 2018 in Hyderabad, India, by Surender Reddy Palakala, a technology thought
                leader with a track record of building enterprise platforms that matter.
              </p>
              <p>
                From securing enterprise identities with Secure UAM, to tracking ESG impact with Redwoods,
                each product has tackled a real gap in regulated industries. The common thread:
                <strong className="text-white"> emerging technology adopted fast, governed right.</strong>
              </p>
              <p>
                Sirius is the natural evolution — an AI-first platform where governance is the runtime
                itself. Every agent run, every tool call, every flow produces a cryptographically sealed
                evidence pack. Because regulated enterprises can't afford AI they can't explain.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '20+', label: 'Years of enterprise technology experience' },
              { value: '3',   label: 'Enterprise platforms built & shipped' },
              { value: '50+', label: 'Native integration connectors' },
              { value: '5',   label: 'Compliance frameworks supported at GA' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div className="text-[28px] font-black text-white leading-none mb-1.5">{s.value}</div>
                <div className="text-[11px] text-white/45 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Founder */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/10 text-[10.5px] font-bold uppercase tracking-wider text-violet-400 mb-5">
              Founder
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6">
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-xl grid place-items-center text-[13px] font-black flex-shrink-0 tracking-tight"
                  style={{ background: founder.bg, color: founder.color, border: `1px solid ${founder.color}30` }}
                >
                  {founder.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[16px] font-bold text-white mb-0.5">{founder.name}</div>
                  <div className="text-[12px] font-semibold mb-4" style={{ color: founder.color }}>{founder.role}</div>

                  {/* Award badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {founder.awards.map((a) => {
                      const AIcon = a.icon
                      return (
                        <div
                          key={a.label}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold"
                          style={{ background: a.bg, border: `1px solid ${a.border}`, color: a.color }}
                        >
                          <AIcon size={12} />
                          {a.label}
                        </div>
                      )
                    })}
                  </div>

                  <p className="text-[13px] text-white/60 leading-relaxed mb-4">{founder.bio}</p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {founder.tags.map((t) => (
                      <span key={t} className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.05] text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisors */}
          {/*
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-[10.5px] font-bold uppercase tracking-wider text-amber-400 mb-5">
              Guided by GRC founders & advisors
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {advisors.map((a) => (
                <div key={a.name}
                  className="rounded-xl border border-white/[0.08] p-4 flex items-center gap-3"
                  style={{ background: a.bg }}>
                  <div
                    className="w-11 h-11 rounded-lg grid place-items-center text-[12px] font-black flex-shrink-0"
                    style={{ background: `${a.color}20`, color: a.color, border: `1px solid ${a.color}35` }}
                  >
                    {a.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-white">{a.name}</div>
                    <div className="text-[12px] text-white/55 mt-0.5">{a.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}
          {/* Values */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/25 bg-teal-500/10 text-[10.5px] font-bold uppercase tracking-wider text-teal-400 mb-5">
              What we stand for
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                    <div className="w-9 h-9 rounded-lg grid place-items-center mb-3"
                      style={{ background: v.bg, border: `1px solid ${v.color}30` }}>
                      <Icon size={16} style={{ color: v.color }} />
                    </div>
                    <div className="text-[13.5px] font-bold text-white mb-1.5">{v.title}</div>
                    <p className="text-[12.5px] text-white/55 leading-relaxed">{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-[10.5px] font-bold uppercase tracking-wider text-emerald-400 mb-5">
              Milestones
            </div>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full grid place-items-center text-[11px] font-black flex-shrink-0"
                      style={{ background: `${m.color}18`, color: m.color, border: `1px solid ${m.color}35` }}
                    >
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px bg-white/[0.07] my-1.5" style={{ minHeight: '28px' }} />
                    )}
                  </div>
                  <div className="pb-7 pt-1">
                    <div className="text-[13px] font-bold text-white mb-1">{m.title}</div>
                    <div className="text-[12.5px] text-white/50 leading-relaxed">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/[0.06] p-6 text-center">
            <h3 className="text-[18px] font-bold text-white mb-2">Ready to govern your AI?</h3>
            <p className="text-[13px] text-white/55 mb-5 max-w-sm mx-auto">
              Book a 30-minute session with our team — we'll walk through your AI governance gaps and scope a pilot.
            </p>
            <button
              onClick={() => { onClose(); openDemo() }}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-[13.5px] transition-colors"
            >
              Book a 30-min demo <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
