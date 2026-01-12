import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Main Footer Content */}
      <div className="footer-main">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo-box">
             {/* Replace with your actual logo image */}
             <img src="/companylogo.png" alt="RUNN Logo" className="logo-img" />
          </div>
          <p className="brand-mission">
            Empowering athletes to push beyond limits. <br />
            Every stride, every moment — be unstoppable.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              123 Performance Ave, Athletic City, AC 12345
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              +1 (800) RUNN-NOW
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:hello@runn.com">hello@runn.com</a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          <div className="link-column">
            <h4>SHOP</h4>
            <ul>
              <li><Link to="/menscollectoionpage">Men</Link></li>
              <li><Link to="/womencollectoionpage">Women</Link></li>
              <li><Link to="/Accesssoriespage">Accessories</Link></li>
              <li><Link to="/shop">New Arrivals</Link></li>
              <li><Link to="/shop">Best Sellers</Link></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>ACTIVITIES</h4>
            <ul>
              <li><Link to="/activitypage">Running</Link></li>
              <li><Link to="/activitypage">Training</Link></li>
              <li><Link to="/activitypage">Lifestyle</Link></li>
              <li><Link to="/activitypage">Yoga</Link></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>COMPANY</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
             
            </ul>
          </div>
          
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 RUNN. All rights reserved. <span className="orange-text">Unstoppable You.</span>
        </div>
        <div className="social-links">
          <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </div>

      <style>{`
        .footer-container {
          background-color: #0A0A0A;
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          padding: 80px 8% 40px 8%;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.2fr 3fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        .footer-logo-box { width: 100px; height: 100px; margin-bottom: 25px; background: white; border-radius: 4px; overflow: hidden; }
        .logo-img { width: 100%; height: 100%; object-fit: contain; }

        .brand-mission { color: #888; line-height: 1.6; margin-bottom: 30px; font-size: 15px; }
        
        .contact-info { display: flex; flex-direction: column; gap: 15px; }
        .contact-item { display: flex; align-items: center; gap: 12px; color: #888; font-size: 14px; }
        .contact-item a { color: inherit; text-decoration: none; transition: 0.2s; }
        .contact-item a:hover { color: #FF6B00; }
        .contact-icon { color: #FF6B00; }

        .footer-links-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .link-column h4 { 
          font-family: 'Barlow Condensed', sans-serif; 
          font-size: 18px; 
          font-weight: 700;
          margin-bottom: 25px; 
          letter-spacing: 1px;
        }
        
        .link-column ul { list-style: none; padding: 0; margin: 0; }
        .link-column li { margin-bottom: 15px; }
        
        /* Activate Links Styling */
        .link-column li a { 
          color: #888; 
          text-decoration: none; 
          font-size: 15px; 
          transition: 0.3s ease;
        }
        .link-column li a:hover { color: #FFFFFF; }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid #1A1A1A;
        }

        .footer-copyright { color: #555; font-size: 14px; }
        .orange-text { color: #FF6B00; font-weight: 600; margin-left: 5px; }

        .social-links { display: flex; gap: 12px; }
        .social-icon {
          width: 42px; height: 42px;
          background: #141414;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          transition: 0.3s;
          text-decoration: none;
        }
        .social-icon:hover { color: white; background: #FF6B00; transform: translateY(-3px); }

        @media (max-width: 1024px) {
          .footer-main { grid-template-columns: 1fr; gap: 50px; }
          .footer-links-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }

        @media (max-width: 600px) {
          .footer-bottom { flex-direction: column; gap: 25px; text-align: center; }
          .footer-links-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;