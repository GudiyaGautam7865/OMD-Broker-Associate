import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logoImg from '../assets/image.png'
import screen1 from '../assets/app-screen-1.png'
import screen2 from '../assets/app-screen-2.png'
import screen3 from '../assets/app-screen-3.png'
import screen4 from '../assets/app-screen-4.png'

const demoImages = [
  { id: 1, image: screen1, label: 'Home' },
  { id: 2, image: screen2, label: 'Discover' },
  { id: 3, image: screen3, label: 'My Listings' },
  { id: 4, image: screen4, label: 'Search' },
]

const steps = [
  { n: '01', title: 'Register & Get Started', desc: 'Sign up using your mobile number and create your profile in seconds.' },
  { n: '02', title: 'Add Property Listings', desc: 'Add properties with structured details — location, type, price, area & specs.' },
  { n: '03', title: 'Explore Community Listings', desc: 'Access all properties by other brokers. Filter by city, area, type, rent or sale.' },
  { n: '04', title: 'Connect Instantly', desc: 'Call or WhatsApp the broker directly. No delays. No searching through chats.' },
  { n: '05', title: 'Keep Listings Updated', desc: 'Refresh listings regularly so they stay visible and relevant in the system.' },
]

const features = [
  { title: 'Structured Listings', desc: 'All properties stored in a clean, organized format — no more messy messages.', color: '#2563eb' },
  { title: 'Smart Search & Filters', desc: 'Find properties by location, price, type and requirements instantly.', color: '#7c3aed' },
  { title: 'Instant Broker Connect', desc: 'Connect with property owners via call or WhatsApp in one tap.', color: '#0891b2' },
  { title: 'Auto Expiry & Refresh', desc: 'Listings stay relevant with auto-expiry and refresh functionality.', color: '#16a34a' },
  { title: 'Simple to Use', desc: 'Designed for daily use by brokers — no technical knowledge required.', color: '#2563eb' },
]

const benefits = [
  'Brokers collaborate instead of competing',
  'Clients get better, wider property options',
  'Deals close faster with shared opportunities',
  'No leads go to waste — every inquiry finds a chance',
  'Stronger network. Smarter deals. Higher earnings.',
]

const featureIcons = [
  <svg key="f1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
  <svg key="f2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  <svg key="f3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>,
  <svg key="f4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  <svg key="f5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
]

