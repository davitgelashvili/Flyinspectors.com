import styles from "./CompensationIf.module.scss";

const Item = () => {
  return (
    <div>
      <h3 className={styles.headerOfQuestion}>Which flights are covered?</h3>
    <div className={styles.item}>
      <div className={styles.TextOfQuestion}>
        The “overbooked” flight is called a flight where more tickets are sold
        than real places are in the plane.
      </div>
      <div className={styles.TextOfQuestion}>
        In this case you may face the problem - you have a ticket, but your
        place is already taken. EU legislation EC 261, provides for up to 600
        compensation for such cases.
      </div>
    </div>
    </div>
  );
};

export default Item;
