'use client';

import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Organic Farming",
      excerpt:
        "Discover how organic farming practices benefit both your health and the environment.",
      date: "May 15, 2023",
      readTime: "5 min",
      image: "/images/blog-1.jpg",
      slug: "benefits-of-organic-farming",
    },
    {
      id: 2,
      title: "Seasonal Eating: What's Fresh This Month",
      excerpt:
        "Learn which fruits and vegetables are in season and how to incorporate them into your meals.",
      date: "April 28, 2023",
      readTime: "4 min",
      image: "/images/blog-2.jpg",
      slug: "seasonal-eating-guide",
    },
    {
      id: 3,
      title: "How to Start Your Own Organic Garden",
      excerpt:
        "A beginner's guide to starting your own organic garden at home, no matter how small your space.",
      date: "April 10, 2023",
      readTime: "7 min",
      image: "/images/blog-3.jpg",
      slug: "start-organic-garden",
    },
    {
      id: 4,
      title: "The Truth About Organic Certification",
      excerpt:
        "Understanding what organic certification really means and how it affects your food.",
      date: "March 22, 2023",
      readTime: "6 min",
      image: "/images/blog-1.jpg",
      slug: "organic-certification-truth",
    },
    {
      id: 5,
      title: "Organic vs. Conventional: The Real Difference",
      excerpt:
        "We break down the key differences between organic and conventional produce.",
      date: "March 5, 2023",
      readTime: "8 min",
      image: "/images/blog-2.jpg",
      slug: "organic-vs-conventional",
    },
    {
      id: 6,
      title: "5 Easy Organic Recipes for Busy Weeknights",
      excerpt:
        "Quick and delicious recipes using organic ingredients that you can make in under 30 minutes.",
      date: "February 18, 2023",
      readTime: "5 min",
      image: "/images/blog-3.jpg",
      slug: "easy-organic-recipes",
    },
  ];

  return (
    <div>
      <Head>
        <title>Organic Living Blog | OrganicHarvest</title>
        <meta
          name="description"
          content="Learn about organic living, farming, and healthy eating"
        />
      </Head>

      <Header />

      <main className="blog-page container">
        <h1 className="section-title text-3xl">Organic Living Blog</h1>
        <p
          className="text-center"
          style={{ maxWidth: "700px", margin: "0 auto 40px" }}
        >
          Discover the latest articles about organic farming, healthy recipes,
          and sustainable living.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
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
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
