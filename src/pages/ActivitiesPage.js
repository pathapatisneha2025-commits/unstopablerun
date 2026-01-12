import React from 'react';
import { ArrowRight, Search, Heart, ShoppingBag, Mountain, Bike, Zap, Dumbbell, Sparkles } from 'lucide-react';

const ActivitiesPage = () => {
  // --- CSS Styles ---
  const styles = `
    .page-wrapper {
      min-height: 100vh;
      background-color: white;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: #111827;
      margin: 0;
    }

    /* Navbar */
    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      border-bottom: 1px solid #f3f4f6;
    }
    .logo-circle {
      width: 32px;
      height: 32px;
      background: #ff5c00;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 900;
      font-style: italic;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    .nav-links a {
      text-decoration: none;
      color: inherit;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .nav-links a.active {
      color: #ff5c00;
      border-bottom: 2px solid #ff5c00;
      padding-bottom: 4px;
    }
    .nav-icons {
      display: flex;
      gap: 1.5rem;
      color: #6b7280;
    }

    /* Hero */
    .hero {
      background-color: #1a120b;
      padding: 6rem 1rem;
      text-align: center;
      position: relative;
    }
    .hero-subtitle {
      color: #ff5c00;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      font-weight: 700;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .hero-title {
      color: white;
      font-size: clamp(3rem, 10vw, 6rem);
      font-weight: 900;
      text-transform: uppercase;
      margin: 0;
      letter-spacing: -0.02em;
    }
    .hero-text {
      color: #9ca3af;
      max-width: 500px;
      margin: 1.5rem auto 0;
      line-height: 1.6;
    }

    /* Grid */
    .content-grid {
      max-width: 1200px;
      margin: 4rem auto;
      padding: 0 1.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    /* Card */
    .card {
      padding: 2.5rem;
      border: 1px solid #f3f4f6;
      border-radius: 1.5rem;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .card:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
    }
    .card.highlight {
      border: 2px solid #ff5c00;
    }
    .card-icon {
      margin-bottom: 1.5rem;
      color: #374151;
    }
    .highlight .card-icon { color: #ff5c00; }
    
    .card-h3 {
      font-size: 1.5rem;
      font-weight: 900;
      text-transform: uppercase;
      margin: 0 0 1rem 0;
    }
    .highlight .card-h3 { color: #ff5c00; }

    .card-p {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .card-footer {
      border-top: 1px solid #f3f4f6;
      padding-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .stats { display: flex; gap: 2rem; }
    .stat-val { 
      display: block; 
      font-weight: 800; 
      color: #ff5c00; 
      font-size: 1.1rem;
    }
    .stat-lab { 
      font-size: 0.7rem; 
      text-transform: uppercase; 
      color: #9ca3af; 
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .arrow { color: #d1d5db; transition: 0.2s; }
    .card:hover .arrow { transform: translateX(4px); color: #ff5c00; }
  `;

  const activities = [
    { title: "Running", Icon: Zap, products: "124", athletes: "15K+", text: "Built for speed and endurance. From sprints to marathons, find your perfect pace." },
    { title: "Training", Icon: Dumbbell, products: "98", athletes: "22K+", text: "Power through every workout. Gear that moves with you and works as hard as you do.", highlight: true },
    { title: "Lifestyle", Icon: Sparkles, products: "156", athletes: "30K+", text: "Athletic comfort meets everyday style. Look good, feel unstoppable." },
    { title: "Yoga", Icon: Zap, products: "67", athletes: "12K+", text: "Flow with flexibility and ease. Breathable fabrics for mindful movement." },
    { title: "Hiking", Icon: Mountain, products: "45", athletes: "8K+", text: "Conquer any terrain. Durable gear built for adventure." },
    { title: "Cycling", Icon: Bike, products: "52", athletes: "10K+", text: "Aerodynamic performance wear for every ride." }
  ];

  return (
    <div className="page-wrapper">
      <style>{styles}</style>
      
  
      {/* Hero Header */}
      <header className="hero">
        <p className="hero-subtitle">Find Your Flow</p>
        <h1 className="hero-title">Activities</h1>
        <p className="hero-text">Every sport. Every workout. Every moment. Find gear designed specifically for your passion.</p>
      </header>

      {/* Main Grid */}
      <main className="content-grid">
        {activities.map((item, i) => (
          <div key={i} className={`card ${item.highlight ? 'highlight' : ''}`}>
            <div className="card-icon"><item.Icon size={40} /></div>
            <h3 className="card-h3">{item.title}</h3>
            <p className="card-p">{item.text}</p>
            <div className="card-footer">
              <div className="stats">
                <div>
                  <span className="stat-val">{item.products}</span>
                  <span className="stat-lab">Products</span>
                </div>
                <div>
                  <span className="stat-val">{item.athletes}</span>
                  <span className="stat-lab">Athletes</span>
                </div>
              </div>
              <ArrowRight className="arrow" />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ActivitiesPage;