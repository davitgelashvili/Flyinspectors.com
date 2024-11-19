import Item from "./Item.js";
import styles from "./BeAware.module.scss";

const BeAware = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-5">
            <h1>image Image Image Img</h1>
          </div>
          <div className={`${styles.item} col-lg-7 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAware;
