import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  useScrollAnimation()

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>

      {/* HERO */}
      <section className="min-h-[340px] bg-gradient-to-br from-slate-900 via-blue-900 to-blue-600 relative overflow-hidden flex items-center justify-center py-32 px-6 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[80px] opacity-20 top-[-150px] right-[-100px]" />
          <div className="absolute w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[80px] opacity-20 bottom-[-100px] left-[-50px]" />
        </div>
        <div className="relative z-10 max-w-[600px]">
          <div className="inline-block text-xs font-extrabold uppercase tracking-[2px] text-blue-200 mb-3">Contact Us</div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">Let's Talk Property</h1>
          <p className="text-blue-200 text-base leading-relaxed">Have questions, want a demo, or ready to get started? We're here for you.</p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">

          {/* LEFT - INFO */}
          <div className="anim-fade-left">
            <h2 className="text-2xl font-black text-slate-900 mb-2.5">Get in Touch</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-7">Reach out through any of the channels below and we'll get back to you promptly.</p>

            <div className="flex flex-col gap-3.5 mb-7">
              <a href="tel:+919209182221" className="flex items-center gap-4 bg-white border-2 border-slate-200 rounded-xl p-4.5 no-underline transition-all duration-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-x-1 anim-fade-up delay-1">
                <div className="w-[2.75rem] h-[2.75rem] bg-blue-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">📞</div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Phone</span>
                  <span className="text-sm font-semibold text-slate-800">+91-9209182221</span>
                </div>
                <span className="text-blue-600 text-base font-bold opacity-0 transition-opacity duration-200">→</span>
              </a>

              <a href="mailto:omd.brokerassociate@gmail.com" className="flex items-center gap-4 bg-white border-2 border-slate-200 rounded-xl p-4.5 no-underline transition-all duration-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-x-1 anim-fade-up delay-2">
                <div className="w-[2.75rem] h-[2.75rem] bg-green-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">✉️</div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Email</span>
                  <span className="text-sm font-semibold text-slate-800">omd.brokerassociate@gmail.com</span>
                </div>
                <span className="text-blue-600 text-base font-bold opacity-0 transition-opacity duration-200">→</span>
              </a>

              <div className="flex items-center gap-4 bg-white border-2 border-slate-200 rounded-xl p-4.5 anim-fade-up delay-3">
                <div className="w-[2.75rem] h-[2.75rem] bg-yellow-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">🕐</div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Working Hours</span>
                  <span className="text-sm font-semibold text-slate-800">Mon – Sat, 9 AM – 7 PM</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919209182221"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4.5 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/30 anim-scale-in delay-4"
            >
              <span className="text-2xl flex-shrink-0">💬</span>
              <div>
                <div className="text-sm font-extrabold text-white">Chat on WhatsApp</div>
                <div className="text-xs text-white/75 mt-0.5">Typically replies within minutes</div>
              </div>
            </a>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white border border-slate-200 rounded-3xl p-11 shadow-lg shadow-blue-500/6 anim-fade-right">
            <div className="mb-8">
              <h2 className="text-xl font-black text-slate-900 mb-2">Send an Inquiry</h2>
              <p className="text-slate-600 text-sm">Fill in the details below and we'll get back to you shortly.</p>
            </div>

            {sent ? (
              <div className="text-center py-12 px-6">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-black text-slate-900 mb-2.5">Message Sent!</h3>
                <p className="text-slate-600 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={submit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handle}
                      required
                      className="border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium outline-none transition-all duration-200 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-500/8 bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handle}
                      required
                      className="border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium outline-none transition-all duration-200 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-500/8 bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handle}
                    required
                    className="border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium outline-none transition-all duration-200 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-500/8 bg-slate-50 focus:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can help — property requirements, demo request, etc."
                    value={form.message}
                    onChange={handle}
                    required
                    className="border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium outline-none transition-all duration-200 focus:border-blue-600 focus:shadow-lg focus:shadow-blue-500/8 bg-slate-50 focus:bg-white resize-vertical"
                  />
                </div>
                <button type="submit" className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/35 self-start">
                  Send Inquiry →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  )
}
