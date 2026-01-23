import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ActivitiesSection() {
  const [activities, setActivities] = useState([]);
  const scrollRef = useRef();

  // Fetch activities from backend
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch(
          "https://unstopablerundatabse.onrender.com/activities/all"
        );
        const data = await res.json();
        setActivities(data);
      } catch (err) {
        console.error("Error fetching activities:", err);
      }
    };
    fetchActivities();
  }, []);

  // Duplicate activities for seamless scroll
  const scrollingActivities = [...activities, ...activities];

  // Scroll buttons
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth / 2;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap');

        .activities-section { 
          background-color: #fffaf5;
          padding: 80px 24px; 
          font-family: 'Inter', sans-serif; 
        }
        .header-wrapper {
          max-width: 1300px;
          margin: 0 auto 40px auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-container { 
          text-align: left; 
        }
        .flow-badge { 
          display: inline-block; 
          background-color: #fcece0; 
          color: #ff6b00; 
          padding: 6px 20px; 
          border-radius: 50px; 
          font-family: 'Barlow Condensed', sans-serif; 
          font-size: 12px; 
          font-weight: 800; 
          margin-bottom: 16px; 
          letter-spacing: 1.2px; 
        }
        .main-title { 
          font-family: 'Barlow Condensed', sans-serif; 
          font-size: clamp(32px, 8vw, 60px); 
          font-weight: 900; 
          color: #1a1a1a; 
          margin: 0; 
          text-transform: uppercase; 
        }
        .orange-text { color: #ff6b00; }

        .scroll-buttons {
          display: flex;
          gap: 10px;
        }
        .scroll-button {
          background: #ff6b00; 
          border: none; 
          color: white; 
          width: 40px; 
          height: 40px; 
          border-radius: 50%; 
          cursor: pointer; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          transition: background 0.2s;
        }
        .scroll-button:hover { background: #e65b00; }

        .scroll-container {
          overflow: hidden;
          position: relative;
        }

        .scroll-track {
          display: flex;
          width: fit-content;
          animation: scrollLeft 30s linear infinite;
        }

        .activity-card { 
          position: relative; 
          height: 520px; 
          width: 300px;
          flex-shrink: 0;
          margin-right: 16px;
          text-decoration: none; 
          display: block; 
        }
        .img-container { 
          height: 100%; 
          width: 100%; 
          border-radius: 24px; 
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
          padding: 24px; 
          border-radius: 20px; 
          min-height: 140px; 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
        }
        .white-card h3 { 
          font-family: 'Barlow Condensed', sans-serif; 
          font-size: 22px; 
          font-weight: 800; 
          color: #1a1a1a; 
          margin: 0 0 6px 0; 
          letter-spacing: -0.3px; 
        }
        .white-card p { 
          font-size: 13px; 
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
          font-size: 14px; 
          letter-spacing: 0.8px; 
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 1024px) {
          .activity-card { width: 250px; height: 450px; }
        }
        @media (max-width: 640px) {
          .activity-card { width: 200px; height: 380px; }
        }
      `}</style>

      <section className="activities-section">
        <div className="header-wrapper">
          <div className="header-container">
            <span className="flow-badge">FIND YOUR FLOW</span>
            <h2 className="main-title">
              SHOP BY <span className="orange-text">ACTIVITY</span>
            </h2>
          </div>

          <div className="scroll-buttons">
            <button className="scroll-button" onClick={() => scroll("left")}>
              <ChevronLeft size={20} />
            </button>
            <button className="scroll-button" onClick={() => scroll("right")}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="scroll-container" ref={scrollRef}>
          <div className="scroll-track">
            {scrollingActivities.map((item, index) => (
              <Link
                to={`/${item.link}`}
                key={index}
                className="activity-card"
              >
                <div className="img-container">
                  <img src={item.image_url} alt={item.title} />
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
        </div>
      </section>
    </>
  );
}
