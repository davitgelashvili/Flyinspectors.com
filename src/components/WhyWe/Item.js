import styles from "./WhyWe.module.scss";

const Item = ({ title, desc }) => {
  return (
    <div className="">
      <div className={styles.mainDiv}>
        <h3 className={styles.header}> WHY FLYINSPECTORS?</h3>
        <p className={styles.Item}>
          When struggling with flight-related problem, most of the passengers
          don't even know they are eligible for compensation. let alone the
          resources they need to determine if they qualify for it. You may need
          legal expertise and a lot of time to get familiar with the flight
          regulations and your rights as an airline passenger.<br></br>{" "}
          Fortunately, there is easier solution, Flyinspectors are experts in
          this field. We can ease the process of getting the flight compensation
          you may qualify for. And it's completely free for you, we only take
          fee of 25% in case of success. Are we not successful, you pay nothing.
        </p>
      </div>
    </div>
  );
};

export default Item;
