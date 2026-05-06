import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './AppPage.css'

const steps = [
  { n: '01', icon: '📱', title: 'Register & Get Started', desc: 'Sign up using your mobile number and create your profile in seconds.' },
  { n: '02', icon: '🏠', title: 'Add Property Listings', desc: 'Add properties with structured details — location, type, price, area & specifications.' },
  { n: '03', icon: '🔍', title: 'Explore Community Listings', desc: 'Access all properties by other brokers. Filter by city, area, type, rent or sale.' },
  { n: '04', icon: '📞', title: 'Connect Instantly', desc: 'Call or WhatsApp the broker directly. No delays. No searching through chats.' },
  { n: '05', icon: '🔄', title: 'Keep Listings Updated', desc: 'Refresh listings regularly so they stay visible and relevant in the system.' },
]

const features = [
  { icon: '📋', title: 'Structured Listings', desc: 'All properties stored in a clean, organized format — no more messy messages.', color: '#2563eb' },
  { icon: '🔍', title: 'Smart Search & Filters', desc: 'Find properties by location, price, type and requirements instantly.', color: '#8b5cf6' },
  { icon: '📞', title: 'Instant Broker Connect', desc: 'Connect with property owners via call or WhatsApp in one tap.', color: '#06b6d4' },
  { icon: '⏱️', title: 'Auto Expiry & Refresh', desc: 'Listings stay relevant with auto-expiry and refresh functionality.', color: '#f59e0b' },
  { icon: '📱', title: 'Simple to Use', desc: 'Designed for daily use by brokers — no technical knowledge required.', color: '#22c55e' },
]

const users = [
  {
    icon: '🧑💼',
    title: 'For Brokers',
    color: '#2563eb',
    points: [
      'Manage multiple listings easily',
      'Find matching properties faster',
      'Increase deal closure rate',
      'Connect with other brokers instantly',
    ],
  },
  {
    icon: '🏗️',
    title: 'For Builders',
    color: '#8b5cf6',
    points: [
      'Showcase new projects efficiently',
      'Reach a wider broker network',
      'Manage project visibility in one place',
      'Get more inquiries for new launches',
    ],
  },
]

export default function AppPage() {
  useScrollAnimation()

  return (
    <main className="app-page">

      {/* ── APP HERO ── */}
      <section className="app-hero">
        <div className="app-hero-shapes">
          <div className="as-1" /><div className="as-2" /><div className="as-3" />
        </div>
        <div className="app-hero-inner">
          <div className="app-hero-left">
            <div className="app-badge">
              <span className="badge-dot" />
              Now Available on Android &amp; iOS
            </div>
            <h1>
              One App for All Your
              <span className="app-highlight"> Property Deals</span>
            </h1>
            <p>
              The OMD Broker Associate app replaces scattered WhatsApp groups with a
              centralized, searchable property network — built for Indian brokers and builders.
            </p>
            <div className="app-hero-actions">
              <a href="#download" className="btn-primary btn-lg">📲 Download Now</a>
              <Link to="/contact" className="btn-ghost btn-lg">Request Demo →</Link>
            </div>
          </div>
          <div className="app-hero-right">
            <div className="app-mockup">
              <div className="mockup-phone">
                <div className="mockup-notch" />
                <div className="mockup-screen">
                  <div className="ms-header">
                    <span className="ms-title">OMD Listings</span>
                    <span className="ms-filter">🔍</span>
                  </div>
                  <div className="ms-tabs">
                    <span className="ms-tab active">All</span>
                    <span className="ms-tab">Rent</span>
                    <span className="ms-tab">Sale</span>
                  </div>
                  {[
                    { t: '3BHK Flat', l: 'Kothrud, Pune', p: '₹85L', tag: 'Sale' },
                    { t: 'Office Space', l: 'Andheri, Mumbai', p: '₹45K/mo', tag: 'Rent' },
                    { t: 'NA Plot', l: 'Gangapur, Nashik', p: '₹28L', tag: 'Sale' },
                  ].map((item, i) => (
                    <div className="ms-card" key={i}>
                      <div className="ms-card-icon">🏠</div>
                      <div className="ms-card-info">
                        <div className="ms-card-title">{item.t}</div>
                        <div className="ms-card-loc">📍 {item.l}</div>
                      </div>
                      <div className="ms-card-right">
                        <div className="ms-card-price">{item.p}</div>
                        <div className={`ms-card-tag ${item.tag === 'Rent' ? 'rent' : ''}`}>{item.tag}</div>
                      </div>
                    </div>
                  ))}
                  <div className="ms-connect-btn">📞 Connect with Broker</div>
                </div>
              </div>
              <div className="mockup-badge">
                <span>⭐</span>
                <div>
                  <div className="mb-title">4.8 Rating</div>
                  <div className="mb-sub">500+ Brokers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section how-section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <div className="section-eyebrow">Workflow</div>
            <h2>How the Platform Works</h2>
            <p>Get started in minutes. No technical knowledge required.</p>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div className={`step-card anim-fade-up delay-${i + 1}`} key={s.n}>
                <div className="step-num">{s.n}</div>
                <div className="step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <div className="section-eyebrow">Features</div>
            <h2>Key Features</h2>
            <p>Everything a broker needs to manage deals efficiently.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className={`feature-card anim-scale-in delay-${i + 1}`} key={f.title} style={{ '--fc': f.color }}>
                <div className="fc-icon-wrap" style={{ background: `${f.color}18`, color: f.color }}>
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USERS ── */}
      <section className="section users-section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <div className="section-eyebrow">Who It's For</div>
            <h2>Built for Real Estate Professionals</h2>
            <p>Whether you're a broker or a builder, this platform is made for you.</p>
          </div>
          <div className="users-grid">
            <div className="user-card anim-fade-left" style={{ '--uc': users[0].color }}>
              <div className="uc-icon">{users[0].icon}</div>
              <h3>{users[0].title}</h3>
              <ul>
                {users[0].points.map(p => (
                  <li key={p}><span className="uc-check" style={{ color: users[0].color }}>✓</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="user-card anim-fade-right" style={{ '--uc': users[1].color }}>
              <div className="uc-icon">{users[1].icon}</div>
              <h3>{users[1].title}</h3>
              <ul>
                {users[1].points.map(p => (
                  <li key={p}><span className="uc-check" style={{ color: users[1].color }}>✓</span>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section className="section download-section" id="download">
        <div className="download-bg" />
        <div className="container download-inner">
          <div className="dl-text anim-fade-up">
            <div className="section-eyebrow light">Download</div>
            <h2 className="dl-h">Start Closing More Deals Today</h2>
            <p className="dl-p">
              Join the growing network of brokers and builders using a smarter way
              to manage property listings.
            </p>
          </div>
          <div className="dl-buttons anim-scale-in delay-2">
            <a href="#" className="store-btn">
              <div className="store-icon-wrap android">▶</div>
              <div className="store-text">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </div>
            </a>
            <a href="#" className="store-btn">
              <div className="store-icon-wrap ios"></div>
              <div className="store-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>
          </div>
          <p className="dl-note anim-fade-up delay-3">App store links will be updated once live.</p>
        </div>
      </section>

    </main>
  )
}
