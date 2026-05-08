import { Link } from 'react-router-dom'
import logo from '../assets/image.png'

export default function Footer() {
  return (
    <footer
      style={{
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '56px 24px 36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: 40,
        }}
      >
        {/* BRAND */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 14,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
              }}
            >
              <img
                src={logo}
                alt="OMD Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            <div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.3px',
                }}
              >
                ONE MORE DEAL
              </div>

              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#60a5fa',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginTop: 2,
                }}
              >
                OMD Broker Associate
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.86rem',
              lineHeight: 1.8,
              color: '#cbd5e1',
              marginBottom: 20,
              maxWidth: 300,
            }}
          >
            A smart platform for real estate brokers and builders to
            manage, share and close property deals faster.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <a href="tel:+919209182221" className="footer-link">
              📞 +91-9209182221
            </a>

            <a
              href="mailto:omd.brokerassociate@gmail.com"
              className="footer-link"
            >
              ✉️ omd.brokerassociate@gmail.com
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#93c5fd',
              marginBottom: 20,
            }}
          >
            Navigation
          </h4>

          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              padding: 0,
              listStyle: 'none',
            }}
          >
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/app" className="footer-link">
                The App
              </Link>
            </li>

            <li>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>

            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                📲 Download App
              </a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#93c5fd',
              marginBottom: 20,
            }}
          >
            Services
          </h4>

          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              padding: 0,
              listStyle: 'none',
            }}
          >
            {[
              'Residential Properties',
              'Commercial Properties',
              'Plots & Land',
              'New Projects',
            ].map((s) => (
              <li
                key={s}
                style={{
                  fontSize: '0.85rem',
                  color: '#e2e8f0',
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* APP BUTTONS */}
        <div>
          <h4
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#93c5fd',
              marginBottom: 20,
            }}
          >
            Get the App
          </h4>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {/* GOOGLE PLAY */}
            <a
              href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                padding: '12px 16px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor =
                  'rgba(96,165,250,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor =
                  'rgba(255,255,255,0.1)'
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="#22c55e"
                style={{
                  width: 18,
                  height: 18,
                  flexShrink: 0,
                }}
              >
                <path d="M3 20.5v-17c0-.83 1.01-1.3 1.63-.78l14 8.5c.55.33.55 1.23 0 1.56l-14 8.5C4.01 21.8 3 21.33 3 20.5z" />
              </svg>

              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                }}
              >
                Google Play
              </span>
            </a>

            {/* APP STORE */}
            <a
              href="https://apps.apple.com/in/app/one-more-deal/id6763114774"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                padding: '12px 16px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor =
                  'rgba(96,165,250,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor =
                  'rgba(255,255,255,0.1)'
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="#94a3b8"
                style={{
                  width: 18,
                  height: 18,
                  flexShrink: 0,
                }}
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>

              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                }}
              >
                App Store
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 24px',
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <p
          style={{
            fontSize: '0.78rem',
            color: '#94a3b8',
            margin: 0,
          }}
        >
          © 2026 One More Deal — OMD Broker Associate.
          All rights reserved.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 20,
          }}
        >
          <a
            href="#"
            className="footer-link"
            style={{ fontSize: '0.78rem' }}
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="footer-link"
            style={{ fontSize: '0.78rem' }}
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  )
}