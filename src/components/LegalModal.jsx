import { useEffect, useRef } from 'react'
import { X, ShieldCheck, Lock, FileText } from 'lucide-react'

/* ─── Content ─────────────────────────────────────────────────────── */

const PRIVACY = {
  icon: ShieldCheck,
  color: '#2dd4bf',
  bg: 'rgba(45,212,191,0.1)',
  title: 'Privacy Policy',
  subtitle: 'Effective 1 January 2026 · Last updated 1 May 2026',
  sections: [
    {
      heading: '1. Who we are',
      body: `Sudheeksha Software Solutions Private Ltd ("Sudheeksha", "we", "our", or "us") operates the Sirius enterprise AI platform and this website (sudheeksha.co.in). We are committed to protecting your personal data and respecting your privacy rights under the General Data Protection Regulation (GDPR), India's Digital Personal Data Protection Act 2023 (DPDPA), and applicable data protection laws worldwide.

For any privacy-related questions, contact our Data Protection Officer at: soori@sudheeksha.co.in`,
    },
    {
      heading: '2. Data we collect',
      body: `We collect the following categories of personal data:

**Contact & inquiry data:** When you submit our contact form, we collect your full name, work email address, company name, and the message you send. This data is used solely to respond to your inquiry.

**Newsletter subscriptions:** When you subscribe to platform updates, we collect your email address to send you product news and release notes.

**Usage analytics:** We collect anonymised usage data (pages visited, session duration, device type) via privacy-respecting analytics. No cookies are set without your consent. IP addresses are anonymised before storage.

**Demo bookings:** When you schedule a demo via Calendly, your data is processed under Calendly's Privacy Policy. We receive your name, email, and meeting notes.

We do not sell, rent, or trade your personal data to any third party. Ever.`,
    },
    {
      heading: '3. How we use your data',
      body: `We process your data under the following lawful bases:

• **Legitimate interest** — responding to your contact form submissions and providing demo sessions you requested.
• **Consent** — sending newsletter / platform update emails. You may withdraw consent at any time by clicking "Unsubscribe" in any email.
• **Contract** — processing data necessary to provide the Sirius platform to customers under a signed agreement.

We do not use your data for automated decision-making or profiling that produces legal or significant effects.`,
    },
    {
      heading: '4. Data retention',
      body: `Contact form submissions are retained for 24 months from the date of submission, then permanently deleted.

Newsletter subscriber emails are retained until you unsubscribe, after which they are deleted within 30 days.

Platform customer data is retained for the duration of the contract plus 12 months, unless a longer retention period is required by law (e.g. financial audit requirements).`,
    },
    {
      heading: '5. Your rights',
      body: `Depending on your jurisdiction, you have the right to:

• **Access** — request a copy of the personal data we hold about you.
• **Rectification** — request correction of inaccurate data.
• **Erasure** — request deletion of your personal data ("right to be forgotten").
• **Portability** — receive your data in a machine-readable format.
• **Restriction** — request that we limit the processing of your data.
• **Object** — object to processing based on legitimate interests.
• **Withdraw consent** — where processing is based on consent, withdraw it at any time.

To exercise any of these rights, email soori@sudheeksha.co.in. We will respond within 30 days.`,
    },
    {
      heading: '6. Data security',
      body: `All personal data is stored on infrastructure that is encrypted at rest (AES-256) and in transit (TLS 1.3). Access is restricted to authorised personnel only and protected by multi-factor authentication. We conduct annual third-party penetration tests and hold SOC 2 Type II certification.

Email delivery is handled by Resend (resend.com), a SOC 2 Type II certified provider. No email content is stored beyond Resend's standard 7-day log retention.`,
    },
    {
      heading: '7. International transfers',
      body: `Sudheeksha is headquartered in India. If you are located in the European Economic Area (EEA) or United Kingdom, your data may be transferred to and processed in India and the United States. Such transfers are safeguarded by Standard Contractual Clauses (SCCs) approved by the European Commission.`,
    },
    {
      heading: '8. Cookies',
      body: `This website uses only strictly necessary cookies required for basic site functionality. No advertising, tracking, or third-party cookies are set. We use a privacy-respecting analytics solution that does not track individual users and does not require cookie consent banners.`,
    },
    {
      heading: '9. Changes to this policy',
      body: `We may update this Privacy Policy from time to time. Material changes will be communicated by updating the "Last updated" date at the top of this page and, where appropriate, by email to registered users. Continued use of our services after the effective date constitutes acceptance of the updated policy.`,
    },
    {
      heading: '10. Contact',
      body: `For privacy inquiries, data subject requests, or to reach our DPO:

Email: soori@sudheeksha.co.in
Postal: Sudheeksha Software Solutions Private Ltd, Hyderabad, India 500039`,
    },
  ],
}

