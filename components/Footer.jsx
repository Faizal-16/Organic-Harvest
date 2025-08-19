import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">OrganicProduce</h3>
            <p className="footer-description">
              Providing the freshest organic produce straight from farm to
              table.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="footer-section">
            <h4 className="footer-heading">Information</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                {/* code for make space in between */}
                
                <span>Address:</span> Umarqui Road, Organic Valley, Silvassa
              </li>
              <li>
                <span>Phone:</span> (91) 9067431
              </li>
              <li>
                <span>Email:</span> faizalahmed.devs@gmail.com
              </li>
              <li>
                <span>Hours:</span> Mon-Fri: 9AM - 6PM
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} OrganicProduce. All Rights Reserved.
          </p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #2d3748;
          color: #fff;
          padding: 4rem 0 0;
          margin-top: 4rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .footer-section {
          margin-bottom: 2rem;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #4caf50;
          margin-bottom: 1rem;
        }

        .footer-description {
          color: #a0aec0;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #fff;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background-color: #4caf50;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: #a0aec0;
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #4caf50;
          transform: translateX(5px);
        }

        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-contact li {
          margin-bottom: 0.75rem;
          color: #a0aec0;
          display: flex;
          align-items: flex-start;
        }

        .footer-contact span {
          font-weight: 600;
          color: #fff;
          min-width: 60px;
          display: inline-block;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .footer-social a {
          color: #a0aec0;
          font-size: 1.25rem;
          transition: color 0.3s ease;
        }

        .footer-social a:hover {
          color: #4caf50;
        }

        .footer-bottom {
          border-top: 1px solid #4a5568;
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .footer-copyright {
          color: #a0aec0;
          font-size: 0.875rem;
          margin: 0;
          text-align: center;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal a {
          color: #a0aec0;
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal a:hover {
          color: #4caf50;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
