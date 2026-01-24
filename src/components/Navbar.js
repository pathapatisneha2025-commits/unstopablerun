import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingBag, LuUser, LuLogOut } from "react-icons/lu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  // Load user or guest
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    let guestId = localStorage.getItem("guestId");

    if (!storedUser && !guestId) {
      guestId = `guest_${Date.now()}`;
      localStorage.setItem("guestId", guestId);
    }

    if (storedUser) {
      setUser(storedUser);
      setUserId(storedUser.id.toString());
    } else {
      setUserId(guestId.toString());
    }
  }, []);

  // Auto-update username if localStorage changes (after login/logout)
  useEffect(() => {
    const handleStorage = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
        setUserId(storedUser.id.toString());
      } else {
        const guestId = localStorage.getItem("guestId") || `guest_${Date.now()}`;
        localStorage.setItem("guestId", guestId);
        setUserId(guestId.toString());
        setUser(null);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Fetch cart count
  useEffect(() => {
    if (!userId) return;

    const fetchCart = async () => {
      try {
        const res = await fetch(`https://unstopablerundatabase.onrender.com/cart/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch cart");

        const data = await res.json();
        // Check if data is array (multiple carts) or single object
        const carts = Array.isArray(data) ? data : [data];
        const totalCount = carts.reduce((total, cart) => {
          const items = Array.isArray(cart.items) ? cart.items : [];
          return total + items.reduce((acc, item) => acc + (item.quantity || 0), 0);
        }, 0);

        setCartCount(totalCount);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
        setCartCount(0);
      }
    };

    fetchCart();
    const interval = setInterval(fetchCart, 30000); // auto-refresh every 30s
    return () => clearInterval(interval);
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    const guestId = localStorage.getItem("guestId") || `guest_${Date.now()}`;
    localStorage.setItem("guestId", guestId);
    setUserId(guestId.toString());
    setCartCount(0);
    setUserMenuOpen(false);
    navigate("/register");
  };

  const links = [
    { path: "/", label: "HOME" },
    { path: "/shop", label: "SHOP" },
    { path: "/activitypage", label: "ACTIVITIES" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <div className="top-bar">🔥 FREE SHIPPING ON ORDERS OVER $100 | USE CODE: UNSTOPPABLE</div>

      <nav className="navbar">
        {/* Logo & Hamburger */}
        <div className="navbar-mobile">
          <Link to="/" className="logo-mobile">
            <img src="/companylogo.png" alt="RUNN" />
          </Link>
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-center ${menuOpen ? "show" : ""}`}>
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="nav-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* User & Cart */}
        <div className="navbar-right">
          <div className="user-dropdown" onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <div className="user-box">
              <LuUser />
              <span>{user ? user.name : "Guest"}</span>
            </div>
            {userMenuOpen && (
              <div className="dropdown-menu">
                {!user ? (
                  <>
                    <Link to="/register" onClick={() => setUserMenuOpen(false)}>
                      Login / Register
                    </Link>
                    <Link to={`/orders/${userId}`} onClick={() => setUserMenuOpen(false)}>
                      My Orders (Guest)
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={`/orders/${userId}`} onClick={() => setUserMenuOpen(false)}>
                      My Orders
                    </Link>
                    <div className="logout-btn" onClick={handleLogout}>
                      Logout <LuLogOut />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          <Link to="/cart" className="cart">
            <LuShoppingBag size={24} />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>

      {/* CSS */}
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; font-family: Arial, sans-serif; }
        .top-bar { background:#ff6a00; color:#fff; text-align:center; padding:10px; font-size:14px; font-weight:600; }
        .navbar { display:flex; align-items:center; justify-content:space-between; padding:14px 40px; background:#000; box-shadow:0 2px 10px rgba(0,0,0,0.3); position:relative; z-index:1000; }
        .logo-mobile img { height:60px; width:auto; }
        .navbar-center { list-style:none; display:flex; gap:28px; }
        .nav-link { text-decoration:none; color:#fff; font-weight:600; font-size:16px; }
        .nav-link:hover { color:#ff6a00; }
        .navbar-right { display:flex; gap:18px; align-items:center; font-size:22px; color:#fff; }
        .cart { position:relative; color:inherit; text-decoration:none; }
        .cart-count { position:absolute; top:-8px; right:-8px; background:white; color:black; font-size:12px; font-weight:700; padding:2px 6px; border-radius:50%; min-width:18px; height:18px; display:flex; align-items:center; justify-content:center; box-shadow:0 0 2px rgba(0,0,0,0.3); z-index:1000; }
        .hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; }
        .hamburger span { width:28px; height:3px; background:#fff; transition: transform 0.3s, opacity 0.3s; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
        .hamburger.active span:nth-child(2) { opacity:0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
        .user-dropdown { position: relative; display: flex; flex-direction: column; cursor: pointer; }
        .user-box { display:flex; align-items:center; gap:6px; font-weight:600; color:#fff; }
        .dropdown-menu { position:absolute; top:100%; right:0; background:#111; box-shadow:0 4px 12px rgba(0,0,0,0.5); border-radius:6px; overflow:hidden; min-width:140px; display:flex; flex-direction:column; margin-top:8px; z-index:2000; }
        .dropdown-menu a, .logout-btn { padding:10px 16px; font-size:14px; color:#fff; text-decoration:none; transition: background 0.2s; }
        .dropdown-menu a:hover, .logout-btn:hover { background:#ff6a00; color:#fff; }
        .logout-btn { display:flex; justify-content:space-between; align-items:center; cursor:pointer; }

        /* Responsive */
        @media (max-width:900px) {
          .hamburger { display:flex; }
          .navbar-mobile { display:flex; align-items:center; justify-content:space-between; width:100%; padding:0 20px; }
          .navbar-center {
            position:absolute; top:100%; left:0; right:0; background:#000; flex-direction:column; gap:18px; padding:20px;
            max-height:0; overflow:hidden; opacity:0; transition: all 0.3s ease; z-index:1500;
          }
          .navbar-center.show { max-height:500px; opacity:1; }
          .navbar-right { display:flex; gap:12px; font-size:20px; }
        }
      `}</style>
    </>
  );
}
