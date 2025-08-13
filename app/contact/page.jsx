"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const ContactPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitMessage(
        "Thank you for your message! We'll get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage(
        "There was an error submitting your form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

   const removeFromCart = (index) => {
     setCartItems((prevItems) => {
       const newItems = [...prevItems];
       newItems.splice(index, 1);
       return newItems;
     });
   };

  return (
    <div className="contact-page">
      <Header cartItems={cartItems} removeFromCart={removeFromCart} />

      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Get in touch with our team.</p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <FiMapPin size={24} />
            </div>
            <h3>Our Location</h3>
            <p>
              Umarqui Road
              <br />
              Green Valley, Silvassa
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FiPhone size={24} />
            </div>
            <h3>Phone Number</h3>
            <p>(91) 556-011</p>
            <p>(91) 556-002</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FiMail size={24} />
            </div>
            <h3>Email Address</h3>
            <p>faizalahmed.devs@gmail.com</p>
            <p>support@organicproduce.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FiClock size={24} />
            </div>
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9AM - 6PM</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <p
                className={`submit-message ${
                  submitMessage.includes("Thank you") ? "success" : "error"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.238047386279!2d73.0157873153846!3d20.27218648648915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cb8a28e5f4d1%3A0x7a9a5e5b0a8a5e5b!2sSilvassa%2C%20Dadra%20and%20Nagar%20Haveli!5e0!3m2!1sen!2sin!4v1623861256846!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location in Silvassa, Dadra and Nagar Haveli"
        ></iframe>
      </div>

      <style jsx>{`
        .contact-page {
          color: #333;
        }

        .contact-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url("/images/contact-hero.jpg");
          background-size: cover;
          background-position: center;
          color: white;
          padding: 5rem 0;
          text-align: center;
        }

        .contact-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .contact-hero p {
          font-size: 1.25rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-container {
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .info-card {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .info-icon {
          background: #4caf50;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
        }

        .info-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .info-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .contact-form-container {
          height: fit-content;
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .contact-form-container h2 {
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          color: #2d3748;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #2d3748;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #4caf50;
        }

        .submit-btn {
          background: #4caf50;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          background: #388e3c;
        }

        .submit-btn:disabled {
          background: #a5d6a7;
          cursor: not-allowed;
        }

        .submit-message {
          margin-top: 1rem;
          padding: 0.75rem;
          border-radius: 4px;
          text-align: center;
        }

        .submit-message.success {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .submit-message.error {
          background: #ffebee;
          color: #c62828;
        }

        .contact-map {
          margin-top: 3rem;
        }

        @media (min-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr 1fr;
          }

          .contact-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
