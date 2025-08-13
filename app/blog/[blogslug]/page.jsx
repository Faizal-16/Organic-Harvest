"use client";

import { useParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const params = useParams();
  
  // get slug from url and and compare then render post from blogPost
  const post = blogPosts.find((post) => post.slug === params.blogslug);

  return (
    <div>
      <Head>
        <title>{post.title} | OrganicHarvest Blog</title>
        <meta
          name="description"
          content={post.excerpt || "Organic living article"}
        />
      </Head>

      <Header />

      <main className="blog-post container">
        <Image
          src={post.image || "/images/blog-1.jpg"}
          alt={post.title}
          className="blog-post-image"
          width={800}
          height={400}
          loading="lazy"
        />
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;


// In a real app, you would fetch this data based on the slug
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
      author: "John Doe",
      content: `
        <p>Organic farming has numerous benefits for both consumers and the environment. Unlike conventional farming, organic methods avoid synthetic pesticides and fertilizers, which can harm ecosystems and potentially affect human health.</p>
        
        <h3>Environmental Benefits</h3>
        <p>Organic farming promotes biodiversity, improves soil health, and reduces pollution from fertilizer and pesticide runoff. By avoiding synthetic chemicals, organic farms become havens for wildlife.</p>
        
        <h3>Health Benefits</h3>
        <p>Studies suggest that organic produce may contain higher levels of certain nutrients and antioxidants. More importantly, you avoid exposure to potentially harmful pesticide residues.</p>
        
        <h3>Sustainability</h3>
        <p>Organic farming methods are designed to be sustainable long-term, preserving soil fertility without relying on non-renewable resources.</p>
      `,
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
      author: "Jane Smith",
      content: `
        <p>Seasonal eating is a great way to experience different flavors and ingredients in your meals. Here's a guide to help you find the freshest produce for each season:</p>
        
        <h3>Spring</h3>
        <p>Spring is a great time to eat fresh fruits and vegetables. Apples, bananas, berries, and spinach are among the most popular spring vegetables.</p>
        
        <h3>Summer</h3>
        <p>Summer is a great time to eat fresh fruits and vegetables. Strawberries, tomatoes, and cucumbers are among the most popular summer vegetables.</p>
        
        <h3>Fall</h3>
        <p>Fall is a great time to eat fresh fruits and vegetables. Apples, pumpkins, and squash are among the most popular fall vegetables.</p>
        
        <h3>Winter</h3>

        <p>Winter is a great time to eat fresh fruits and vegetables. Cranberries, berries, and spinach are among the most popular winter vegetables.</p>
      `,
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
      author: "Faizal Ahmed",
      content: `
        <p>Starting an organic garden is a great way to nurture healthy food and reduce your carbon footprint. Here's a step-by-step guide to help you get started:</p>
        
        <h3>Choose a Location</h3>
        <p>Find a location that has good drainage and sunlight exposure.</p>
        
        <h3>Choose Suitable Soil</h3>
        <p>Choose a soil that is organic and rich in nutrients.</p>
        
        <h3>Plant Seedlings</h3>
        <p>Plant seedlings from a local organic nursery or buy them online.</p>
        
        <h3>Water and Fertilize</h3>
        <p>Water your garden regularly and use organic fertilizers.</p>
        
        <h3>Prune and Remove Weeds</h3>
        <p>Prune and remove weeds from your garden.</p>
        
        <h3>Harvest and Sell</h3>
        <p>Harvest your produce and sell it locally or online.</p>
      `,
    },
    {
      id: 4,
      title: "The Truth About Organic Certification",
      excerpt:
        "Understanding what organic certification really means and how it affects your food.",
      date: "March 22, 2023",
      readTime: "6 min",
      image: "/images/blog-4.jpg",
      slug: "organic-certification-truth",
      author: "Emily Davis",
      content: `
        <p>Organic certification is a popular way to promote healthy food and reduce your carbon footprint. However, it's important to understand what it really means and how it affects your food.</p>
        
        <h3>What Is Organic Certification?</h3>
        <p>Organic certification is a certification that indicates that a product or company has followed strict organic farming practices.</p>
        
        <h3>Benefits of Organic Certification</h3>
        <p>Organic certification promotes healthy food, reduces pesticide use, and helps to preserve biodiversity.</p>
        
        <h3>How to Get Organic Certification</h3>
        <p>You can get organic certification from a local organic producer or online.</p>
      `,
    },
    {
      id: 5,
      title: "Organic vs. Conventional: The Real Difference",
      excerpt:
        "We break down the key differences between organic and conventional produce.",
      date: "March 5, 2023",
      readTime: "8 min",
      image: "/images/blog-5.jpg",
      slug: "organic-vs-conventional",
      author: "Sarah Johnson",
      content: `
        <p>Organic produce is a popular choice for healthy eating, but it's important to understand the key differences between organic and conventional produce.</p>
        
        <h3>Organic Produce vs. Conventional Produce</h3>
        <p>Organic produce is grown without the use of pesticides, herbicides, and fertilizers. Conventional produce is grown with these chemicals.</p>
        
        <h3>Organic Produce vs. Conventional Produce</h3>
        <p>Organic produce is grown without the use of pesticides, herbicides, and fertilizers. Conventional produce is grown with these chemicals.</p>
        
        <h3>Organic Produce vs. Conventional Produce</h3>
        <p>Organic produce is grown without the use of pesticides, herbicides, and fertilizers. Conventional produce is grown with these chemicals.</p>
      `,
    },
    {
      id: 6,
      title: "5 Easy Organic Recipes for Busy Weeknights",
      excerpt:
        "Quick and delicious recipes using organic ingredients that you can make in under 30 minutes.",
      date: "February 18, 2023",
      readTime: "5 min",
      image: "/images/blog-6.jpg",
      slug: "easy-organic-recipes",
      author: "Michael Smith",
      content: `
        <p>Organic produce is a popular choice for healthy eating, but it's important to understand the key differences between organic and conventional produce.</p>
        
        <h3>Organic Produce vs. Conventional Produce</h3>
        <p>Organic produce is grown without the use of pesticides, herbicides, and fertilizers. Conventional produce is grown with these chemicals.</p>
        
        <h3>Organic Produce vs. Conventional Produce</h3>
        <p>Organic produce is grown without the use of pesticides, herbicides, and fertilizers. Conventional produce is grown with these chemicals.</p>
        
        <h3>Organic Produce vs. Conventional Produce</h3>
        <p>Organic produce is grown without the use of pesticides, herbicides, and fertilizers. Conventional produce is grown with these chemicals.</p>
      `,
    },
  ];
