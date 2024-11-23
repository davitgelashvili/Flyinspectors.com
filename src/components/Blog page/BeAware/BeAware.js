import Item from "./Item.js";
import styles from "./BeAware.module.scss";
import image from "../../Images/MonitorImage.png"

const BeAware = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className={`${styles.item}`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAware;
