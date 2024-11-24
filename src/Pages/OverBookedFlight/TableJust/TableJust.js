import Item from "./Item.js";
import styles from "./TableJust.module.scss";
import image from "../../../components/Images/AirpLanePic.png"

const TableJust = () => {
  return (
    <div>
      <div className={`${styles.services} container `}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src={image} alt="AirplanePic"></img>
          </div>
          <div className={`${styles.item} col-lg-6 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableJust;
