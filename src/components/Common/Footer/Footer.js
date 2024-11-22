import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import PageLinks from "./PageLinks";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={`col-lg-12 column ${styles.Footer} `}>
      <div className="row">
        <div
          className={`col-lg-3 col-12 d-flex flex-column align-items-start ${styles.LogoDiv}`}
        >
          <div>
            <Logo />
          </div>
          <div>
            <div className={styles.SocialMedia}>Social Media</div>
            <SocialMedia />
          </div>
        </div>
        <div
          className={`col-lg-9 col-12  d-flex justify-content-start text-start align-items-center ${styles.PageLinks}`}
        >
          <PageLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
