import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, total, updateQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Your Cart is Empty</h2>
        <p>Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Your Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={item.imageUrl} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginRight: '1rem' }} />
            <div>
              <h4 style={{ margin: 0 }}>{item.name}</h4>
              <p style={{ margin: '0.25rem 0', color: '#555' }}>₹{item.price} x {item.quantity}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={() => updateQuantity(item.id, -1)} style={{ padding: '0.25rem 0.75rem' }}>-</button>
            <span style={{ margin: '0 1rem' }}>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)} style={{ padding: '0.25rem 0.75rem' }}>+</button>
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '1.5rem', color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Remove</button>
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'right', marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem' }}>Total: ₹{total.toFixed(2)}</h3>
        <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', marginTop: '1rem' }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
