"use client";

import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

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
      console.log("Logging in with:", formData.email, formData.password);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-illustration">
        <div className="illustration-content">
          <h2>Welcome to OrganicProduce</h2>
          <p>
            {isLogin
              ? "Sign in to access your account and explore fresh organic products"
              : "Join our community for the freshest organic produce"}
          </p>
        </div>
      </div>

      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          <div className="auth-header">
            <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>
            <p className="auth-subtitle">
              {isLogin
                ? "Sign in to continue"
                : "Fill in your details to get started"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••••"
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
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength="6"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="/forgot-password" className="forgot-password">
                  Forgot password?
                </a>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isLogin ? "Sign In" : "Sign Up"}
              <FiArrowRight className="btn-icon" />
            </button>

            <div className="divider">
              <span>or continue with</span>
            </div>

            <div className="social-auth">
              <button type="button" className="social-btn google">
                <FcGoogle className="social-icon" />
                Google
              </button>
              <button type="button" className="social-btn facebook">
                <FaFacebook className="social-icon" />
                Facebook
              </button>
            </div>

            <p className="auth-toggle">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={toggleAuthMode}
                className="toggle-btn"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </form>
        </div>
      </div>

      <style jsx>{`
        .auth-container {
          display: flex;
          min-height: 100vh;
          background-color: #f8fafc;
        }

        .auth-illustration {
          flex: 1;
          background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
          color: white;
          padding: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .illustration-content {
          max-width: 500px;
        }

        .illustration-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .illustration-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .illustration-image img {
          width: 100%;
          height: auto;
          max-width: 400px;
        }

        .auth-form-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .auth-form-wrapper {
          width: 100%;
          max-width: 450px;
        }

        .auth-header {
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .auth-header h1 {
          font-size: 2rem;
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .auth-subtitle {
          color: #64748b;
          font-size: 1rem;
        }

        .auth-form {
          width: 100%;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #1e293b;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          aign-items: center;
        }

        .input-icon {
          color: #94a3b8;
          font-size: 1.1rem;
        }

        .input-wrapper input {
          width: 100%;
          padding: 0.9rem 1rem 0.9rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.95rem;
          background-color: #ffffff;
          transition: all 0.2s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: #4caf50;
          box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1.5rem 0;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #64748b;
          cursor: pointer;
        }

        .remember-me input {
          accent-color: #4caf50;
        }

        .forgot-password {
          color: #4caf50;
          font-size: 0.9rem;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .forgot-password:hover {
          color: #388e3c;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin: 1.5rem 0;
        }

        .submit-btn:hover {
          background-color: #388e3c;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover .btn-icon {
          transform: translateX(3px);
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 2rem 0;
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          border-bottom: 1px solid #e2e8f0;
        }

        .divider span {
          padding: 0 1rem;
        }

        .social-auth {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-btn {
          flex: 1;
          padding: 0.8rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background-color: white;
        }

        .social-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .social-btn.facebook {
          background-color: #1877f2;
          color: white;
          border-color: #1877f2;
        }

        .social-icon {
          font-size: 1.2rem;
        }

        .auth-toggle {
          text-align: center;
          color: #64748b;
          font-size: 0.95rem;
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #4caf50;
          font-weight: 600;
          cursor: pointer;
          padding: 0.2rem;
        }

        .toggle-btn:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .auth-container {
            flex-direction: column;
          }

          .auth-illustration {
            padding: 2rem;
            text-align: center;
          }

          .illustration-content h2 {
            font-size: 2rem;
          }

          .illustration-image {
            display: none;
          }

          .auth-form-container {
            padding: 2rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .social-auth {
            flex-direction: column;
          }

          .auth-header h1 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
