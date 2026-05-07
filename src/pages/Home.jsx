import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = [
  { icon: '🏠', title: 'Residential', desc: 'Flats, villas, apartments — buy, sell or rent.' },
  { icon: '🏢', title: 'Commercial', desc: 'Offices, shops, showrooms & commercial spaces.' },
  { icon: '🌍', title: 'Plots & Land', desc: 'NA plots, agricultural land & development sites.' },
  { icon: '🏗️', title: 'New Projects', desc: 'Upcoming & under-construction project listings.' },
]

const stats = [
  { num: '500+', label: 'Active Brokers' },
  { num: '2000+', label: 'Property Listings' },
  { num: '5+', label: 'Cities Covered' },
  { num: '24/7', label: 'Platform Access' },
]

const why = [
  { icon: '💬', text: 'Eliminates dependency on WhatsApp groups' },
  { icon: '⚡', text: 'Saves time in searching properties' },
  { icon: '🤝', text: 'Improves collaboration among brokers' },
  { icon: '📋', text: 'Keeps listings structured and updated' },
  { icon: '🎯', text: 'Helps close deals faster' },
]

export default function Home() {
  useScrollAnimation()

  return (
    <main>

      {/* ── HERO ── */}
<section
  style={{
    minHeight: '100vh',
    background:
      'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 72,
  }}
>
  {/* Background Effects */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background:
        'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(59,130,246,0.18) 0%, transparent 60%)',
      pointerEvents: 'none',
      animation: 'pulseBg 6s ease-in-out infinite',
    }}
  />

  <div
    style={{
      flex: 1,
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 48,
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      width: '100%',
    }}
  >
    {/* LEFT */}
    <div className="hero-left animate-fadeLeft">
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(37,99,235,0.25)',
          color: '#bfdbfe',
          fontSize: '0.78rem',
          fontWeight: 600,
          padding: '6px 16px',
          borderRadius: 30,
          marginBottom: 24,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          animation: 'fadeUp 1s ease',
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            background: '#22c55e',
            borderRadius: '50%',
            display: 'inline-block',
            animation: 'blink 1.5s infinite',
          }}
        />
        Trusted Real Estate Platform
      </div>

      <h1
        style={{
          fontSize: 'clamp(2rem,4vw,3rem)',
          fontWeight: 900,
          color: '#fff',
          lineHeight: 1.15,
          marginBottom: 20,
        }}
      >
        Simplifying Property Deals for{' '}
        <span
          style={{
            background: 'linear-gradient(90deg,#3b82f6,#60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Brokers & Builders
        </span>
      </h1>

      <p
        style={{
          color: '#a8c5e0',
          fontSize: '1rem',
          lineHeight: 1.7,
          marginBottom: 14,
        }}
      >
        A smart and structured platform to replace scattered WhatsApp
        property sharing with a centralized, searchable system.
      </p>

      <p
        style={{
          fontSize: '0.9rem',
          fontWeight: 700,
          color: '#3b82f6',
          marginBottom: 36,
          letterSpacing: '0.5px',
        }}
      >
        🎯 Find the right property faster. Close deals quicker.
      </p>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {/* Download Button */}
        <Link
          to="/app#download"
          style={{
            background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: 14,
            fontWeight: 800,
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
            transition: 'all 0.3s ease',
          }}
              onMouseEnter={e => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.borderColor = 'rgba(255,165,0,0.45)'; e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,165,0,0.2)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.color = '#d1e3f5'; e.currentTarget.style.boxShadow = 'none' }}
        >
          📲 Download App
        </Link>

        {/* Contact Button */}
        <Link
          to="/contact"
          style={{
              background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: 14,
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
             onMouseEnter={e => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.borderColor = 'rgba(255,165,0,0.45)'; e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,165,0,0.2)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.color = '#d1e3f5'; e.currentTarget.style.boxShadow = 'none' }}
        >
          Contact Us →
        </Link>
      </div>
    </div>

    {/* RIGHT */}
    <div className="hero-right animate-float">
      <div
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1.5px solid rgba(37,99,235,0.2)',
          borderRadius: 26,
          backdropFilter: 'blur(20px)',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 4,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              background: '#22c55e',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              background: '#3b82f6',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              background: '#ef4444',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Live Listings
          </span>
        </div>

        {[
          {
            icon: '🏠',
            title: '3BHK Flat – Pune',
            sub: '₹85L · Kothrud · Residential',
            badge: 'Active',
            badgeColor: '#22c55e',
          },
          {
            icon: '🏢',
            title: 'Office Space – Mumbai',
            sub: '₹1.2Cr · Andheri · Commercial',
            badge: 'Active',
            badgeColor: '#22c55e',
          },
          {
            icon: '🌍',
            title: 'NA Plot – Nashik',
            sub: '₹45L · Gangapur · Plot',
            badge: 'New',
            badgeColor: '#3b82f6',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="listing-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 12,
              padding: 12,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>
              {item.icon}
            </span>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#f1f5f9',
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  marginTop: 2,
                }}
              >
                {item.sub}
              </div>
            </div>

            <span
              style={{
                background: `${item.badgeColor}22`,
                color: item.badgeColor,
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 20,
                border: `1px solid ${item.badgeColor}55`,
                flexShrink: 0,
              }}
            >
              {item.badge}
            </span>
          </div>
        ))}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
            borderRadius: 12,
            padding: '12px 16px',
            color: '#fff',
            fontSize: '0.9rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          <span>📞 Connect with Broker</span>
          <span>→</span>
        </div>
      </div>
    </div>
  </div>

  {/* STATS */}
