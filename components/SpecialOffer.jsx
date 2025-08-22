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
        <h2 className="section-title in-view-animation ">
          <span className="text-animation">Upto 50% OFF On Beans Products</span>
        </h2>
        <div className="offer-products-grid autoShow-animation ">
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
    </section>
  );
};

export default SpecialOffer;
