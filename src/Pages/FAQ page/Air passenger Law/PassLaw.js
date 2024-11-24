import Item from "./Item.js";
import styles from "./PassLaw.module.scss";

const PassLaw = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="">
          <div className={`${styles.services__item}`}>
            <h4 className={styles.services__header}>Air Passenger Law
            </h4>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassLaw;
