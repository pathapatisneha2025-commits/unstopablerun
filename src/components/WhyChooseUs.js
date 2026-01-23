import React from "react";
import { Zap, Shield, Leaf, Heart, Truck, Award } from "lucide-react";

const features = [
  { title: "PERFORMANCE FIRST", desc: "Engineered for peak athletic performance with cutting-edge technology.", icon: <Zap size={24} /> },
  { title: "PREMIUM QUALITY", desc: "Crafted from the finest materials for durability that lasts.", icon: <Shield size={24} /> },
  { title: "SUSTAINABLE", desc: "Eco-conscious production with recycled and sustainable materials.", icon: <Leaf size={24} /> },
  { title: "ATHLETE TESTED", desc: "Designed and tested by professional athletes worldwide.", icon: <Heart size={24} /> },
  { title: "FREE SHIPPING", desc: "Complimentary shipping on all orders over $100.", icon: <Truck size={24} /> },
  { title: "LIFETIME WARRANTY", desc: "We stand behind our products with a lifetime guarantee.", icon: <Award size={24} /> },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="full-width-container">
        {/* Header Section */}
        <div className="header">
          <span className="badge">THE RUNN DIFFERENCE</span>
          <h2 className="title">
            WHY CHOOSE <span className="highlight">RUNN?</span>
          </h2>
          <p className="subtitle">
            We're not just a brand – we're a movement dedicated to empowering athletes at every level.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="card-content">
                <div className="icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');

        .why-choose-section {
          width: 100%;
          background-color: #fffaf5;
          font-family: 'Inter', sans-serif;
          padding: 60px 10px; /* smaller vertical padding for mobile */
          box-sizing: border-box;
        }

        .full-width-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px; /* prevent overflow on mobile */
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .badge {
          display: inline-block;
          background-color: #FFF3EA;
          color: #FF6B00;
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
        }

        .title {
          font-size: clamp(28px, 6vw, 60px);
          font-weight: 900;
          color: #111111;
          margin: 0 0 16px 0;
          line-height: 1.1;
        }

        .highlight {
          color: #FF6B00;
        }

        .subtitle {
          font-size: clamp(14px, 3vw, 20px);
          color: #6B7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .feature-card {
          background-color: #F9FAFB;
          border-radius: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid #F3F4F6;
          min-height: 250px;
          box-sizing: border-box;
        }

        .feature-card:hover {
          background-color: #ffffff;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-color: #FFE5D3;
        }

        .card-content {
          padding: 20px;
          text-align: left;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          background-color: #FFF3EA;
          color: #FF6B00;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 16px;
        }

        .feature-card h3 {
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 700;
          color: #111111;
          margin-bottom: 8px;
        }

        .feature-card p {
          font-size: clamp(12px, 1.5vw, 16px);
          color: #6B7280;
          line-height: 1.4;
          margin: 0;
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .why-choose-section {
            padding: 40px 8px;
          }
          .features-grid {
            gap: 16px;
          }
          .feature-card {
            min-height: auto;
            border-radius: 24px;
          }
          .card-content {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
