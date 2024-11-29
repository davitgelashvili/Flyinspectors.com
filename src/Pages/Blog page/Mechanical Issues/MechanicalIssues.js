import Item from "./Item.js";
import styles from "./MechanicalIssues.module.scss";

const CancelledFlights = () => {
  return (
    <div className={styles.services}>
      <div className={`container`}>
          <div className="">
          </div>
          <div className={`${styles.item}`}>
            <Item />
          </div>
        </div>
      </div>
  );
};

export default CancelledFlights;
