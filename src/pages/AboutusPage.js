import React from 'react';
import { Search, Heart, ShoppingBag, Target, Eye, Zap, Globe, Users, Leaf } from 'lucide-react';

const AboutUs = () => {
  const styles = `
    .about-container {
      font-family: 'Inter', -apple-system, sans-serif;
      color: #1a1a1a;
      line-height: 1.6;
      margin: 0;
      background-color: #fff;
    }

    /* Navbar */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.25rem 5%;
      border-bottom: 1px solid #f0f0f0;
      position: sticky;
      top: 0;
      background: white;
      z-index: 100;
    }
    .logo-box {
      width: 35px;
      height: 35px;
      background: #ff5c00;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 900;
      font-style: italic;
    }
    .nav-links {
      display: flex;
      gap: 2.5rem;
    }
    .nav-links a {
      text-decoration: none;
      color: #333;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .nav-links a.active {
      color: #ff5c00;
      border-bottom: 2px solid #ff5c00;
      padding-bottom: 5px;
    }
    .nav-utils {
      display: flex;
      gap: 1.5rem;
      color: #666;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                  url('/about.jpeg');
      background-size: cover;
      background-position: center;
      padding: 8rem 5%;
      color: white;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .hero-tag {
      color: #ff5c00;
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 2px;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .hero-title {
      font-size: 5rem;
      font-weight: 900;
      text-transform: uppercase;
      margin: 0 0 2rem 0;
      line-height: 1;
    }
    .hero-desc {
      max-width: 600px;
      font-size: 1.2rem;
      color: #e0e0e0;
    }

    /* Stats Bar */
    .stats-bar {
      background: #ff5c00;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 3rem 5%;
      color: white;
      text-align: center;
    }
    .stat-item h2 {
      font-size: 2.5rem;
      font-weight: 900;
      margin: 0;
    }
    .stat-item p {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.8rem;
      opacity: 0.9;
      letter-spacing: 1px;
    }

    /* Mission & Vision */
    .mv-section {
      padding: 6rem 5%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .mv-card {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .icon-wrap {
      width: 50px;
      height: 50px;
      background: #fff5f0;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ff5c00;
    }
    .mv-card h3 {
      font-size: 1.8rem;
      font-weight: 900;
      text-transform: uppercase;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .mv-card p {
      color: #666;
      font-size: 1.05rem;
    }

    /* Values Section */
    .values-section {
      background-color: #f8f8f8;
      padding: 6rem 5%;
      text-align: center;
    }
    .values-tag {
      color: #ff5c00;
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }
    .values-title {
      font-size: 3.5rem;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 4rem;
    }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .value-card {
      background: white;
      padding: 3rem 2rem;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s ease;
    }
    .value-card:hover {
      transform: translateY(-10px);
    }
    .value-icon {
      margin-bottom: 2rem;
      color: #ff5c00;
    }
    .value-card h4 {
      font-size: 1.3rem;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    .value-card p {
      color: #777;
      font-size: 0.95rem;
    }

    @media (max-width: 768px) {
      .hero-title { font-size: 3rem; }
      .stats-bar { grid-template-columns: 1fr 1fr; gap: 2rem; }
      .mv-section { grid-template-columns: 1fr; }
    }
  `;

  return (
    <div className="about-container">
      <style>{styles}</style>

  

      {/* Hero Section */}
      <section className="hero">
        <span className="hero-tag">Our Story</span>
        <h1 className="hero-title">Born To Run</h1>
        <p className="hero-desc">
          RUNN was founded on a simple belief: every athlete deserves gear that matches 
          their ambition. We're not just making sportswear – we're building a movement.
        </p>
      </section>

      {/* Stats Section */}
      <section className="stats-bar">
        <div className="stat-item">
          <h2>2019</h2>
          <p>Founded</p>
        </div>
        <div className="stat-item">
          <h2>50K+</h2>
          <p>Athletes</p>
        </div>
        <div className="stat-item">
          <h2>120+</h2>
          <p>Countries</p>
        </div>
        <div className="stat-item">
          <h2>500+</h2>
          <p>Products</p>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="mv-section">
        <div className="mv-card">
          <h3><div className="icon-wrap"><Target size={24} /></div> Our Mission</h3>
          <p>To empower every athlete — from first-time runners to Olympic champions — with premium performance gear that helps them push beyond their limits.</p>
          <p>We believe that greatness isn't reserved for the elite. It's within everyone who dares to lace up, show up, and never give up.</p>
        </div>
        <div className="mv-card">
          <h3><div className="icon-wrap"><Eye size={24} /></div> Our Vision</h3>
          <p>To become the world's most trusted athletic brand by consistently delivering innovation, quality, and inspiration.</p>
          <p>We envision a world where every person feels empowered to pursue their athletic potential, regardless of background or ability.</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <p className="values-tag">What We Stand For</p>
        <h2 className="values-title">Our Values</h2>
        
        <div className="values-grid">
          <div className="value-card">
            <Zap className="value-icon" size={40} />
            <h4>Performance</h4>
            <p>Every product is engineered for peak athletic performance.</p>
          </div>
          <div className="value-card">
            <Heart className="value-icon" size={40} />
            <h4>Passion</h4>
            <p>We're athletes too. We understand the drive to be better.</p>
          </div>
          <div className="value-card">
            <Globe className="value-icon" size={40} />
            <h4>Sustainability</h4>
            <p>Building a better future through eco-conscious practices.</p>
          </div>
          <div className="value-card">
            <Users className="value-icon" size={40} />
            <h4>Community</h4>
            <p>A global family of athletes pushing limits together.</p>
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <div style={{ background: '#ff5c00', height: '10px', width: '100%' }}></div>
    </div>
  );
};

export default AboutUs;