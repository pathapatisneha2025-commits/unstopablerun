import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuSearch, LuHeart, LuUser, LuShoppingBag, LuLogOut } from "react-icons/lu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navigate = useNavigate();

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
        {/* MOBILE: Hamburger left & Logo center */}
        <div className="navbar-mobile">
          <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Link to="/" className="logo-mobile" onClick={handleLinkClick}>
            <img src="/companylogo.png" alt="RUNN" />
          </Link>
        </div>

        {/* NAV LINKS */}
        <ul className={`navbar-center ${menuOpen ? "show" : ""}`}>
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.path} onClick={handleLinkClick} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT ICONS */}
        <div className="navbar-right">
          <LuSearch />
          <LuHeart />

          {user ? (
            <div className="user-dropdown" onClick={() => setUserMenuOpen(!userMenuOpen)}>
              <div className="user-box">
                <LuUser />
                <span className="username">{user.name}</span>
              </div>
              {userMenuOpen && (
                <div className="dropdown-menu">
                  <Link to="/orders" onClick={handleLinkClick}>My Orders</Link>
                  <div className="logout-btn" onClick={handleLogout}>
                    Logout <LuLogOut />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/register">
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
          background:#000;
          box-shadow:0 2px 10px rgba(0,0,0,0.3);
          position:relative;
          z-index:1000;
        }

/* Desktop logo */
.logo img { 
  height: 80px;   /* taller */
  width: 200px;   /* wider */
  object-fit: contain; /* keeps aspect ratio without distortion */
  transition: all 0.3s ease;
}

/* Mobile logo */
.logo-mobile img { 
  height: 60px;   /* smaller for mobile */
  width: 150px;   /* narrower for mobile */
  object-fit: contain;
  transition: all 0.3s ease;
}

        .navbar-center {
          list-style:none;
          display:flex;
          gap:28px;
        }

        .nav-link {
          text-decoration:none;
          color:#fff;
          font-weight:600;
          font-size:16px;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color:#ff6a00; }

        .navbar-right {
          display:flex;
          gap:18px;
          align-items:center;
          font-size:22px;
          color:#fff;
        }

        .cart { position:relative; color:inherit; text-decoration:none; }
        .cart span {
          position:absolute;
          top:-6px;
          right:-8px;
          background:#ff6a00;
          color:#fff;
          font-size:12px;
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
          width:28px;
          height:3px;
          background:#fff;
          transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.active span:nth-child(2) { opacity:0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        .user-dropdown { position: relative; display: flex; flex-direction: column; cursor: pointer; }
        .user-box { display:flex; align-items:center; gap:6px; font-weight:600; color:#fff; }
        .dropdown-menu { 
          position:absolute; top:100%; right:0; background:#111;
          box-shadow:0 4px 12px rgba(0,0,0,0.5);
          border-radius:6px; overflow:hidden; min-width:140px; display:flex; flex-direction:column; margin-top:8px; z-index:2000;
        }
        .dropdown-menu a, .logout-btn {
          padding:10px 16px; font-size:14px; color:#fff; text-decoration:none; transition: background 0.2s;
        }
        .dropdown-menu a:hover, .logout-btn:hover { background:#ff6a00; color:#fff; }
        .logout-btn { display:flex; justify-content:space-between; align-items:center; cursor:pointer; }

        /* MOBILE RESPONSIVE */
        @media (max-width:900px) {
          .hamburger { display:flex; }

          .navbar-mobile {
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            position:relative;
          }
          .navbar-mobile .hamburger { position:absolute; left:20px; }
          .logo-mobile img { height:60px; } /* Slightly smaller for mobile */
          .navbar-center {
            position:absolute; top:100%; left:0; right:0;
            background:#000; flex-direction:column; gap:18px;
            padding:20px; max-height:0; overflow:hidden; opacity:0;
            transition: all 0.3s ease; z-index:1500;
          }
          .navbar-center.show { max-height:500px; opacity:1; }
          .navbar-right { display:flex; gap:12px; font-size:20px; }
          .user-dropdown { display:none; }
        }
      `}</style>
    </>
  );
}
