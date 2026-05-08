import { Link } from 'react-router-dom'
import logo from '../assets/image.png'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center bg-white/10 shadow-lg flex-shrink-0">
              <img src={logo} alt="OMD Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-base font-extrabold text-slate-100">OMD Broker Associate</div>
              <div className="text-xs text-blue-400 font-medium mt-0.5">From WhatsApp Chaos to Structured Deals</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-500 mb-5 max-w-80">A smart platform for real estate brokers and builders to manage, share and close property deals faster.</p>
          <div className="flex flex-col gap-2">
            <a href="tel:+919209182221" className="text-sm text-slate-500 no-underline transition-colors duration-200 hover:text-blue-400">📞 +91-9209182221</a>
            <a href="mailto:omd.brokerassociate@gmail.com" className="text-sm text-slate-500 no-underline transition-colors duration-200 hover:text-blue-400">✉️ omd.brokerassociate@gmail.com</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-5">Navigation</h4>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li><Link to="/" className="text-sm text-slate-500 no-underline transition-colors duration-200 hover:text-blue-400">Home</Link></li>
            <li><Link to="/app" className="text-sm text-slate-500 no-underline transition-colors duration-200 hover:text-blue-400">The App</Link></li>
            <li><Link to="/contact" className="text-sm text-slate-500 no-underline transition-colors duration-200 hover:text-blue-400">Contact Us</Link></li>
            <li><Link to="/app#download" className="text-sm text-slate-500 no-underline transition-colors duration-200 hover:text-blue-400">Download App</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-5">Services</h4>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li><span className="text-sm text-slate-500">Residential Properties</span></li>
            <li><span className="text-sm text-slate-500">Commercial Properties</span></li>
            <li><span className="text-sm text-slate-500">Plots &amp; Land</span></li>
            <li><span className="text-sm text-slate-500">New Projects</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 px-8 max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <p className="text-xs text-slate-600 m-0">© 2026 OMD Broker Associate. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="text-xs text-slate-600 no-underline transition-colors duration-200 hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="text-xs text-slate-600 no-underline transition-colors duration-200 hover:text-blue-400">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}
