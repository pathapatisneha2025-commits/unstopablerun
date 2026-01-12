import React from "react";
import { Zap, Shield, Leaf, Heart, Truck, Award } from "lucide-react";

const features = [
  {
    title: "PERFORMANCE FIRST",
    desc: "Engineered for peak athletic performance with cutting-edge technology.",
    icon: <Zap size={24} />,
  },
  {
    title: "PREMIUM QUALITY",
    desc: "Crafted from the finest materials for durability that lasts.",
    icon: <Shield size={24} />,
  },
  {
    title: "SUSTAINABLE",
    desc: "Eco-conscious production with recycled and sustainable materials.",
    icon: <Leaf size={24} />,
  },
  {
    title: "ATHLETE TESTED",
    desc: "Designed and tested by professional athletes worldwide.",
    icon: <Heart size={24} />,
  },
  {
    title: "FREE SHIPPING",
    desc: "Complimentary shipping on all orders over $100.",
    icon: <Truck size={24} />,
  },
  {
    title: "LIFETIME WARRANTY",
    desc: "We stand behind our products with a lifetime guarantee.",
    icon: <Award size={24} />,
  },
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
          min-height: 100vh;
          display: flex;
          align-items: center;
          background-color: #ffffff;
          font-family: 'Inter', sans-serif;
          padding: 80px 0; /* Vertical padding only */
        }

        .full-width-container {
          width: 100%;
          padding: 0 5%; /* Provides the 5% margin seen on the left/right in the screenshot */
        }

        .header {
          text-align: center;
          margin-bottom: 80px;
        }

        .badge {
          display: inline-block;
          background-color: #FFF3EA;
          color: #FF6B00;
          padding: 10px 24px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }

        .title {
          font-size: clamp(40px, 8vw, 72px); /* Bold, massive title to match screenshot */
          font-weight: 900;
          color: #111111;
          margin: 0 0 24px 0;
          letter-spacing: -3px;
          line-height: 1;
        }

        .highlight {
          color: #FF6B00;
        }

        .subtitle {
          font-size: 20px;
          color: #6B7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 400;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px; /* Wider gap for the premium full-page look */
        }

        .feature-card {
          background-color: #F9FAFB;
          border-radius: 48px; /* Extra rounded corners like the screenshot */
          aspect-ratio: 1 / 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          border: 1px solid #F3F4F6;
        }

        .feature-card:hover {
          background-color: #ffffff;
          transform: translateY(-15px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.07);
          border-color: #FFE5D3;
        }

        .card-content {
          padding: 12%; 
          text-align: left;
        }

        .icon-box {
          width: 64px;
          height: 64px;
          background-color: #FFF3EA;
          color: #FF6B00;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          margin-bottom: 32px;
        }

        .feature-card h3 {
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 900;
          color: #111111;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        .feature-card p {
          font-size: clamp(14px, 1.2vw, 17px);
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive Adjustments */
        @media (max-width: 1200px) {
          .features-grid {
            gap: 20px;
          }
          .full-width-container {
            padding: 0 40px;
          }
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          .feature-card {
            aspect-ratio: 1 / 1;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}