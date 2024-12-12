import Item from "./Item.js";
import styles from "./CompensationHowMuch.module.scss";
import BulletPoint from "./BulletPoint.js";
import Tabletwo from "../../../components/Tables/tabletwo/tabletwo.js";

const CompensationHowMuch = () => {
  return (
    <div className={styles.services}>
      <div className= "container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <BulletPoint />
          </div>
          <div className={`col-lg-7 col-12`}>
            <Tabletwo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationHowMuch;
