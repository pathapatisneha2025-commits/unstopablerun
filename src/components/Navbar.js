import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuSearch, LuHeart, LuUser, LuShoppingBag } from "react-icons/lu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  const links = [
    { path: "/", label: "HOME" },
    { path: "/shop", label: "SHOP" },
    { path: "/activitypage", label: "ACTIVITIES" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        🔥 FREE SHIPPING ON ORDERS OVER $100 | USE CODE: UNSTOPPABLE
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/companylogo.png" alt="RUNN" className="logo" />
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Center Links */}
        <ul className={`navbar-center ${menuOpen ? "show" : ""}`}>
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                onClick={handleLinkClick}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="navbar-right">
          <LuSearch />
          <LuHeart />
          <LuUser />
          <div className="cart">
            <LuShoppingBag />
            <span>0</span>
          </div>
        </div>
      </nav>

      {/* STYLES */}
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; font-family: Arial, sans-serif; }

        .top-bar {
          background:#ff6a00;
          color:#fff;
          text-align:center;
          padding:10px;
          font-size:14px;
          font-weight:600;
        }

        .navbar {
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:14px 40px;
          background:#fff;
          box-shadow:0 2px 10px rgba(0,0,0,0.05);
          position:relative;
          z-index: 1000; /* Ensure it's above content */
        }

.logo { 
  height: 100px; /* increased from 55px */
  width: auto;  /* maintain aspect ratio */
}

        .navbar-center {
          list-style:none;
          display:flex;
          gap:28px;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }

        .navbar-center li a {
          text-decoration:none;
          color:#111;
          font-weight:600;
          font-size:14px;
          transition: color 0.3s;
        }

        .navbar-center li a:hover,
        .active-link { color:#ff6a00; }

        .navbar-right {
          display:flex;
          gap:18px;
          align-items:center;
          font-size:20px;
        }

        .cart { position:relative; }
        .cart span {
          position:absolute;
          top:-6px;
          right:-8px;
          background:#ff6a00;
          color:#fff;
          font-size:10px;
          padding:2px 6px;
          border-radius:50%;
        }

        /* Hamburger */
        .hamburger {
          display:none;
          flex-direction:column;
          cursor:pointer;
          gap:5px;
          z-index: 1100; /* above menu */
        }
        .hamburger span {
          width:26px;
          height:3px;
          background:#333;
          border-radius:2px;
          transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.active span:nth-child(2) {
          opacity:0;
        }
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* MOBILE */
        @media (max-width:900px) {
          .hamburger { display:flex; }

          .navbar-center {
            position:absolute;
            top:100%;
            left:0;
            right:0;
            background:#fff;
            flex-direction:column;
            gap:18px;
            padding:20px;
            max-height:0;
            overflow:hidden;
            opacity:0;
            box-shadow:0 8px 20px rgba(0,0,0,0.1);
          }

          .navbar-center.show {
            max-height:500px; /* Enough to show all links */
            opacity:1;
          }

          .navbar-right { display:none; }
        }
      `}</style>
    </>
  );
}
