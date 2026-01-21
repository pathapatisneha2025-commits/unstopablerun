import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const navigate = useNavigate(); // <-- navigation hook

    // Fetch all products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://unstopablerundatabse.onrender.com/products/all');
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data); // Show all initially
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

    // Redirect to category page dynamically
    const goToCategoryPage = (category) => {
        navigate(`/products/${category}`); // <-- redirect dynamically
    };

    return (
        <>
            {/* --- CSS STYLES --- */}
            <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
                :root {
                    --orange-primary: #f97316;
                    --orange-dark: #ea580c;
                    --orange-light: #fff7ed;
                    --bg-light: #f8fafc;
                    --text-dark: #0f172a;
                    --text-muted: #64748b;
                }
                body { margin: 0; font-family: 'Inter', sans-serif; background-color: #fff; color: var(--text-dark); -webkit-font-smoothing: antialiased; }
                .italic-black { font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -0.02em; }
                .page-root { width: 100%; overflow-x: hidden; }
                .container { max-width: 1240px; margin: 0 auto; padding: 4rem 2rem; }
                .hero { background: #000; height: 400px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: white; position: relative; padding: 0 20px; }
                .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle, #262626 0%, #000 100%); opacity: 0.7; }
                .hero-content { position: relative; z-index: 10; }
                .badge-pill { background: var(--orange-dark); padding: 6px 16px; border-radius: 99px; font-size: 10px; font-weight: 800; text-transform: uppercase; }
                .hero h1 { font-size: 3.5rem; margin: 0.8rem 0; }
                .hero h1 span { color: var(--orange-primary); }
                .section-header { margin-bottom: 2.5rem; display: flex; justify-content: space-between; align-items: flex-end; }
                .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; }
                .cat-card { height: 480px; border-radius: 2rem; overflow: hidden; position: relative; background: #e2e8f0; cursor: pointer; }
                .cat-card.active-border { border: 4px solid var(--orange-primary); }
                .cat-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
                .cat-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 2rem; color: white; }
                .quiz-container-full { background-color: var(--orange-primary); padding: 80px 20px; text-align: center; color: white; display: flex; flex-direction: column; align-items: center; }
                .sub-footer { background: #111; padding: 60px 20px; color: white; }
                .sub-container { max-width: 1240px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 30px; }
                .sub-text-side h2 { font-size: 2rem; margin: 0; color: white; }
                .sub-text-side p { opacity: 0.6; font-size: 0.95rem; margin-top: 8px; }
                .sub-form-side { display: flex; background: #1a1a1a; padding: 6px; border-radius: 12px; width: 100%; max-width: 450px; border: 1px solid #333; }
                .sub-form-side input { background: transparent; border: none; padding: 12px 15px; color: white; flex-grow: 1; outline: none; font-size: 0.9rem; }
                .btn-subscribe { background: var(--orange-primary); color: white; border: none; padding: 0 25px; border-radius: 8px; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; cursor: pointer; display: flex; align-items: center; gap: 8px; }
                .footer-bottom { background: #000; padding: 25px 20px; border-top: 1px solid #1a1a1a; text-align: center; color: #444; font-size: 0.75rem; }
            `}} />

            <div className="page-root">
                {/* --- HERO --- */}
                <section className="hero">
                    <div className="hero-content">
                        <span className="badge-pill">Explore All Collections</span>
                        <h1 className="italic-black">THE <span>SHOP</span></h1>
                        <p style={{ fontSize: '1rem', opacity: 0.8, maxWidth: '550px' }}>
                            Discover premium athletic wear designed for peak performance. From training essentials to limited drops.
                        </p>
                    </div>
                </section>

                {/* --- CATEGORIES --- */}
                <section className="container">
                    <div className="section-header">
                        <div>
                            <span style={{ color: 'var(--orange-primary)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase' }}>Core Categories</span>
                            <h2 className="italic-black" style={{ fontSize: '2rem', marginTop: '0.4rem' }}>Shop By <span>Category</span></h2>
                        </div>
                    </div>
                    <div className="grid-3">
                        {['Men', 'Women', 'Accessories'].map(category => (
                            <div
                                key={category}
                                className={`cat-card ${activeCategory === category || (category === 'All' && activeCategory === null) ? 'active-border' : ''}`}
                                onClick={() => goToCategoryPage(category)} // <-- dynamic redirect
                            >
                                <img
                                    src={
                                        category === 'Men' ? '/men.jpeg' :
                                        category === 'Women' ? '/women.jpeg' :
                                        category === 'Accessories' ? '/Acessories.jpeg' :
                                        '/all.jpeg'
                                    }
                                    alt={category}
                                />
                                <div className="cat-overlay">
                                    <h3 className="italic-black" style={{ fontSize: '1.8rem' }}>{category}</h3>
                                    <div className="italic-black" style={{ fontSize: '0.75rem' }}>View Collection →</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SUBSCRIPTION & FOOTER --- */}
                <section className="sub-footer">
                    <div className="sub-container">
                        <div className="sub-text-side">
                            <h2 className="italic-black">STAY <span>UNSTOPPABLE</span></h2>
                            <p>Subscribe for exclusive offers and insider-only discounts</p>
                        </div>
                        <div className="sub-form-side">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn-subscribe">Subscribe</button>
                        </div>
                    </div>
                </section>

                <footer className="footer-bottom">
                    <div>© 2026 THE SHOP. ALL RIGHTS RESERVED.</div>
                </footer>
            </div>
        </>
    );
};

export default Shop;
