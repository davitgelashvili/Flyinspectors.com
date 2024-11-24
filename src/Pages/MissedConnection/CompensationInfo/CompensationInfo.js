import Item from "./Item.js";
import styles from "./CompensationInfo.module.scss";
import Image from "../../../components/Images/FirstImage.png"


const CompensationInfo = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img className={styles.image} src={Image} alt="Pic Of canceled FLight"></img>
          </div>
          <div className={`${styles.item} col-lg-6 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationInfo;
