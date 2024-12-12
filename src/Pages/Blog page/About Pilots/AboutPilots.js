import Item from "./Item.js";
import styles from "./AboutPilots.module.scss";

const AboutPilots = () => {
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

export default AboutPilots;
