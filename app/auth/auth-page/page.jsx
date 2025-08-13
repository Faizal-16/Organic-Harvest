"use client";

import { useState } from "react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log("Logging in with:", formData.email, formData.password);
    } else {
      // Handle signup logic
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={toggleAuthMode} className="toggle-btn">
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <FiUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-group">
            <FiMail className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FiLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {!isLogin && (
            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-auth">
            <button type="button" className="social-btn google">
              Google
            </button>
            <button type="button" className="social-btn facebook">
              Facebook
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 2rem;
          overflow: hidden;
        }

        .auth-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-header h2 {
          font-size: 1.75rem;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .auth-header p {
          color: #666;
          font-size: 0.95rem;
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #4caf50;
          font-weight: 600;
          cursor: pointer;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .toggle-btn:hover {
          background: rgba(76, 175, 80, 0.1);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: #777;
          font-size: 1.1rem;
        }

        .input-group input {
          width: 100%;
          padding: 0.9rem 1rem 0.9rem 2.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .input-group input:focus {
          outline: none;
          border-color: #4caf50;
          box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: #777;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .forgot-password {
          text-align: right;
          margin-top: -0.5rem;
        }

        .forgot-password a {
          color: #666;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .forgot-password a:hover {
          color: #4caf50;
        }

        .submit-btn {
          background: #4caf50;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .submit-btn:hover {
          background: #388e3c;
          transform: translateY(-2px);
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 1rem 0;
          color: #999;
          font-size: 0.85rem;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          border-bottom: 1px solid #eee;
        }

        .divider span {
          padding: 0 1rem;
        }

        .social-auth {
          display: flex;
          gap: 1rem;
          margin-top: .5rem;
        }

        .social-btn {
          flex: 1;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .social-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .social-btn.google {
          background: white;
          color: #333;
        }

        .social-btn.facebook {
          background: #1877f2;
          color: white;
          border-color: #1877f2;
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: 1.5rem;
          }

          .social-auth {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
