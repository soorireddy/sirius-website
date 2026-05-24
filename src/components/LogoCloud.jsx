// Stylized partner / integration wordmarks rendered inline as SVG.
// These are integrations, not customer logos — honest positioning for a pre-launch brand.

const Mark = ({ children, className = '' }) => (
  <div className={`h-8 flex items-center justify-center text-white/55 hover:text-white transition-colors ${className}`}>
    {children}
  </div>
)

export default function LogoCloud() {
  return (
    <section className="relative bg-ink text-white py-16 border-t border-white/[0.06]">
      <div className="container-wide">
        <div className="text-center mb-10">
          <div className="mono-label !text-white/45">Connects natively to the systems your teams already run</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-8 items-center">
          {/* Salesforce */}
          <Mark>
            <svg viewBox="0 0 120 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">salesforce</text></svg>
          </Mark>
          {/* ServiceNow */}
          <Mark>
            <svg viewBox="0 0 130 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">ServiceNow.</text></svg>
          </Mark>
          {/* SAP */}
          <Mark>
            <svg viewBox="0 0 60 26" className="h-6 fill-current"><text x="0" y="22" fontFamily="Inter" fontWeight="900" fontSize="24" letterSpacing="0.5">SAP</text></svg>
          </Mark>
          {/* Workday */}
          <Mark>
            <svg viewBox="0 0 110 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">workday</text></svg>
          </Mark>
          {/* Snowflake */}
          <Mark>
            <svg viewBox="0 0 130 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">snowflake</text></svg>
          </Mark>
          {/* Databricks */}
          <Mark>
            <svg viewBox="0 0 130 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">databricks</text></svg>
          </Mark>
          {/* Slack */}
          <Mark>
            <svg viewBox="0 0 80 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">slack</text></svg>
          </Mark>
          {/* Microsoft Teams */}
          <Mark>
            <svg viewBox="0 0 70 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">Teams</text></svg>
          </Mark>
          {/* Jira */}
          <Mark>
            <svg viewBox="0 0 50 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">Jira</text></svg>
          </Mark>
          {/* AWS */}
          <Mark>
            <svg viewBox="0 0 60 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="900" fontSize="20" letterSpacing="-0.5">aws</text></svg>
          </Mark>
          {/* Azure */}
          <Mark>
            <svg viewBox="0 0 70 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">Azure</text></svg>
          </Mark>
          {/* Anthropic */}
          <Mark>
            <svg viewBox="0 0 110 26" className="h-5 fill-current"><text x="0" y="20" fontFamily="Inter" fontWeight="800" fontSize="20" letterSpacing="-0.5">Anthropic</text></svg>
          </Mark>
        </div>

        <div className="mt-10 text-center">
          <a href="#integrations" className="text-[12.5px] font-semibold text-white/60 hover:text-white inline-flex items-center gap-1.5">
            View all 50+ connectors
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
