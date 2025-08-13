import { FaTrash } from "react-icons/fa";

const Cart = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const total = cartItems.reduce(
    (sum, item) =>
      sum + (item.price + (item.selectedVariant?.price || 0)) * item.quantity,
    0
  );

  return (
    <div className={`cart-overlay ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Your Cart ({cartItems.length})</h3>
        <button onClick={onClose} className="btn btn-outline">
          Close
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
                loading="lazy"
              />
              <div className="cart-item-details">
                <h4 className="cart-item-title">{item.title}</h4>
                <p className="cart-item-price">
                  ₹
                  {(item.price + (item.selectedVariant?.price || 0)).toFixed(2)}{" "}
                  × {item.quantity}
                </p>
                {item.selectedVariant && (
                  <p className="cart-item-variant">
                    {item.selectedVariant.name}
                  </p>
                )}
                <button
                  className="cart-item-remove text-red-500 tex-sm flex items-center gap-1 cursor-pointer "
                  onClick={() => removeFromCart(index)}
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">Total: ₹{total.toFixed(2)}</div>

          <a
          href="/auth/auth-page"
            className="btn btn-primary text-center"
            style={{ width: "100%", marginTop: "20px" }}
          >
            Checkout
          </a>
        </>
      )}
    </div>
  );
};

export default Cart;
