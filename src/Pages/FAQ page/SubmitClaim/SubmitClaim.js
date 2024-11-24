import Item from "./Item.js";
import styles from "./SubmitClaim.module.scss";

const SubmitClaim = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="">
          <div className={`${styles.services__item}`}>
            <h4 className={styles.services__header}>Submitting a claim
            </h4>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitClaim;
