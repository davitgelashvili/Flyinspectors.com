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
      info: "Thousands of people every day struggle with the flight problems, yet 95% of them don’t know their rights. Here is all the information you need to get to know EC 261 regulation, and be aware of your rights as an airline passenger.",
    },
    {
      icon: "#",
      label: "Option 3",
      info: "Thousands of people every day struggle with the flight problems, yet 95% of them don’t know their rights. Here is all the information you need to get to know EC 261 regulation, and be aware of your rights as an airline passenger.",
    },
    {
      icon: "#",
      label: "Option 4",
      info: "Thousands of people every day struggle with the flight problems, yet 95% of them don’t know their rights. Here is all the information you need to get to know EC 261 regulation, and be aware of your rights as an airline passenger.",
    },
    {
      icon: "#",
      label: "Option 5",
      info: "Thousands of people every day struggle with the flight problems, yet 95% of them don’t know their rights. Here is all the information you need to get to know EC 261 regulation, and be aware of your rights as an airline passenger.",
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
