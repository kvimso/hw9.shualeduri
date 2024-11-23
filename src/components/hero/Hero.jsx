import React, { useState } from "react";
import "./Hero.css";

export default function Hero({ cart, setCart, showCart, setShowCart }) {
  const images = ["1.png", "2.png", "3.png", "4.png"];
  const [mainImg, setMainImg] = useState(images[0]);
  const [showModal, setShowModal] = useState(false);
  const [secondImg, setSecondImg] = useState(images[0]);
  const [secondCount, setSecondCount] = useState(1);
  const [count, setCount] = useState(0); // Added missing count state

  const handleAddToCart = () => {
    const existingItem = cart.find(
      (item) => item.title === "Fall Limited Edition Sneakers"
    );

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.title === "Fall Limited Edition Sneakers"
          ? { ...item, quantity: item.quantity + secondCount, total: (item.quantity + secondCount) * 125 }
          : item
      );
      setCart(updatedCart);
    } else {
      const newItem = {
        title: "Fall Limited Edition Sneakers",
        price: 125,
        img: "./assets/2.png",
        quantity: secondCount,
        total: secondCount * 125,
      };
      setCart([...cart, newItem]);
    }
  };

  const nextHandler = () => {
    if (count >= images.length - 1) {
      setCount(0);
      setSecondImg(images[0]);
    } else {
      setCount(count + 1);
      setSecondImg(images[count + 1]);
    }
  };

  const prevHandler = () => {
    if (count <= 0) {
      setCount(images.length - 1);
      setSecondImg(images[images.length - 1]);
    } else {
      setCount(count - 1);
      setSecondImg(images[count - 1]);
    }
  };

  return (
    <div className="main">
      <div className="hero">
        <div className="fexi">
          <img
            src={`./assets/${mainImg}`}
            alt="Main"
            width={430}
            height={430}
            onClick={() => setShowModal(true)}
            className="main-img"
          />
          <div className="patarafexi">
            {images.map((el) => (
              <img
                onClick={() => setMainImg(el)}
                key={el}
                src={`assets/${el}`}
                width={80}
                height={80}
                alt="Product thumbnail"
              />
            ))}
          </div>
        </div>

        <div className="about">
          <h5>SNEAKER COMPANY</h5>
          <h1 className="Fall">Fall Limited Edition Sneakers</h1>

          <p className="desc">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>

          <div className="discount">
            <h2>$125.00</h2>
            <div className="prec">
              <h6>-50%</h6>
            </div>
          </div>
          <h3>$250.00</h3>

          <div className="quantity-controls">
            <button
              onClick={() => {
                if (secondCount > 1) {
                  setSecondCount(secondCount - 1);
                }
              }}
            >
              -
            </button>
            <button>{secondCount}</button>
            <button
              onClick={() => {
                setSecondCount(secondCount + 1);
              }}
            >
              +
            </button>
            <button onClick={handleAddToCart} className="add-to-cart">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div onClick={prevHandler} className="arrow prev">
              <img src="./assets/arrow.png" alt="Previous" />
            </div>
            <img
              src={`./assets/${secondImg}`}
              alt="Main"
              className="modal-main-img"
            />
            <div onClick={nextHandler} className="arrow next">
              <img
                src="./assets/arrow-right.png"
                alt="Next"
                width={18}
                height={18}
              />
            </div>
            <div className="modal-thumbnails">
              {images.map((el) => (
                <img
                  onClick={() => setSecondImg(el)}
                  key={el}
                  src={`assets/${el}`}
                  width={80}
                  height={80}
                  alt="Product thumbnail"
                />
              ))}
            </div>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}