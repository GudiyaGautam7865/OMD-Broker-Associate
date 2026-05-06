import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/app">The App</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <p className="footer-copy">© 2026 OMD Broker Associate. All rights reserved.</p>
      </div>
    </footer>
  )
}
