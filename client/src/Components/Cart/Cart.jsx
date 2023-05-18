import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (car) => {
    setCartItems([...cartItems, car]);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((car) => (
            <li key={car.id}>{car.model}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
