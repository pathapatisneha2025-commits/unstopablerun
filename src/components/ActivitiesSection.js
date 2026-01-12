import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    title: "RUNNING",
    subtitle: "Built for speed and endurance",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
    link: "/activities/running",
  },
  {
    title: "TRAINING",
    subtitle: "Power through every workout",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
    link: "/activities/training",
  },
  {
    title: "LIFESTYLE",
    subtitle: "Athletic comfort, everyday style",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80",
    link: "/activities/lifestyle",
  },
  {
    title: "YOGA",
    subtitle: "Flow with flexibility and ease",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=1400&q=80",
    link: "/activities/yoga",
  },
];

export default function ActivitiesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap');

        .activities-section {
          background-color: #f3f3f3; /* Matches the light gray background */
          padding: 100px 24px;
          font-family: 'Inter', sans-serif;
        }

        .header-container {
          text-align: center;
          margin-bottom: 80px;
        }

        .flow-badge {
          display: inline-block;
          background-color: #fcece0;
          color: #ff6b00;
          padding: 8px 24px;
          border-radius: 50px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }

        .main-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(40px, 10vw, 84px);
          font-weight: 900;
          line-height: 0.95;
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
          gap: 20px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .activity-card {
          position: relative;
          height: 580px;
          text-decoration: none;
          display: block;
        }

        .img-container {
          height: 100%;
          width: 100%;
          border-radius: 32px;
          overflow: hidden;
        }

        .img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .white-card {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: white;
          padding: 30px;
          border-radius: 24px;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .white-card h3 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 10px 0;
          letter-spacing: -0.5px;
        }

        .white-card p {
          font-size: 15px;
          color: #666;
          margin: 0 0 25px 0;
          line-height: 1.4;
          max-width: 80%;
        }

        .explore-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #ff6b00;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 1px;
        }

        @media (max-width: 1200px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .cards-grid { grid-template-columns: 1fr; }
          .main-title { font-size: 50px; }
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
                  EXPLORE <ArrowUpRight size={18} strokeWidth={3} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}