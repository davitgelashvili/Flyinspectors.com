import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./BurgerMenu.module.scss";
import { useTranslation } from "react-i18next";
import icon from "../../../Images/arrowIcon.png";
import logo from "../Logo/LogoPic/LogoFly.png";
import iconMenu from "../../../Images/iconMenu.png"

const BurgerMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const [IsOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const data = [
    {
      link: "/",
      title: t("menu.home"),
    },
    {
      title: t("menu.yourrights"),
      dropdown: [
        { link: "/your-rights/flight-delay", title: t("menu.flightdelay") },
        { link: "/your-rights/flight-cancellation", title: t("menu.flightcancellation") },
        { link: "/your-rights/overbooked-flight", title: t("menu.overBookedflight") },
        { link: "/your-rights/missed-connection", title: t("menu.missedconnection") },
        { link: "/your-rights/lost-luggage", title: t("menu.lostluggage") },
      ],
    },
    {
      title: t("menu.aboutus"),
      dropdown: [
        { link: "/about-us", title: t("menu.aboutus") },
        { link: "/about-us/blog", title: t("menu.blog") },
        { link: "/about-us/faq", title: t("menu.faq") },
      ],
    },
    {
      link: "/contact-us",
      title: t("menu.contactus"),
    },
  ];

  return (
    <div className={styles.container}>
      <nav>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo__img} />
          </Link>
        </div>

        {/* Icon button */}
        <div className={styles.icon} onClick={toggleMenu}>
          <img src={iconMenu} alt="Menu" className={styles.iconMenu} />
        </div>

        {/* Menu */}
        <ul className={`${styles.nav} ${IsOpen ? styles.open : ""}`}>
          {data?.map((item) => {
            const isActive =
              item.link === location.pathname ||
              item.dropdown?.some(
                (subItem) => subItem.link === location.pathname
              );

            return (
              <li
                className={`${styles.nav_item} ${
                  isActive ? styles.active : ""
                }`}
                key={item.title}
                onMouseEnter={() => item.dropdown && setShowDropdown(true)}
                onMouseLeave={() => item.dropdown && setShowDropdown(false)}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className={styles.dropdownTrigger}>
                  <Link className={styles.pages} to={item.link}>
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <img
                      src={icon}
                      alt="Dropdown Arrow"
                      className={styles.arrow}
                    />
                  )}
                </div>
                {item.dropdown && showDropdown && (
                  <ul className={styles.dropdown}>
                    {item.dropdown.map((subItem) => (
                      <li
                        key={subItem.title}
                        className={`${
                          subItem.link === location.pathname
                            ? styles.activeDropdownItem
                            : ""
                        }`}
                      >
                        <Link
                          className={styles.dropdown_item}
                          to={subItem.link}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
