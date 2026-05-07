import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logoImg from '../assets/image.png'

// Import app screenshots
import screen1 from '../assets/app-screen-1.png'
import screen2 from '../assets/app-screen-2.png'
import screen3 from '../assets/app-screen-3.png'
import screen4 from '../assets/app-screen-4.png'

// Demo carousel images with actual screenshots
const demoImages = [
  { id: 1, step: 'Hero', title: 'Close Deals Faster', image: screen1 },
  { id: 2, step: 'Discover', title: 'Explore Listings', image: screen2 },
  { id: 3, step: 'My Listings', title: 'Manage Your Properties', image: screen3 },
  { id: 4, step: 'Search', title: 'Find Properties', image: screen4 },
]

const steps = [
  { n: '01', icon: '📱', title: 'Register & Get Started', desc: 'Sign up using your mobile number and create your profile in seconds.' },
  { n: '02', icon: '🏠', title: 'Add Property Listings', desc: 'Add properties with structured details — location, type, price, area & specifications.' },
  { n: '03', icon: '🔍', title: 'Explore Community Listings', desc: 'Access all properties by other brokers. Filter by city, area, type, rent or sale.' },
  { n: '04', icon: '📞', title: 'Connect Instantly', desc: 'Call or WhatsApp the broker directly. No delays. No searching through chats.' },
  { n: '05', icon: '🔄', title: 'Keep Listings Updated', desc: 'Refresh listings regularly so they stay visible and relevant in the system.' },
]

const features = [
  { icon: '📋', title: 'Structured Listings', desc: 'All properties stored in a clean, organized format — no more messy messages.', color: '#3b82f6' },
  { icon: '🔍', title: 'Smart Search & Filters', desc: 'Find properties by location, price, type and requirements instantly.', color: '#c084fc' },
  { icon: '📞', title: 'Instant Broker Connect', desc: 'Connect with property owners via call or WhatsApp in one tap.', color: '#22d3ee' },
  { icon: '⏱️', title: 'Auto Expiry & Refresh', desc: 'Listings stay relevant with auto-expiry and refresh functionality.', color: '#22c55e' },
  { icon: '📱', title: 'Simple to Use', desc: 'Designed for daily use by brokers — no technical knowledge required.', color: '#3b82f6' },
]

const benefits = [
  { icon: '🤝', text: 'Brokers collaborate instead of competing' },
  { icon: '🏠', text: 'Clients get better, wider property options' },
  { icon: '⚡', text: 'Deals close faster with shared opportunities' },
  { icon: '🎯', text: 'No leads go to waste — every inquiry finds a chance' },
  { icon: '💰', text: 'Stronger network. Smarter deals. Higher earnings.' },
]

