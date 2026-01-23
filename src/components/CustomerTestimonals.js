import React, { useEffect, useRef, useState } from "react";

export default function VideoInstagramFeed() {
  const [feedVideos, setFeedVideos] = useState([]);
  const feedRef = useRef(null);
  const videoRefs = useRef([]);

  // Fetch feed data
  useEffect(() => {
    fetch("https://unstopablerundatabse.onrender.com/feed/all")
      .then((res) => res.json())
      .then((data) => setFeedVideos(data))
      .catch((err) => console.error(err));
  }, []);

  // Auto scroll animation
  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per frame

    const animate = () => {
      if (!feed) return;
      scrollAmount += speed;
      if (scrollAmount >= feed.scrollWidth / 2) {
        scrollAmount = 0; // reset for infinite loop
      }
      feed.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };

    animate();
  }, [feedVideos]);

  // Play/pause a video safely
  const playVideo = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // Pause all other videos
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });

    // Toggle current
    video.paused ? video.play().catch(() => {}) : video.pause();
  };

  return (
    <div className="instagram-feed-section">
      <h2>Watch Our Clips</h2>

      <div className="feed-container" ref={feedRef}>
        <div className="feed-track">
          {/* Render feed twice for continuous scroll */}
          {[...feedVideos, ...feedVideos].map((item, index) => (
            <div key={index} className="feed-item">
              {item.type === "video" ? (
                <video
                  ref={(el) => {
                    // Only save refs for the original feedVideos to avoid duplicates
                    if (index < feedVideos.length) videoRefs.current[index] = el;
                  }}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onClick={() => playVideo(index % feedVideos.length)}
                  onMouseEnter={() =>
                    window.innerWidth > 768 &&
                    playVideo(index % feedVideos.length)
                  }
                  onMouseLeave={() =>
                    window.innerWidth > 768 &&
                    videoRefs.current[index % feedVideos.length]?.pause()
                  }
                />
              ) : (
                <img src={item.src} alt="feed" loading="lazy" />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .instagram-feed-section {
          background: #fffaf5;
          padding: 40px 16px;
          text-align: center;
          overflow: hidden;
        }

        h2 {
          color: #ff6a00;
          margin-bottom: 20px;
          font-size: 26px;
        }

        .feed-container {
          overflow-x: hidden;
          white-space: nowrap;
        }

        .feed-track {
          display: flex;
          gap: 14px;
          flex-wrap: nowrap;
        }

        .feed-item {
          width: 180px;
          height: 180px;
          border-radius: 14px;
          overflow: hidden;
          border: 2px solid #ff6a00;
          flex-shrink: 0;
          background: #fff;
        }

        video,
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .feed-item {
            width: 140px;
            height: 140px;
          }

          h2 {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
