import React from 'react';

const CtaSection = () => {
  return (
    <section className="join-section">
      <div className="join-container">
        {/* Left Content Side */}
        <div className="content-side">
          <div className="top-badge">BE PART OF SOMETHING GREATER</div>
          <h1 className="join-title">JOIN THE<br />MOVEMENT</h1>
          <p className="join-description">
            Connect with athletes worldwide who share your passion. 
            Get exclusive access to new drops, training tips, and be the 
            first to know about our events.
          </p>
          
          <div className="subscription-box">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-btn">
              Subscribe <span>→</span>
            </button>
          </div>

          {/* Updated Icon Row */}
          <div className="stats-row">
            <div className="stat-item">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="stat-text">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Athletes</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div className="stat-text">
                <span className="stat-number">120+</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
              </div>
              <div className="stat-text">
                <span className="stat-number">500+</span>
                <span className="stat-label">Events</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Side */}
        <div className="visual-side">
          <div className="circle circle-large"></div>
          <div className="circle circle-medium"></div>
          <div className="circle circle-small">
            <div className="orbit-dot"></div>
          </div>
          <div className="brand-center">
            <h2 className="brand-logo">RUNN</h2>
            <span className="brand-tagline">UNSTOPPABLE YOU</span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;500;700&display=swap');

        .join-section {
          background-color: #FF6B00;
          color: white;
          padding: 60px 30px;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .join-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 40px;
        }

        .content-side { flex: 1; max-width: 500px; }

        .top-badge {
          background: rgba(255, 255, 255, 0.15);
          display: inline-block;
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 10px;
          font-weight: 700;
          margin-bottom: 18px;
          letter-spacing: 1.2px;
          backdrop-filter: blur(4px);
        }

        .join-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 64px;
          line-height: 0.9;
          font-weight: 900;
          margin: 0 0 18px 0;
          text-transform: uppercase;
        }

        .join-description {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 28px;
          opacity: 0.9;
          max-width: 90%;
        }

        .subscription-box {
          display: flex;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          padding: 6px;
          margin-bottom: 36px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 450px;
        }

        .email-input {
          background: transparent;
          border: none;
          color: white;
          flex: 1;
          padding: 10px 16px;
          font-size: 14px;
          outline: none;
        }

        .email-input::placeholder { color: rgba(255, 255, 255, 0.5); }

        .subscribe-btn {
          background: white;
          color: #FF6B00;
          border: none;
          padding: 10px 24px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .subscribe-btn:hover { background: #f0f0f0; }

        .stats-row {
          display: flex;
          gap: 32px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .icon-wrapper {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-text { display: flex; flex-direction: column; }

        .stat-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 900;
          line-height: 1;
        }

        .stat-label {
          font-size: 10px;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .visual-side {
          flex: 1;
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle { position: absolute; border: 1px dashed rgba(255, 255, 255, 0.3); border-radius: 50%; }
        .circle-large { width: 400px; height: 400px; }
        .circle-medium { width: 300px; height: 300px; }
        .circle-small { width: 200px; height: 200px; animation: spin 30s linear infinite; }

        .orbit-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          top: -6px;
          left: 50%;
          box-shadow: 0 0 12px rgba(255,255,255,0.6);
        }

        .brand-center { text-align: center; z-index: 2; }

        .brand-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 60px;
          font-weight: 900;
          margin: 0;
          letter-spacing: 3px;
        }

        .brand-tagline {
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 500;
          opacity: 0.8;
          display: block;
          margin-top: -8px;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .join-container { flex-direction: column; text-align: center; }
          .content-side { max-width: 100%; display: flex; flex-direction: column; align-items: center; }
          .stats-row { justify-content: center; gap: 24px; }
          .stat-item { align-items: center; }
          .visual-side { display: none; }
        }
      `}</style>
    </section>
  );
};

export default CtaSection;
