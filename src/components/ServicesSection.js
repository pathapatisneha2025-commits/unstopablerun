import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Added Link
import { FiTruck, FiPackage, FiRefreshCw } from "react-icons/fi";

const iconMap = {
  FiTruck: FiTruck,
  FiPackage: FiPackage,
  FiRefreshCw: FiRefreshCw,
};

export default function ServiceFeatures() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(
          "https://unstopablerundatabse.onrender.com/services/all"
        );
        const data = await res.json();
        setFeatures(data);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };
    fetchServices();
  }, []);

  return (
    <section className="features-section">
      <style>{cssStyles}</style>
      {/* Background Glow Effect to match collections */}
      <div className="bg-glow" />
      
      <div className="features-container">
        {features.map((item) => {
          const IconComponent = iconMap[item.icon_name];
          return (
            /* Wrapped card in Link to enable page navigation */
            <Link key={item.id} to={item.path || "/services"} className="feature-card-link">
              <div className="feature-card">
                <div className="icon-wrapper">
                  {IconComponent && <IconComponent />}
                </div>
                <div className="feature-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

const cssStyles = `
.features-section {
  position: relative;
  width: 100%;
  padding: 60px 0;
  /* Matching your orange mesh gradient background */
  background-color: #fffaf5;
  background-image: 
    radial-gradient(at 0% 0%, rgba(255, 106, 0, 0.12) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(255, 165, 0, 0.08) 0px, transparent 50%);
  overflow: hidden;
  margin: 0;
}

.bg-glow {
  position: absolute;
  top: -10%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: rgba(255, 106, 0, 0.05);
  filter: blur(80px);
  border-radius: 50%;
  pointer-events: none;
}

.features-container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6%;
  gap: 24px;
}

.feature-card-link {
  text-decoration: none;
  flex: 1;
}

.feature-card {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px); /* Modern glass effect */
  padding: 20px 30px;
  border-radius: 20px;
  gap: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  border: 1px solid rgba(255, 106, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-8px);
  background: #ffffff;
  border-color: #ff6a00;
  box-shadow: 0 12px 30px rgba(255, 106, 0, 0.15);
}

.icon-wrapper {
  font-size: 1.8rem;
  color: #ff6a00;
  background: rgba(255, 106, 0, 0.08);
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.feature-card:hover .icon-wrapper {
  background: #ff6a00;
  color: #ffffff;
}

.feature-content h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  color: #111;
  white-space: nowrap;
}

.feature-content p {
  margin: 4px 0 0;
  font-size: 0.85rem;
  color: #666;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .features-container {
    flex-direction: column;
    padding: 0 20px;
  }

  .feature-card-link {
    width: 100%;
    max-width: 400px;
  }
}
`;