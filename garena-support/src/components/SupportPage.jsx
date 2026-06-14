import { FaSearch } from "react-icons/fa";
import { useState,useEffect } from "react";
import "./SupportPage.css";
// import "./SupportPage.css";

export default function SupportPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const articles = [
    "We're Moving to a New Support Platform",
    "How to use the Forgot Password Feature via Mobile Number",
    "How to Protect Your Garena Account",
    "How to use the Forgot Password Feature with Verified Email",
  ];
 useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-disc">
        <p className="disclaimer">
  ⚠️ This project is intended for educational and learning purposes only.
  It is designed to demonstrate programming concepts and should be used
  responsibly and ethically. The developer is not responsible for any
  misuse of this software.
</p>
</div>
        <div className="loader"></div>
      </div>
    );
  }
  return (

    <div className="support-page">

      {/* Navbar */}
      <header className="navbar">

        <div className="nav-left">
          <div className="logo-section">
            <img
              src="https://gst-static.garenanow.com/common/csportal/static/img/Garena_logo_header.png"
              alt="Garena"
            />
          </div>

          <button className="ticket-btn">
            SUBMIT TICKET
          </button>
        </div>

        <div className="nav-right">
          <span className="search-icon">
  <FaSearch />
</span>

          <button
            className="login-btn"
            onClick={() => setShowLogin(true)}
          >
            LOGIN
          </button>
        </div>

      </header>

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-overlay">
          <img
            src="https://gst-static.garenanow.com/common/csportal/static/img/ga/Garena_logo_Horizontal.png"
            alt=""
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="content">

        {/* Left Card */}
        <div className="category-card">
          <div className="card-header">
            <h2>GARENA ACCOUNT</h2>
          </div>

          <div className="card-body">
            <p>Account Guide</p>
          </div>
        </div>


        <div className="article-card">

          <div className="article-bg"></div>

          <div className="article-content">
            <h2>RECOMMENDED ARTICLES</h2>

            {articles.map((item, index) => (
              <a key={index} href="/">
                {item}
              </a>
            ))}
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bg">

          <div className="footer-left">
            <img
              src="https://gst-static.garenanow.com/common/csportal/static/img/Garena_logo_footer.png"
              alt="Garena"
            />

            <p>
              COPYRIGHT © GARENA INTERNATIONAL.<br />
              TRADEMARKS BELONG TO THEIR RESPECTIVE OWNERS.<br />
              ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="footer-links">
            <a href="/">TERMS OF SERVICE</a>
            <a href="/">PRIVACY POLICY</a>
          </div>

        </div>
      </footer>
      {/* Login Modal */}
      {showLogin && (
        <div
          className="login-overlay"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h1>Login to Continue</h1>

            <p>
              Enter your email to receive a login link
            </p>

            <label>Email</label>

            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={`send-btn ${email.trim() ? "active" : ""}`}
              disabled={!email.trim()}
            >
              Send Login Link
            </button>

            <button
              className="cancel-btn"
              onClick={() => setShowLogin(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}