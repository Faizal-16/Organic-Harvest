"use client";
import { useState } from "react";
import "@/app/globals.css";

const ProductCard = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const finalPrice = product.variants
    ? product.price + product.variants[selectedVariant].price
    : product.price;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedVariant: product.variants
        ? product.variants[selectedVariant]
        : null,
      price: finalPrice,
      image: product.image,
      name: product.title,
    });
  };

  return (
    <div
      className={`product-card autoShow-animation ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div key={product.id} className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        {product.organic && <span className="organic-badge">Organic</span>}
        {product.variants && product.variants[selectedVariant].price < 0 && (
          <span className="discount-badge">
            Save{" "}
            {Math.abs(
              Math.floor(
                (product.variants[selectedVariant].price * 100) / product.price
              )
            )}
            %
          </span>
        )}
      </div>

      <div className="product-details">
        <div className="category-tag">{product.category}</div>
        <h3 className="product-name">{product.title}</h3>
        <p className="product-description">
          {product.variants ? product.variants[selectedVariant].name : ""}
        </p>

        {product.variants && (
          <div className="variants-container">
            {product.variants.map((variant, index) => (
              <button
                key={index}
                className={`variant-btn ${
                  selectedVariant === index ? "active" : ""
                }`}
                onClick={() => setSelectedVariant(index)}
              >
                {variant.name}
              </button>
            ))}
          </div>
        )}

        <div className="price-section">
          <span className="current-price">${finalPrice.toFixed(2)}</span>
          {product.variants && product.variants[selectedVariant].price < 0 && (
            <span className="original-price">${product.price.toFixed(2)}</span>
          )}
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
