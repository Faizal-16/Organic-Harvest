import { useState } from "react";
import Image from "next/image";

const ProductCard = ({ product, addToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <div className="product-card">
      <Image
        src={product.image}
        alt={product.title}
        className="product-image"
        width={280}
        height={200}
        loading="lazy"
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">₹{product.price.toFixed(2)}</p>

        <div className="product-variants">
          {product.variants.map((variant, index) => (
            <div key={index} className="variant-item">
              <span>{variant.name}</span>
              <span>+₹{variant.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <button
          className="btn btn-primary"
          onClick={() =>
            addToCart({
              ...product,
              selectedVariant: product.variants[selectedVariant],
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
