import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/image.png'

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
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-17 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2.5 no-underline z-[1001] flex-shrink-0">
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <img src={logo} alt="OMD Logo" className="w-full h-full object-contain drop-shadow-lg" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`text-base font-black tracking-wider ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}>
              OMD
            </span>
            <span className={`text-xs font-semibold tracking-wider uppercase ${
              scrolled ? 'text-slate-500' : 'text-white/70'
            }`}>
              Broker Associate
            </span>
          </div>
        </Link>

        <ul className={`flex items-center gap-1 list-none m-0 p-0 pointer-events-auto opacity-100 ${
          open ? 'flex-col absolute top-[4.25rem] left-0 right-0 bg-white p-3 shadow-xl border-t border-slate-200 max-h-96 opacity-100 pointer-events-auto' : 'hidden md:flex'
        }`}>
          <li><NavLink to="/" end className={({isActive}) => `px-3.5 py-2 rounded-lg text-sm font-semibold no-underline transition-all duration-200 ${
            isActive ? 'text-blue-600 bg-blue-50' : scrolled ? 'text-slate-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white hover:bg-white/10'
          }`}>Home</NavLink></li>
          <li><NavLink to="/app" className={({isActive}) => `px-3.5 py-2 rounded-lg text-sm font-semibold no-underline transition-all duration-200 ${
            isActive ? 'text-blue-600 bg-blue-50' : scrolled ? 'text-slate-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white hover:bg-white/10'
          }`}>The App</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => `px-3.5 py-2 rounded-lg text-sm font-semibold no-underline transition-all duration-200 ${
            isActive ? 'text-blue-600 bg-blue-50' : scrolled ? 'text-slate-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white hover:bg-white/10'
          }`}>Contact</NavLink></li>
          <li>
            <Link to="/app#download" className={`bg-blue-600 text-white px-4 py-2.5 rounded-xl font-bold shadow-lg transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl ${
              scrolled ? '' : 'shadow-blue-500/35 hover:shadow-blue-500/50'
            }`}>
              📲 Download App
            </Link>
          </li>
        </ul>

        <button
          className={`md:hidden flex flex-col justify-center gap-1.5 bg-none border-none cursor-pointer p-2 z-[1001] flex-shrink-0 ${
            open ? 'active' : ''
          }`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 rounded bg-slate-700 transition-all duration-300 ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 rounded bg-slate-700 transition-all duration-300 ${
            open ? 'opacity-0 scale-x-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 rounded bg-slate-700 transition-all duration-300 ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      </div>
    </nav>
  )
}
