import React, { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [mobileSearch, setMobileSearch] = useState("");

  // Determine logged-in user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) setUserId(user.id);
  }, []);

  // Fetch orders for logged-in user
  useEffect(() => {
    if (!userId) return;
    fetchOrdersByUserId(userId);
  }, [userId]);

  const fetchOrdersByUserId = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`https://unstopablerundatabse.onrender.com/orders/${id}`);
      if (!res.ok) throw new Error("Failed to fetch orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch orders for guest by mobile
  const fetchOrdersByMobile = async () => {
    if (!mobileSearch) return alert("Enter a mobile number to search");

    try {
      setLoading(true);
      const res = await fetch(`https://unstopablerundatabse.onrender.com/orders/guest/${mobileSearch}`);
      if (!res.ok) throw new Error("No orders found for this number");
      const data = await res.json();
      setOrders(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  // Map order status to CSS classes
  const getStatusClass = (status) => {
    switch ((status || "Pending").toLowerCase()) {
      case "pending":
        return "pending";
      case "processing":
        return "processing";
      case "shipped":
        return "shipped";
      case "delivered":
        return "delivered";
      default:
        return "pending"; // fallback
    }
  };

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {!userId && (
        <div className="search-guest">
          <input
            type="text"
            placeholder="Enter Mobile Number (+91)"
            value={mobileSearch}
            onChange={(e) => setMobileSearch(e.target.value)}
          />
          <button onClick={fetchOrdersByMobile}>Search / Track Order</button>
        </div>
      )}

      {loading && <div className="loading">Loading orders...</div>}
      {error && <div className="error">Error: {error}</div>}

      {orders.length === 0 && !loading ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-header">
                <span><strong>Order ID:</strong> {order.id}</span>
                <span>
                  <strong>Date:</strong>{" "}
                  {order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A"}
                </span>
                <span>
                  <strong>Status:</strong>{" "}
                  <span className={`status ${getStatusClass(order.status)}`}>
                    {order.status || "Pending"}
                  </span>
                </span>
              </div>

              <div className="order-items">
                <strong>Items:</strong>
                <ul>
                  {order.items?.map((item) => (
                    <li key={item.product_id}>
                      <img
                        src={item.product_images?.[0] || "https://via.placeholder.com/50"}
                        alt={item.product_name}
                      />
                      <div className="item-info">
                        <span className="item-name">{item.product_name}</span>
                        <span>Qty: {item.quantity}</span>
                        <span>Price: ${item.product_price.toFixed(2)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-footer">
                <span className="total">
                  <strong>Total:</strong>{" "}
                  ${order.items?.reduce((sum, i) => sum + i.product_price * i.quantity, 0).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .orders-page { padding: 2rem; font-family: 'Segoe UI', sans-serif; background: #f5f5f5; min-height: 100vh; }
        h1 { color: #FF6600; text-align: center; margin-bottom: 2rem; }
        .search-guest { display: flex; gap: 10px; margin-bottom: 20px; justify-content: center; }
        .search-guest input { padding: 10px; border-radius: 6px; border: 1px solid #ccc; width: 200px; }
        .search-guest button { padding: 10px 20px; background: #FF6600; color: #fff; border: none; border-radius: 6px; cursor: pointer; }
        .loading, .error, .no-orders { text-align: center; font-size: 1.2rem; margin: 20px 0; }
        .orders-list { display: flex; flex-direction: column; gap: 1.5rem; }
        .order-card { background: #fff; border-radius: 12px; padding: 1rem; box-shadow: 0 2px 10px rgba(0,0,0,0.08); display: flex; flex-direction: column; gap: 0.5rem; }
        .order-header { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: space-between; font-size: 0.9rem; }
        .status { font-weight: bold; padding: 3px 10px; border-radius: 6px; color: #fff; text-transform: uppercase; font-size: 0.8rem; }
        .status.delivered { background: #22c55e; }
        .status.pending { background: #f59e0b; }
        .status.processing { background: #3b82f6; }
        .status.shipped { background: #6b7280; }
        .order-items ul { list-style: none; padding: 0; margin: 0.5rem 0; display: flex; flex-direction: column; gap: 0.5rem; }
        .order-items li { display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; }
        .order-items img { width: 50px; height: 50px; object-fit: cover; border-radius: 6px; }
        .item-info { display: flex; flex-direction: column; gap: 0.2rem; }
        .item-name { font-weight: 600; }
        .order-footer { margin-top: 0.5rem; }
        .total { font-weight: bold; font-size: 1rem; }
        @media (max-width: 768px) {
          .search-guest { flex-direction: column; gap: 10px; align-items: stretch; }
          .search-guest input, .search-guest button { width: 100%; }
          .order-header { flex-direction: column; gap: 0.25rem; }
          .order-items li { flex-direction: column; align-items: flex-start; }
          .item-info { gap: 0.5rem; }
        }
      `}</style>
    </div>
  );
}
