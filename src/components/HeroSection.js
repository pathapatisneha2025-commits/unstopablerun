import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate(); // <-- hook to programmatically navigate

  return (
    <>
      <section className="hero">
        <div className="overlay" />

        <div className="hero-content">
          {/* BADGE - Light background with orange text */}
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
            Every step brings you closer to <span className="highlight">greatness</span>.
          </p>

          {/* CTA - Updated to match button styles */}
          <div className="actions">
            <button 
              className="btn primary"
              onClick={() => navigate("/shop")}
            >
              SHOP NOW <ArrowRight size={20} />
            </button>


            <button className="btn video-link">
              <div className="play-circle">
                <Play size={16} fill="currentColor" />
              </div>
              <span className="video-text">WATCH STORY</span>
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
          background: url("/landingpage.jpeg") center / cover no-repeat;
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
            rgba(255,255,255,0.7),
            rgba(255,255,255,0.5)
          );
          backdrop-filter: blur(2px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          text-align: center;
        }

        .badge-wrapper {
          margin-bottom: 24px;
        }

        /* Matches the light pill badge in screenshot */
        .badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 16px;
  border-radius: 50px;
  background: rgba(255, 106, 0, 0.12); /* Light orange tint */
  border: 1px solid rgba(255, 106, 0, 0.25);
  color: #ff6a00;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.dot {
  width: 8px;
  height: 8px;
  background: #ff6a00;
  border-radius: 50%;
  flex-shrink: 0;
}
        .title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(60px, 12vw, 120px);
          font-weight: 900;
          line-height: 0.85;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: -2px;
        }

        .orange { color: #ff6a00; }
        .dark { color: #1a1a1a; }

        .description {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: #333;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.5;
        }

        .highlight {
          color: #ff6a00;
          font-weight: 700;
          text-decoration: underline;
        }

        .actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          margin-bottom: 60px;
        }

        .btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          gap: 10px;
          text-transform: uppercase;
        }

        .btn.primary {
          background: #ff6a00;
          color: #fff;
          padding: 14px 36px;
          border-radius: 8px; /* Rounded corners but not a pill */
        }

        .btn.video-link {
          background: transparent;
          color: #1a1a1a;
          gap: 12px;
        }

        .play-circle {
          width: 48px;
          height: 48px;
          border: 1px solid #999;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff6a00;
        }

        .video-text {
          font-size: 16px;
          font-weight: 700;
        }

        .stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }

        .stat-item h3 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 42px;
          font-weight: 900;
          color: #1a1a1a;
          margin: 0;
        }

        .stat-item p {
          font-size: 12px;
          font-weight: 700;
          color: #666;
          margin: 0;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: #ccc;
        }

        .scroll-bar {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: #ff6a00;
          padding: 15px 0;
          white-space: nowrap;
        }

        .scroll-track {
          display: flex;
          animation: scroll-left 25s linear infinite;
        }

        .scroll-track span {
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          padding: 0 30px;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}