const TERMS = {
  icon: FileText,
  color: '#a78bfa',
  bg: 'rgba(167,139,250,0.1)',
  title: 'Terms of Service',
  subtitle: 'Effective 1 January 2026 · Governing law: India (Telangana)',
  sections: [
    {
      heading: '1. Acceptance of terms',
      body: `By accessing or using the Sirius platform, this website, or any services provided by Sudheeksha Software Solutions Private Ltd ("Sudheeksha", "we", "us"), you agree to be bound by these Terms of Service ("Terms"). If you are accepting on behalf of a company or other legal entity, you represent that you have authority to bind that entity.

If you do not agree to these Terms, do not access or use our services.`,
    },
    {
      heading: '2. Services',
      body: `Sudheeksha provides the Sirius enterprise AI platform, which includes the AI Studio, Flow Builder, Integration Studio, Sirius AI GRC, and Platform API (collectively, the "Services"). Access to the Services is subject to a separately executed Enterprise Agreement or Order Form.

These Terms govern your use of this website and any pre-sales or evaluation activities. Production platform access is governed by your Enterprise Agreement, which supersedes these Terms where they conflict.`,
    },
    {
      heading: '3. Acceptable use',
      body: `You agree not to:

• Use the Services for any unlawful purpose or in violation of any applicable laws or regulations.
• Attempt to gain unauthorised access to any portion of the Services, other accounts, or computer systems.
• Reverse engineer, decompile, disassemble, or attempt to derive source code from any part of the Services.
• Use the Services to transmit malware, spam, or any harmful or disruptive content.
• Scrape, mine, or extract data from the Services in ways not permitted by your agreement.
• Resell, sublicense, or make the Services available to third parties without our written consent.
• Interfere with or disrupt the integrity or performance of the Services or third-party systems connected to the Services.`,
    },
    {
      heading: '4. Intellectual property',
      body: `All intellectual property rights in the Sirius platform, including software, algorithms, documentation, trademarks, and brand assets, are owned by Sudheeksha Software Solutions Private Ltd or its licensors. Nothing in these Terms grants you any ownership rights in the Services.

You retain all ownership rights in any data, content, or materials you upload to or generate within the Services ("Customer Data"). You grant Sudheeksha a limited, non-exclusive licence to process Customer Data solely to provide the Services.

Feedback or suggestions you provide may be used by Sudheeksha without restriction or compensation.`,
    },
    {
      heading: '5. Confidentiality',
      body: `Each party agrees to keep confidential any non-public information of the other party that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and circumstances of disclosure. This obligation survives termination of these Terms for three (3) years.

NDAs may be executed on request by emailing soori@sudheeksha.co.in.`,
    },
    {
      heading: '6. Disclaimers',
      body: `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE". SUDHEEKSHA DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.

We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components. Specific uptime commitments and SLAs are available in Enterprise Agreements only.`,
    },
    {
      heading: '7. Limitation of liability',
      body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL SUDHEEKSHA BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, BUSINESS GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICES.

OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO SUDHEEKSHA IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.`,
    },
    {
      heading: '8. Governing law & disputes',
      body: `These Terms are governed by the laws of the State of Telangana, India, without regard to conflict of law principles.

Any disputes arising out of or relating to these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in Hyderabad, India, under the Arbitration and Conciliation Act 1996.

Notwithstanding the foregoing, either party may seek injunctive or equitable relief in any court of competent jurisdiction.`,
    },
    {
      heading: '9. Changes to terms',
      body: `We reserve the right to update these Terms at any time. We will notify you of material changes by updating the effective date and sending notice to registered users where practicable. Your continued use of the Services after the effective date constitutes acceptance.`,
    },
    {
      heading: '10. Contact',
      body: `For legal inquiries: soori@sudheeksha.co.in
Sudheeksha Software Solutions Private Ltd, Hyderabad, India 500039`,
    },
  ],
}

const SECURITY = {
  icon: Lock,
  color: '#34d399',
  bg: 'rgba(52,211,153,0.1)',
  title: 'Security',
  subtitle: 'Our commitment to keeping your data and AI workloads safe',
  sections: [
    {
      heading: 'Security-first by design',
      body: `Security at Sudheeksha is not an afterthought. It is a design principle that shapes every engineering decision — from the multi-tenant isolation model in our Platform API to the AES-256-GCM encryption in our Integration Studio secret vault.

We hold the following certifications and run continuous third-party assurance programmes:

• **SOC 2 Type II** — annual audit covering Security, Availability, and Confidentiality trust service criteria.
• **ISO 27001** — information security management system certification.
• **HIPAA-ready** — BAA available for healthcare customers.
• **EU AI Act** — conformity documentation for high-risk AI system operators.
• **GDPR** — data processing agreements and SCCs available on request.`,
    },
    {
      heading: 'Infrastructure & data security',
      body: `**Encryption at rest:** All customer data is encrypted at rest using AES-256-GCM. Encryption keys are managed via a hardware security module (HSM) with automated rotation every 90 days.

**Encryption in transit:** All data in transit is protected by TLS 1.3. We enforce HSTS with a minimum 1-year max-age. Older TLS versions and weak cipher suites are disabled.

**Secret vault:** Integration credentials, API keys, and OAuth tokens are stored in our dedicated secret vault with AES-256-GCM encryption, automated rotation, and least-privilege scoping per agent and per tenant.

**Data isolation:** The Sirius Platform API enforces strict multi-tenant isolation. Every database query is scoped by tenant_id at the ORM level. Cross-tenant data access is architecturally impossible, not just policy-prohibited.`,
    },
    {
      heading: 'Identity & access management',
      body: `**Authentication:** All platform access requires multi-factor authentication (MFA). We support TOTP, hardware security keys (FIDO2/WebAuthn), and enterprise SSO via SAML 2.0 and OIDC.

**SCIM provisioning:** Enterprise customers can automate user lifecycle management via SCIM 2.0, ensuring terminated employees are immediately deprovisioned.

**Role-based access control:** Fine-grained RBAC controls which users can create, modify, or run agents, flows, and integrations. All privilege changes are logged in the immutable audit trail.

**API keys:** Platform API keys are scoped to specific resources and operations. Keys are rotated on demand and auto-expire after configurable periods.`,
    },
    {
      heading: 'AI-specific security',
      body: `**Policy engine:** Every agent run passes through our pre- and post-execution policy engine before input reaches the LLM and before output reaches any connected system. Policy violations are blocked, logged, and generate audit events.

**Prompt injection protection:** We apply layered defences against prompt injection: input sanitisation, system prompt isolation, output filtering, and anomaly detection on execution traces.

**Agent Bill of Materials (ABOM):** Every agent deployment generates an ABOM — a cryptographically signed manifest of the agent's model, skills, tools, and policy configuration at the exact version deployed. This provides a verifiable chain of custody for every AI workload.

**Evidence packs:** Every execution produces a SHA-256-signed, immutable evidence pack containing inputs, outputs, policy decisions, and audit metadata — mapped to SOC 2, ISO 27001, HIPAA, EU AI Act, and GDPR controls.`,
    },
    {
      heading: 'Network & operational security',
      body: `**Cloud infrastructure:** Sirius runs on enterprise-grade cloud infrastructure with redundant availability zones, automated failover, and 99.9% uptime SLA for Enterprise customers.

**Network controls:** Our infrastructure is protected by Web Application Firewall (WAF), DDoS mitigation, and strict network segmentation. Production workloads run in private VPCs with no direct internet exposure.

**Private deployment:** Enterprise and Platform tier customers can deploy Sirius in their own VPC, private cloud, or on-premises. Contact soori@sudheeksha.co.in for architecture details.

**Backup & recovery:** All customer data is backed up continuously with point-in-time recovery. Full backups are retained for 30 days. Recovery Time Objective (RTO): 4 hours. Recovery Point Objective (RPO): 1 hour.`,
    },
    {
      heading: 'Security operations',
      body: `**Penetration testing:** We conduct annual third-party penetration tests against the full platform surface and remediate all critical and high findings within 14 days of report.

**Vulnerability management:** Our engineering team monitors CVE feeds, dependency vulnerability scanners, and security advisories continuously. Critical patches are deployed within 24 hours of a verified vulnerability.

**Security monitoring:** 24/7 security event monitoring with anomaly detection, automated alerting, and incident response playbooks for common threat scenarios.

**Employee security:** All Sudheeksha employees complete security awareness training on joining and annually thereafter. Engineers with access to production systems undergo enhanced background checks and hold privileged access under PAM controls.`,
    },
    {
      heading: 'Vulnerability disclosure',
      body: `We operate a responsible disclosure programme. If you discover a security vulnerability in Sirius or our website, we ask that you:

1. Email soori@sudheeksha.co.in with a description of the vulnerability, steps to reproduce, and potential impact.
2. Allow us 90 days to investigate and remediate before public disclosure.
3. Not exploit the vulnerability beyond what is necessary to demonstrate the issue.

We commit to acknowledging all reports within 2 business days, providing regular status updates, and not pursuing legal action against researchers acting in good faith.`,
    },
    {
      heading: 'Incident response',
      body: `In the event of a security incident affecting customer data:

• We will notify affected customers within 72 hours of confirming the incident, meeting GDPR notification requirements.
• We will provide a written incident report including timeline, scope, and remediation actions taken.
• Enterprise customers with dedicated CSMs will receive direct outreach from their CSM.

For urgent security concerns: soori@sudheeksha.co.in`,
    },
  ],
}

const CONTENT = { privacy: PRIVACY, terms: TERMS, security: SECURITY }

/* ─── Section renderer ────────────────────────────────────────────── */
function Section({ heading, body }) {
  const lines = body.split('\n\n')
  return (
    <div className="mb-8">
      <h3 className="text-[14px] font-bold text-white mb-3 pb-2 border-b border-white/[0.07]">
        {heading}
      </h3>
      <div className="space-y-3">
        {lines.map((para, i) => {
          const parts = para.split(/(\*\*[^*]+\*\*)/)
          return (
            <p key={i} className="text-[13px] text-white/60 leading-relaxed whitespace-pre-line">
              {parts.map((part, j) =>
                part.startsWith('**') && part.endsWith('**')
                  ? <strong key={j} className="text-white/90 font-semibold">{part.slice(2, -2)}</strong>
                  : part
              )}
            </p>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Modal ───────────────────────────────────────────────────────── */
export default function LegalModal({ type, onClose }) {
  const overlayRef = useRef(null)
  const content = CONTENT[type]

  useEffect(() => {
    if (!type) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [type])

  if (!type || !content) return null

  const { icon: Icon, color, bg, title, subtitle, sections } = content

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/[0.12] flex flex-col"
        style={{ background: '#13141a', boxShadow: '0 32px 80px rgba(0,0,0,0.8)', maxHeight: '92vh' }}
      >
        {/* Sticky header */}
        <div
          className="flex items-center gap-3 px-7 py-5 border-b border-white/[0.08] flex-shrink-0"
          style={{ background: '#13141a' }}
        >
          <div className="w-9 h-9 rounded-lg grid place-items-center flex-shrink-0"
            style={{ background: bg, border: `1px solid ${color}30` }}>
            <Icon size={16} style={{ color }} />
          </div>
          <div>
            <div className="text-[15px] font-bold text-white">{title}</div>
            <div className="text-[11px] text-white/40">{subtitle}</div>
          </div>
          <button
            onClick={onClose}
            className="ml-auto w-8 h-8 rounded-lg border border-white/10 grid place-items-center text-white/40 hover:text-white hover:border-white/20 transition-all"
          >
            <X size={15} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-7 py-7">
          {sections.map((s) => (
            <Section key={s.heading} heading={s.heading} body={s.body} />
          ))}

          <div className="mt-4 pt-4 border-t border-white/[0.07] text-[11.5px] text-white/30 text-center">
            © 2026 Sudheeksha Software Solutions Private Ltd · Hyderabad, India
          </div>
        </div>
      </div>
    </div>
  )
}
