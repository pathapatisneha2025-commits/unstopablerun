import React from "react";

export default function FeaturedCollections() {
  const collections = [
    {
      tag: "PERFORMANCE GEAR",
      title: "MEN",
      subtitle: "Engineered for the modern athlete",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
    },
    {
      tag: "ATHLETIC APPAREL",
      title: "WOMEN",
      subtitle: "Power meets elegance",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
    },
    {
      tag: "ESSENTIAL GEAR",
      title: "ACCESSORIES",
      subtitle: "Complete your setup",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1400&q=80",
      active: true,
    },
  ];

  return (
    <>
      <section className="collections">

        {/* HEADER */}
        <div className="collections-header">
          <div>
            <span className="pill">SHOP BY COLLECTION</span>
            <h2>
              FEATURED <br />
              <span>COLLECTIONS</span>
            </h2>
          </div>

          <a href="/shop" className="view-all">
            VIEW ALL →
          </a>
        </div>

        {/* GRID */}
        <div className="grid">
          {collections.map((item, i) => (
            <div
              key={i}
              className={`card ${item.active ? "active" : ""}`}
            >
              <img src={item.image} alt={item.title} />
              <div className="overlay" />

              <div className="info">
                <span className="badge">{item.tag}</span>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
                <span className="explore">
                  EXPLORE <span>↗</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .collections {
          padding: 90px 6%;
          background: #fff;
        }

        /* HEADER */
        .collections-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 60px;
        }

        .pill {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(255,106,0,0.12);
          color: #ff6a00;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .collections-header h2 {
          font-size: 64px;
          font-weight: 900;
          line-height: 1;
          color: #111;
        }

        .collections-header h2 span {
          color: #ff6a00;
        }

        .view-all {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #111;
          text-decoration: none;
        }

        .view-all:hover {
          color: #ff6a00;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        /* CARD */
        .card {
          position: relative;
          height: 480px;
          border-radius: 28px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          transition: transform 0.4s ease;
        }

        .card:hover {
          transform: translateY(-6px);
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.05);
        }

        /* ACTIVE ORANGE BORDER */
        .card.active {
          outline: 4px solid #ff6a00;
          outline-offset: -4px;
        }

        /* OVERLAY */
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.85),
            rgba(0,0,0,0.45),
            rgba(0,0,0,0)
          );
        }

        /* CONTENT */
        .info {
          position: absolute;
          bottom: 34px;
          left: 28px;
          right: 28px;
          color: #fff;
          z-index: 2;
        }

        .badge {
          display: inline-block;
          background: #ff6a00;
          color: #fff;
          padding: 7px 16px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .info h2 {
          font-size: 44px;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .info p {
          font-size: 14px;
          opacity: 0.85;
          margin-bottom: 18px;
        }

        .explore {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #fff;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.3s ease;
        }

        .card:hover .explore {
          color: #ff6a00;
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .collections-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .collections-header h2 {
            font-size: 48px;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
