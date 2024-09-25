import React from 'react';

function Cart({ Increment, cartItems, totalPrice }) {
  return (
    <div className='mt-5'>
      <h2>Cart Details</h2>
      <p>Total Items: {Increment}</p>
      {/* Displaying items in the cart */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} style={{ listStyleType: 'none' }}>
            <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px' }} />
            <p>
              {item.title} (ID: {item.id}) - Price: ${item.price}
            </p>
          </li>
        ))}
      </ul>
      {/* Display total price */}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