export default function AppPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(p => (p + 1) % demoImages.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>

      {/* ── HERO ── */}
      <section style={{ minHeight: '88vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)', display: 'flex', alignItems: 'center', paddingTop: 60, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px', width: '100%', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 48, alignItems: 'center' }}>

          <div style={{ maxWidth: 540 }}>
            <div className="hero-badge">
              <span style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', display: 'inline-block' }} />
              Now Available on Android &amp; iOS
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
              One App for All Your{' '}
              <span style={{ background: 'linear-gradient(90deg,#60a5fa,#93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Property Deals
              </span>
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 28 }}>
              The OMD Broker Associate app replaces scattered WhatsApp groups with a centralized, searchable property network — built for Indian brokers and builders.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal" target="_blank" rel="noopener noreferrer" className="btn-primary">Download Now</a>
              <Link to="/contact" className="btn-outline">Request Demo →</Link>
            </div>
          </div>

          {/* CAROUSEL */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ position: 'relative', width: 220, aspectRatio: '9/19', borderRadius: 28, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', border: '8px solid rgba(255,255,255,0.1)' }}>
              {demoImages.map((img, idx) => (
                <div key={img.id} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: currentSlide === idx ? 1 : 0, transition: 'opacity 0.7s ease' }} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {demoImages.map((img, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} style={{ width: currentSlide === idx ? 22 : 7, height: 7, background: currentSlide === idx ? '#fff' : 'rgba(255,255,255,0.35)', border: 'none', borderRadius: 4, cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} aria-label={img.label} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {demoImages.map((img, idx) => (
                <span key={idx} style={{ fontSize: '0.7rem', fontWeight: 600, color: currentSlide === idx ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }}>{img.label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── HOW IT WORKS ── */}
      <section className="section-light" style={{ padding: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-tag">Workflow</span>
            <h2 className="section-title">How the Platform Works</h2>
            <p className="section-sub">Get started in minutes. No technical knowledge required.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(175px,1fr))', gap: 14 }}>
            {steps.map(s => (
              <div key={s.n} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 30, height: 30, background: '#eff6ff', color: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '0.68rem', fontWeight: 900, border: '1px solid #bfdbfe' }}>{s.n}</div>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FEATURES ── */}
      <section className="section-white" style={{ padding: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-tag">Features</span>
            <h2 className="section-title">Key Features</h2>
            <p className="section-sub">Everything a broker needs to manage deals efficiently.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(195px,1fr))', gap: 16 }}>
            {features.map((f, i) => (
              <div key={f.title} className="card-accent" style={{ borderTopColor: f.color }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${f.color}15`, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  {featureIcons[i]}
                </div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e293b', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── WHY OMD ── */}
      <section className="section-light" style={{ padding: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-tag">Why OMD</span>
            <h2 className="section-title">Why Use <span className="accent">One More Deal?</span></h2>
            <p className="section-sub">Because every lead deserves <strong style={{ color: '#2563eb' }}>one more chance.</strong></p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32, alignItems: 'start' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <img src={logoImg} alt="OMD Logo" style={{ width: 160, height: 'auto', objectFit: 'contain' }} />
              <div className="card">
                <div className="label-tag" style={{ marginBottom: 10 }}>The Problem We Solve</div>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: 12 }}>
                  A broker has a client, but no matching property.<br />
                  Another broker has inventory, but no matching client.
                </p>
                <p style={{ color: '#2563eb', fontSize: '0.9rem', fontWeight: 700 }}>
                  One More Deal connects them — <span style={{ background: 'linear-gradient(90deg,#2563eb,#1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 900 }}>instantly.</span>
                </p>
              </div>
              <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderLeft: '3px solid #2563eb', borderRadius: 12, padding: '16px 18px' }}>
                <p style={{ color: '#1e40af', fontSize: '0.85rem', lineHeight: 1.8 }}>
                  When a resale client doesn't find the perfect property, redirect them to the right new builder projects through our powerful broker network.
                </p>
              </div>
              <p style={{ fontSize: '0.82rem', fontWeight: 800, color: '#2563eb', letterSpacing: '0.5px', textTransform: 'uppercase', paddingTop: 8, borderTop: '1px solid #e2e8f0' }}>
                More connections. More options. More closures.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {benefits.map((b, i) => (
                <div key={i} className="benefit-item">
                  <span style={{ width: 28, height: 28, background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" style={{ width: 14, height: 14 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{b}</span>
                </div>
              ))}
              <div style={{ marginTop: 8, background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', borderRadius: 14, padding: '20px 22px', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#fff', marginBottom: 4 }}>One More Deal™</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Because every lead deserves one more chance.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── DOWNLOAD ── */}
      <section id="download" className="section-white" style={{ padding: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <span className="label-tag">Download</span>
          <h2 className="section-title">Start Closing More Deals Today</h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>Join the growing network of brokers and builders using a smarter way to manage property listings.</p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
            <a href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal" target="_blank" rel="noreferrer" className="store-btn">
              <div className="store-btn-icon" style={{ background: '#16a34a', color: '#fff' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                  <path d="M3 20.5v-17c0-.83 1.01-1.3 1.63-.78l14 8.5c.55.33.55 1.23 0 1.56l-14 8.5C4.01 21.8 3 21.33 3 20.5z" />
                </svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <small style={{ display: 'block', fontSize: '0.65rem', color: '#64748b', marginBottom: 1 }}>Get it on</small>
                <strong style={{ fontSize: '0.9rem', color: '#1e293b' }}>Google Play</strong>
              </div>
            </a>
            <a href="https://apps.apple.com/in/app/one-more-deal/id6763114774" target="_blank" rel="noreferrer" className="store-btn">
              <div className="store-btn-icon" style={{ background: '#1e293b', color: '#fff' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <small style={{ display: 'block', fontSize: '0.65rem', color: '#64748b', marginBottom: 1 }}>Download on the</small>
                <strong style={{ fontSize: '0.9rem', color: '#1e293b' }}>App Store</strong>
              </div>
            </a>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Available on Google Play and the Apple App Store.</p>
        </div>
      </section>

    </main>
  )
}
