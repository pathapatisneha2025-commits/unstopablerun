import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState({});
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://unstopablerundatabse.onrender.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
        setSelectedVariant(data?.variants?.[0] || {});
        setMainImage(data?.main_image || "/placeholder.png");
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);
// Add this inside your ProductDetail component, above the return
const handleAddToCart = async () => {
  if (!product || !selectedVariant) return;

  // 1️⃣ Determine user ID (logged-in or guest)
  const user = JSON.parse(localStorage.getItem("user"));
  let userId = user?.userId || user?.id;

  if (!userId) {
    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = `guest_${Date.now()}`;
      localStorage.setItem("guestId", guestId);
    }
    userId = guestId;
  }

  // 2️⃣ Build payload
  const payload = {
    userId,
    items: [
      {
        product_id: product.id,
        product_name: product.name,
        product_price: selectedVariant.price,
        product_images: [mainImage],
        quantity: 1,
        variant: selectedVariant
      }
    ]
  };

  try {
    const res = await fetch("https://unstopablerundatabse.onrender.com/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (res.ok) {
      alert(`${product.name} added to cart!`);

      // 3️⃣ Refetch product from backend to get updated stock
      const productRes = await fetch(`https://unstopablerundatabse.onrender.com/products/${id}`);
      if (productRes.ok) {
        const updatedProduct = await productRes.json();
        setProduct(updatedProduct);

        // Update selected variant in case backend stock changed
        const updatedVariant = updatedProduct.variants.find(
          v => v.size === selectedVariant.size && v.color === selectedVariant.color
        );
        if (updatedVariant) setSelectedVariant(updatedVariant);
      }
    } else {
      alert(`Failed to add to cart: ${data.message}`);
    }
  } catch (err) {
    console.error(err);
    alert("Error adding to cart");
  }
};


  if (!product) return <div className="loading">Loading product...</div>;

  return (
    <div className="page-container">
      <div className="product-detail-container">
        <div className="product-detail">
          {/* Left: Images */}
          <div className="images-section">
            <div className="main-image">
              <img src={mainImage} alt={product.name} />
            </div>
            <div className="thumbnails">
              {[product.main_image, ...product.thumbnails].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  className={mainImage === img ? "thumb active" : "thumb"}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="details-section">
            <h1 className="product-name">{product.name}</h1>
            <p className="category">
              {product.category} {product.subcategory && `> ${product.subcategory}`}
            </p>

            {/* Variants */}
            {product.variants?.length > 0 && (
              <div className="variants">
                <h3>Select Variant:</h3>
                <div className="variant-buttons">
                  {product.variants.map((v, idx) => (
                    <button
                      key={idx}
                      disabled={v.stock === 0}
                      className={`variant-btn ${
                        selectedVariant.size === v.size && selectedVariant.color === v.color
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => setSelectedVariant(v)}
                    >
                      {v.size} / {v.color} - ₹{v.price}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="price">
              ₹{selectedVariant.price} <span>({selectedVariant.stock} in stock)</span>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
             <button
  className="add-cart"
  onClick={handleAddToCart} // <-- use the new function
>
  Add to Cart
</button>

              <button
                className="buy-now"
  onClick={handleAddToCart} // <-- use the new function
              >
                Buy Now
              </button>
            </div>

            {/* Description */}
            {product.description && (
              <div className="description">
                <h3>Product Details</h3>
                <p>{product.description}</p>
              </div>
            )}

            {/* Additional Info */}
            <div className="additional-info">
              <h3>Additional Information</h3>
              <ul>
                <li>Category: {product.category}</li>
                {product.subcategory && <li>Subcategory: {product.subcategory}</li>}
                <li>Stock: {selectedVariant.stock}</li>
                <li>
                  Size / Color: {selectedVariant.size} / {selectedVariant.color}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .page-container {
 background: #fffaf5;
          padding: 40px 20px;
          min-height: 100vh;
        }

        .product-detail-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px;
           background: #fffaf5;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(255, 140, 0, 0.3);
          font-family: 'Helvetica Neue', Arial, sans-serif;
          color: #000; /* <-- all text black */
        }

        .product-detail {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }

        .images-section {
          flex: 1 1 45%;
        }

        .main-image img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 12px;
          border: 2px solid #FF8C00;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .main-image img:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(255,140,0,0.5);
        }

        .thumbnails {
          display: flex;
          gap: 12px;
          margin-top: 15px;
          overflow-x: auto;
        }

        .thumbnails .thumb {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border: 2px solid #FFD580;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .thumbnails .thumb:hover {
          border-color: #FF8C00;
          transform: scale(1.05);
        }

        .thumbnails .thumb.active {
          border-color: #FFD700;
          box-shadow: 0 0 12px rgba(255,215,0,0.6);
        }

        .details-section {
          flex: 1 1 50%;
        }

        .product-name {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .category {
          color: #000; /* black text */
          font-size: 14px;
          margin-bottom: 20px;
        }

        .variant-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .variant-btn {
          padding: 8px 14px;
          border: 1px solid #FFD580;
          border-radius: 6px;
          background: rgba(255,255,255,0.2);
          color: #000; /* black text */
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s;
        }

        .variant-btn.selected {
          background: #FF8C00;
          border-color: #FFA500;
          color: #000; /* black text */
        }

        .variant-btn:hover:not(:disabled) {
          border-color: #FFA500;
        }

        .variant-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .price {
          font-size: 22px;
          font-weight: 700;
          color: #000; /* black text */
          margin: 20px 0;
        }

        .price span {
          font-weight: 400;
          color: #000; /* black text */
          font-size: 14px;
        }

        .action-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .add-cart, .buy-now {
          flex: 1;
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.3s;
          color: #000; /* black text for button labels */
        }

        .add-cart {
          background: linear-gradient(90deg, #FFD700, #FFA500);
        }

        .add-cart:hover {
          background: linear-gradient(90deg, #FFA500, #FF8C00);
        }

        .buy-now {
          background: linear-gradient(90deg, #FF8C00, #FFD700);
        }

        .buy-now:hover {
          background: linear-gradient(90deg, #FFA500, #FF8C00);
        }

        .description, .additional-info {
          margin-top: 25px;
        }

        .description h3, .additional-info h3 {
          font-weight: 600;
          margin-bottom: 8px;
          color: #000; /* black text */
        }

        .description p, .additional-info ul {
          color: #000; /* black text */
          font-size: 14px;
          line-height: 1.6;
        }

        .additional-info ul {
          list-style: disc inside;
        }

        @media(max-width: 900px) {
          .product-detail {
            flex-direction: column;
          }
          .main-image img {
            height: 350px;
          }
        }
      `}</style>
    </div>
  );
}
