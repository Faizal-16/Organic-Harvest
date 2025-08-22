"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { motion } from "motion/react";


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
        <div className="container flex flex-col items-center">
          <h1 className="hero-faizal">
            <svg
              width="309"
              height="46"
              viewBox="0 0 309 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7798 45.64C18.3851 45.64 14.5238 44.68 11.1958 42.76C7.91042 40.7973 5.35042 38.1307 3.51575 34.76C1.68108 31.3467 0.76375 27.5067 0.76375 23.24C0.76375 19.9973 1.31842 17.0107 2.42775 14.28C3.53708 11.5493 5.07308 9.18133 7.03575 7.176C9.04108 5.17067 11.3664 3.61333 14.0118 2.504C16.6998 1.39466 19.6224 0.839996 22.7798 0.839996C27.7291 0.839996 31.7824 1.864 34.9398 3.912C38.0971 5.91733 40.6784 8.62666 42.6838 12.04L36.4118 13.896C34.4491 11.208 32.3371 9.39466 30.0758 8.456C27.8571 7.47466 25.4251 6.984 22.7798 6.984C19.8358 6.984 17.1904 7.688 14.8438 9.096C12.5398 10.504 10.7051 12.424 9.33975 14.856C7.97442 17.288 7.29175 20.0827 7.29175 23.24C7.29175 26.3547 7.97442 29.1493 9.33975 31.624C10.7051 34.056 12.5398 35.976 14.8438 37.384C17.1904 38.792 19.8358 39.496 22.7798 39.496C25.4251 39.496 27.8571 39.0267 30.0758 38.088C32.3371 37.1067 34.4491 35.272 36.4118 32.584L42.6838 34.44C40.6784 37.8533 38.0971 40.584 34.9398 42.632C31.7824 44.6373 27.7291 45.64 22.7798 45.64ZM61.8323 45.64C58.6749 45.64 55.8803 44.9787 53.4483 43.656C51.0589 42.2907 49.2029 40.392 47.8802 37.96C46.5576 35.528 45.8963 32.6907 45.8963 29.448C45.8963 26.1627 46.5576 23.304 47.8802 20.872C49.2029 18.44 51.0589 16.5413 53.4483 15.176C55.8803 13.8107 58.6749 13.128 61.8323 13.128C65.0323 13.128 67.8269 13.8107 70.2163 15.176C72.6056 16.5413 74.4616 18.44 75.7843 20.872C77.1496 23.304 77.8323 26.1627 77.8323 29.448C77.8323 32.6907 77.1496 35.528 75.7843 37.96C74.4616 40.392 72.6056 42.2907 70.2163 43.656C67.8269 44.9787 65.0323 45.64 61.8323 45.64ZM61.8323 39.496C64.6909 39.496 66.9736 38.5787 68.6803 36.744C70.4296 34.8667 71.3043 32.4347 71.3043 29.448C71.3043 26.4187 70.4296 23.9653 68.6803 22.088C66.9736 20.2107 64.6909 19.272 61.8323 19.272C59.0163 19.272 56.7336 20.2107 54.9843 22.088C53.2776 23.9227 52.4243 26.3547 52.4243 29.384C52.4243 32.4133 53.2776 34.8667 54.9843 36.744C56.7336 38.5787 59.0163 39.496 61.8323 39.496ZM101.733 13.128C103.952 13.128 105.701 13.512 106.981 14.28C108.261 15.0053 109.2 16.008 109.797 17.288C110.395 18.5253 110.779 19.9333 110.949 21.512C111.12 23.0907 111.205 24.712 111.205 26.376V45H104.805V25.032C104.805 22.8133 104.293 21.32 103.269 20.552C102.288 19.784 101.115 19.4 99.7493 19.4C98.3839 19.4 96.9973 19.6773 95.5893 20.232C94.1813 20.7867 92.9226 21.5333 91.8133 22.472C90.7039 23.4107 89.8506 24.456 89.2533 25.608V22.024H90.2773V45H83.8773V13.768H88.7413L90.0853 19.272L88.4853 19.464C89.6799 18.0987 90.9813 16.9467 92.3893 16.008C93.7973 15.0693 95.2906 14.3653 96.8693 13.896C98.4479 13.384 100.069 13.128 101.733 13.128ZM130.335 45.576C127.604 45.576 125.428 44.7867 123.807 43.208C122.228 41.5867 121.439 39.0907 121.439 35.72V14.152V13.768L122.655 6.728H127.839V35.848C127.839 37.0427 128.137 37.9387 128.735 38.536C129.375 39.1333 130.164 39.432 131.103 39.432C131.828 39.432 132.468 39.3893 133.023 39.304C133.577 39.2187 134.068 39.112 134.495 38.984V44.936C133.94 45.1067 133.321 45.256 132.639 45.384C131.999 45.512 131.231 45.576 130.335 45.576ZM116.639 19.656V13.768H134.495V19.656H116.639ZM151.23 45.896C148.798 45.896 146.708 45.4693 144.958 44.616C143.209 43.7627 141.865 42.5467 140.926 40.968C140.03 39.3467 139.582 37.4267 139.582 35.208C139.582 33.16 140.052 31.3467 140.99 29.768C141.929 28.1467 143.273 26.8667 145.022 25.928C146.772 24.9893 148.841 24.52 151.23 24.52C154.217 24.52 156.606 25.2027 158.398 26.568C160.233 27.8907 161.513 29.7253 162.238 32.072H158.654V24.072C158.654 22.7493 158.206 21.5333 157.31 20.424C156.414 19.3147 154.836 18.76 152.574 18.76C151.38 18.76 150.057 18.9093 148.606 19.208C147.198 19.464 145.726 19.9333 144.19 20.616L142.27 15.688C144.02 14.8347 145.833 14.1947 147.71 13.768C149.588 13.3413 151.422 13.128 153.214 13.128C155.902 13.128 158.121 13.6187 159.87 14.6C161.62 15.5813 162.921 16.904 163.774 18.568C164.628 20.1893 165.054 22.024 165.054 24.072V45H160.446L158.846 39.304L162.238 38.344C161.47 40.8613 160.105 42.76 158.142 44.04C156.18 45.2773 153.876 45.896 151.23 45.896ZM152.382 40.2C154.26 40.2 155.774 39.7733 156.926 38.92C158.078 38.024 158.654 36.7867 158.654 35.208C158.654 33.5867 158.078 32.3493 156.926 31.496C155.774 30.6427 154.26 30.216 152.382 30.216C150.505 30.216 148.99 30.6427 147.838 31.496C146.686 32.3493 146.11 33.5867 146.11 35.208C146.11 36.7867 146.686 38.024 147.838 38.92C148.99 39.7733 150.505 40.2 152.382 40.2ZM186.762 45.64C183.562 45.64 180.789 44.9573 178.442 43.592C176.096 42.184 174.282 40.264 173.002 37.832C171.722 35.4 171.082 32.584 171.082 29.384C171.082 26.184 171.722 23.368 173.002 20.936C174.282 18.504 176.096 16.6053 178.442 15.24C180.789 13.832 183.562 13.128 186.762 13.128C189.792 13.128 192.544 13.96 195.018 15.624C197.493 17.2453 199.285 19.4213 200.394 22.152L194.314 24.712C193.632 22.92 192.608 21.576 191.242 20.68C189.877 19.7413 188.32 19.272 186.57 19.272C184.01 19.272 181.877 20.168 180.17 21.96C178.464 23.7093 177.61 26.184 177.61 29.384C177.61 32.584 178.464 35.08 180.17 36.872C181.877 38.6213 184.01 39.496 186.57 39.496C188.32 39.496 189.877 39.048 191.242 38.152C192.608 37.2133 193.632 35.848 194.314 34.056L200.394 36.616C199.242 39.3467 197.429 41.544 194.954 43.208C192.522 44.8293 189.792 45.64 186.762 45.64ZM217.085 45.576C214.354 45.576 212.178 44.7867 210.557 43.208C208.978 41.5867 208.189 39.0907 208.189 35.72V14.152V13.768L209.405 6.728H214.589V35.848C214.589 37.0427 214.887 37.9387 215.485 38.536C216.125 39.1333 216.914 39.432 217.853 39.432C218.578 39.432 219.218 39.3893 219.773 39.304C220.327 39.2187 220.818 39.112 221.245 38.984V44.936C220.69 45.1067 220.071 45.256 219.389 45.384C218.749 45.512 217.981 45.576 217.085 45.576ZM203.389 19.656V13.768H221.245V19.656H203.389ZM263.11 45.64C259.824 45.64 256.902 45 254.342 43.72C251.824 42.44 249.84 40.5413 248.39 38.024C246.939 35.464 246.214 32.328 246.214 28.616V1.416H252.614V27.656C252.614 31.4107 253.51 34.3333 255.302 36.424C257.136 38.472 259.739 39.496 263.11 39.496C266.523 39.496 269.126 38.472 270.918 36.424C272.71 34.3333 273.606 31.4107 273.606 27.656V1.416H280.006V28.616C280.006 32.328 279.28 35.464 277.83 38.024C276.379 40.5413 274.374 42.44 271.814 43.72C269.296 45 266.395 45.64 263.11 45.64ZM297.611 45.64C295.435 45.64 293.281 45.128 291.147 44.104C289.057 43.08 287.329 41.3307 285.963 38.856L290.827 35.656C292.022 37.2347 293.153 38.3867 294.219 39.112C295.286 39.7947 296.673 40.136 298.379 40.136C299.745 40.136 300.79 39.7947 301.515 39.112C302.283 38.3867 302.667 37.512 302.667 36.488C302.667 35.8053 302.475 35.208 302.091 34.696C301.75 34.184 301.131 33.7147 300.235 33.288C299.339 32.8187 298.059 32.3707 296.395 31.944C293.323 31.1333 290.955 30.0667 289.291 28.744C287.627 27.4213 286.795 25.3307 286.795 22.472C286.795 20.7653 287.222 19.208 288.075 17.8C288.929 16.392 290.166 15.2613 291.787 14.408C293.409 13.5547 295.329 13.128 297.547 13.128C300.193 13.128 302.454 13.6827 304.331 14.792C306.209 15.8587 307.681 17.1387 308.747 18.632L303.819 22.28C303.222 21.512 302.347 20.7653 301.195 20.04C300.043 19.272 298.593 18.888 296.843 18.888C295.777 18.888 294.795 19.1867 293.899 19.784C293.003 20.3813 292.555 21.2133 292.555 22.28C292.555 23.3467 292.961 24.2213 293.771 24.904C294.625 25.544 296.161 26.12 298.379 26.632C302.134 27.528 304.801 28.7013 306.379 30.152C307.958 31.56 308.747 33.4373 308.747 35.784C308.747 37.832 308.214 39.6027 307.147 41.096C306.123 42.5467 304.758 43.6773 303.051 44.488C301.387 45.256 299.574 45.64 297.611 45.64Z"
                fill="white"
              />
            </svg>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            We'd love to hear from you! Get in touch with our team.
          </motion.p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card ">
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

          <div className="info-card ">
            <div className="info-icon">
              <FiPhone size={24} />
            </div>
            <h3>Phone Number</h3>
            <p>(91) 556-011</p>
            <p>(91) 556-002</p>
          </div>

          <div className="info-card ">
            <div className="info-icon">
              <FiMail size={24} />
            </div>
            <h3>Email Address</h3>
            <p>faizalahmed.devs@gmail.com</p>
            <p>support@organicproduce.com</p>
          </div>

          <div className="info-card ">
            <div className="info-icon">
              <FiClock size={24} />
            </div>
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9AM - 6PM</p>
          </div>
        </div>

        <div className="contact-form-container autoShow-animation">
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
          animation: text-animation both;
          animation-timeline: view(90% 5%);
        }

        .info-card :hover {
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
