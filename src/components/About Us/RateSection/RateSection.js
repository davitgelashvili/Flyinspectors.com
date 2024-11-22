import Item from "./Item.js";
import styles from "./RateSection.module.scss";

const RateSection = () => {
  return (
    <div>
      <div className={`${styles.services} `}>
        <div className="row">
          <Item />
        </div>
      </div>
    </div>
  );
};

export default RateSection;
