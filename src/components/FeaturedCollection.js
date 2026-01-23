import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function FeaturedCollections() {
  const collections = [
    {
      id: "men",
      tag: "PERFORMANCE GEAR",
      title: "MEN",
      subtitle: "Engineered for the modern athlete",
      image: "/men.jpeg",
      path: "/shop",
    },
    {
      id: "women",
      tag: "ATHLETIC APPAREL",
      title: "WOMEN",
      subtitle: "Power meets elegance",
      image: "/women.jpeg",
      path: "/shop",
    },
    {
      id: "accessories",
      tag: "ESSENTIAL GEAR",
      title: "ACCESSORIES",
      subtitle: "Complete your setup",
      image: "/Acessories.jpeg", // Ensure this matches your filename exactly!
      path: "/shop",
    },
  ];

  return (
    <>
      <section className="collections">
        {/* Dynamic Orange Mesh Background */}
        <div className="bg-glow" />
        
        <div className="collections-header">
          <div>
            <span className="pill">SHOP BY COLLECTION</span>
            <h2>
              FEATURED <br />
              <span>COLLECTIONS</span>
            </h2>
          </div>

          <Link to="/shop" className="view-all">
            VIEW ALL <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid">
          {collections.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="card"
            >
              <img src={item.image} alt={item.title} />
              <div className="overlay" />

              <div className="info">
                <span className="badge">{item.tag}</span>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
                <span className="explore">
                  EXPLORE <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .collections { 
          position: relative;
          padding: 90px 6%; 
          /* Orange Shade Background */
          background-color: #fffaf5;
          background-image: 
            radial-gradient(at 0% 0%, rgba(255, 106, 0, 0.12) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(255, 165, 0, 0.08) 0px, transparent 50%);
          overflow: hidden;
        }

        .bg-glow {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: rgba(255, 106, 0, 0.05);
          filter: blur(100px);
          border-radius: 50%;
          pointer-events: none;
        }

        .collections-header {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 60px;
          z-index: 1;
        }

        .pill {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(255, 106, 0, 0.1);
          color: #ff6a00;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 16px;
        }

        .collections-header h2 {
          font-size: 64px;
          font-weight: 800;
          line-height: 0.9;
          color: #111;
        }

        .collections-header h2 span { 
          color: #ff6a00;
        }

        .view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #111;
          text-decoration: none;
          transition: color 0.3s;
        }

        .view-all:hover { color: #ff6a00; }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          position: relative;
          z-index: 1;
        }

        .card {
          position: relative;
          height: 520px;
          border-radius: 28px;
          overflow: hidden;
          background: #e5e5e5; /* Light gray fallback so it doesn't look black if image fails */
          transition: transform 0.4s ease;
          text-decoration: none;
        }

        .card:hover { transform: translateY(-10px); }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .card:hover img { transform: scale(1.1); }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.8) 0%,
            rgba(0,0,0,0.2) 60%,
            transparent 100%
          );
        }

        .info {
          position: absolute;
          bottom: 35px;
          left: 30px;
          right: 30px;
          color: #fff;
          z-index: 2;
        }

        .badge {
          display: inline-block;
          background: #ff6a00;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .info h2 { font-size: 42px; font-weight: 800; margin-bottom: 5px; }
        .info p { font-size: 15px; opacity: 0.8; margin-bottom: 20px; }

        .explore {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 800;
          transition: gap 0.3s;
        }

        .card:hover .explore { gap: 12px; color: #ff6a00; }

        @media (max-width: 1000px) {
          .grid { grid-template-columns: 1fr; }
          .card { height: 450px; }
        }
      `}</style>
    </>
  );
}