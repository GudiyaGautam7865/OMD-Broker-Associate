import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="logo-omd">OMD</span>
          <span className="logo-sub"> Broker Associate</span>
        </Link>

        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/app" onClick={() => setOpen(false)}>The App</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink></li>
          <li>
            <Link to="/app#download" className="nav-cta" onClick={() => setOpen(false)}>
              Download App
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-tagline">From WhatsApp Chaos to Structured Deals</div>
    </nav>
  )
}
