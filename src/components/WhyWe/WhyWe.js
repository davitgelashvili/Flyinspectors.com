import Item from "./Item.js";
import styles from "./WhyWe.module.scss";

const WhyWe = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>image</h1>
          </div>
          <div className="col-8">
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
