import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-svg" style={{ width: 22, height: 22 }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Residential',
    desc: 'Flats, villas, apartments — buy, sell or rent.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-svg" style={{ width: 22, height: 22 }}>
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: 'Commercial',
    desc: 'Offices, shops, showrooms & commercial spaces.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-svg" style={{ width: 22, height: 22 }}>
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: 'Plots & Land',
    desc: 'NA plots, agricultural land & development sites.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-svg" style={{ width: 22, height: 22 }}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'New Projects',
    desc: 'Upcoming & under-construction project listings.',
  },
]

const stats = [
  { num: '500+', label: 'Active Brokers' },
  { num: '2000+', label: 'Property Listings' },
  { num: '5+', label: 'Cities Covered' },
  { num: '24/7', label: 'Platform Access' },
]

const why = [
  'Eliminates dependency on WhatsApp groups',
  'Saves time in searching properties',
  'Improves collaboration among brokers',
  'Keeps listings structured and updated',
  'Helps close deals faster',
]

const aboutFeatures = [
  { title: 'Mobile First', desc: 'Designed for brokers on the go', color: '#2563eb' },
  { title: 'Smart Search', desc: 'Filter by city, type, price & more', color: '#7c3aed' },
  { title: 'Instant Connect', desc: 'Call or WhatsApp in one tap', color: '#0891b2' },
  { title: 'Auto Refresh', desc: 'Listings stay fresh & relevant', color: '#16a34a' },
]

