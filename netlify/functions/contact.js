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

  const { name, email, company, message } = body
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Name, email and message are required.' }),
    }
  }

  const from    = process.env.RESEND_FROM_EMAIL || 'Sirius Contact <noreply@sudheeksha.co.in>'
  const toOwner = process.env.RESEND_TO_EMAIL   || 'soori@sudheeksha.co.in'

  // Send both emails in a single Resend batch call
  const res = await fetch('https://api.resend.com/emails/batch', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      // 1 — Owner notification
      {
        from,
        to: [toOwner],
        reply_to: email,
        subject: `[Sirius] Contact from ${name}${company ? ` · ${company}` : ''}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a2e">
            <h2 style="color:#0d9488">New contact · Sirius website</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-weight:600;width:120px">Name</td><td>${name}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:600">Company</td><td>${company || '—'}</td></tr>
            </table>
            <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb"/>
            <p style="white-space:pre-wrap;line-height:1.6">${message}</p>
          </div>
        `,
      },

      // 2 — Confirmation to the person who contacted
      {
        from,
        to: [email],
        subject: `We got your message, ${name.split(' ')[0]} — Sirius by Sudheeksha`,
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
                Thanks for reaching out, ${name.split(' ')[0]}!
              </h1>
              <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.7">
                We've received your message and will get back to you within
                <strong style="color:#0f1117">1 business day</strong>. No cold calls — promise.
              </p>

              <!-- Message recap -->
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:20px 24px;margin-bottom:28px">
                <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;margin-bottom:10px">Your message</div>
                <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap">${message}</p>
              </div>

              <p style="margin:0 0 28px;font-size:14px;color:#6b7280;line-height:1.7">
                While you wait, feel free to explore our
                <a href="https://sirius.sudheeksha.co.in/products" style="color:#0d9488;text-decoration:none;font-weight:600">product suite</a>
                or read through the
                <a href="https://sirius.sudheeksha.co.in/docs" style="color:#0d9488;text-decoration:none;font-weight:600">documentation</a>.
              </p>

              <!-- CTA -->
              <a href="https://calendly.com/soori-sudheeksha/30min"
                style="display:inline-block;background:#0d9488;color:#ffffff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none">
                Book a 30-min demo instead →
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
