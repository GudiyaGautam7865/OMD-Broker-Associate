import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <section className="contact-hero">
        <span className="section-tag-light">Contact Us</span>
        <h1>Get in Touch</h1>
        <p>Have questions or want a demo? We'd love to hear from you.</p>
      </section>

      <section className="contact-body">
        <div className="contact-container">

          {/* INFO */}
          <div className="contact-info">
            <h2>Contact Details</h2>
            <div className="info-cards">
              <a href="tel:+919209182221" className="info-card">
                <span className="info-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <span>+91-9209182221</span>
                </div>
              </a>
              <a href="mailto:omd.brokerassociate@gmail.com" className="info-card">
                <span className="info-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <span>omd.brokerassociate@gmail.com</span>
                </div>
              </a>
              <div className="info-card">
                <span className="info-icon">🕐</span>
                <div>
                  <strong>Working Hours</strong>
                  <span>Mon – Sat, 9 AM – 7 PM</span>
                </div>
              </div>
            </div>

            <div className="whatsapp-cta">
              <a
                href="https://wa.me/919209182221"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrap">
            <h2>Send an Inquiry</h2>
            {sent ? (
              <div className="success-msg">
                ✅ Thank you! We'll get back to you shortly.
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="form-group">
                  <label>Name</label>
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
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handle}
                    required
                  />
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
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handle}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">Submit Inquiry</button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  )
}
