import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const ProductsPage = () => {
  const { category } = useParams(); // main category (Men/Women/etc.)
  const [activeSubcategory, setActiveSubcategory] = useState('All'); // track subcategory
  const [products, setProducts] = useState([]);
  const [availableSubcategories, setAvailableSubcategories] = useState([]);
  const navigate = useNavigate();

  const allSubcategories = ['All', 'Shoes', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];

  const heroBackgrounds = {
    Men: "/men.jpeg",
    Women: "/women.jpeg",
    Accessories: "/Acessories.jpeg",
    All: "/all.jpeg"
  };

  const heroDescriptions = {
    Men: "Power meets elegance. Performance wear for unstoppable men.",
    Women: "Grace meets strength. Performance wear for unstoppable women.",
    Accessories: "Gear up with unstoppable accessories.",
    All: "Power meets elegance. Performance wear designed for everyone."
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://unstopablerundatabse.onrender.com/products/all');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();

        // ✅ Filter by main category first
        const categoryProducts = category === 'All'
          ? data
          : data.filter(p => p.category.toUpperCase() === category.toUpperCase());

        // Get subcategories available for this category
        const subcats = ['All', ...new Set(categoryProducts.map(p => p.subcategory).filter(Boolean))];
        setAvailableSubcategories(subcats);

        // Filter by active subcategory
        const filtered = activeSubcategory === 'All'
          ? categoryProducts
          : categoryProducts.filter(p => p.subcategory?.toUpperCase() === activeSubcategory.toUpperCase());

        setProducts(filtered);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [category, activeSubcategory]);

  const addToCart = async (product, variant) => {
    if (!variant || variant.stock === 0) {
      alert("This product is out of stock!");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    let userId = user?.userId || user?.id;
    if (!userId) {
      let guestId = localStorage.getItem("guestId");
      if (!guestId) {
        guestId = `guest_${Date.now()}`;
        localStorage.setItem("guestId", guestId);
      }
      userId = guestId;
    }

    const payload = {
      userId,
      items: [{
        product_id: product.id,
        product_name: product.name,
        product_price: variant.price,
        product_images: [product.main_image],
        quantity: 1,
        variant
      }]
    };

    try {
      const res = await fetch('https://unstopablerundatabse.onrender.com/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok) alert(`${product.name} added to cart!`);
      else alert(data.message || 'Failed to add to cart');
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <div className="shop-container">
      <style>{`
        .shop-container { font-family: 'Inter', sans-serif; background: #fff; padding-bottom: 5rem; }
        a { text-decoration: none; color: inherit; }
        .shop-hero { position: relative; height: 350px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; text-align: center; }
        .back-btn { color: #ff5c00; font-weight: 700; margin-bottom: 1rem; display: inline-block; }
        .hero-tag { text-transform: uppercase; color: #ff5c00; font-weight: 800; letter-spacing: 1.5px; margin-bottom: 0.5rem; }
        .hero-title { font-size: 3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 1rem; }
        .hero-desc { max-width: 600px; font-size: 1rem; opacity: 0.9; }
        .filter-bar { padding: 2rem 5%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .category-list { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .cat-item { padding: 0.5rem 1rem; border-radius: 8px; font-weight: 700; border: 1px solid #ff5c00; color: #ff5c00; transition: all 0.2s; cursor: pointer; }
        .cat-item.active, .cat-item:hover { background: #ff5c00; color: white; }
        .btn-filter { display: flex; align-items: center; gap: 0.5rem; font-weight: 800; border: 2px solid #ff5c00; color: #ff5c00; padding: 0.5rem 1rem; border-radius: 8px; background: white; }
        .sort-btn { display: flex; align-items: center; gap: 0.5rem; font-weight: 700; }
        .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 2rem; padding: 0 5%; margin-top: 2rem; }
        .product-card { background: #fff; border: 1px solid #eee; border-radius: 16px; padding: 1rem; display: flex; flex-direction: column; cursor: pointer; transition: 0.3s; }
        .product-card:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.08); }
        .image-box { aspect-ratio: 1/1; border-radius: 12px; overflow: hidden; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; }
        .p-cat { font-size: 0.75rem; font-weight: 700; color: #888; margin-bottom: 0.25rem; text-transform: uppercase; }
        .p-name { font-weight: 900; font-size: 1rem; margin-bottom: 0.25rem; text-transform: uppercase; }
        .p-price { font-weight: 800; font-size: 1rem; margin-bottom: 0.25rem; }
        .p-stock { font-size: 0.75rem; font-weight: 600; color: #991B1B; margin-bottom: 0.5rem; }
        .btn-add-cart { background: #ff5c00; color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 700; transition: 0.2s; }
        .btn-add-cart:hover { background: #e85c00; }
        .btn-add-cart:disabled { opacity: 0.5; cursor: not-allowed; }
        .load-more-container { text-align: center; margin-top: 3rem; }
        .btn-load { border: 2px solid #ff5c00; background: white; color: #ff5c00; padding: 0.75rem 2rem; border-radius: 12px; font-weight: 900; text-transform: uppercase; transition: 0.2s; }
        .btn-load:hover { background: #ff5c00; color: white; }

        /* Responsive */
        @media(max-width: 768px) {
          .shop-hero { height: 250px; }
          .hero-title { font-size: 2rem; }
          .product-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1rem; }
          .p-name { font-size: 0.9rem; }
          .p-price { font-size: 0.9rem; }
        }

        @media(max-width: 480px) {
          .shop-hero { height: 200px; }
          .hero-title { font-size: 1.5rem; }
          .filter-bar { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
          <header
        className="shop-hero"
        style={{
          background: `linear-gradient(rgba(255,92,0,0.3), rgba(255,92,0,0.7)), url('${heroBackgrounds[category || 'All']}') center/cover no-repeat`
        }}
      >
        <Link to="/shop" className="back-btn">← Back to Shop</Link>
        <span className="hero-tag">{activeSubcategory} Collection</span>
        <h1 className="hero-title">{activeSubcategory} Collection</h1>
        <p className="hero-desc">{heroDescriptions[category || 'All']}</p>
      </header>

      {/* Filters */}
      <section className="filter-bar">
        <div className="category-list">
          <button className="btn-filter"><SlidersHorizontal size={18} /> Filters</button>
          {availableSubcategories.map(sub => (
            <div
              key={sub}
              className={`cat-item ${activeSubcategory === sub ? 'active' : ''}`}
              onClick={() => setActiveSubcategory(sub)}
            >
              {sub}
            </div>
          ))}
        </div>
        <div className="sort-btn">Sort By <ChevronDown size={18} /></div>
      </section>

      {/* Product Grid */}
      <main className="product-grid">
        {products.map(product => {
          const mainVariant = product.variants?.[0] || {};
          return (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="image-box">
                <img
                  src={product.main_image || '/placeholder.png'}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>

              <div className="p-cat">{product.category} {product.subcategory ? `/ ${product.subcategory}` : ''}</div>
              <div className={`p-name ${product.highlight ? 'highlight' : ''}`}>{product.name}</div>
              <div className="p-price">₹{mainVariant.price ?? 'N/A'}</div>
              <div className="p-stock">
                {mainVariant.stock > 0 ? `${mainVariant.stock} in stock` : 'Out of Stock'}
              </div>

              <button
                className="btn-add-cart"
                disabled={mainVariant.stock === 0}
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product, mainVariant);
                }}
              >
                {mainVariant.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          )
        })}
      </main>

      <div className="load-more-container">
        <button className="btn-load">Load More Products</button>
      </div>
    </div>
  );
};

export default ProductsPage;
