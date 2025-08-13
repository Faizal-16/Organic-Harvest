"use client";

import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import SpecialOffer from "@/components/SpecialOffer";
import Head from "next/head";
import { useState } from "react";

const page = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    organic: false,
  });

  const categories = ["Vegetables", "Fruits", "Beans", "Herbs", "Nuts"];

  const products = [
    {
      id: 1,
      title: "Organic Tomatoes",
      price: 11.99,
      category: "Vegetables",
      organic: true,
      image: "/images/tomatoes.jpg",
      variants: [
        { name: "Cherry", price: 1.5 },
        { name: "Beefsteak", price: 2.0 },
        { name: "Heirloom", price: 3.0 },
      ],
    },
    {
      id: 2,
      title: "Fresh Mangoes",
      price: 15.99,
      category: "Fruits",
      organic: false,
      image: "/images/mangoes.jpg",
      variants: [
        { name: "Alphonso", price: 2.5 },
        { name: "Kent", price: 1.5 },
        { name: "Ataulfo", price: 2.0 },
      ],
    },
    {
      id: 3,
      title: "Black Beans",
      price: 8.99,
      category: "Beans",
      organic: true,
      image: "/images/beans.jpg",
      variants: [
        { name: "1 kg", price: 0 },
        { name: "2.5 kg", price: -2.0 },
        { name: "5 kg", price: -4.0 },
      ],
    },
    {
      id: 4,
      title: "Organic Basil",
      price: 6.99,
      category: "Herbs",
      organic: true,
      image: "/images/basil.jpg",
      variants: [
        { name: "Small", price: 0 },
        { name: "Large", price: 2.0 },
      ],
    },
    {
      id: 5,
      title: "Almonds",
      price: 12.99,
      category: "Nuts",
      organic: false,
      image: "/images/almonds.jpg",
      variants: [
        { name: "Raw", price: 0 },
        { name: "Roasted", price: 1.0 },
      ],
    },
    {
      id: 6,
      title: "Organic Spinach",
      price: 5.99,
      category: "Vegetables",
      organic: true,
      image: "/images/spinach.jpg",
      variants: [
        { name: "Bunch", price: 0 },
        { name: "Bag", price: 1.5 },
      ],
    },
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedVariant?.name === product.selectedVariant?.name
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id &&
          item.selectedVariant?.name === product.selectedVariant?.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const filterProducts = () => {
    return products.filter((product) => {
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number);
        const price = product.price + (product.variants[0]?.price || 0);

        if (filters.priceRange.endsWith("+")) {
          if (price < parseInt(filters.priceRange)) return false;
        } else if (price < min || price > max) {
          return false;
        }
      }

      // Organic filter
      if (filters.organic && !product.organic) {
        return false;
      }

      return true;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div>
      <Head>
        <title>OrganicHarvest - Healthy Super Organic Produce</title>
        <meta
          name="description"
          content="Providing healthy super organic produce"
        />
      </Head>

      <Header cartItems={cartItems} removeFromCart={removeFromCart} />

      <section className="hero">
        <div className="container flex flex-col items-center">
          <h1 className="hero-title">
            Providing Healthy Super Organic Produce
          </h1>
          <p className="hero-subtitle">
            Farm-fresh organic products delivered to your doorstep
          </p>
          <a href="/shop" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </section>

      <section className="special-offer">
        <SpecialOffer addToCart={addToCart} />
      </section>

      <section className="products">
        <div className="container">
          <h2 className="section-title text-2xl">Featured Products</h2>

          <Filter categories={categories} onFilterChange={setFilters} />

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
