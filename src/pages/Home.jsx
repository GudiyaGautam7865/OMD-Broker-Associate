import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  { icon: '🏠', title: 'Residential Properties', desc: 'Flats, villas, apartments — buy, sell or rent with ease.' },
  { icon: '🏢', title: 'Commercial Properties', desc: 'Offices, shops, showrooms and commercial spaces.' },
  { icon: '🌍', title: 'Plots & Land', desc: 'NA plots, agricultural land and development sites.' },
  { icon: '🏗️', title: 'New Projects', desc: 'Exclusive listings of upcoming and under-construction projects.' },
]

const why = [
  'Eliminates dependency on WhatsApp groups',
  'Saves time in searching properties',
  'Improves collaboration among brokers',
  'Keeps listings structured and updated',
  'Helps close deals faster',
]

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Trusted Real Estate Partner</span>
          <h1>Simplifying Property Deals for Brokers &amp; Builders</h1>
          <p className="hero-sub">
            A smart and structured platform to replace scattered WhatsApp property sharing
            with a centralized, searchable system.
          </p>
          <p className="hero-value">Find the right property faster. Close deals quicker.</p>
          <div className="hero-btns">
            <Link to="/app#download" className="btn-primary">Download App</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hc-row"><span className="hc-dot green" />Property Listed</div>
            <div className="hc-row"><span className="hc-dot blue" />Broker Connected</div>
            <div className="hc-row"><span className="hc-dot orange" />Deal Closed ✓</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section">
        <div className="container two-col">
          <div>
            <span className="section-tag">About Us</span>
            <h2>A Better Way to Manage Property Listings</h2>
            <p>
              Managing property listings across WhatsApp groups is time-consuming and unstructured.
              Important deals get lost in chats, searching becomes difficult, and follow-ups are missed.
            </p>
            <p style={{ marginTop: '12px' }}>
              OMD Broker Associate is designed specifically for real estate brokers and builders,
              bringing all your property data into one simple, easy-to-use platform.
            </p>
            <ul className="check-list">
              <li>Organize property listings in a structured format</li>
              <li>Quickly search and filter relevant properties</li>
              <li>Connect instantly with other brokers</li>
              <li>Save time and increase deal conversions</li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat-card"><span className="stat-num">500+</span><span>Active Brokers</span></div>
            <div className="stat-card"><span className="stat-num">2000+</span><span>Listings</span></div>
            <div className="stat-card"><span className="stat-num">Fast</span><span>Deal Closures</span></div>
            <div className="stat-card"><span className="stat-num">24/7</span><span>Platform Access</span></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="container">
          <span className="section-tag">Our Services</span>
          <h2>What We Deal In</h2>
          <div className="cards-grid">
            {services.map(s => (
              <div className="service-card" key={s.title}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section why-section">
        <div className="container">
          <span className="section-tag">Why Us</span>
          <h2>Why Choose This Platform</h2>
          <ul className="why-list">
            {why.map(w => <li key={w}><span className="why-check">✓</span>{w}</li>)}
          </ul>
          <Link to="/app" className="btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>
            Explore the App →
          </Link>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="section contact-teaser">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Have questions or want a demo? Reach out to us directly.</p>
          <div className="contact-quick">
            <a href="tel:+919209182221" className="contact-chip">📞 +91-9209182221</a>
            <a href="mailto:omd.brokerassociate@gmail.com" className="contact-chip">✉️ omd.brokerassociate@gmail.com</a>
          </div>
          <Link to="/contact" className="btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
            Send an Inquiry
          </Link>
        </div>
      </section>
    </main>
  )
}
