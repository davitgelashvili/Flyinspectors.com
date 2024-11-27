import Item from "./Item.js";
import styles from "./CompensationHowMuch.module.scss";
import BulletPoint from "./BulletPoint.js";

const CompensationHowMuch = () => {
  return (
    <div className={styles.services}>
      <div className= "container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <BulletPoint />
          </div>
          <div className={`${styles.item} col-lg-7 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationHowMuch;
