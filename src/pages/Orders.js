import React, { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from backend
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://unstopablerundatabse.onrender.com/orders");
      if (!res.ok) throw new Error("Failed to fetch orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <div style={{ padding: "2rem" }}>Loading orders...</div>;
  if (error) return <div style={{ padding: "2rem", color: "red" }}>Error: {error}</div>;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ color: "#FF6600", marginBottom: "1.5rem" }}>My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1.5rem",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <strong>Order ID:</strong> {order.id} |{" "}
              <strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()} |{" "}
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    order.status === "Delivered"
                      ? "green"
                      : order.status === "Pending"
                      ? "orange"
                      : "blue",
                }}
              >
                {order.status}
              </span>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <strong>Items:</strong>
              <ul>
                {order.items.map((item) => (
                  <li key={item.product_id}>
                    {item.product_name} - Quantity: {item.quantity} - Price: ${item.product_price}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <strong>Total Price:</strong> ${order.total_price}
            </div>

            <div>
              <strong>Shipping Address:</strong>
              <p>
                {order.address.name}, {order.address.flat}, {order.address.street}, {order.address.city},{" "}
                {order.address.state} - {order.address.mobile}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
