import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    title: "RUNNING",
    subtitle: "Built for speed and endurance",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
    link: "/activitypage",
  },
  {
    title: "TRAINING",
    subtitle: "Power through every workout",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
    link: "/activitypage",
  },
  {
    title: "LIFESTYLE",
    subtitle: "Athletic comfort, everyday style",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80",
    link: "/activitypage",
  },
  {
    title: "YOGA",
    subtitle: "Flow with flexibility and ease",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=1400&q=80",
    link: "/activitypage",
  },
];

export default function ActivitiesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap');

        .activities-section {
          background-color: #f3f3f3;
          padding: 80px 24px; /* Reduced vertical padding */
          font-family: 'Inter', sans-serif;
        }

        .header-container {
          text-align: center;
          margin-bottom: 60px; /* Reduced margin */
        }

        .flow-badge {
          display: inline-block;
          background-color: #fcece0;
          color: #ff6b00;
          padding: 6px 20px; /* Slimmed down badge */
          border-radius: 50px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; /* Reduced font size */
          font-weight: 800;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
        }

        .main-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(32px, 8vw, 60px); /* Reduced from 84px */
          font-weight: 900;
          line-height: 1;
          color: #1a1a1a;
          margin: 0;
          text-transform: uppercase;
        }

        .orange-text {
          color: #ff6b00;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px; /* Slightly tighter gap */
          max-width: 1300px; /* Reduced max-width for better focus */
          margin: 0 auto;
        }

        .activity-card {
          position: relative;
          height: 520px; /* Slightly reduced height */
          text-decoration: none;
          display: block;
        }

        .img-container {
          height: 100%;
          width: 100%;
          border-radius: 24px; /* Slightly smaller radius */
          overflow: hidden;
        }

        .img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .white-card {
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
          background: white;
          padding: 24px; /* Reduced padding */
          border-radius: 20px;
          min-height: 140px; /* Reduced height */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .white-card h3 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px; /* Reduced from 28px */
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 6px 0;
          letter-spacing: -0.3px;
        }

        .white-card p {
          font-size: 13px; /* Reduced from 15px */
          color: #666;
          margin: 0 0 16px 0;
          line-height: 1.4;
          max-width: 90%;
        }

        .explore-link {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #ff6b00;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 14px; /* Reduced from 16px */
          letter-spacing: 0.8px;
        }

        @media (max-width: 1200px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .cards-grid { grid-template-columns: 1fr; }
          .main-title { font-size: 40px; }
          .activity-card { height: 450px; }
        }
      `}</style>

      <section className="activities-section">
        <div className="header-container">
          <span className="flow-badge">FIND YOUR FLOW</span>
          <h2 className="main-title">
            SHOP BY <span className="orange-text">ACTIVITY</span>
          </h2>
        </div>

        <div className="cards-grid">
          {activities.map((item, index) => (
            <Link to={item.link} key={index} className="activity-card">
              <div className="img-container">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="white-card">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <div className="explore-link">
                  EXPLORE <ArrowUpRight size={16} strokeWidth={3} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}