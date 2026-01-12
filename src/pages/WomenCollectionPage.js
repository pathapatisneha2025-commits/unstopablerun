import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const WomenCollectionPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Shoes', 'Tops', 'Bottoms', 'Outerwear'];

 const products = [
  { 
    id: 1, 
    category: 'BOTTOMS', 
    name: 'POWER COMPRESSION TIGHTS', 
    price: 89, 
    color: '#f3f4f6',
    img: '/pants.jpeg'
  },
  { 
    id: 2, 
    category: 'TOPS', 
    name: 'SWIFT PERFORMANCE TEE', 
    price: 45, 
    color: '#f3f4f6',
    img: '/womentshirt.jpeg'
  },
  { 
    id: 3, 
    category: 'SHOES', 
    name: 'AERO RUNNING SHOES', 
    price: 179, 
    color: '#fdf2e9', 
    highlight: true,
    img: '/runningshoes.jpeg'
  },
  { 
    id: 4, 
    category: 'ACCESSORIES', 
    name: 'ULTRA GRIP GLOVES', 
    price: 35, 
    color: '#f3f4f6',
    img: '/sportsgloves.jpeg'
  }
];


  const styles = `
    .shop-container {
      font-family: 'Inter', -apple-system, sans-serif;
      color: #1a1a1a;
      background-color: white;
      margin: 0;
    }

    /* Navigation */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 5%;
      border-bottom: 1px solid #eee;
    }
    .brand-logo {
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
    .nav-menu { display: flex; gap: 2.5rem; }
    .nav-menu a {
      text-decoration: none;
      color: #333;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .nav-menu a.active { color: #ff5c00; border-bottom: 2px solid #ff5c00; padding-bottom: 5px; }
    .nav-actions { display: flex; gap: 1.5rem; color: #666; }

    /* Hero Section */
    .shop-hero {
      position: relative;
      height: 450px;
      background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), 
                  url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2000');
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 5%;
      color: white;
    }
    .back-btn {
      color: #ff5c00;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.9rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .hero-tag { text-transform: uppercase; color: #ff5c00; font-weight: 800; letter-spacing: 1.5px; margin-bottom: 0.5rem; }
    .hero-title { font-size: 4.5rem; font-weight: 900; text-transform: uppercase; margin: 0 0 1.5rem 0; line-height: 1; }
    .hero-desc { max-width: 500px; font-size: 1.1rem; opacity: 0.9; }

    /* Filter Bar */
    .filter-bar {
      padding: 3rem 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .category-list { display: flex; gap: 1rem; align-items: center; }
    .btn-filter {
      border: 2px solid #ff5c00;
      background: white;
      color: #ff5c00;
      padding: 0.6rem 1.5rem;
      border-radius: 8px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }
    .cat-item {
      padding: 0.6rem 1.5rem;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      transition: 0.2s;
    }
    .cat-item.active { background: #ff5c00; color: white; }
    .sort-btn { font-weight: 700; display: flex; align-items: center; gap: 8px; cursor: pointer; }

    /* Product Grid */
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      padding: 0 5% 5rem;
    }
    .product-card { cursor: pointer; }
    .image-box {
      aspect-ratio: 1/1;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      color: #ccc;
      letter-spacing: 5px;
      margin-bottom: 1.5rem;
    }
    .p-cat { color: #888; font-size: 0.75rem; font-weight: 800; margin-bottom: 0.5rem; }
    .p-name { 
      font-weight: 900; 
      font-size: 1rem; 
      margin-bottom: 0.5rem; 
      text-transform: uppercase;
    }
    .p-name.highlight { color: #ff5c00; }
    .p-price { font-weight: 800; font-size: 1.1rem; }

    /* Load More */
    .load-more-container { text-align: center; padding-bottom: 5rem; }
    .btn-load {
      border: 2px solid #ff5c00;
      background: white;
      color: #ff5c00;
      padding: 1rem 3rem;
      border-radius: 12px;
      font-weight: 900;
      text-transform: uppercase;
      cursor: pointer;
    }
  `;

  return (
    <div className="shop-container">
      <style>{styles}</style>


      {/* Hero */}
      <header className="shop-hero">
        <a href="#" className="back-btn">← Back to Shop</a>
        <span className="hero-tag">Athletic Apparel</span>
        <h1 className="hero-title">Women's Collection</h1>
        <p className="hero-desc">Power meets elegance. Performance wear designed for the unstoppable woman.</p>
      </header>

      {/* Filters */}
      <section className="filter-bar">
        <div className="category-list">
          <button className="btn-filter"><SlidersHorizontal size={18} /> Filters</button>
          {categories.map(cat => (
            <div 
              key={cat} 
              className={`cat-item ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
        <div className="sort-btn">Sort By <ChevronDown size={18} /></div>
      </section>

      {/* Grid */}
    <main className="product-grid">
  {products.map(product => (
    <div key={product.id} className="product-card">
      <div className="image-box" style={{ backgroundColor: product.color }}>
        <img 
          src={product.img} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
        />
      </div>
      <div className="p-cat">{product.category}</div>
      <div className={`p-name ${product.highlight ? 'highlight' : ''}`}>{product.name}</div>
      <div className="p-price">${product.price}</div>
    </div>
  ))}
</main>


      {/* Button */}
      <div className="load-more-container">
        <button className="btn-load">Load More Products</button>
      </div>
    </div>
  );
};

export default WomenCollectionPage;