export default function Home() {
  useScrollAnimation()

  return (
    <main>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '92vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 60,
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(59,130,246,0.15) 0%, transparent 60%)', pointerEvents: 'none', animation: 'pulseBg 6s ease-in-out infinite' }} />

        <div style={{ flex: 1, maxWidth: 1200, margin: '0 auto', padding: '48px 24px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 40, alignItems: 'center', position: 'relative', zIndex: 1, width: '100%' }}>

          {/* LEFT */}
          <div className="anim-fade-left">
            <div className="hero-badge">
              <span style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', display: 'inline-block', animation: 'blink 1.5s infinite' }} />
              Trusted Real Estate Platform
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
              Simplifying Property Deals for{' '}
              <span style={{ background: 'linear-gradient(90deg,#60a5fa,#93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Brokers & Builders
              </span>
            </h1>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 10 }}>
              A smart platform to replace scattered WhatsApp property sharing with a centralized, searchable system.
            </p>

            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#60a5fa', marginBottom: 28, letterSpacing: '0.3px' }}>
              Find the right property faster. Close deals quicker.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
           <li>
  <a
    href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
    target="_blank"
    rel="noopener noreferrer"
className="btn-outline"
  >
    📲 Download App
  </a>
</li>
              <Link to="/contact" className="btn-outline">Contact Us →</Link>
            </div>
          </div>

          {/* RIGHT — Live Listings Card */}
          <div className="anim-float" style={{ maxWidth: 380, width: '100%', margin: '0 auto' }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, backdropFilter: 'blur(20px)', padding: 20, display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%' }} />
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1 }}>Live Listings</span>
              </div>

              {[
                { title: '3BHK Flat – Pune', sub: '₹85L · Kothrud · Residential', badge: 'Active', badgeColor: '#22c55e' },
                { title: 'Office Space – Mumbai', sub: '₹1.2Cr · Andheri · Commercial', badge: 'Active', badgeColor: '#22c55e' },
                { title: 'NA Plot – Nashik', sub: '₹45L · Gangapur · Plot', badge: 'New', badgeColor: '#3b82f6' },
              ].map(item => (
                <div key={item.title} className="listing-card">
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(37,99,235,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2" style={{ width: 16, height: 16 }}>
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</div>
                    <div style={{ fontSize: '0.73rem', color: '#94a3b8', marginTop: 2 }}>{item.sub}</div>
                  </div>
                  <span style={{ background: `${item.badgeColor}22`, color: item.badgeColor, fontSize: '0.68rem', fontWeight: 700, padding: '3px 9px', borderRadius: 20, border: `1px solid ${item.badgeColor}44`, flexShrink: 0 }}>
                    {item.badge}
                  </span>
                </div>
              ))}
<Link
  to="/contact"
  style={{ textDecoration: 'none' }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
      borderRadius: 10,
      padding: '11px 16px',
      color: '#fff',
      fontSize: '0.85rem',
      fontWeight: 700,
      cursor: 'pointer'
    }}
  >
    <span>Connect with Broker</span>
    <span>→</span>
  </div>
</Link>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="stats-bar">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── ABOUT ── */}
      <section className="section-white" style={{ padding: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 48, alignItems: 'center' }}>

            <div className="anim-fade-left">
              <span className="label-tag">About Us</span>
              <h2 className="section-title">A Better Way to Manage <span className="accent">Property Listings</span></h2>
              <p className="section-sub" style={{ marginBottom: 12 }}>Managing listings across WhatsApp groups is time-consuming and unstructured. Important deals get lost, searching becomes difficult, and follow-ups are missed.</p>
              <p className="section-sub" style={{ marginBottom: 20 }}>OMD Broker Associate brings all your property data into one simple, powerful platform built for real estate brokers and builders.</p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {['Organize listings in a structured format', 'Quickly search and filter relevant properties', 'Connect instantly with other brokers', 'Save time and increase deal conversions'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem', color: '#334155', fontWeight: 500 }}>
                    <span style={{ width: 20, height: 20, background: '#eff6ff', color: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 900, flexShrink: 0, border: '1px solid #bfdbfe' }}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link to="/app" className="btn-primary">Explore the App →</Link>
            </div>

            <div className="anim-fade-right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {aboutFeatures.map(c => (
                  <div key={c.title} className="card" style={{ borderTop: `3px solid ${c.color}` }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${c.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="2" style={{ width: 18, height: 18 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: 4 }}>{c.title}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.5 }}>{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SERVICES ── */}
      <section className="section-light" style={{ padding: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 40px' }}>
            <span className="label-tag">Our Services</span>
            <h2 className="section-title">What We Deal In</h2>
            <p className="section-sub">From residential flats to commercial spaces — we cover every property type.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 16 }}>
            {services.map(s => (
              <div key={s.title} className="card-accent">
                <div className="icon-box" style={{ marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e293b', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── WHY ── */}
      <section className="section-white" style={{ padding: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 48, alignItems: 'center' }}>

          <div className="anim-fade-left">
            <span className="label-tag">Why Choose Us</span>
            <h2 className="section-title">Why This Platform <span className="accent">Stands Out</span></h2>
            <p className="section-sub" style={{ marginBottom: 24 }}>Built from the ground up for Indian real estate brokers who are tired of managing deals through WhatsApp groups.</p>
            <Link to="/app#download" className="btn-primary">Get Started Free →</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {why.map((w, i) => (
              <div key={i} className={`why-item anim-fade-right delay-${i + 1}`}>
                <span style={{ width: 28, height: 28, background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" style={{ width: 14, height: 14 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ── */}
      <section className="section-light" style={{ padding: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="cta-section">
            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 900, color: '#fff', marginBottom: 8 }}>Ready to Close More Deals?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: 16 }}>Have questions or want a demo? Reach out — we'd love to help.</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="tel:+919209182221" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '7px 16px', borderRadius: 20, fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>+91-9209182221</a>
                <a href="mailto:omd.brokerassociate@gmail.com" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '7px 16px', borderRadius: 20, fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>omd.brokerassociate@gmail.com</a>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/contact" style={{ background: '#fff', color: '#2563eb', padding: '11px 24px', borderRadius: 10, fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none' }}>Send an Inquiry</Link>
              <a href="https://wa.me/919209182221" target="_blank" rel="noreferrer" style={{ background: '#16a34a', color: '#fff', padding: '11px 24px', borderRadius: 10, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
