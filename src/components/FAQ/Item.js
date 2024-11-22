import React, { useState } from "react";
import styles from "./Faq.module.scss";

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
      content: "Content for the second item.",
    },
    {
      header: "HOW MUCH AM I ENTITLED TO BE COMPENSATED?",
      content: "Content for the third item.",
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
