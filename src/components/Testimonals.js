import React, { useState } from "react";

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Marathon Runner",
    image: "https://i.pravatar.cc/150?u=marcus",
    text: "RUNN gear has transformed my training. The comfort and performance are unmatched. I've shaved minutes off my personal best.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "CrossFit Athlete",
    image: "https://i.pravatar.cc/150?u=sarah",
    text: "Finally, athletic wear that keeps up with my intensity. The durability is incredible, and the style is fire.",
    rating: 5,
  },
  {
    name: "David Williams",
    role: "Personal Trainer",
    image: "https://i.pravatar.cc/150?u=david",
    text: "I recommend RUNN to all my clients. The quality speaks for itself. My clients love how they look and feel.",
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Yoga Coach",
    image: "https://i.pravatar.cc/150?u=emily",
    text: "Lightweight, flexible, and breathable. Perfect for long sessions.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const next = () => {
    if (index + 1 <= testimonials.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* TOP BORDER ACCENT */}
        <div className="top-divider"></div>

        {/* HEADER AREA */}
        <header className="header-stack">
          <div className="badge">COMMUNITY VOICES</div>
          
          <div className="title-row">
            <h2 className="main-title">
              WHAT ATHLETES <span className="highlight">SAY</span>
            </h2>

            <div className="nav-controls">
              <button 
                onClick={prev} 
                className="control-btn" 
                disabled={index === 0}
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={next} 
                className="control-btn" 
                disabled={index + visibleCount >= testimonials.length}
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </header>

        {/* CARDS GRID */}
        <div className="testimonial-grid">
          {testimonials.slice(index, index + visibleCount).map((t, i) => (
            <article className="testimonial-card" key={i}>
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#ff6a00"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12M10 21L10 18C10 16.8954 10.8954 16 12 16H15M3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C4.44772 8 4 8.44772 4 9V12" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="rating-stars">
                {"★".repeat(t.rating)}
              </div>
              <div className="user-info">
                <img src={t.image} alt={t.name} className="user-avatar" />
                <div className="user-details">
                  <h4 className="user-name">{t.name}</h4>
                  <p className="user-role">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&display=swap');

        .testimonials-section {
          background-color: #0a0a0a;
          color: #ffffff;
          padding: 80px 24px;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .top-divider {
          height: 1px;
          background: #333;
          width: 100%;
          margin-bottom: 40px;
        }

        .header-stack {
          margin-bottom: 48px;
        }

        .badge {
          display: inline-block;
          background: #ff6a00;
          color: #fff;
          padding: 6px 16px;
          border-radius: 100px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          flex-wrap: wrap;
        }

        .main-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(48px, 8vw, 84px);
          line-height: 0.9;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .highlight {
          color: #ff6a00;
        }

        .nav-controls {
          display: flex;
          gap: 12px;
          margin-bottom: 10px;
        }

        .control-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid #444;
          background: transparent;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .control-btn:hover:not(:disabled) {
          border-color: #ff6a00;
          background: rgba(255, 106, 0, 0.05);
        }

        .control-btn:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .testimonial-card {
          background: #141414;
          border: 1px solid #222;
          padding: 40px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .testimonial-text {
          font-size: 18px;
          line-height: 1.6;
          color: #d1d1d1;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .rating-stars {
          color: #ff6a00;
          font-size: 20px;
          letter-spacing: 2px;
          margin-bottom: 24px;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #ff6a00;
        }

        .user-name {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .user-role {
          margin: 4px 0 0 0;
          font-size: 14px;
          color: #777;
        }

        @media (max-width: 768px) {
          .title-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .nav-controls {
            display: none; /* Hide controls on mobile if using swipe or simple scroll */
          }
        }
      `}</style>
    </section>
  );
}