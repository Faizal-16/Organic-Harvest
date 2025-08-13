import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <Image
        src={post.image}
        alt={post.title}
        className="blog-image"
        width={400}
        height={250}
        loading="lazy"
      />
      <div className="blog-content">
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-meta">
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
