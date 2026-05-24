export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }
  }

  const { email } = body
  if (!email || !email.includes('@')) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Valid email is required.' }) }
  }

  const from    = process.env.RESEND_FROM_EMAIL || 'Sirius Contact <noreply@sudheeksha.co.in>'
  const toOwner = process.env.RESEND_TO_EMAIL   || 'soori@sudheeksha.co.in'

  const res = await fetch('https://api.resend.com/emails/batch', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      // 1 — Thank-you to subscriber
      {
        from,
        to: [email],
        subject: "You're subscribed to Sirius platform updates",
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">

            <!-- Header -->
            <div style="background:#0f1117;padding:32px 40px">
              <div style="display:flex;align-items:center;gap:10px">
                <div style="width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#2dd4bf,#7c3aed,#f97316);display:inline-block"></div>
                <div>
                  <div style="color:#ffffff;font-size:16px;font-weight:700;letter-spacing:-0.3px">Sirius</div>
                  <div style="color:rgba(255,255,255,0.4);font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase">by Sudheeksha</div>
                </div>
              </div>
            </div>

            <!-- Body -->
            <div style="padding:40px">
              <h1 style="margin:0 0 12px;font-size:24px;font-weight:700;color:#0f1117;letter-spacing:-0.4px">
                You're on the list!
              </h1>
              <p style="margin:0 0 20px;font-size:15px;color:#6b7280;line-height:1.7">
                Thanks for subscribing to <strong style="color:#0f1117">Sirius platform updates</strong>.
                We'll send you occasional news on new features, releases, and AI governance insights —
                no spam, no noise.
              </p>

              <div style="background:#f0fdf9;border:1px solid #99f6e4;border-radius:10px;padding:18px 22px;margin-bottom:28px">
                <div style="font-size:13px;font-weight:700;color:#0d9488;margin-bottom:6px">What to expect</div>
                <ul style="margin:0;padding-left:18px;font-size:14px;color:#374151;line-height:1.8">
                  <li>Product release notes &amp; feature highlights</li>
                  <li>AI governance best practices</li>
                  <li>Early access invites &amp; beta programs</li>
                </ul>
              </div>

              <a href="https://calendly.com/soori-sudheeksha/30min"
                style="display:inline-block;background:#0d9488;color:#ffffff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none">
                Book a 30-min demo →
              </a>
            </div>

            <!-- Footer -->
            <div style="padding:20px 40px;border-top:1px solid #f3f4f6;background:#fafafa">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6">
                Sirius by Sudheeksha · Enterprise AI Platform<br/>
                <a href="mailto:soori@sudheeksha.co.in" style="color:#0d9488;text-decoration:none">soori@sudheeksha.co.in</a>
              </p>
            </div>

          </div>
        `,
      },

      // 2 — New subscriber notification to owner
      {
        from,
        to: [toOwner],
        subject: `[Sirius] New subscriber: ${email}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;color:#1a1a2e">
            <h2 style="color:#0d9488">New newsletter subscriber</h2>
            <p style="font-size:15px"><strong>${email}</strong> just subscribed to platform updates.</p>
          </div>
        `,
      },
    ]),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    console.error('Resend error', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Failed to send email.' }),
    }
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true }),
  }
}
