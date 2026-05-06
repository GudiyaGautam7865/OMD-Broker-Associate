import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">O</div>
            <div>
              <div className="footer-logo-main">OMD Broker Associate</div>
              <div className="footer-logo-tag">From WhatsApp Chaos to Structured Deals</div>
            </div>
          </div>
          <p>A smart platform for real estate brokers and builders to manage, share and close property deals faster.</p>
          <div className="footer-contact-row">
            <a href="tel:+919209182221">📞 +91-9209182221</a>
            <a href="mailto:omd.brokerassociate@gmail.com">✉️ omd.brokerassociate@gmail.com</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/app">The App</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/app#download">Download App</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><span>Residential Properties</span></li>
            <li><span>Commercial Properties</span></li>
            <li><span>Plots &amp; Land</span></li>
            <li><span>New Projects</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 OMD Broker Associate. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}
