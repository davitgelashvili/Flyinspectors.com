import styles from "./RateSection.module.scss";
import image from "../../Images/casesCompleted.png";

const Item = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.casesCompleted}>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0 align-items-center">
              {/* Image */}
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start"
                  alt="Card Image"
                />
              </div>
              {/* Content */}
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body d-flex flex-row align-items-center ms-3">
                  <h5 className="card-title me-3">Cases Complete</h5>
                  <h4 className="card-title">2564</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.happyCustomers}></div>
        <div className={styles.successRate}></div>
      </div>
    </div>
  );
};

export default Item;
