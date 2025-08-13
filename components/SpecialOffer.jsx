"use client";

import { useState } from "react";
import { FiShoppingBag, FiClock, FiTag } from "react-icons/fi";

const SpecialOffer = ({ product, addToCart }) => {

  const offerProducts = [
    {
      id: 1,
      name: "Organic Black Beans",
      originalPrice: 12.99,
      discountPrice: 6.49,
      price: 6.49, // This is the actual price to use in cart
      image: "/images/black-beans.jpg",
      timeLeft: "2 days left",
      tag: "Bestseller",
    },
    {
      id: 2,
      name: "Kidney Beans Pack",
      originalPrice: 15.99,
      discountPrice: 7.99,
      price: 7.99,
      image: "/images/kidney-beans.jpg",
      timeLeft: "1 day left",
      tag: "Limited",
    },
    {
      id: 3,
      name: "Mixed Beans Collection",
      originalPrice: 18.99,
      discountPrice: 9.49,
      price: 9.49,
      image: "/images/mixed-beans.jpg",
      timeLeft: "3 days left",
      tag: "Popular",
    },
  ];

  const handleAddToCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price, // Using the discounted price
      image: product.image,
      quantity: 1, // Default quantity
    };
    addToCart(cartItem);
  };

  return (
    <section className="special-offer">
      <div className="container">
        <h2 className="section-title">Upto 50% OFF On Beans Products</h2>
        <div className="offer-products">
          {offerProducts.map((product) => (
            <div key={product.id} className="discount-card">
              <div className="card-tag">
                <FiTag className="tag-icon" />
                <span>{product.tag}</span>
              </div>
              <div className="card-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{product.name}</h3>
                <div className="price-container">
                  <span className="original-price">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="discount-price">
                    ${product.discountPrice.toFixed(2)}
                  </span>
                </div>
                <div className="time-left">
                  <FiClock className="clock-icon" />
                  <span>{product.timeLeft}</span>
                </div>

                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <FiShoppingBag className="cart-icon" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .special-offer {
          padding: 4rem 0;
          background-color: #f9f9f9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #2e7d32;
          position: relative;
        }

        .section-title::after {
          content: "";
          display: block;
          width: 80px;
          height: 4px;
          background-color: #4caf50;
          margin: 1rem auto 0;
        }

        .offer-products {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .discount-card {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .discount-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .card-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background-color: #ff5722;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          z-index: 2;
        }

        .tag-icon {
          font-size: 1rem;
        }

        .card-image {
          height: 200px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .discount-card:hover .card-image img {
          transform: scale(1.05);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-content h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .price-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .original-price {
          text-decoration: line-through;
          color: #9e9e9e;
          font-size: 1rem;
        }

        .discount-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e53935;
        }

        .time-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #757575;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .clock-icon {
          font-size: 1rem;
        }

        .add-to-cart-btn {
          width: 100%;
          padding: 0.75rem;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .add-to-cart-btn:hover {
          background-color: #388e3c;
        }

        .cart-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .offer-products {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SpecialOffer;
