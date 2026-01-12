import React from 'react';
import { Search, Heart, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';

const MensPage = () => {
  const styles = `
    .shop-root { font-family: 'Inter', sans-serif; color: #1a1a1a; margin: 0; }
    .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 5%; border-bottom: 1px solid #eee; }
    .logo { width: 32px; height: 32px; background: #ff5c00; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-style: italic; }
    .nav-links { display: flex; gap: 2.5rem; }
    .nav-links a { text-decoration: none; color: #333; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; }
    .nav-links a.active { color: #ff5c00; border-bottom: 2px solid #ff5c00; padding-bottom: 5px; }
    .nav-icons { display: flex; gap: 1.5rem; color: #666; }

    .hero { 
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1480');
      background-size: cover; background-position: center; height: 450px; display: flex; flex-direction: column; justify-content: center; padding: 0 5%; color: white;
    }
    .hero-h1 { font-size: 4.5rem; font-weight: 900; text-transform: uppercase; margin: 0; }
    .hero-tag { color: #ff5c00; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; }

    .toolbar { padding: 3rem 5%; display: flex; justify-content: space-between; align-items: center; }
    .filter-btn { border: 2px solid #ff5c00; color: #ff5c00; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 800; background: none; display: flex; align-items: center; gap: 8px; cursor: pointer; }
    .pill { padding: 0.6rem 1.5rem; border-radius: 8px; font-weight: 700; cursor: pointer; }
    .pill.active { background: #ff5c00; color: white; }

    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; padding: 0 5% 5rem; }
    .card { cursor: pointer; }
    .img-box { aspect-ratio: 1/1; background: #f3f4f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #ccc; margin-bottom: 1rem; }
    .p-cat { font-size: 0.75rem; font-weight: 800; color: #888; text-transform: uppercase; }
    .p-name { font-weight: 900; text-transform: uppercase; margin: 5px 0; }
    .p-name.highlight { color: #ff5c00; }
  `;

  const products = [
    { cat: 'Outerwear', name: 'Apex Storm Jacket', price: 189 },
    { cat: 'Tops', name: 'Tech Mesh Tee', price: 55 },
    { cat: 'Shoes', name: 'Carbon Runner Pro', price: 210, highlight: true },
    { cat: 'Bottoms', name: 'Hybrid Training Shorts', price: 65 }
  ];

  return (
    <div className="shop-root">
      <style>{styles}</style>

      <header className="hero">
        <span className="hero-tag">Performance Engineered</span>
        <h1 className="hero-h1">Men's Collection</h1>
      </header>
      <div className="toolbar">
        <div style={{display:'flex', gap:'1rem'}}>
          <button className="filter-btn"><SlidersHorizontal size={18}/> Filters</button>
          <div className="pill active">All</div><div className="pill">New</div>
        </div>
        <div style={{fontWeight:700}}>Sort By <ChevronDown size={16}/></div>
      </div>
      <main className="grid">
        {products.map((p, i) => (
          <div key={i} className="card">
            <div className="img-box">RUNN</div>
            <div className="p-cat">{p.cat}</div>
            <div className={`p-name ${p.highlight ? 'highlight' : ''}`}>{p.name}</div>
            <div style={{fontWeight:800}}>${p.price}</div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MensPage;