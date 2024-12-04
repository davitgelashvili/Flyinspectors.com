import React, { useState } from "react";
import styles from "./FaqSection.module.scss";

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const items = [
    {
      header: "IN WHICH CASES, CAN I CLAIM COMPENSATION",
      content:
        "When struggling with flight-related problem, most of the passengers don’t even know they are eligible for compensation. let alone the resources they need to determine if they qualify for it. You may need legal expertise and a lot of time to get familiar with the flight regulations and your rights as an airline passenger.Fortunately, there is easier solution, Flyinspectors are experts in this field. We can ease the process of getting the flight compensation you may qualify for. And it’s completely free for you, we only take fee of 25% in case of success. Are we not successful, you pay nothing.",
    },
    {
      header: "WHAT DO I NEED TO RECEIVE COMPENSATION?",
      content: "To start the case is required the copies of the ticket and the passport. We will prepare the following documentation: Declaration of Assignment, POA and Agreement.",
    },
    {
      header: "HOW MUCH AM I ENTITLED TO BE COMPENSATED?",
      content: `
      The amount of compensation depends on the distance of your flight between airports:
      In case of a flight is up to 1500 km -250 Euro
      In case of flights between 1500 – 3500 km – 400 Euro
      In case of flights over 3500 km-600 Euro
      Delay at the final destination should be more than 3 hours.`,
    },
  ];

  return (
    <div className={`${styles.accordion}`}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordion__item}>
          <div
            className={`${styles.accordion__header}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.header}
          </div>
          <div
            className={`${styles.accordion__content} ${
              activeIndex === index ? styles.show : ""
            }`}
          >
            <p className={styles.contentP}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
