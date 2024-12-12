import Item from "./Item.js";
import styles from "./PetsInPlanes.module.scss";

const PetsInPlanes = () => {
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

export default PetsInPlanes;
