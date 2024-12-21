import Item from "./Item.js";
import styles from "./FeesAndPayout.module.scss";
import image from "../../../components/Images/PayMethods.png";

const FeesAndPayout = () => {
  return (
    <div className={styles.services}>
      <div className={`container`}>
        <div className="">
          {/* <div>
            <h3 className={styles.services__header}>
              Have You Question For Us?
            </h3>
          </div>
          <h4 className={styles.services__answer}>
            You Can Find Your Answers Here
          </h4> */}
          <div className={`${styles.services__item}`}>
        
            <Item />
          </div>
        </div>
        <img src={image} className={styles.services__image} alt="PayMethods" />
      </div>
    </div>
  );
};

export default FeesAndPayout;
