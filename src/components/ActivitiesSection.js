import React, { useRef, useState, useEffect } from "react";
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
          position: relative;
        }
        .header-container { 
          text-align: center; 
          margin-bottom: 60px; 
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
        .cards-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 16px; 
          max-width: 1300px; 
          margin: 0 auto; 
          overflow-x: auto;
          scroll-behavior: smooth;
        }
        .activity-card { 
          position: relative; 
          height: 520px; 
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

        /* Arrow buttons on right side */
        /* New wrapper to contain title and arrows */
.header-wrapper {
  max-width: 1300px;
  margin: 0 auto 40px auto;
  position: relative; /* Anchor for absolute positioning */
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container { 
  text-align: center; 
}

/* Arrows moved to top right */
.arrow-buttons {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row; /* Horizontal layout */
  gap: 10px;
}

.arrow-button { 
  background: #ff6b00; 
  border: none; 
  color: white; 
  width: 40px;  /* Fixed width/height for perfect circles */
  height: 40px;
  border-radius: 50%; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  transition: background 0.2s;
}

.arrow-button:hover { background: #e65b00; }

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
  {/* NEW HEADER WRAPPER */}
  <div className="header-wrapper">
    <div className="header-container">
      <span className="flow-badge">FIND YOUR FLOW</span>
      <h2 className="main-title">SHOP BY <span className="orange-text">ACTIVITY</span></h2>
    </div>

    {/* Arrows are now inside the wrapper for top-right positioning */}
    <div className="arrow-buttons">
      <button className="arrow-button" onClick={() => scroll("left")}>
        <ChevronLeft size={20} />
      </button>
      <button className="arrow-button" onClick={() => scroll("right")}>
        <ChevronRight size={20} />
      </button>
    </div>
  </div>

  {/* Grid remains the same */}
  <div className="cards-grid" ref={scrollRef}>
    {activities.map((item) => (
      <Link to={`/activity/${item.link}`} key={item.id} className="activity-card">
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
</section>
      
    </>
  );
}
