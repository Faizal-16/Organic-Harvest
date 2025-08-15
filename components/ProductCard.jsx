"use client";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const finalPrice = product.variants
    ? product.price + product.variants[selectedVariant].price
    : product.price;

    const handleAddToCart = () => {
      addToCart({
        ...product,
        selectedVariant,
        price: finalPrice,
        image: product.image,
        name: product.title,
      });
    };

  return (
    <div
      className={`product-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <div
      key={product.id}
      
      className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        {product.organic && <span className="organic-badge">Organic</span>}
        {product.variants && product.variants[selectedVariant].price < 0 && (
          <span className="discount-badge">
            {Math.floor(
              (product.variants[selectedVariant].price * 100) / product.price
            )}
            % OFF
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

// Styles
const styles = `
.product-card {
  width: 300px;
  height: 460px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.product-image-container {
  height: 180px;
  width: 100%;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  flex-shrink: 0;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-details {
  padding: 20px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  margin-top: -15px;
  background: white;
  position: relative;
  z-index: 2;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.category-tag {
  display: inline-block;
  background: #4CAF50;
  width: fit-content;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
}

.product-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 8px 0;
}

.product-description {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 10px;
  min-height: 20px;
}

.variants-container {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.variant-btn {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.variant-btn:hover {
  border-color: #4CAF50;
}

.variant-btn.active {
  background: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.current-price {
  font-size: 20px;
  font-weight: 700;
  color: #4CAF50;
}

.original-price {
  font-size: 16px;
  color: #999;
  text-decoration: line-through;
}

.add-to-cart-btn {
  width: 100%;
  padding: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.add-to-cart-btn:hover {
  background: #3d8b40;
  transform: translateY(-2px);
}

.organic-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #4CAF50;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.discount-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #FFC107;
  color: #333;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}
`;

// Add styles to head
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}
