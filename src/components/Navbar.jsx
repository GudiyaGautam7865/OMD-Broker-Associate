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

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
  <nav
  className="
    fixed
    top-3
    sm:top-5
    left-3
    right-3
    sm:left-6
    sm:right-6
    lg:left-10
    lg:right-10
    z-[999]
    transition-all
    duration-500
    bg-white/95
    backdrop-blur-xl
    border
    border-white/20
    rounded-2xl
    shadow-xl
  "
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">

    {/* LOGO */}
    <Link
      to="/"
      className="flex items-center gap-2 sm:gap-3 no-underline z-[1001]"
    >
      <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl overflow-hidden shadow-xl bg-white">
        <img
          src={logo}
          alt="OMD Logo"
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="leading-tight">
        <h1 className="text-base sm:text-lg font-black tracking-wider text-blue-600">
          OMD
        </h1>

        <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[2px] text-slate-500">
          Broker Associate
        </p>
      </div>
    </Link>

    {/* DESKTOP MENU */}
    <ul className="hidden md:flex items-center gap-2">

      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 no-underline ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/app"
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 no-underline ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
            }`
          }
        >
          The App
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 no-underline ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
            }`
          }
        >
          Contact
        </NavLink>
      </li>

      <li>
        <a
          href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg hover:shadow-blue-500/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 no-underline"
        >
          📲 Download App
        </a>
      </li>
    </ul>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden relative z-[1001] w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 border border-slate-200"
      aria-label="Menu"
    >
      <div className="flex flex-col justify-center items-center gap-1.5">
        <span
          className={`w-5 h-0.5 rounded-full transition-all duration-300 bg-slate-800 ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}
        />

        <span
          className={`w-5 h-0.5 rounded-full transition-all duration-300 bg-slate-800 ${
            open ? 'opacity-0' : ''
          }`}
        />

        <span
          className={`w-5 h-0.5 rounded-full transition-all duration-300 bg-slate-800 ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </div>
    </button>

    {/* MOBILE MENU */}
    <div
      className={`md:hidden fixed top-[78px] left-0 w-full px-3 transition-all duration-500 ${
        open
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible -translate-y-5'
      }`}
    >
      <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-white shadow-2xl border border-slate-200">
        <div className="flex flex-col p-4 gap-2">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl text-sm font-semibold no-underline transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/app"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl text-sm font-semibold no-underline transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            The App
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl text-sm font-semibold no-underline transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            Contact
          </NavLink>

          <a
            href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-5 py-3 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-all duration-300 no-underline"
          >
            📲 Download Now
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}