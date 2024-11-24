import React, { useState } from "react";
import styles from "./FeesAndPayout.module.scss";

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active collapse index

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      title: "HOW MUCH IS YOUR SERVICE FEE?",
      desc: "Our service fee is 25%, which will be deducted from Flight Compensation.",
    },
    {
      title: "WILL I STILL HAVE TO PAY IF THE CASE IS LOST?",
      desc: "Flyinspectors works on a 'no win, no fee' basis. So if we don’t win the case, we won’t charge you any fee for our services — that’s part of Flyinspectors promise.",
    },
    {
      title: "CAN YOU TRANSFER MONEY TO SOMEONE ELSE'S NAME?",
      desc: "Yes, we can transfer money, in case, you will provide the ID card of the person to whom we should make the transfer.",
    },
    {
      title: "HOW MUCH AM I ENTITLED TO BE COMPENSATED?",
      desc: "The amount of compensation depends on the distance of your flight between airports:",
      points: [
        "In case of a flight is up to 1500 km -250 Euro",
        "In case of flights between 1500 – 3500 km – 400 Euro",
        "In case of flights over 3500 km-600 Euro",
      ],
    },
    {
      title: "WHAT DO I NEED TO RECEIVE COMPENSATION?",
      desc: "To start the case is required the copies of the ticket and the passport. We will prepare the following documentation: Declaration of Assignment, POA and Agreement.",
    },
    {
      title: "IN WHICH CASES CAN I CLAIM COMPENSATION?",
      desc: "The compensation is eligible to claim in case of the following circumstances:",
      points: [
        "The flight is delayed at least 3 hours.",
        "Delayed flight causes you to miss your connection and arrive at your final destination 3 or more hours later than scheduled.",
        "You were denied boarding because the flight was overbooked.",
        "Flight cancellation qualifies for compensation when the airline has given you less than 14 days’ notice.",
      ],
    },
    {
      title: "IN WHICH CASES IS COMPENSATION NOT ELIGIBLE?",
      desc: "Following situations are not subject of compensation:",
      points: ["Strikes by airport employees or air traffic control", "Extreme weather conditions"],
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div className={styles.itemContainer}>
            <button
              className={styles.toggleButton}
              onClick={() => toggleCollapse(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`collapseExample-${index}`}
            >
              {activeIndex === index ? "-" : "+"}
            </button>
            <h3 className={styles.question}>{item.title}</h3>
          </div>
          <div
            id={`collapseExample-${index}`}
            className={`${styles.collapse} ${
              activeIndex === index ? styles.expanded : styles.collapsed
            }`}
          >
            <div className={styles.card}>
              <p>{item.desc}</p>
              {item.points && (
                <ul>
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
