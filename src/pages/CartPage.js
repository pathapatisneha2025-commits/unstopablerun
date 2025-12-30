import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [placingOrder, setPlacingOrder] = useState(false);

  const [address, setAddress] = useState({
    name: "",
    flat: "",
    street: "",
    city: "",
    state: "",
    mobile: ""
  });

  const userId = 1; // Replace with logged-in user ID

  // Fetch cart
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await fetch(`https://unstopablerundatabse.onrender.com/cart/${userId}`);
      if (!res.ok) throw new Error("Failed to fetch cart");
      const data = await res.json();
      setCart(data.items || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Remove item
  const removeItem = async (productId) => {
    try {
      const res = await fetch("https://unstopablerundatabse.onrender.com/cart/remove", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId })
      });
      if (res.ok) fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  // Update quantity
  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;
    try {
      const res = await fetch("https://unstopablerundatabse.onrender.com/cart/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId, quantity })
      });
      if (res.ok) fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  // Clear cart
  const clearCart = async () => {
    try {
      const res = await fetch(`https://unstopablerundatabse.onrender.com/cart/clear/${userId}`, {
        method: "DELETE"
      });
      if (res.ok) fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  // Show address form
  const handleProceedToCheckout = () => setShowAddressForm(true);

  // Place order
  const placeOrder = async () => {
    if (cart.length === 0) return alert("Cart is empty!");
    if (!address.name || !address.street || !address.city || !address.mobile) {
      return alert("Please fill all address fields");
    }

    setPlacingOrder(true);

    const orderData = {
      userId,
      items: cart.map(item => ({
        product_id: item.product_id,
        product_name: item.product_name,
        quantity: item.quantity,
        product_price: item.product_price
      })),
      address
    };

    try {
      const res = await fetch("https://unstopablerundatabse.onrender.com/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Order placed successfully ✅");
        clearCart();
        setShowAddressForm(false);
      } else {
        alert(`Failed to place order: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("Error placing order ❌");
    } finally {
      setPlacingOrder(false);
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.product_price * item.quantity, 0);

  if (loading) return <p style={{ padding: 40 }}>Loading cart...</p>;

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.product_id}>
                  <td className="product-info">
                    <img src={item.product_images?.[0]} alt={item.product_name} width={60} />
                    <span>{item.product_name}</span>
                  </td>
                  <td>${item.product_price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.product_id, parseInt(e.target.value))}
                    />
                  </td>
                  <td>${(item.product_price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="remove-btn" onClick={() => removeItem(item.product_id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <div className="cart-buttons">
              <button className="checkout-btn" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
              <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        </>
      )}

      {/* Address Form Modal */}
      {showAddressForm && (
        <div className="address-modal">
          <h2>Enter Delivery Address</h2>
          <input placeholder="Name" value={address.name} onChange={e => setAddress({...address, name: e.target.value})} />
          <input placeholder="Flat / House No" value={address.flat} onChange={e => setAddress({...address, flat: e.target.value})} />
          <input placeholder="Street / Locality" value={address.street} onChange={e => setAddress({...address, street: e.target.value})} />
          <input placeholder="City" value={address.city} onChange={e => setAddress({...address, city: e.target.value})} />
          <input placeholder="State" value={address.state} onChange={e => setAddress({...address, state: e.target.value})} />
          <input placeholder="Mobile" value={address.mobile} onChange={e => setAddress({...address, mobile: e.target.value})} />
          <div className="address-buttons">
            <button onClick={placeOrder} disabled={placingOrder}>{placingOrder ? "Placing Order..." : "Place Order"}</button>
            <button onClick={() => setShowAddressForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <style>{`
        .cart-page { padding: 40px; font-family: 'Segoe UI', sans-serif; }
        h1 { font-size: 36px; margin-bottom: 20px; }
        .cart-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .cart-table th, .cart-table td { padding: 12px 15px; border: 1px solid #ddd; text-align: center; }
        .cart-table th { background: #f8f8f8; }
        .product-info { display: flex; align-items: center; gap: 15px; }
        .product-info img { border-radius: 8px; }
        input[type="number"] { width: 60px; padding: 5px; text-align: center; border-radius: 6px; border: 1px solid #ccc; }
        .remove-btn { background: #ef4444; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; }
        .cart-summary { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; }
        .cart-buttons { display: flex; gap: 10px; }
        .checkout-btn { background: #ff6a00; color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: bold; cursor: pointer; }
        .clear-btn { background: #555; color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: bold; cursor: pointer; }

        /* Address Modal */
        .address-modal {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: white; padding: 30px;
          border-radius: 12px; box-shadow: 0 0 20px rgba(0,0,0,0.2);
          display: flex; flex-direction: column; gap: 10px;
          width: 90%; max-width: 400px;
        }
        .address-modal input { padding: 10px; border-radius: 6px; border: 1px solid #ccc; width: 100%; }
        .address-buttons { display: flex; justify-content: space-between; margin-top: 10px; }
        .address-buttons button { padding: 10px 20px; border-radius: 6px; border: none; cursor: pointer; }
        .address-buttons button:first-child { background: #ff6a00; color: white; }
        .address-buttons button:last-child { background: #555; color: white; }

        @media (max-width: 768px) { .cart-page { padding: 20px; } .cart-summary { flex-direction: column; gap: 15px; } }
      `}</style>
    </div>
  );
}
