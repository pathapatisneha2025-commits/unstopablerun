import React from "react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="overlay" />

        <div className="hero-content">
          {/* BADGE */}
          <div className="badge-wrapper">
            <span className="badge">
              <span className="dot" /> THE MOVEMENT BEGINS
            </span>
          </div>

          {/* TITLE */}
          <h1 className="title">
            <span className="orange">UNSTOPPABLE</span>{" "}
            <span className="dark">STARTS</span>
            <br />
            <span className="dark">HERE</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="description">
            Push your limits. Break barriers. Embrace the power within you.
            Every step brings you closer to{" "}
            <span className="highlight">greatness</span>.
          </p>

          {/* CTA */}
          <div className="actions">
            <button className="btn primary">
              SHOP NOW <ArrowRight size={20} />
            </button>

            <button className="btn video-link">
              <div className="play-circle">
                <Play size={14} fill="currentColor" />
              </div>
              Watch Story
            </button>
          </div>

          {/* STATS */}
          <div className="stats">
            <div className="stat-item">
              <h3>50K+</h3>
              <p>ATHLETES WORLDWIDE</p>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <h3>120+</h3>
              <p>COUNTRIES</p>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <h3>4.9★</h3>
              <p>CUSTOMER RATING</p>
            </div>
          </div>
        </div>

        {/* SCROLLING INFO BAR */}
        <div className="scroll-bar">
          <div className="scroll-track">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <span>LIFETIME WARRANTY</span>
                <span className="sep">•</span>
                <span>FREE SHIPPING OVER $100</span>
                <span className="sep">•</span>
                <span>SUSTAINABLE MATERIALS</span>
                <span className="sep">•</span>
                <span>ATHLETE TESTED</span>
                <span className="sep">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

        .hero {
          position: relative;
          min-height: 100vh;
          background: url("https://images.unsplash.com/photo-1526401485004-2aa6b21d8c02?auto=format&fit=crop&w=1920&q=85")
            center / cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 5%;
          overflow: hidden;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.9),
            rgba(255,255,255,0.75)
          );
          backdrop-filter: blur(4px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          text-align: center;
          margin-top: -40px;
        }

        .badge-wrapper {
          margin-bottom: 24px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          border-radius: 100px;
          background: rgba(255, 106, 0, 0.1);
          border: 1px solid rgba(255, 106, 0, 0.2);
          color: #ff6a00;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #ff6a00;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255,106,0,0.5);
        }

        .title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(54px, 12vw, 110px);
          font-weight: 900;
          line-height: 0.9;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: -2px;
        }

        .orange { color: #ff6a00; }
        .dark { color: #111; }

        .description {
          font-family: 'Inter', sans-serif;
          font-size: clamp(16px, 2vw, 20px);
          color: #333;
          max-width: 650px;
          margin: 0 auto 40px;
          line-height: 1.6;
          font-weight: 400;
        }

        .highlight {
          color: #ff6a00;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .actions {
          display: flex;
          gap: 30px;
          justify-content: center;
          align-items: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .btn.primary {
          background: #ff6a00;
          color: #fff;
          padding: 16px 42px;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(255,106,0,0.3);
        }

        .btn.primary:hover {
          background: #e55d00;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,106,0,0.4);
        }

        .btn.video-link {
          background: transparent;
          color: #111;
        }

        .play-circle {
          width: 44px;
          height: 44px;
          border: 1px solid #ddd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff6a00;
          transition: 0.3s;
        }

        .btn.video-link:hover .play-circle {
          background: #ff6a00;
          color: #fff;
          border-color: #ff6a00;
        }

        .stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }

        .stat-item h3 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 38px;
          font-weight: 900;
          color: #ff6a00;
          margin: 0;
          line-height: 1;
        }

        .stat-item p {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #666;
          margin-top: 5px;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: #ddd;
        }

        .scroll-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #ff6a00;
          padding: 18px 0;
          white-space: nowrap;
        }

        .scroll-track {
          display: flex;
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }

        .scroll-track span {
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px;
          font-weight: 800;
          padding: 0 20px;
        }

        .sep { opacity: 0.5; }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .stats { 
            flex-direction: column; 
            gap: 20px;
          }
          .stat-divider { display: none; }
          .hero { padding-bottom: 100px; }
        }
      `}</style>
    </>
  );
}
