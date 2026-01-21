import React from 'react';
import { Search, Heart, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';

const AccessoriesPage = () => {
  const styles = `
    .shop-root { font-family: 'Inter', sans-serif; color: #1a1a1a; margin: 0; }
    .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 5%; border-bottom: 1px solid #eee; }
    .logo { width: 32px; height: 32px; background: #ff5c00; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-style: italic; }
    .nav-links { display: flex; gap: 2.5rem; }
    .nav-links a { text-decoration: none; color: #333; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; }
    .nav-links a.active { color: #ff5c00; border-bottom: 2px solid #ff5c00; padding-bottom: 5px; }

    .hero { 
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/Acessories.jpeg');
      background-size: cover; background-position: center; height: 450px; display: flex; flex-direction: column; justify-content: center; padding: 0 5%; color: white;
    }
    .hero-h1 { font-size: 4.5rem; font-weight: 900; text-transform: uppercase; margin: 0; }
    .hero-tag { color: #ff5c00; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; }

    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; padding: 3rem 5% 5rem; }
    .card { cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; }
    .card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }

    .img-box { aspect-ratio: 1/1; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; overflow: hidden; }
    .img-box img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; }

    .p-cat { font-size: 0.75rem; font-weight: 800; color: #888; text-transform: uppercase; margin-bottom: 0.5rem; }
    .p-name { font-weight: 900; text-transform: uppercase; margin: 5px 0; }
    .p-name.highlight { color: #ff5c00; }
    .p-price { font-weight: 800; font-size: 1.1rem; }
  `;

  const accessories = [
    { 
      cat: 'Tech', 
      name: 'Precision Heart Monitor', 
      price: 129, 
      highlight: true,
      img: '/monitor.jpg'
    },
    { 
      cat: 'Gear', 
      name: '2L Insulated Hydrator', 
      price: 45,
      img: '/dumbles.jpg'
    },
    { 
      cat: 'Equipment', 
      name: 'Eco-Grip Yoga Mat', 
      price: 75,
      img: '/yogamat.jpg'
    },
    { 
      cat: 'Bags', 
      name: '24H Athlete Duffel', 
      price: 95,
      img: '/Acessories.jpeg'
    }
  ];

  const addToCart = async (product) => {
  const userId = 1; // Replace with your dynamic user ID
  try {
    const res = await fetch('https://unstopablerundatabse.onrender.com/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        items: [{
          product_id: product.id,
          quantity: 1,
          product_name: product.name,   // <-- send name
          product_price: product.price, // <-- send price
          product_images: [product.img] // <-- send image
        }]
      })
    });
    const data = await res.json();
    if (res.ok) {
      alert(`${product.name} added to cart!`);
    } else {
      alert(data.message || 'Failed to add to cart');
    }
  } catch (err) {
    console.error(err);
    alert('Server error');
  }
};

  return (
    <div className="shop-root">
      <style>{styles}</style>

      {/* Hero */}
      <header className="hero">
        <span className="hero-tag">The Essentials</span>
        <h1 className="hero-h1">Accessories</h1>
      </header>

      {/* Product Grid */}
      <main className="grid">
        {accessories.map((p, i) => (
          <div key={i} className="card">
            <div className="img-box">
              <img src={p.img} alt={p.name} />
            </div>
            <div className="p-cat">{p.cat}</div>
            <div className={`p-name ${p.highlight ? 'highlight' : ''}`}>{p.name}</div>
            <div className="p-price">${p.price}</div>
              <button 
              style={{marginTop: '8px', padding: '6px 12px', background:'#ff5c00', color:'white', border:'none', borderRadius:'6px', cursor:'pointer', fontWeight:700}}
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AccessoriesPage;
