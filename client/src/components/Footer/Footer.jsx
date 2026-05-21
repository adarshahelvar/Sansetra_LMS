import "./Footer.css";

import logo from "../../assets/logos/logo.png";

import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          {/* Left Section */}

          <div className="col-lg-3">
            <img src={logo} alt="logo" className="footer-logo" />

            <p className="footer-desc">
              Empowering learners with industry-focused training, real-time
              projects and placement support to achieve their dreams.
            </p>

            <div className="social-icons">
              <FaFacebook />
              <FaLinkedin />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>

          {/* Company */}

          <div className="col-lg-2">
            <h5>Company</h5>

            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Our Team</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Learning */}

          <div className="col-lg-2">
            <h5>Learning</h5>

            <ul>
              <li>All Courses</li>
              <li>SAP Courses</li>
              <li>Projects</li>
              <li>Certifications</li>
            </ul>
          </div>

          {/* Support */}

          <div className="col-lg-2">
            <h5>Support</h5>

            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Connect */}

          <div className="col-lg-3">
            <h5>Connect</h5>

            <ul className="contact-list">
              <li>
                <FaEnvelope />
                hello@sansetra.com
              </li>

              <li>
                <FaPhoneAlt />
                +91 12345 67890
              </li>

              <li>
                <FaClock />
                Mon - Sat (9AM - 7PM)
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <p className="copyright">© 2026 Sansetra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
