import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  useScrollAnimation()

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <main>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)', padding: '80px 24px 56px', paddingTop: 100, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(99,102,241,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto' }}>
          <span className="label-tag" style={{ color: '#93c5fd' }}>Contact Us</span>
          <h1 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, color: '#fff', marginBottom: 10, marginTop: 4 }}>Let's Talk Property</h1>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>Have questions, want a demo, or ready to get started? We're here for you.</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* BODY */}
      <section className="section-light" style={{ padding: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32, alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1e293b', marginBottom: 6 }}>Get in Touch</h2>
            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 20 }}>Reach out through any of the channels below and we'll get back to you promptly.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
              <a href="tel:+919209182221" className="contact-card">
                <div className="icon-box" style={{ background: '#eff6ff' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" style={{ width: 18, height: 18 }}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#94a3b8', marginBottom: 2 }}>Phone</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1e293b' }}>+91-9209182221</div>
                </div>
              </a>

              <a href="mailto:omd.brokerassociate@gmail.com" className="contact-card">
                <div className="icon-box" style={{ background: '#f0fdf4' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ width: 18, height: 18 }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#94a3b8', marginBottom: 2 }}>Email</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1e293b', wordBreak: 'break-all' }}>omd.brokerassociate@gmail.com</div>
                </div>
              </a>

              <div className="contact-card" style={{ cursor: 'default' }}>
                <div className="icon-box" style={{ background: '#fefce8' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2" style={{ width: 18, height: 18 }}>
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#94a3b8', marginBottom: 2 }}>Working Hours</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1e293b' }}>Mon – Sat, 9 AM – 7 PM</div>
                </div>
              </div>
            </div>

            <a href="https://wa.me/919209182221" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'linear-gradient(135deg,#16a34a,#15803d)', borderRadius: 12, padding: '14px 18px', textDecoration: 'none', transition: 'all 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(22,163,74,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <svg viewBox="0 0 24 24" fill="white" style={{ width: 22, height: 22, flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#fff' }}>Chat on WhatsApp</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', marginTop: 1 }}>Typically replies within minutes</div>
              </div>
            </a>
          </div>

          {/* RIGHT — FORM */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '28px 24px', boxShadow: '0 4px 20px rgba(37,99,235,0.06)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e293b', marginBottom: 4 }}>Send an Inquiry</h2>
            <p style={{ color: '#64748b', fontSize: '0.82rem', marginBottom: 20 }}>Fill in the details below and we'll get back to you shortly.</p>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                <div style={{ width: 52, height: 52, background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" style={{ width: 24, height: 24 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 900, color: '#1e293b', marginBottom: 6 }}>Message Sent!</h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form style={{ display: 'flex', flexDirection: 'column', gap: 14 }} onSubmit={submit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 12 }}>
                  <div>
                    <label className="form-label">Full Name</label>
                    <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handle} required className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handle} required className="form-input" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handle} required className="form-input" />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea name="message" rows="4" placeholder="Tell us how we can help — property requirements, demo request, etc." value={form.message} onChange={handle} required className="form-input" style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Inquiry →</button>
              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  )
}
