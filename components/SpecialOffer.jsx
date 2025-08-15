"use client";
import { useState } from "react";
import { FiShoppingBag, FiClock, FiTag } from "react-icons/fi";

const SpecialOffer = ({ addToCart }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const offerProducts = [
    {
      id: 1,
      name: "Organic Black Beans",
      originalPrice: 12.99,
      discountPrice: 6.49,
      price: 6.49,
      image: "/images/black-beans.jpg",
      timeLeft: "2 days left",
      tag: "Bestseller",
      discountPercentage: 50,
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
      discountPercentage: 50,
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
      discountPercentage: 50,
    },
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <section className="special-offer-section">
      <div className="container">
        <h2 className="section-title">Upto 50% OFF On Beans Products</h2>
        <div className="offer-products-grid">
          {offerProducts.map((product) => (
            <div
              key={product.id}
              className={`offer-card ${
                hoveredCard === product.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Discount Ribbon */}
              <div className="discount-ribbon">
                <span>{product.discountPercentage}% OFF</span>
              </div>

              {/* Product Tag */}
              <div className="product-tag">
                <FiTag className="tag-icon" />
                <span>{product.tag}</span>
              </div>

              {/* Product Image */}
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
              </div>

              {/* Product Details */}
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>

                {/* Price Section */}
                <div className="price-section">
                  <span className="original-price">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="current-price">
                    ${product.discountPrice.toFixed(2)}
                  </span>
                </div>

                {/* Time Left */}
                <div className="time-left">
                  <FiClock className="clock-icon" />
                  <span>{product.timeLeft}</span>
                </div>

                {/* Add to Cart Button */}
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
        .special-offer-section {
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

        .offer-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .offer-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .offer-card.hovered {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .discount-ribbon {
          position: absolute;
          top: 15px;
          right: -30px;
          background: #e53935;
          color: white;
          padding: 0.25rem 2rem;
          transform: rotate(45deg);
          font-size: 0.9rem;
          font-weight: 600;
          z-index: 2;
        }

        .product-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background-color: #4caf50;
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

        .product-image-container {
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .offer-card.hovered .product-image {
          transform: scale(1.05);
        }

        .product-details {
          padding: 1.5rem;
        }

        .product-name {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .price-section {
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

        .current-price {
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
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .add-to-cart-btn:hover {
          background-color: #388e3c;
          transform: translateY(-2px);
        }

        .cart-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .offer-products-grid {
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
