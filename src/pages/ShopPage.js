import React from 'react';
import { useNavigate } from "react-router-dom";

const Shop = () => {
    const navigate = useNavigate();

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

                body {
                    margin: 0;
                    font-family: 'Inter', sans-serif;
                    background-color: #ffffff;
                    color: var(--text-dark);
                    -webkit-font-smoothing: antialiased;
                }

                .italic-black {
                    font-weight: 900;
                    font-style: italic;
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                }

                .page-root {
                    width: 100%;
                    overflow-x: hidden;
                }

                .container {
                    max-width: 1240px;
                    margin: 0 auto;
                    padding: 4rem 2rem;
                }

                /* Hero Section */
                .hero {
                    background: #000;
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    position: relative;
                    padding: 0 20px;
                }

                .hero::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle, #262626 0%, #000000 100%);
                    opacity: 0.7;
                }

                .hero-content {
                    position: relative;
                    z-index: 10;
                }

                .badge-pill {
                    background: var(--orange-dark);
                    padding: 6px 16px;
                    border-radius: 99px;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                }

                .hero h1 {
                    font-size: 3.5rem; /* Reduced from 4.5rem */
                    margin: 0.8rem 0;
                }

                .hero h1 span { color: var(--orange-primary); }

                /* Grid Layout */
                .section-header {
                    margin-bottom: 2.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .grid-3 {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 1.5rem;
                }

                /* Category Cards */
                .cat-card {
                    height: 480px; /* Reduced from 520px */
                    border-radius: 2rem;
                    overflow: hidden;
                    position: relative;
                    background: #e2e8f0;
                    cursor: pointer;
                }

                .cat-card.active-border { border: 4px solid var(--orange-primary); }

                .cat-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s;
                }

                .cat-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 2rem;
                    color: white;
                }

                /* Collection Tiles Styling */
                .curated-badge {
                    background: #ffedd5;
                    color: var(--orange-primary);
                    padding: 6px 16px;
                    border-radius: 99px;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                    display: inline-block;
                    margin-bottom: 0.8rem;
                }

                /* Quiz Section */
                .quiz-container-full {
                    background-color: var(--orange-primary);
                    padding: 80px 20px;
                    text-align: center;
                    color: white;
                    width: 100%;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .quiz-container-full h2 {
                    font-size: 3rem; /* Reduced from 4.5rem */
                    margin: 0 0 0.8rem 0;
                    line-height: 1;
                }

                .quiz-container-full p {
                    font-size: 1.1rem; /* Reduced from 1.25rem */
                    max-width: 550px;
                    margin: 0 auto 2rem auto;
                    opacity: 0.9;
                    line-height: 1.6;
                }

                /* Subscription Section */
                .sub-footer {
                    background: #111111;
                    padding: 60px 20px;
                    color: white;
                }

                .sub-container {
                    max-width: 1240px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 30px;
                }

                .sub-text-side h2 {
                    font-size: 2rem; /* Reduced from 3rem */
                    margin: 0;
                    color: white;
                }

                .sub-text-side p {
                    opacity: 0.6;
                    font-size: 0.95rem; /* Reduced from 1.1rem */
                    margin-top: 8px;
                }

                .sub-form-side {
                    display: flex;
                    background: #1a1a1a;
                    padding: 6px;
                    border-radius: 12px;
                    width: 100%;
                    max-width: 450px;
                    border: 1px solid #333;
                }

                .sub-form-side input {
                    background: transparent;
                    border: none;
                    padding: 12px 15px;
                    color: white;
                    flex-grow: 1;
                    outline: none;
                    font-size: 0.9rem;
                }

                .btn-subscribe {
                    background: var(--orange-primary);
                    color: white;
                    border: none;
                    padding: 0 25px;
                    border-radius: 8px;
                    font-weight: 800;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .footer-bottom {
                    background: #000;
                    padding: 25px 20px;
                    border-top: 1px solid #1a1a1a;
                    text-align: center;
                    color: #444;
                    font-size: 0.75rem;
                }
            ` }} />

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
                        <div className="cat-card" onClick={() => navigate("/menscollectoionpage")}>
                            <img src="/men.jpeg" alt="Men" />
                            <div className="cat-overlay">
                                <h3 className="italic-black" style={{ fontSize: '1.8rem' }}>Men</h3>
                                <div className="italic-black" style={{ fontSize: '0.75rem' }}>View Collection →</div>
                            </div>
                        </div>
                        <div className="cat-card active-border" onClick={() => navigate("/womencollectoionpage")}>
                            <img src="/women.jpeg" alt="Women" />
                            <div className="cat-overlay">
                                <h3 className="italic-black" style={{ fontSize: '1.8rem' }}>Women</h3>
                                <div className="italic-black" style={{ fontSize: '0.75rem' }}>View Collection →</div>
                            </div>
                        </div>
                        <div className="cat-card" onClick={() => navigate("/Accesssoriespage")}>
                            <img src="/Acessories.jpeg" alt="Accessories" />
                            <div className="cat-overlay">
                                <h3 className="italic-black" style={{ fontSize: '1.8rem' }}>Accessories</h3>
                                <div className="italic-black" style={{ fontSize: '0.75rem' }}>View Collection →</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- FULL-WIDTH QUIZ SECTION --- */}
                <section className="quiz-container-full">
                    <h2 className="italic-black">Can't Decide?</h2>
                    <p>Take our style quiz to find the perfect gear for your workout style and goals.</p>
                    <button style={{ padding: '1rem 2rem', fontSize: '0.9rem' }} className="btn-quiz-white">
                        Take the Quiz
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </section>

                {/* --- SUBSCRIPTION SECTION --- */}
                <section className="sub-footer">
                    <div className="sub-container">
                        <div className="sub-text-side">
                            <h2 className="italic-black">STAY <span>UNSTOPPABLE</span></h2>
                            <p>Subscribe for exclusive offers and insider-only discounts</p>
                        </div>
                        <div className="sub-form-side">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn-subscribe">
                                Subscribe 
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
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