export default function AppPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % demoImages.length)
    }, 4000) // Change slide every 4 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <main>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)', display: 'flex', alignItems: 'center', paddingTop: 72, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.1) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(59,130,246,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 32px', width: '100%', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,165,0,0.25)', color: '#bfdbfe', fontSize: '0.78rem', fontWeight: 600, padding: '6px 16px', borderRadius: 30, marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <span style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', display: 'inline-block' }} />
              Now Available on Android &amp; iOS
            </div>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
              One App for All Your{' '}
              <span style={{ background: 'linear-gradient(90deg,#3b82f6,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Property Deals
              </span>
            </h1>
            <p style={{ color: '#a8c5e0', fontSize: '1rem', lineHeight: 1.7, marginBottom: 36 }}>
              The OMD Broker Associate app replaces scattered WhatsApp groups with a centralized, searchable property network — built for Indian brokers and builders.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal" target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)', color: '#ffff', padding: '14px 32px', borderRadius: 14, fontWeight: 800, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }}>📲 Download Now</a>
              <Link to="/contact" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 32px', borderRadius: 14, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.2)' }}>Request Demo →</Link>
            </div>
          </div>

          {/* ── APP CAROUSEL DEMO ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '10%', minHeight: 100 }}>
            <div style={{ position: 'relative', width: '40%', maxWidth: 340, aspectRatio: '9/19', borderRadius: 32, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', border: '9px solid rgba(255,255,255,0.1)' }}>
              {/* Carousel slides */}
              {demoImages.map((image, idx) => (
                <div
                  key={image.id}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${image.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: 20,
                    opacity: currentSlide === idx ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    pointerEvents: currentSlide === idx ? 'auto' : 'none',
                    padding: 20,
                  }}
                >
                  {/* Gradient overlay for text readability */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
                    pointerEvents: 'none',
                  }} />
                  
                  {/* Text content */}
                  <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', marginBottom: 16 }}>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.9)', marginBottom: 6, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Step {idx + 1}</div>
                  </div>
                </div>
              ))}

              {/* Slide indicators */}
              <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
                {demoImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      width: currentSlide === idx ? 24 : 8,
                      height: 8,
                      background: currentSlide === idx ? '#fff' : 'rgba(255,255,255,0.4)',
                      border: 'none',
                      borderRadius: 4,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating glow effect */}
            <div style={{
              position: 'absolute',
              width: 400,
              height: 400,
              background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              zIndex: -1,
            }} />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ color: '#3b82f6', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>Workflow</div>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, color: '#3b82f6', marginBottom: 12 }}>How the Platform Works</h2>
            <p style={{ color: '#0077b6' }}>Get started in minutes. No technical knowledge required.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16 }}>
            {steps.map(s => (
              <div key={s.n} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(37,99,235,0.15)', borderRadius: 20, padding: '28px 20px', textAlign: 'center', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.15)' }}
              >
                <div style={{ width: 32, height: 32, background: 'rgba(37,99,235,0.15)', color: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontSize: '0.7rem', fontWeight: 900, border: '1px solid rgba(37,99,235,0.3)' }}>{s.n}</div>
                <div style={{ fontSize: '2rem', marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#3b82f6', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#0077b6', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ color: '#3b82f6', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>Features</div>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, color: '#3b82f6', marginBottom: 12 }}>Key Features</h2>
            <p style={{ color: '#0077b6' }}>Everything a broker needs to manage deals efficiently.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
            {features.map(f => (
              <div key={f.title} style={{ background: 'rgba(255,255,255,0.05)', border: `1.5px solid ${f.color}33`, borderTop: `3px solid ${f.color}`, borderRadius: 20, padding: '32px 28px', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,165,0,0.07)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${f.color}18`, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 18 }}>{f.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#3b82f6', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#0077b6', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OMD ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.1) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(59,130,246,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ color: '#3b82f6', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>Why OMD</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 900, color: '#0077b6', marginBottom: 14 }}>
              Why Use{' '}
              <span style={{ background: 'linear-gradient(90deg,#3b82f6,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                One More Deal?
              </span>
            </h2>
            <p style={{ color: '#0077b6', fontSize: '1rem', maxWidth: 560, margin: '0 auto' }}>
              Because every lead deserves <span style={{ color: '#3b82f6', fontWeight: 700 }}>one more chance.</span>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <img src={logoImg} alt="OMD Logo" style={{ width: 160, height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 6px 24px rgba(255,165,0,0.5))' }} />
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,165,0,0.25)', borderRadius: 20, padding: 28 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1.8px', color: '#3b82f6', marginBottom: 14 }}>The Problem We Solve</div>
                <p style={{ color: '#a8c5e0', fontSize: '0.94rem', lineHeight: 1.8, margin: 0 }}>
                  A broker has a client, but no matching property.<br />
                  Another broker has inventory, but no matching client.
                </p>
                <p style={{ color: '#3b82f6', fontSize: '1rem', fontWeight: 700, marginTop: 14, marginBottom: 0 }}>
                  One More Deal connects them —{' '}
                  <span style={{ background: 'linear-gradient(90deg,#3b82f6,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 900 }}>instantly.</span>
                </p>
              </div>
              <div style={{ background: 'rgba(37,99,235,0.08)', border: '1.5px solid rgba(37,99,235,0.3)', borderLeft: '4px solid #3b82f6', borderRadius: 14, padding: '20px 22px' }}>
                <p style={{ color: '#3b82f6', fontSize: '0.92rem', lineHeight: 1.8, margin: 0 }}>
                  When a resale client doesn't find the perfect property, simply redirect them to the right new builder projects through our powerful broker network.
                </p>
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, background: 'linear-gradient(90deg,#3b82f6,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '0.8px', textTransform: 'uppercase', paddingTop: 12, borderTop: '1px solid rgba(255,165,0,0.25)' }}>
                More connections. More options. More closures.
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(37,99,235,0.2)', borderRadius: 26, backdropFilter: 'blur(20px)', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18, background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '18px 22px', color: '#d1e3f5', fontSize: '0.95rem', fontWeight: 500, transition: 'all 0.3s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.borderColor = 'rgba(255,165,0,0.45)'; e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,165,0,0.2)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#0077b6'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.color = '#d1e3f5'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
              <div style={{ marginTop: 8, background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(255,140,0,0.08))', border: '1.5px solid rgba(37,99,235,0.4)', borderRadius: 16, padding: '22px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff', marginBottom: 6 }}>One More Deal™</div>
                <div style={{ fontSize: '0.85rem', background: 'linear-gradient(90deg,#3b82f6,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, letterSpacing: '0.5px' }}>
                  Because every lead deserves one more chance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ color: '#3b82f6', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>Download</div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 900, color: '#3b82f6', marginBottom: 14 }}>Start Closing More Deals Today</h2>
          <p style={{ color: '#0077b6', fontSize: '1rem', maxWidth: 520, marginBottom: 44, lineHeight: 1.7 }}>Join the growing network of brokers and builders using a smarter way to manage property listings.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <a href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(37,99,235,0.08)', border: '1.5px solid rgba(37,99,235,0.3)', color: '#3b82f6', padding: '16px 28px', borderRadius: 16, textDecoration: 'none', minWidth: 190 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>▶</div>
              <div style={{ textAlign: 'left' }}>
                <small style={{ display: 'block', fontSize: '0.68rem', color: '#3b82f6', marginBottom: 2 }}>Get it on</small>
                <strong style={{ fontSize: '1rem' }}>Google Play</strong>
              </div>
            </a>
            <a href="https://apps.apple.com/in/app/one-more-deal/id6763114774" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(37,99,235,0.08)', border: '1.5px solid rgba(37,99,235,0.3)', color: '#3b82f6', padding: '16px 28px', borderRadius: 16, textDecoration: 'none', minWidth: 190 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#f1f5f9', color: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}></div>
              <div style={{ textAlign: 'left' }}>
                <small style={{ display: 'block', fontSize: '0.68rem', color: '#3b82f6', marginBottom: 2 }}>Download on the</small>
                <strong style={{ fontSize: '1rem' }}>App Store</strong>
              </div>
            </a>
          </div>
          <p style={{ fontSize: '0.78rem', color: '#334155' }}>Download the app directly from Google Play or the Apple App Store.</p>
        </div>
      </section>

    </main>
  )
}
