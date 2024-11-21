import Item from "./Item.js";
import styles from "./BeAware.module.scss";
import image from "../../Images/suitcase.png"

const BeAware = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img className={styles.image} src={image} alt="MonitorImage"></img>
          </div>
          <div className={`${styles.item} col-lg-6 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAware;
