import Item from "./Item.js";
import styles from "./CompensationInfo.module.scss";
import image from "../../Images/EarthPic.png"

const CompensationInfo = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img className={styles.image} src={image} alt="EarthPic" ></img>
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
