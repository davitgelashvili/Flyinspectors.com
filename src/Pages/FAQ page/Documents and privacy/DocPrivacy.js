import Item from "./Item.js";
import styles from "./DocPrivacy.module.scss";

const DocPrivacy = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="">
          <div className={`${styles.services__item}`}>
            <h4 className={styles.services__header}>Documents and Privacy
            </h4>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocPrivacy;
