import React, { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  // Determine userId (logged-in or guest)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) setUserId(user.id);
    else {
      let guestId = localStorage.getItem("guestId");
      if (!guestId) {
        guestId = `guest_${Date.now()}`;
        localStorage.setItem("guestId", guestId);
      }
      setUserId(guestId);
    }
  }, []);

  // Fetch orders for user/guest
  useEffect(() => {
    if (!userId) return;

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://unstopablerundatabse.onrender.com/orders/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();

        const normalizedOrders = (data || []).map(order => ({
          ...order,
          status: order.status || "Pending",
          items: Array.isArray(order.items) ? order.items : [],
          address: order.address || {},
          total_price: (order.items || []).reduce(
            (sum, item) => sum + (parseFloat(item.product_price) || 0) * (item.quantity || 1),
            0
          )
        }));

        setOrders(normalizedOrders);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) return <div className="loading">Loading orders...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p className="no-orders">You have no orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div className="order-card" key={order.id}>
              <div className="order-header">
                <span><strong>Order ID:</strong> {order.id || "N/A"}</span>
                <span><strong>Date:</strong> {order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A"}</span>
                <span>
                  <strong>Status:</strong>{" "}
                  <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                </span>
              </div>

              <div className="order-items">
                <strong>Items:</strong>
                <ul>
                  {order.items.map(item => (
                    <li key={item.product_id || Math.random()}>
                      <img src={item.product_images?.[0] || "https://via.placeholder.com/50"} alt={item.product_name || "Item"} />
                      <div className="item-info">
                        <span className="item-name">{item.product_name || "Unnamed Item"}</span>
                        <span>Qty: {item.quantity || 1}</span>
                        <span>Price: ${item.product_price ? item.product_price.toFixed(2) : "0.00"}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-footer">
                <span className="total"><strong>Total:</strong> ${order.total_price.toFixed(2)}</span>
                <div className="shipping-address">
                  <strong>Shipping Address:</strong>
                  <p>
                    {order.address.name || ""}, {order.address.flat || ""}, {order.address.street || ""}, {order.address.city || ""},{" "}
                    {order.address.state || ""} - {order.address.mobile || ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .orders-page {
          padding: 2rem;
          font-family: 'Segoe UI', sans-serif;
          background: #f5f5f5;
          min-height: 100vh;
        }
        h1 { color: #FF6600; text-align: center; margin-bottom: 2rem; }
        .no-orders { text-align: center; font-size: 1.2rem; color: #555; margin-top: 2rem; }
        .loading, .error { text-align: center; font-size: 1.2rem; padding: 2rem; }
        .error { color: red; }

        .orders-list { display: flex; flex-direction: column; gap: 1.5rem; }

        .order-card {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: transform 0.2s;
        }
        .order-card:hover { transform: translateY(-3px); }

        .order-header { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between; font-size: 0.9rem; color: #333; }

        .status { font-weight: bold; padding: 3px 10px; border-radius: 6px; color: #fff; text-transform: uppercase; font-size: 0.85rem; }
        .status.delivered { background: #22c55e; }
        .status.pending { background: #f59e0b; }
        .status.processing { background: #3b82f6; }

        .order-items ul { list-style: none; padding: 0; margin: 0.5rem 0; display: flex; flex-direction: column; gap: 0.5rem; }
        .order-items li { display: flex; gap: 1rem; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; }
        .order-items img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; }
        .item-info { display: flex; flex-direction: column; gap: 0.2rem; }
        .item-name { font-weight: 600; font-size: 0.95rem; }

        .order-footer { display: flex; flex-direction: column; gap: 0.5rem; }
        .order-footer .total { font-weight: bold; font-size: 1rem; color: #111; }
        .shipping-address p { margin: 0.2rem 0 0 0; font-size: 0.9rem; color: #555; }

        @media (max-width: 768px) {
          .order-header { flex-direction: column; gap: 0.5rem; }
          .order-items li { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}
