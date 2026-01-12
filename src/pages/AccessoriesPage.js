import React from 'react';
import { Search, Heart, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';

const AccessoriesPage= () => {
  const styles = `
    .shop-root { font-family: 'Inter', sans-serif; color: #1a1a1a; margin: 0; }
    .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 5%; border-bottom: 1px solid #eee; }
    .logo { width: 32px; height: 32px; background: #ff5c00; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-style: italic; }
    .nav-links { display: flex; gap: 2.5rem; }
    .nav-links a { text-decoration: none; color: #333; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; }
    .nav-links a.active { color: #ff5c00; border-bottom: 2px solid #ff5c00; padding-bottom: 5px; }
    
    .hero { 
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517438322351-db6280c828e0?q=80&w=1470');
      background-size: cover; background-position: center; height: 450px; display: flex; flex-direction: column; justify-content: center; padding: 0 5%; color: white;
    }
    .hero-h1 { font-size: 4.5rem; font-weight: 900; text-transform: uppercase; margin: 0; }
    .hero-tag { color: #ff5c00; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; }

    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; padding: 3rem 5% 5rem; }
    .card { cursor: pointer; }
    .img-box { aspect-ratio: 1/1; background: #fdf2e9; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #ff5c00; opacity: 0.5; margin-bottom: 1rem; }
    .p-cat { font-size: 0.75rem; font-weight: 800; color: #888; text-transform: uppercase; }
    .p-name { font-weight: 900; text-transform: uppercase; margin: 5px 0; }
    .p-name.highlight { color: #ff5c00; }
  `;

  const accessories = [
    { cat: 'Tech', name: 'Precision Heart Monitor', price: 129, highlight: true },
    { cat: 'Gear', name: '2L Insulated Hydrator', price: 45 },
    { cat: 'Equipment', name: 'Eco-Grip Yoga Mat', price: 75 },
    { cat: 'Bags', name: '24H Athlete Duffel', price: 95 }
  ];

  return (
    <div className="shop-root">
      <style>{styles}</style>
   
      <header className="hero">
        <span className="hero-tag">The Essentials</span>
        <h1 className="hero-h1">Accessories</h1>
      </header>
      <main className="grid">
        {accessories.map((p, i) => (
          <div key={i} className="card">
            <div className="img-box">RUNN GEAR</div>
            <div className="p-cat">{p.cat}</div>
            <div className={`p-name ${p.highlight ? 'highlight' : ''}`}>{p.name}</div>
            <div style={{fontWeight:800}}>${p.price}</div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AccessoriesPage;