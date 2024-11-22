import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const data = [
    
    {
      link: "/",
      title: "Home",
    },

    {
      link: "/your-rights/flight-delay",
      title: "Your Rights",
      dropdown: [
        { link: "/your-rights/flight-delay", title: "Flight Delay" },
        {
          link: "/your-rights/flight-cancellation",
          title: "Flight Cancellation",
        },
        { link: "/your-rights/overbooked-flight", title: "OverBooked Flight" },
        { link: "/your-rights/missed-connection", title: "Missed Connection" },
        { link: "/your-rights/lost-luggage", title: "Lost Luggage" },
      ],
    },

    {
      link: "/about-us",
      title: "About Us",
      dropdown: [
        { link: "/about-us/blog", title: "Blog" },
        {
          link: "/about-us/faq",
          title: "FAQ",
        },
      ],
    },

    {
      link: "/submit-claim",
      title: "Contact Us",
    },
  ];

  return (
    <ul className={styles.nav}>
      {data?.map((item) => {
        return (
          <li
            className={styles.nav_item}
            key={item.title}
            onMouseEnter={() => item.dropdown && setShowDropdown(true)}
            onMouseLeave={() => item.dropdown && setShowDropdown(false)}
          >
            <Link className={styles.pages} to={item.link}>
              {item.title}
            </Link>
            {item.dropdown && showDropdown && (
              <ul className={styles.dropdown}>
                {item.dropdown.map((subItem) => (
                  <li key={subItem.title}>
                    <Link className={styles.dropdown_item} to={subItem.link}>
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
  );
};

export default Menu;
