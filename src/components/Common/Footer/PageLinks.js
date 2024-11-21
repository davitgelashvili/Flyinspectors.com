import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const PageLinks = () => {
  return (
    <div
      className={`d-flex justify-content-between align-items-start flex-wrap ${styles.MainDiv}`}
    >
      {/* Column 1 */}
      <div className="d-flex flex-column me-5">
        <ul className={`nav flex-column ${styles.List}`}>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link to="/" className={`nav-link ${styles.List__link}`}>
              Home
            </Link>
          </li>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/submit-claim"
              className={`nav-link ${styles.List__link}`}
            >
              Submit claim
            </Link>
          </li>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/contact-us"
              className={`nav-link ${styles.List__link}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="d-flex flex-column me-5">
        <ul className={`nav flex-column ${styles.List}`}>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/about-us"
              className={`nav-link ${styles.List__link}`}
            >
              About Us
            </Link>
          </li>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/flight-delay"
              className={`nav-link ${styles.List__link}`}
            >
              Flight Delay
            </Link>
          </li>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/flight-cancellation"
              className={`nav-link ${styles.List__link}`}
            >
              Flight Cancellation
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="d-flex flex-column me-5">
        <ul className={`nav flex-column ${styles.List}`}>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/missed-connection"
              className={`nav-link ${styles.List__link}`}
            >
              Missed Connection
            </Link>
          </li>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/lost-luggage"
              className={`nav-link ${styles.List__link}`}
            >
              Damaged/Lost Luggage
            </Link>
          </li>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/denied-boarding"
              className={`nav-link ${styles.List__link}`}
            >
              Denied Boarding
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="d-flex flex-column">
        <ul className={`nav flex-column ${styles.List}`}>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/blog"
              className={`nav-link ${styles.List__link}`}
            >
              Blog
            </Link>
          </li>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link
              to="/your-rights/terms"
              className={`nav-link ${styles.List__link}`}
            >
              Terms and Conditions
            </Link>
          </li>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
            <Link to="#faq-section" className={`nav-link ${styles.List__link}`}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageLinks;
