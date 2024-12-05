import Item from "./Item.js";
import styles from "./TableJust.module.scss";
import image from "../../../components/Images/AirpLanePic.png";
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";

const TableJust = () => {
  return (
    <div className={styles.services}>
      <div className={`container `}>
        <div className="row">
          <div className="col-lg-5 col-12">
            <SectionCover image={image} />
            {/* <img src={image} alt="AirplanePic"></img> */}
          </div>
          <div className={`${styles.item} col-lg-7 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableJust;
