import Item from "./Item.js";
import styles from "./CompensationIf.module.scss";
import BulletPoint from "./BulletPoint.js";

const CompensationIf = () => {
  return (
    <div>
      <div className={`${styles.services} container `}>
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

export default CompensationIf;
