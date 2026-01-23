import React, { useEffect, useState } from "react";

export default function VideoInstagramFeed() {
  const [feedVideos, setFeedVideos] = useState([]);

  // Fetch feed from backend
  const fetchFeed = async () => {
    try {
      const res = await fetch("https://unstopablerundatabse.onrender.com/feed/all");
      const data = await res.json();
      setFeedVideos(data);
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className="instagram-feed-section">
      <h2>Watch Our Clips</h2>
      <div className="feed-container">
        <div className="feed-track">
          {feedVideos.concat(feedVideos).map((item, index) => (
            <div key={index} className="feed-item">
              {item.type === "video" ? (
                <video src={item.src} autoPlay muted loop />
              ) : (
                <img src={item.src} alt="feed" />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .instagram-feed-section {
          background-color: #fffaf5;
          padding: 40px 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .instagram-feed-section h2 {
          color: #ff6a00;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .feed-container {
          overflow: hidden;
          position: relative;
        }

        .feed-track {
          display: flex;
          gap: 10px;
          animation: scroll 20s linear infinite;
        }

        .feed-item {
          flex: 0 0 auto;
          width: 200px;
          height: 200px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #ff6a00;
        }

        .feed-item video,
        .feed-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .feed-item { width: 150px; height: 150px; }
        }
      `}</style>
    </div>
  );
}
