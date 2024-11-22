import styles from "./BeAware.module.scss";

const Item = () => {
  return (
    <div className={styles.mainDiv}>
      <h3 className={styles.header}>Be Aware</h3>
      <div className={styles.item}>
        <p>
          Thousands of people every day struggle with the flight problems, yet
          95% of them don’t know their rights. Here is all the information you
          need to get to know EC 261 regulation, and be aware of your rights as
          an airline passenger.
        </p>
        <br></br>
      </div>
    </div>
  );
};

export default Item;
