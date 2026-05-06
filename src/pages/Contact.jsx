import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Contact.css'

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
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="ch-shapes">
          <div className="ch-s1" /><div className="ch-s2" />
        </div>
        <div className="ch-inner">
          <div className="section-eyebrow light">Contact Us</div>
          <h1>Let's Talk Property</h1>
          <p>Have questions, want a demo, or ready to get started? We're here for you.</p>
        </div>
      </section>

      {/* BODY */}
      <section className="contact-body">
        <div className="contact-container">

          {/* LEFT - INFO */}
          <div className="contact-info anim-fade-left">
            <h2>Get in Touch</h2>
            <p className="ci-sub">Reach out through any of the channels below and we'll get back to you promptly.</p>

            <div className="info-cards">
              <a href="tel:+919209182221" className="info-card anim-fade-up delay-1">
                <div className="ic-icon-wrap phone">📞</div>
                <div className="ic-text">
                  <span className="ic-label">Phone</span>
                  <span className="ic-value">+91-9209182221</span>
                </div>
                <span className="ic-arrow">→</span>
              </a>

              <a href="mailto:omd.brokerassociate@gmail.com" className="info-card anim-fade-up delay-2">
                <div className="ic-icon-wrap email">✉️</div>
                <div className="ic-text">
                  <span className="ic-label">Email</span>
                  <span className="ic-value">omd.brokerassociate@gmail.com</span>
                </div>
                <span className="ic-arrow">→</span>
              </a>

              <div className="info-card no-link anim-fade-up delay-3">
                <div className="ic-icon-wrap hours">🕐</div>
                <div className="ic-text">
                  <span className="ic-label">Working Hours</span>
                  <span className="ic-value">Mon – Sat, 9 AM – 7 PM</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919209182221"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn anim-scale-in delay-4"
            >
              <span className="wa-icon">💬</span>
              <div>
                <div className="wa-title">Chat on WhatsApp</div>
                <div className="wa-sub">Typically replies within minutes</div>
              </div>
            </a>
          </div>

          {/* RIGHT - FORM */}
          <div className="contact-form-wrap anim-fade-right">
            <div className="form-header">
              <h2>Send an Inquiry</h2>
              <p>Fill in the details below and we'll get back to you shortly.</p>
            </div>

            {sent ? (
              <div className="success-box">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handle}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handle}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handle}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can help — property requirements, demo request, etc."
                    value={form.message}
                    onChange={handle}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
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
