import React, { useState } from "react";
import styles from "./BeAware.module.scss";

const App = () => {
  const [info, setInfo] = useState("Click an option to see information here.");

  const options = [
    {
      icon: "#",
      label: "Flight Delay",
      info: "Thousands of people every day struggle with the flight problems, yet 95% of them don’t know their rights. Here is all the information you need to get to know EC 261 regulation, and be aware of your rights as an airline passenger.",
    },
    {
      icon: "#",
      label: "Flight Cancellation",
      info: "Just as delays, flight cancellations happen too. If you were not notified 14 days prior you are eligible for compensation.",
    },
    {
      icon: "#",
      label: "Missed Connection",
      info: "You can’t always get to desired destination with one flight, sometimes you have to use connecting flights. Which depends on the schedules of each other and can be missed even with the slightest delays.",
    },
    {
      icon: "#",
      label: "Damaged / Lost Luggage",
      info: "A lot of travelers leave their luggage for airlines to handle, there are cases when the luggage is lost, delayed or damaged.",
    },
    {
      icon: "#",
      label: "Denied Boarding",
      info: "Airlines tend to overbook their flights, and sometimes it so happens that when you show up to your flight there is no more room for you, so you are denied boarding, with or without the reason explained to you. Either way you are eligible for a compensation.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__options}>
        {options.map((option, index) => (
          <button
            key={index}
            className={styles.container__option}
            onClick={() => setInfo(option.info)}
          >
            {option.icon}
            {option.label}
          </button>
        ))}
      </div>
      <div className={styles.container__infoarea}>
        <p className={styles.container__info}>{info}</p>
      </div>
    </div>
  );
};

export default App;
