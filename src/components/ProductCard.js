import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
      />
      <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>{product.name}</h3>
      <p style={{ color: '#555' }}>Category: {product.category}</p>
      {/* Changed currency symbol to Rupees */}
      <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0.5rem 0' }}>₹{product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
