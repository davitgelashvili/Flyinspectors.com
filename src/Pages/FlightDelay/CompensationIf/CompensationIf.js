import styles from "./CompensationIf.module.scss";
import BulletPoint from "./BulletPoint.js";
import Tableone from "../../../components/Tables/tableone/tableone.js";

const CompensationIf = () => {
  return (
    <div className={styles.services}>
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-5 col-12">
            <BulletPoint />
          </div>
          <div className={`col-lg-7 col-12`}>
            <Tableone/>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CompensationIf;
