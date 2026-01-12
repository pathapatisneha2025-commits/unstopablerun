import React from 'react';
import { Search, Heart, ShoppingBag, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  const styles = `
    .contact-wrapper {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background-color: white;
      color: #1a1a1a;
      margin: 0;
    }

    /* Navbar */
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 5%;
      border-bottom: 1px solid #f3f4f6;
    }
    .logo {
      width: 32px;
      height: 32px;
      background: #ff5c00;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 900;
      font-style: italic;
    }
    .links { display: flex; gap: 2rem; }
    .links a {
      text-decoration: none;
      color: #4b5563;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .links a.active {
      color: #ff5c00;
      border-bottom: 2px solid #ff5c00;
      padding-bottom: 4px;
    }
    .icons { display: flex; gap: 1.5rem; color: #6b7280; }

    /* Hero Section */
    .hero-banner {
      background-color: #1a120b;
      padding: 6rem 1rem;
      text-align: center;
      position: relative;
    }
    .hero-label {
      color: #ff5c00;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      font-weight: 700;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .hero-title {
      color: white;
      font-size: 4.5rem;
      font-weight: 900;
      text-transform: uppercase;
      margin: 0;
    }
    .hero-sub {
      color: #9ca3af;
      margin-top: 1.5rem;
      font-size: 1.1rem;
    }

    /* Main Content Layout */
    .main-grid {
      max-width: 1200px;
      margin: 5rem auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 4rem;
    }

    /* Form Styles */
    .form-header, .info-header {
      font-size: 2rem;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 2.5rem;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .field-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
    .field-group label {
      font-weight: 700;
      font-size: 0.9rem;
      color: #374151;
    }
    .field-group input, .field-group textarea {
      padding: 1rem;
      border: none;
      background: #f9fafb;
      border-radius: 12px;
      font-family: inherit;
    }
    .field-group textarea { height: 120px; resize: none; }
    
    .btn-send {
      background: #ff5c00;
      color: white;
      border: none;
      padding: 1.25rem 2.5rem;
      border-radius: 16px;
      font-weight: 900;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      box-shadow: 0 10px 15px -3px rgba(255, 92, 0, 0.3);
    }

    /* Info Cards */
    .info-card {
      background: #f9fafb;
      padding: 1.5rem;
      border-radius: 16px;
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .icon-box {
      width: 48px;
      height: 48px;
      background: #fff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ff5c00;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .info-content h4 {
      margin: 0 0 0.25rem 0;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .info-content p {
      margin: 0;
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    /* Map Placeholder */
    .map-placeholder {
      background: #f3f4f6;
      height: 250px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9ca3af;
      font-weight: 600;
      margin-top: 2rem;
    }

    @media (max-width: 900px) {
      .main-grid { grid-template-columns: 1fr; }
      .hero-title { font-size: 3rem; }
    }
  `;

  return (
    <div className="contact-wrapper">
      <style>{styles}</style>
      
    

      {/* Hero Header */}
      <header className="hero-banner">
        <p className="hero-label">Get In Touch</p>
        <h1 className="hero-title">Contact Us</h1>
        <p className="hero-sub">Have questions? We're here to help. Reach out and let's start a conversation.</p>
      </header>

      {/* Main Grid */}
      <main className="main-grid">
        {/* Left: Contact Form */}
        <section>
          <h2 className="form-header">Send a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="field-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="field-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="field-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="field-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help?" />
            </div>
            <div className="field-group">
              <label>Message</label>
              <textarea placeholder="Tell us more..."></textarea>
            </div>
            <button className="btn-send">
              Send Message <Send size={18} />
            </button>
          </form>
        </section>

        {/* Right: Info Panels */}
        <section>
          <h2 className="info-header">Get In Touch</h2>
          
          <div className="info-card">
            <div className="icon-box"><MapPin size={22} /></div>
            <div className="info-content">
              <h4>Visit Us</h4>
              <p>123 Performance Ave<br/>Athletic City, AC 12345</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box"><Phone size={22} /></div>
            <div className="info-content">
              <h4>Call Us</h4>
              <p>+1 (800) RUNN-NOW<br/>Mon-Fri, 9AM-6PM EST</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box"><Mail size={22} /></div>
            <div className="info-content">
              <h4>Email Us</h4>
              <p>hello@runn.com<br/>support@runn.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box"><Clock size={22} /></div>
            <div className="info-content">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9AM - 6PM<br/>Weekend: 10AM - 4PM</p>
            </div>
          </div>

          <div className="map-placeholder">
            Map Integration
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;