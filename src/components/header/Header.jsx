import React from "react";
import "./Header.css";

export default function Header({ cartCount, cart, showCart, setCart, toggleCart }) {
  return (
    <div>
      <header className="header">
        <h1>sneakers</h1>
        <nav className="nav">
          <a href="">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">contact</a>
        </nav>

        <div className="info">
          <div className="cart-icon-wrapper" onClick={toggleCart}>
            <img src="./assets/shape.png" alt="" width={16} height={16} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          {showCart && (
            <div className="cart-dropdown">
              <div className="cart-header">
                <h3>Cart</h3>
                <button onClick={() => setCart([])}>Clear</button>
              </div>
              <div className="cart-content">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <img src={item.img} alt="Product" />
                      <div>
                        <h4>{item.title}</h4>
                        <p>${item.price} x {item.quantity} = ${item.total}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="empty-cart">Your cart is empty.</p>
                )}
              </div>
              {cart.length > 0 && (
                <button className="checkout-btn">Checkout</button>
              )}
            </div>
          )}
          <div className="profile"></div>
        </div>
      </header>
      <div className="line"></div>
    </div>
  );
}