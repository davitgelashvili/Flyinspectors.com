import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const PageLinks = () => {
  return (
    <div className={`${styles.MainDiv}`}>
      <div className="row">

        {/* Column 1 */}
        <div className="col-lg-3 col-6">
          <ul className={`nav flex-column ${styles.List}`}>
            <li className={`nav-item mb-2 ${styles.List__item}`}>
              <Link to="/" className={`nav-link ${styles.List__link}`}>
                Home
              </Link>
            </li>
            <li className={`nav-item mb-2 ${styles.List__item}`}>
              <Link
                to="/submit-claim"
                className={`nav-link ${styles.List__link}`}
              >
                Submit claim
              </Link>
            </li>
            <li className={`nav-item mb-2 ${styles.List__item}`}>
              <Link
                to="/contact-us"
                className={`nav-link ${styles.List__link}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-lg-3 col-6">
          <ul className={`nav flex-column ${styles.List}`}>
            <li className={`nav-item mb-2 ${styles.List__item}`}>
              <Link
                to="/about-us"
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
        <div className="col-lg-3 col-6">
          <ul className={`nav flex-column ${styles.List}`}>
          <li className={`nav-item mb-2 ${styles.List__item}`}>
              <Link
                to="/your-rights/overbooked-flight"
                className={`nav-link ${styles.List__link}`}
              >
               overbooked-flight
              </Link>
            </li>
           
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
                lost-luggage
              </Link>
            </li>
          </ul>
        </div>
        {/* Column 4 */}
        <div className="col-lg-3 col-6">
          <ul className={`nav flex-column ${styles.List}`}>
            <li className={`nav-item mb-2 ${styles.List__item}`}>
              <Link
                to="/about-us/blog"
                className={`nav-link ${styles.List__link}`}
              >
                Blog
              </Link>
            </li>
            <li className={`nav-item mb-2 ${styles.List__item}`}>
              <Link
                to="/terms-and-conditions"
                className={`nav-link ${styles.List__link}`}
              >
                Terms and Conditions
              </Link>
            </li>
            <li className={`nav-item mb-2 ${styles.List__item}`}>
              <Link to="/about-us/faq" className={`nav-link ${styles.List__link}`}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default PageLinks;
