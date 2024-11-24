import Item from "./Item.js";
import styles from "./FeesAndPayout.module.scss";

const FeesAndPayout = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="">
          <div>
            <h3 className={styles.services__header}>
              Have You Question For Us?
            </h3>
          </div>
          <h4 className={styles.services__answer}>You Can Find Your Answers Here</h4>
          <div className={`${styles.services__item}`}>
            <h4 className={styles.services__header}>Fees And Payout Methods
            </h4>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesAndPayout;
