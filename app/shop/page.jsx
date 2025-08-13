'use client';

import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const Shop = () => {
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
      if (filters.category && product.category !== filters.category)
        return false;

      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number);
        const price = product.price + (product.variants[0]?.price || 0);

        if (filters.priceRange.endsWith("+")) {
          if (price < parseInt(filters.priceRange)) return false;
        } else if (price < min || price > max) {
          return false;
        }
      }

      if (filters.organic && !product.organic) return false;

      return true;
    });
  };

  return (
    <div>
      <Head>
        <title>Shop Organic Products | OrganicHarvest</title>
        <meta
          name="description"
          content="Browse our selection of organic products"
        />
      </Head>

      <Header cartItems={cartItems} removeFromCart={removeFromCart} />

      <main className="shop-container container">
        <aside className="shop-sidebar">
          <Filter
            categories={categories}
            onFilterChange={setFilters}
            showTitle={true}
          />
        </aside>

        <div className="shop-main">
          <h1 className="section-title text-3xl">Our Organic Products</h1>
          <div className="product-grid">
            {filterProducts().map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>

          {/* <div className="pagination">
            <a href="#" className="page-link active">
              1
            </a>
            <a href="#" className="page-link">
              2
            </a>
            <a href="#" className="page-link">
              3
            </a>
            <a href="#" className="page-link">
              Next →
            </a>
          </div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
