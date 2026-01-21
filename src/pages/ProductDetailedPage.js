import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [mainImage, setMainImage] = useState('');

  const standardSizes = ['S', 'M', 'L', 'XL', 'XXL'];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://unstopablerundatabse.onrender.com/products/${id}`
        );
        if (!res.ok) throw new Error('Failed to fetch product');

        const data = await res.json();
        setProduct(data);

        if (data.images && data.images.length > 0) {
          setMainImage(data.images[0]);
        }

        setSelectedSize('');
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = async () => {
    if (!selectedSize) {
      alert('Please select size');
      return;
    }

    const userId = 1;

    try {
      const res = await fetch(
        'https://unstopablerundatabse.onrender.com/cart/add',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            items: [
              {
                product_id: product.id,
                quantity: 1,
                product_name: product.name,
                product_price: product.price,
                product_images: [mainImage],
                size: selectedSize,
              },
            ],
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert(`${product.name} added to cart!`);
      } else {
        alert(data.message || 'Failed to add to cart');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>;
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Link to="/shop" style={{ color: '#ff5c00', fontWeight: 700 }}>← Back to Shop</Link>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        {/* Images */}
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
            <img src={mainImage} alt={product.name} style={{ width: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {product.images?.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(img)}
                style={{
                  border: mainImage === img ? '2px solid #ff5c00' : '1px solid #ccc',
                  borderRadius: '8px',
                  width: '60px',
                  height: '60px',
                  cursor: 'pointer',
                }}
              >
                <img src={img} alt={`thumb-${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontWeight: 900 }}>{product.name}</h2>
          <div style={{ color: '#888', fontWeight: 700 }}>{product.category}</div>
          <div style={{ fontWeight: 900, fontSize: '1.5rem' }}>${product.price}</div>

          {/* Size */}
          <div style={{ marginTop: '1rem' }}>
            <div style={{ fontWeight: 700 }}>Size:</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {standardSizes.map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: selectedSize === size ? '2px solid #ff5c00' : '1px solid #ccc',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Stock */}
          <div style={{ marginTop: '1rem', fontWeight: 700 }}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </div>

          {/* Add to Cart */}
          <button
            onClick={addToCart}
            disabled={product.stock === 0}
            style={{
              marginTop: '1rem',
              background: '#ff5c00',
              color: '#fff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 700,
              cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
