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

        /* Layout */
        .page-root {
          width: 100%;
          overflow-x: hidden;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        /* Hero Section */
        .hero {
          background: #000;
          height: 480px;
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
          font-size: 4.5rem;
          margin: 1rem 0;
        }

        .hero h1 span { color: var(--orange-primary); }

        /* Grid Layout */
        .section-header {
          margin-bottom: 3rem;
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
          height: 520px;
          border-radius: 2.5rem;
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

        .cat-card:hover img { transform: scale(1.05); }

        .cat-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem;
          color: white;
        }

        /* Collection Tiles Styling */
        .curated-badge {
          background: #ffedd5;
          color: var(--orange-primary);
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .collection-tile {
          background: white;
          padding: 3rem;
          border-radius: 2.5rem;
          border: 1px solid #f1f5f9;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .collection-tile:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
        }

        .hot-tag {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--orange-primary);
          color: white;
          font-size: 10px;
          font-weight: 900;
          padding: 4px 12px;
          border-radius: 99px;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          background: var(--orange-light);
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .icon-wrapper.solid-orange {
          background: var(--orange-primary);
          color: white;
        }

        .explore-link {
          text-decoration: none;
          color: var(--orange-primary);
          font-weight: 800;
          font-size: 0.85rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
        }

        /* --- Updated Full-Width Quiz Section --- */
        .quiz-container-full {
          background-color: var(--orange-primary);
          padding: 100px 20px;
          text-align: center;
          color: white;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .quiz-container-full h2 {
          font-size: 4.5rem;
          margin: 0 0 1rem 0;
          line-height: 1;
        }

        .quiz-container-full p {
          font-size: 1.25rem;
          max-width: 650px;
          margin: 0 auto 2.5rem auto;
          opacity: 0.9;
          line-height: 1.6;
        }

        .btn-quiz-white {
          background: white;
          color: black;
          border: none;
          padding: 1.2rem 2.5rem;
          border-radius: 1rem;
          font-weight: 900;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
          transition: transform 0.2s ease;
        }

        .btn-quiz-white:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* Footer */
        .footer-dark {
          background: #000;
          padding: 4rem 2rem;
          color: white;
        }

        .footer-content {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      ` }} />

      <div className="page-root">
        {/* --- HERO --- */}
        <section className="hero">
          <div className="hero-content">
            <span className="badge-pill">Explore All Collections</span>
            <h1 className="italic-black">THE <span>SHOP</span></h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px' }}>
              Discover premium athletic wear designed for peak performance. From training essentials to limited drops.
            </p>
          </div>
        </section>

        {/* --- CATEGORIES --- */}
        <section className="container">
          <div className="section-header">
            <div>
              <span style={{ color: 'var(--orange-primary)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>Core Categories</span>
              <h2 className="italic-black" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Shop By <span>Category</span></h2>
            </div>
          </div>
          <div className="grid-3">
          <div
    className="cat-card"
    onClick={() => navigate("/menscollectoionpage")}
    style={{ cursor: "pointer" }}
  >
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" alt="Men" />
              <div className="cat-overlay">
                <h3 className="italic-black" style={{ fontSize: '2.2rem' }}>Men</h3>
                <div className="italic-black" style={{ fontSize: '0.8rem' }}>View Collection →</div>
              </div>
            </div>
<div
        className="cat-card active-border"
        onClick={() => navigate("/womencollectoionpage")}
        style={{ cursor: "pointer" }}
      >              <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800" alt="Women" />
              <div className="cat-overlay">
                <h3 className="italic-black" style={{ fontSize: '2.2rem' }}>Women</h3>
                <div className="italic-black" style={{ fontSize: '0.8rem' }}>View Collection →</div>
              </div>
            </div>
<div
    className="cat-card"
    onClick={() => navigate("/Accesssoriespage")}
    style={{ cursor: "pointer" }}
  >              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" alt="Accessories" />
              <div className="cat-overlay">
                <h3 className="italic-black" style={{ fontSize: '2.2rem' }}>Accessories</h3>
                <div className="italic-black" style={{ fontSize: '0.8rem' }}>View Collection →</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- MORE COLLECTIONS --- */}
        <section style={{ background: '#fcfcfc' }}>
          <div className="container">
            <span className="curated-badge">Curated For You</span>
            <h2 className="italic-black" style={{ fontSize: '3rem', marginBottom: '3.5rem' }}>
              More <span style={{ color: 'var(--orange-primary)' }}>Collections</span>
            </h2>

            <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
              <div className="collection-tile">
                <div className="hot-tag">HOT</div>
                <div className="icon-wrapper">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <div style={{ color: 'var(--orange-primary)', fontSize: '0.75rem', fontWeight: 800, marginBottom: '8px' }}>JUST DROPPED</div>
                <h4 className="italic-black" style={{ fontSize: '1.75rem', marginBottom: '12px' }}>New Arrivals</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Fresh styles added weekly</p>
                <a href="#" className="explore-link">Explore <span>→</span></a>
              </div>

              <div className="collection-tile">
                <div className="icon-wrapper">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div style={{ color: 'var(--orange-primary)', fontSize: '0.75rem', fontWeight: 800, marginBottom: '8px' }}>FAN FAVORITES</div>
                <h4 className="italic-black" style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Best Sellers</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Top picks by athletes</p>
                <a href="#" className="explore-link">Explore <span>→</span></a>
              </div>

              <div className="collection-tile">
                <div className="icon-wrapper">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.5-4.5-.5-4.5s2.5 1 3.5 3c.5 1 1 2.25 1 3.5 0 2.21-1.79 4-4 4z"/></svg>
                </div>
                <div style={{ color: 'var(--orange-primary)', fontSize: '0.75rem', fontWeight: 800, marginBottom: '8px' }}>PRO-LEVEL</div>
                <h4 className="italic-black" style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Performance Gear</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Competition ready equipment</p>
                <a href="#" className="explore-link">Explore <span>→</span></a>
              </div>
            </div>

            <div className="grid-3">
              <div className="collection-tile">
                <div className="icon-wrapper">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div style={{ color: 'var(--orange-primary)', fontSize: '0.75rem', fontWeight: 800, marginBottom: '8px' }}>WORKOUT READY</div>
                <h4 className="italic-black" style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Training Essentials</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Everything for your routine</p>
                <a href="#" className="explore-link">Explore <span>→</span></a>
              </div>

              <div className="collection-tile" style={{ borderColor: '#fed7aa' }}>
                <div className="hot-tag">HOT</div>
                <div className="icon-wrapper solid-orange">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div style={{ color: 'var(--orange-primary)', fontSize: '0.75rem', fontWeight: 800, marginBottom: '8px' }}>EXCLUSIVE DROPS</div>
                <h4 className="italic-black" style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Limited Edition</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Rare finds, limited stock</p>
                <a href="#" className="explore-link">Explore <span>→</span></a>
              </div>

              <div className="collection-tile">
                <div className="icon-wrapper">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                </div>
                <div style={{ color: 'var(--orange-primary)', fontSize: '0.75rem', fontWeight: 800, marginBottom: '8px' }}>FRESH STYLES</div>
                <h4 className="italic-black" style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Seasonal Collection</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Current season favorites</p>
                <a href="#" className="explore-link">Explore <span>→</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* --- FULL-WIDTH QUIZ SECTION --- */}
        <section className="quiz-container-full">
          <h2 className="italic-black">Can't Decide?</h2>
          <p>
            Take our style quiz to find the perfect gear for your workout style and goals.
          </p>
          <button className="btn-quiz-white">
            Take the Quiz
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </section>

        {/* --- FOOTER --- */}
        <footer className="footer-dark">
          <div className="footer-content">
            <h2 className="italic-black" style={{ fontSize: '2rem', margin: 0 }}>STAY <span>UNSTOPPABLE</span></h2>
            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>© 2026 THE SHOP. ALL RIGHTS RESERVED.</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Shop;