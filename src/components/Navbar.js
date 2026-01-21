import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuSearch, LuHeart, LuUser, LuShoppingBag, LuLogOut } from "react-icons/lu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Load logged-in user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const userId = user?.id;

  const handleLinkClick = () => setMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setCartCount(0);
    navigate("/register");
  };

  const links = [
    { path: "/", label: "HOME" },
    { path: "/shop", label: "SHOP" },
    { path: "/activitypage", label: "ACTIVITIES" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  // Fetch cart items
  useEffect(() => {
    if (!userId) return;

    const fetchCart = async () => {
      try {
        const res = await fetch(`https://unstopablerundatabase.onrender.com/cart/${userId}`);
        const data = await res.json();
        if (res.ok && data.items) {
          const count = data.items.reduce((acc, item) => acc + item.quantity, 0);
          setCartCount(count);
        }
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchCart();
    const interval = setInterval(fetchCart, 30000);
    return () => clearInterval(interval);
  }, [userId]);

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
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      <ul className={`navbar-center ${menuOpen ? "show" : ""}`}>
  {links.map((link, i) => (
    <li key={i}>
      <Link
        to={link.path}
        onClick={handleLinkClick} // closes hamburger menu on click
        className="nav-link" // optional class for styling
      >
        {link.label}
      </Link>
    </li>
  ))}
</ul>


        {/* Right Icons */}
        <div className="navbar-right">
          <LuSearch />
          <LuHeart />

          {/* Desktop User Dropdown */}
          {user && (
            <div className="user-dropdown" onClick={() => setUserMenuOpen(!userMenuOpen)}>
              <div className="user-box">
                <LuUser />
                <span className="username">{user.name}</span>
              </div>
              {userMenuOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile" onClick={handleLinkClick}>Profile</Link>
                  <Link to="/orders" onClick={handleLinkClick}>My Orders</Link>
                  <div className="logout-btn" onClick={handleLogout}>
                    Logout <LuLogOut />
                  </div>
                </div>
              )}
            </div>
          )}

          {!user && (
            <Link to="/login" style={{ color: "inherit" }}>
              <LuUser title="Login" />
            </Link>
          )}

          <Link to="/cart" className="cart">
            <LuShoppingBag />
            {cartCount > 0 && <span>{cartCount}</span>}
          </Link>
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
          z-index:1000;
        }

        .logo { height:50px; }

        .navbar-center {
          list-style:none;
          display:flex;
          gap:28px;
        }

        .navbar-center li a {
          text-decoration:none;
          color:#111;
          font-weight:600;
          font-size:14px;
        }

        .active-link { color:#ff6a00; }

        .navbar-right {
          display:flex;
          gap:18px;
          align-items:center;
          font-size:20px;
          position: relative;
        }
.nav-link {
  text-decoration: none;
  color: #111;
  font-weight: 600;
  font-size: 14px;
}

.nav-link:hover {
  color: #ff6a00;
}

        .cart {
          position:relative;
          color:inherit;
          text-decoration:none;
        }

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

        .hamburger {
          display:none;
          flex-direction:column;
          gap:5px;
          cursor:pointer;
        }
        .hamburger span {
          width:26px;
          height:3px;
          background:#333;
          transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.active span:nth-child(2) { opacity:0; }
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* USER DROPDOWN */
        .user-dropdown, .user-dropdown-mobile {
          position: relative;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .user-box {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }

        .dropdown-menu, .dropdown-menu-mobile {
          position: absolute;
          top: 100%;
          right: 0;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-radius: 6px;
          overflow: hidden;
          min-width: 140px;
          display: flex;
          flex-direction: column;
          margin-top: 8px;
          z-index: 2000;
        }

        .dropdown-menu a, .logout-btn, .dropdown-menu-mobile a, .dropdown-menu-mobile .logout-btn {
          padding: 10px 16px;
          font-size: 14px;
          color: #111;
          text-decoration: none;
          transition: background 0.2s;
        }

        .dropdown-menu a:hover, .logout-btn:hover, .dropdown-menu-mobile a:hover, .dropdown-menu-mobile .logout-btn:hover {
          background: #ff6a00;
          color: #fff;
        }

        .logout-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

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
            transition: all 0.3s ease;
            z-index:1500;
          }
          .navbar-center.show { max-height:500px; opacity:1; }

          .navbar-right { display:flex; gap:12px; font-size:18px; }

          .user-dropdown { display:none; }
        }
      `}</style>
    </>
  );
}
