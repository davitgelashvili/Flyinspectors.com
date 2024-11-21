import React from "react";
import MainLogo from "../../Images/MainLogo.png";
import style from "./Footer.module.scss";
const Logo = () => {
  return (
    <div>
      <a
        href="/"
        className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
      >
        <img className={style.MainLogo} src={MainLogo} alt="Main Logo"></img>
      </a>
    </div>
  );
};

export default Logo;
