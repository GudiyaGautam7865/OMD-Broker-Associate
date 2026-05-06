import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Home.css'

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
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot" />
              Trusted Real Estate Platform
            </div>
            <h1>
              Simplifying Property Deals for
              <span className="hero-highlight"> Brokers &amp; Builders</span>
            </h1>
            <p className="hero-sub">
              A smart and structured platform to replace scattered WhatsApp property sharing
              with a centralized, searchable system.
            </p>
            <p className="hero-tagline">
              🎯 Find the right property faster. Close deals quicker.
            </p>
            <div className="hero-actions">
              <Link to="/app#download" className="btn-primary btn-lg">📲 Download App</Link>
              <Link to="/contact" className="btn-ghost btn-lg">Contact Us →</Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card-stack">
              <div className="hcard hcard-main">
                <div className="hcard-header">
                  <span className="hcard-dot green" />
                  <span className="hcard-dot yellow" />
                  <span className="hcard-dot red" />
                  <span className="hcard-title">Live Listings</span>
                </div>
                <div className="hcard-row">
                  <span className="hcard-icon">🏠</span>
                  <div>
                    <div className="hcard-name">3BHK Flat – Pune</div>
                    <div className="hcard-meta">₹85L · Kothrud · Residential</div>
                  </div>
                  <span className="hcard-badge-green">Active</span>
                </div>
                <div className="hcard-row">
                  <span className="hcard-icon">🏢</span>
                  <div>
                    <div className="hcard-name">Office Space – Mumbai</div>
                    <div className="hcard-meta">₹1.2Cr · Andheri · Commercial</div>
                  </div>
                  <span className="hcard-badge-green">Active</span>
                </div>
                <div className="hcard-row">
                  <span className="hcard-icon">🌍</span>
                  <div>
                    <div className="hcard-name">NA Plot – Nashik</div>
                    <div className="hcard-meta">₹45L · Gangapur · Plot</div>
                  </div>
                  <span className="hcard-badge-blue">New</span>
                </div>
                <div className="hcard-connect">
                  <span>📞 Connect with Broker</span>
                  <span className="hcard-arrow">→</span>
                </div>
              </div>
              <div className="hcard hcard-float">
                <span className="float-icon">✅</span>
                <div>
                  <div className="float-title">Deal Closed!</div>
                  <div className="float-sub">2BHK · Wakad, Pune</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-bar">
          {stats.map(s => (
            <div className="stat-item" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-left anim-fade-left">
              <div className="section-eyebrow">About Us</div>
              <h2>A Better Way to Manage Property Listings</h2>
              <p>
                Managing property listings across WhatsApp groups is time-consuming and unstructured.
                Important deals get lost in chats, searching becomes difficult, and follow-ups are missed.
              </p>
              <p style={{ marginTop: 14 }}>
                OMD Broker Associate brings all your property data into one simple, powerful platform
                built specifically for real estate brokers and builders.
              </p>
              <ul className="check-list">
                <li><span className="check">✓</span> Organize listings in a structured format</li>
                <li><span className="check">✓</span> Quickly search and filter relevant properties</li>
                <li><span className="check">✓</span> Connect instantly with other brokers</li>
                <li><span className="check">✓</span> Save time and increase deal conversions</li>
              </ul>
              <Link to="/app" className="btn-primary" style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Explore the App →
              </Link>
            </div>
            <div className="about-right anim-fade-right">
              <div className="about-visual">
                <div className="av-card av-card-1 anim-scale-in delay-1">
                  <span className="av-icon">📱</span>
                  <div>
                    <div className="av-title">Mobile First</div>
                    <div className="av-desc">Designed for brokers on the go</div>
                  </div>
                </div>
                <div className="av-card av-card-2 anim-scale-in delay-2">
                  <span className="av-icon">🔍</span>
                  <div>
                    <div className="av-title">Smart Search</div>
                    <div className="av-desc">Filter by city, type, price & more</div>
                  </div>
                </div>
                <div className="av-card av-card-3 anim-scale-in delay-3">
                  <span className="av-icon">⚡</span>
                  <div>
                    <div className="av-title">Instant Connect</div>
                    <div className="av-desc">Call or WhatsApp in one tap</div>
                  </div>
                </div>
                <div className="av-card av-card-4 anim-scale-in delay-4">
                  <span className="av-icon">🔄</span>
                  <div>
                    <div className="av-title">Auto Refresh</div>
                    <div className="av-desc">Listings stay fresh & relevant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <div className="section-eyebrow">Our Services</div>
            <h2>What We Deal In</h2>
            <p>From residential flats to commercial spaces — we cover every property type.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className={`service-card anim-fade-up delay-${i + 1}`} key={s.title}>
                <div className="sc-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="sc-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="section why-section">
        <div className="why-bg" />
        <div className="container why-inner">
          <div className="why-left anim-fade-left">
            <div className="section-eyebrow light">Why Choose Us</div>
            <h2 className="light-h">Why This Platform Stands Out</h2>
            <p className="light-p">
              Built from the ground up for Indian real estate brokers who are tired of
              managing deals through WhatsApp groups.
            </p>
            <Link to="/app#download" className="btn-white" style={{ marginTop: 28, display: 'inline-block' }}>
              Get Started Free →
            </Link>
          </div>
          <div className="why-right">
            {why.map((w, i) => (
              <div className={`why-item anim-fade-right delay-${i + 1}`} key={i}>
                <span className="why-icon">{w.icon}</span>
                <span>{w.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT TEASER ── */}
      <section className="section cta-section">
        <div className="container cta-inner">
          <div className="cta-text anim-fade-left">
            <h2>Ready to Close More Deals?</h2>
            <p>Have questions or want a demo? Reach out — we'd love to help.</p>
            <div className="cta-chips">
              <a href="tel:+919209182221" className="chip">📞 +91-9209182221</a>
              <a href="mailto:omd.brokerassociate@gmail.com" className="chip">✉️ omd.brokerassociate@gmail.com</a>
            </div>
          </div>
          <div className="cta-actions anim-fade-right">
            <Link to="/contact" className="btn-primary btn-lg">Send an Inquiry</Link>
            <a href="https://wa.me/919209182221" target="_blank" rel="noreferrer" className="btn-whatsapp btn-lg">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
