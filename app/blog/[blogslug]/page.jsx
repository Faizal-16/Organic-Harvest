'use client';

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const router = useRouter();
  const { blogSlug } = router.query;

  // In a real app, you would fetch this data based on the slug
  const blogPosts = {
    "benefits-of-organic-farming": {
      title: "The Benefits of Organic Farming",
      content: `
        <p>Organic farming has numerous benefits for both consumers and the environment. Unlike conventional farming, organic methods avoid synthetic pesticides and fertilizers, which can harm ecosystems and potentially affect human health.</p>
        
        <h3>Environmental Benefits</h3>
        <p>Organic farming promotes biodiversity, improves soil health, and reduces pollution from fertilizer and pesticide runoff. By avoiding synthetic chemicals, organic farms become havens for wildlife.</p>
        
        <h3>Health Benefits</h3>
        <p>Studies suggest that organic produce may contain higher levels of certain nutrients and antioxidants. More importantly, you avoid exposure to potentially harmful pesticide residues.</p>
        
        <h3>Sustainability</h3>
        <p>Organic farming methods are designed to be sustainable long-term, preserving soil fertility without relying on non-renewable resources.</p>
      `,
      date: "May 15, 2023",
      readTime: "5 min",
      image: "/images/blog-1.jpg",
      author: "Sarah Johnson",
    },
    "seasonal-eating-guide": {
      title: "Seasonal Eating: What's Fresh This Month",
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
      date: "April 28, 2023",
      readTime: "4 min",
      image: "/images/blog-2.jpg",
      author: "Michael Chen",
    },
  };

  const post = blogPosts[blogSlug] || {
    title: "Post Not Found",
    content: "<p>The blog post you're looking for doesn't exist.</p>",
    date: "",
    readTime: "",
    image: "",
    author: "",
  };

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