<div
  style={{
    position: 'relative',
    zIndex: 10,
    background: '#fff',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
  }}
>
  {stats.map((s, i) => (
    <div
      key={s.label}
      className="stats-box"
      style={{
        flex: 1,
        minWidth: 140,
        padding: '28px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        borderRight:
          i < stats.length - 1
            ? '1px solid rgba(255,165,0,0.1)'
            : 'none',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        position: 'relative',
        animation: `fadeUp 0.6s ease forwards`,
        animationDelay: `${i * 0.2}s`,
        opacity: 0,
      }}
    >
      {/* Glow Effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(37,99,235,0.03))',
          opacity: 0,
          transition: '0.4s ease',
          borderRadius: 12,
        }}
        className="stats-glow"
      />

      {/* Number */}
      <span
        className="stats-number"
        style={{
          fontSize: '1.8rem',
          fontWeight: 900,
          color: '#3b82f6',
          position: 'relative',
          zIndex: 2,
          transition: '0.3s ease',
        }}
      >
        {s.num}
      </span>

      {/* Label */}
      <span
        style={{
          fontSize: '0.8rem',
          color: '#64748b',
          fontWeight: 600,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {s.label}
      </span>
    </div>
  ))}

  {/* CSS */}
  <style>
    {`
      /* Fade Animation */
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Hover Animation */
      .stats-box:hover {
        transform: translateY(-10px) scale(1.05);
        background: rgba(59,130,246,0.03);
      }

      .stats-box:hover .stats-glow {
        opacity: 1;
      }

      .stats-box:hover .stats-number {
        transform: scale(1.15);
        color: #2563eb;
      }

      /* Floating Effect */
      .stats-box {
        animation-fill-mode: forwards;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .stats-box {
          min-width: 50%;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
      }

      @media (max-width: 480px) {
        .stats-box {
          min-width: 100%;
        }
      }
    `}
  </style>
</div>

  {/* CSS */}
  <style>
    {`
      .animate-fadeLeft {
        animation: fadeLeft 1s ease forwards;
      }

      @keyframes fadeLeft {
        from {
          opacity: 0;
          transform: translateX(-60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .animate-float {
        animation: floatCard 4s ease-in-out infinite;
      }

      @keyframes floatCard {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-12px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      .listing-card:hover {
        transform: translateY(-6px) scale(1.02);
        background: rgba(255,255,255,0.09);
        box-shadow: 0 12px 30px rgba(37,99,235,0.25);
      }

      .stats-box:hover {
        transform: translateY(-5px);
        background: rgba(59,130,246,0.04);
      }

      @keyframes pulseBg {
        0% {
          opacity: 0.7;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.7;
        }
      }

      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.3;
        }
        100% {
          opacity: 1;
        }
      }
    `}
  </style>
</section>

      {/* ── ABOUT ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 80, alignItems: 'center' }}>
            <div className="about-left anim-fade-left">
              <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#3b82f6', marginBottom: 12 }}>About Us</div>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, color: '#3b82f9', marginBottom: 18 }}>A Better Way to Manage Property Listings</h2>
              <p style={{ color: '#0077b6', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 14 }}>Managing property listings across WhatsApp groups is time-consuming and unstructured. Important deals get lost in chats, searching becomes difficult, and follow-ups are missed.</p>
              <p style={{ color: '#0077b6', fontSize: '0.95rem', lineHeight: 1.8 }}>OMD Broker Associate brings all your property data into one simple, powerful platform built specifically for real estate brokers and builders.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Organize listings in a structured format', 'Quickly search and filter relevant properties', 'Connect instantly with other brokers', 'Save time and increase deal conversions'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.9rem', color: '#3b82f6', fontWeight: 500 }}>
                    <span style={{ width: 22, height: 22, background: 'rgba(37,99,235,0.15)', color: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 900, flexShrink: 0, border: '1px solid rgba(37,99,235,0.3)' }}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link to="/app" style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)', color: '#ffff', padding: '12px 28px', borderRadius: 12, fontWeight: 800, fontSize: '1rem', display: 'inline-block', marginTop: 28, textDecoration: 'none', boxShadow: '0 4px 20px rgba(255,165,0,0.35)' }}>Explore the App →</Link>
            </div>
            <div className="about-right anim-fade-right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { icon: '📱', title: 'Mobile First', desc: 'Designed for brokers on the go', accent: '#3b82f6' },
                  { icon: '🔍', title: 'Smart Search', desc: 'Filter by city, type, price & more', accent: '#c084fc' },
                  { icon: '⚡', title: 'Instant Connect', desc: 'Call or WhatsApp in one tap', accent: '#22d3ee' },
                  { icon: '🔄', title: 'Auto Refresh', desc: 'Listings stay fresh & relevant', accent: '#22c55e' },
                ].map((c, i) => (
                  <div key={c.title} className={`anim-scale-in delay-${i + 1}`} style={{ background: 'rgba(255,255,255,0.05)', border: `1.5px solid ${c.accent}33`, borderTop: `3px solid ${c.accent}`, borderRadius: 16, padding: 20, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <span style={{ fontSize: '2rem', flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#3b82f6', marginBottom: 4 }}>{c.title}</div>
                      <div style={{ fontSize: '0.78rem', color: '#0077b6', lineHeight: 1.5 }}>{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
            <section className="bg-slate-50 py-20 px-6">

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }} className="anim-fade-up">
            <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#3b82f6', marginBottom: 10 }}>Our Services</div>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, color: '#3b82f6', marginBottom: 12 }}>What We Deal In</h2>
            <p style={{ color: '#0077b6', fontSize: '0.95rem' }}>From residential flats to commercial spaces — we cover every property type.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <div key={s.title} className={`anim-fade-up delay-${i + 1}`} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(37,99,235,0.15)', borderTop: '3px solid #3b82f6', borderRadius: 20, padding: '32px 24px', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,165,0,0.08)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,99,235,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: 18 }}>{s.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#3b82f6', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#0077b6', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(255,165,0,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 80, alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div className="why-left anim-fade-left">
            <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#3b82f6', marginBottom: 12 }}>Why Choose Us</div>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, color: '#3b82f6', marginBottom: 18 }}>Why This Platform Stands Out</h2>
            <p style={{ color: '#0077b6', fontSize: '0.95rem', lineHeight: 1.8 }}>Built from the ground up for Indian real estate brokers who are tired of managing deals through WhatsApp groups.</p>
            <Link to="/app#download" style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)', color: '#ffff', padding: '12px 28px', borderRadius: 12, fontWeight: 800, fontSize: '0.95rem', display: 'inline-block', marginTop: 28, textDecoration: 'none', boxShadow: '0 4px 20px rgba(255,165,0,0.35)' }}>Get Started Free →</Link>
          </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(37,99,235,0.2)', borderRadius: 26, backdropFilter: 'blur(20px)', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {why.map((w, i) => (
              <div key={i} className={`anim-fade-right delay-${i + 1}`} style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#3b82f6', border: '2.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '16px 20px', color: '#d1e3f5', fontSize: '0.92rem', fontWeight: 500, transition: 'all 0.25s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'; e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0077b6'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.color = '#ffff' }}
              >
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{w.icon}</span>
                <span>{w.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT TEASER ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div style={{ maxWidth: 1200, margin: '0 auto', background: 'rgba(255,165,0,0.06)', border: '1.5px solid rgba(255,165,0,0.25)', borderRadius: 24, padding: '56px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div className="cta-text anim-fade-left">
            <h2 style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 900, color: '#3b82f6', marginBottom: 10 }}>Ready to Close More Deals?</h2>
            <p style={{ color: '#0077b6', marginBottom: 20 }}>Have questions or want a demo? Reach out — we'd love to help.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="tel:+919209182221" style={{ background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(37,99,235,0.3)', color: '#3b82f6', padding: '8px 18px', borderRadius: 30, fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>📞 +91-9209182221</a>
              <a href="mailto:omd.brokerassociate@gmail.com" style={{ background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(37,99,235,0.3)', color: '#3b82f6', padding: '8px 18px', borderRadius: 30, fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>✉️ omd.brokerassociate@gmail.com</a>
            </div>
          </div>
          <div className="cta-actions anim-fade-right" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contact" style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)', color: '#ffff', padding: '14px 32px', borderRadius: 12, fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(255,165,0,0.35)' }}>Send an Inquiry</Link>
            <a href="https://wa.me/919209182221" target="_blank" rel="noreferrer" style={{ background: '#22c55e', color: '#fff', padding: '14px 32px', borderRadius: 12, fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none' }}>💬 WhatsApp Us</a>
          </div>
        </div>
      </section>

    </main>
  )
}
