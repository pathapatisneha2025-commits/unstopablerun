import React from 'react';
import { ArrowRight } from 'lucide-react';

const ActivitiesPage = () => {
  // --- CSS Styles ---
 const styles = `
.page-wrapper {
  min-height: 100vh;
 background-color: #fffaf5;
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
  background: #ff5c00;
  color: white;
  flex-wrap: wrap;
}
.logo-circle {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
.nav-links a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.nav-links a.active {
  color: white;
  border-bottom: 2px solid white;
  padding-bottom: 4px;
}
.nav-icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

/* Hero */
.hero {
  background-color: #1a120b;
  padding: 6rem 1rem 4rem;
  text-align: center;
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
  font-size: clamp(2rem, 10vw, 6rem);
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
  padding: 0 1rem;
}

/* Grid */
.content-grid {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

/* Card */
.card {
  padding: 2rem;
  border: 1px solid #f3f4f6;
  border-radius: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
}
.card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}
.card.highlight {
  border: 2px solid #ff5c00;
}
.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.card-h3 {
  font-size: 1.3rem;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 1rem 0;
}
.highlight .card-h3 { color: #ff5c00; }
.card-p {
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}
.card-footer {
  border-top: 1px solid #f3f4f6;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.stats {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.stat-val {
  display: block;
  font-weight: 800;
  color: #ff5c00;
  font-size: 1rem;
}
.stat-lab {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #9ca3af;
  font-weight: 700;
}
.arrow {
  color: #d1d5db;
  transition: 0.2s;
}
.card:hover .arrow {
  transform: translateX(4px);
  color: #ff5c00;
}

/* Footer */
.footer-container {
  background-color: #000;
  color: white;
  padding: 4rem 2rem 2rem;
}
.footer-subscribe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}
.subscribe-text h2 {
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}
.subscribe-text span { color: #ff5c00; }
.subscribe-text p { color: #9ca3af; margin-top: 0.5rem; }
.subscribe-form {
  display: flex;
  gap: 1rem;
  flex-grow: 1;
  max-width: 500px;
}
.subscribe-input {
  flex-grow: 1;
  background: #1a1a1a;
  border: 1px solid #333;
  padding: 1rem;
  color: white;
  border-radius: 8px;
}
.subscribe-btn {
  background: #ff5c00;
  color: white;
  border: none;
  padding: 0 2rem;
  border-radius: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

/* Footer links */
.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #222;
  padding-top: 3rem;
  gap: 1.5rem;
}
.link-group h4 {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}
.link-group ul { list-style: none; padding: 0; margin: 0; }
.link-group li { margin-bottom: 0.5rem; color: #9ca3af; font-size: 0.85rem; cursor: pointer; }

/* --- MEDIA QUERIES --- */
@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem 2rem;
  }
  .hero-title {
    font-size: clamp(2rem, 12vw, 4rem);
  }
  .content-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  .nav-links {
    justify-content: center;
    width: 100%;
    margin-top: 0.5rem;
  }
  .nav-icons {
    justify-content: center;
    width: 100%;
    margin-top: 0.5rem;
  }
  .card-footer {
    flex-direction: column;
    gap: 0.5rem;
  }
  /* Footer mobile */
  .footer-subscribe {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  .subscribe-text h2 {
    font-size: 1.5rem;
  }
  .subscribe-text p {
    font-size: 0.85rem;
  }
  .subscribe-form {
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }
  .subscribe-input, .subscribe-btn {
    width: 100%;
  }
  .subscribe-btn {
    justify-content: center;
    padding: 0.75rem;
  }
}
`;


  const activities = [
    { title: "Running", Icon: () => "🏃", products: "124", athletes: "15K+", text: "Built for speed and endurance. From sprints to marathons, find your perfect pace." },
    { title: "Training", Icon: () => "💪", products: "98", athletes: "22K+", text: "Power through every workout. Gear that moves with you and works as hard as you do." },
    { title: "Lifestyle", Icon: () => "✨", products: "156", athletes: "30K+", text: "Athletic comfort meets everyday style. Look good, feel unstoppable." },
    { title: "Yoga", Icon: () => "🧘", products: "67", athletes: "12K+", text: "Flow with flexibility and ease. Breathable fabrics for mindful movement." },
    { title: "Hiking", Icon: () => "🥾", products: "45", athletes: "8K+", text: "Conquer any terrain. Durable gear built for adventure." },
    { title: "Cycling", Icon: () => "🚴", products: "52", athletes: "10K+", text: "Aerodynamic performance wear for every ride." }
  ];

  return (
    <div className="page-wrapper">
      <style>{styles}</style>
      
      

      <header className="hero">
        <p className="hero-subtitle">Find Your Flow</p>
        <h1 className="hero-title">Activities</h1>
        <p className="hero-text">Every sport. Every workout. Every moment. Find gear designed specifically for your passion.</p>
      </header>

      <main className="content-grid">
        {activities.map((item, i) => (
          <div key={i} className={`card ${item.highlight ? 'highlight' : ''}`}>
            <div className="card-icon">{item.Icon()}</div>
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

      {/* --- Stay Unstoppable Footer --- */}
      <footer className="footer-container">
        <div className="footer-subscribe">
          <div className="subscribe-text">
            <h2>STAY <span>UNSTOPPABLE</span></h2>
            <p>Subscribe for exclusive offers, new arrivals & insider-only discounts</p>
          </div>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" className="subscribe-input" />
            <button className="subscribe-btn">
              SUBSCRIBE <ArrowRight size={16} />
            </button>
          </div>
        </div>

       
      </footer>
    </div>
  );
};

export default ActivitiesPage;