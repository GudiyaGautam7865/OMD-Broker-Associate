import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">O</div>
          <div className="logo-text">
            <span className="logo-main">OMD</span>
            <span className="logo-sub">Broker Associate</span>
          </div>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/app">The App</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <Link to="/app#download" className="nav-cta">
              📲 Download App
            </Link>
          </li>
        </ul>

        <button className={`hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
