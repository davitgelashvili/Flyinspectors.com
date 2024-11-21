// import { Link } from "react-router-dom"
// import styles from './Menu.module.scss'

// const Menu = () => {
//     const data = [
//         {
//             link: '/',
//             title: 'Home'
//         },
//         {
//             link: '/your-rights',
//             title: 'Your Rights'
//         },
//         {
//             link: '/submit-claim',
//             title: 'About Us'
//         },
//         {
//             link: 'Contact-Us',
//             title: 'Contact Us'
//         }

//     ]
//     return (
//         <ul className={styles.nav}>
//             {data?.map((item)=>{
//                 return (
//                     <li className={styles.nav_item} key={item.title}>
//                         <Link className={styles.pages} to={item.link}>
//                             {item.title}
//                         </Link>
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// }

// export default Menu

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
        { link: "/your-rights/overbooked-flight",
             title: "OverBooked Flight"
             },
        { link: "/your-rights/missed-connection",
             title: "Missed Connection" 
            },
            { link: "/your-rights/lost-luggage",
                title: "Lost Luggage" 
               },
      ],
    },
    {
      link: "/submit-claim",
      title: "About Us",
    },
    {
      link: "/contact-us",
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
