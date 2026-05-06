import { Link } from 'react-router-dom'
import './AppPage.css'

const steps = [
  { n: '01', title: 'Register & Get Started', desc: 'Sign up using your mobile number and create your profile in seconds.' },
  { n: '02', title: 'Add Property Listings', desc: 'Add properties with structured details — location, type, price, area & specs.' },
  { n: '03', title: 'Explore Community Listings', desc: 'Access all properties by other brokers. Filter by city, area, type, rent or sale.' },
  { n: '04', title: 'Connect Instantly', desc: 'Call or WhatsApp the broker directly. No delays. No searching through chats.' },
  { n: '05', title: 'Keep Listings Updated', desc: 'Refresh listings regularly so they stay visible and relevant in the system.' },
]

const features = [
  { icon: '📋', title: 'Structured Listings', desc: 'All properties stored in a clean, organized format — no more messy messages.' },
  { icon: '🔍', title: 'Smart Search & Filters', desc: 'Find properties by location, price, type and requirements instantly.' },
  { icon: '📞', title: 'Instant Broker Connect', desc: 'Connect with property owners via call or WhatsApp in one tap.' },
  { icon: '⏱️', title: 'Auto Expiry & Refresh', desc: 'Listings stay relevant with auto-expiry and refresh functionality.' },
  { icon: '📱', title: 'Simple to Use', desc: 'Designed for daily use by brokers — no technical knowledge required.' },
]

const users = [
  {
    icon: '🧑‍💼',
    title: 'Brokers',
    points: ['Manage multiple listings easily', 'Find matching properties faster', 'Increase deal closure rate'],
  },
  {
    icon: '🏗️',
    title: 'Builders',
    points: ['Showcase new projects efficiently', 'Reach a wider broker network', 'Manage project visibility in one place'],
  },
]

export default function AppPage() {
  return (
    <main>
      {/* APP HERO */}
      <section className="app-hero">
        <div className="app-hero-content">
          <span className="section-tag-light">The Platform</span>
          <h1>One App. All Your Property Deals.</h1>
          <p>
            The OMD Broker Associate app replaces scattered WhatsApp groups with a
            centralized, searchable property network built for brokers and builders.
          </p>
          <div className="hero-btns">
            <a href="#download" className="btn-primary">Download Now</a>
            <Link to="/contact" className="btn-outline-dark">Request Demo</Link>
          </div>
        </div>
        <div className="app-phone-mock">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="ps-bar" />
              <div className="ps-item"><span className="ps-dot" />3BHK Flat – Pune</div>
              <div className="ps-item"><span className="ps-dot" />Office Space – Mumbai</div>
              <div className="ps-item"><span className="ps-dot" />Plot – Nashik</div>
              <div className="ps-item"><span className="ps-dot" />Villa – Lonavala</div>
              <div className="ps-cta">Connect →</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-section">
        <div className="container">
          <span className="section-tag">Workflow</span>
          <h2>How the Platform Works</h2>
          <div className="steps-list">
            {steps.map(s => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section features-section">
        <div className="container">
          <span className="section-tag">Features</span>
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map(f => (
              <div className="feature-card" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USERS */}
      <section className="section users-section">
        <div className="container">
          <span className="section-tag">Who It's For</span>
          <h2>Built for Real Estate Professionals</h2>
          <div className="users-grid">
            {users.map(u => (
              <div className="user-card" key={u.title}>
                <span className="user-icon">{u.icon}</span>
                <h3>{u.title}</h3>
                <ul>
                  {u.points.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="section download-section" id="download">
        <div className="container">
          <h2>Start Closing More Deals Today</h2>
          <p>Join the growing network of brokers and builders using a smarter way to manage property listings.</p>
          <div className="store-btns">
            <a href="#" className="store-btn android">
              <span className="store-icon">▶</span>
              <span>
                <small>Get it on</small>
                Google Play
              </span>
            </a>
            <a href="#" className="store-btn ios">
              <span className="store-icon"></span>
              <span>
                <small>Download on the</small>
                App Store
              </span>
            </a>
          </div>
          <p className="download-note">Links will be updated once the app is live on stores.</p>
        </div>
      </section>
    </main>
  )
}
