import styles from "./Footer.module.scss";

import React from "react";
import Facebook from "../../Images/Facebook.png";
import Instagram from "../../Images/Instagram.png";
import Whatsapp from "../../Images/Whatsapp.png";
import Gmail from "../../Images/Gmail.png";
import Tiktok from "../../Images/Tiktok.png";

const SocialMedia = () => {
  return (
    <div className="d-flex align-items-center">
      <ul className="nav flex-row">
        <li className="nav-item ">
          <a href="#">
            <img src={Facebook} alt="Facebook"></img>
          </a>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link p-0 text-body-secondary">
            <img src={Instagram} alt="Instagram"></img>
          </a>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link p-0 text-body-secondary">
            <img src={Whatsapp} alt="Whatsapp"></img>
          </a>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link p-0 text-body-secondary">
            <img src={Gmail} alt="Gmail"></img>
          </a>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link p-0 text-body-secondary">
            <img src={Tiktok} alt="Tiktok"></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
