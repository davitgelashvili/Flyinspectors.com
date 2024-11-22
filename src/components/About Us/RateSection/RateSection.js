import Item from "./Item.js";
import styles from "./RateSection.module.scss";

const RateSection = () => {
  return (
    <div>
      <div className={`${styles.services} container `}>
        <div className="row">
          <div className="col-12"></div>
          <Item />
        </div>
      </div>
    </div>
  );
};

export default RateSection;
