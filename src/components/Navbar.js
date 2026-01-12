import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LuSearch,
  LuHeart,
  LuUser,
  LuShoppingBag,
  LuMenu,
  LuX,
} from "react-icons/lu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 900) {
      setOpen(false);
    }
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        🔥 FREE SHIPPING ON ORDERS OVER $100 | USE CODE: UNSTOPPABLE
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src="/companylogo.png" alt="RUNN" />
        </Link>

        {/* MENU */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          {["/", "/shop", "/activitypage", "/about", "/contact"].map(
            (path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-link" : ""
                  }
                >
                  {["HOME", "SHOP", "ACTIVITIES", "ABOUT", "CONTACT"][i]}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* ICONS */}
        <div className="nav-icons">
          <LuSearch />
          <LuHeart />
          <LuUser />
          <div className="cart">
            <LuShoppingBag />
            <span>0</span>
          </div>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <LuX /> : <LuMenu />}
        </div>
      </nav>

      {/* STYLES */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* TOP BAR */
        .top-bar {
          background: #ff6a00;
          color: #fff;
          text-align: center;
          padding: 10px;
          font-size: 14px;
          font-weight: 600;
        }

        /* NAVBAR */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          display: grid;
          grid-template-columns: auto 1fr auto auto; /* logo | links | icons | hamburger */
          align-items: center;
          padding: 18px 60px;
          border-bottom: 1px solid #eee;
        }

        .logo img {
          width: 80px;
        }

        /* MENU */
        .nav-links {
          display: flex;
          justify-content: center;
          gap: 36px;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: #111;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
          padding-bottom: 6px;
          position: relative;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #ff6a00;
          transition: 0.3s;
        }

        .nav-links a:hover::after,
        .active-link::after {
          width: 100%;
        }

        .active-link {
          color: #ff6a00;
        }

        /* ICONS */
        .nav-icons {
          display: flex;
          gap: 22px;
          font-size: 20px;
          align-items: center;
        }

        .cart {
          position: relative;
        }

        .cart span {
          position: absolute;
          top: -6px;
          right: -8px;
          background: #ff6a00;
          color: #fff;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 50%;
        }

        /* HAMBURGER */
        .hamburger {
          display: none;
          font-size: 26px;
          cursor: pointer;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .navbar {
            grid-template-columns: auto auto; /* logo | hamburger */
            padding: 16px 24px;
          }

          .nav-links {
            position: absolute;
            top: 72px; /* below navbar */
            left: 0;
            width: 100%;
            background: #fff;
            flex-direction: column;
            gap: 24px;
            padding: 30px 0;
            display: none;
            box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          }

          .nav-links.active {
            display: flex;
          }

          .nav-icons {
            display: none;
          }

          .hamburger {
            display: block;
            justify-self: end; /* move to right side */
          }
        }
      `}</style>
    </>
  );
}
