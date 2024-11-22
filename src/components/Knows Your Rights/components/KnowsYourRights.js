import Item from "./Item.js";
import styles from "./BeAware.module.scss";
import MenuItem from "./MenuItem.js";

const KnowsYourRights = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <h3
          className={`${styles.services__header} d-flex justify-content-center pb-5`}
        >
          KNOWS YOUR RIGHTS
        </h3>
        <div className="row">
          <div className="col-lg-5">
            <Item />
          </div>
          <div className={`${styles.item} col-lg-7 col-12`}>
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowsYourRights;
