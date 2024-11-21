import styles from "./CompensationInfo.module.scss";

const Item = () => {
  return (
    <div className="">
      <div className={styles.mainDiv}>
        <h3 className={styles.header}>
        Overbooked Flight Compensation
        </h3>
        <div className={styles.item}>
          <h4>The “overbooked” flight is called a flight where more tickets are sold 
            than real places are in the plane.
          </h4>
          <br></br>
          <p>
          In this case you may face the problem - you have a ticket, 
          but your place is already taken. EU legislation EC 261, provides 
          for up to 600 compensation for such cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
