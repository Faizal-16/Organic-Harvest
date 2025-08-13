'use client';

import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";
import { usePathname } from "next/navigation";

const navLink = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = ({ cartItems = [], removeFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

    const path = usePathname();
  

  // Safely calculate cart count even if cartItems is undefined
  const cartCount = (cartItems || []).reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          OrganicHarvest
        </Link>

        <nav className="nav">
          {navLink.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`nav-link ${
                path === link.href ? "text-[z#4CAF50]  " : ""
              } `}
            >
              {link.name}
            </Link>
          ))}

          <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </nav>
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems || []}
        removeFromCart={removeFromCart}
      />
    </header>
  );
};

export default Header;
