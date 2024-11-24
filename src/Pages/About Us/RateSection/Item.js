import styles from "./RateSection.module.scss";
import image from "../../../components/Images/casesCompleted.png";
import emotions from "../../../components/Images/emotionsPic.png";
import rate from "../../../components/Images/ratePic.png";

const Item = () => {
  return (
    <div>
      <div className={`row ${styles.rowContainer} `}>
        <div className={`${styles.casesCompleted} col-md-3`}>
          <div className="card mb-3" style={{ maxWidth: "500px" }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start"
                  alt="Card Image"
                />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body d-flex flex-row align-items-center ms-3">
                  <h4 className={`card-title ${styles.cardNumber}`}>2564</h4>
                  <br></br>
                  <h5 className={`card-title ${styles.description}`}>
                    Cases Complete
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Happy Customers */}
        <div className={`${styles.happyCustomers} col-md-4`}>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img
                  src={emotions}
                  className="img-fluid rounded-start"
                  alt="Card Image"
                />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body d-flex flex-row align-items-center ms-3">
                  <h4 className={`card-title ${styles.cardNumber}`}>1234</h4>
                  <br></br>
                  <h5 className={`card-title ${styles.description}`}>
                    Happy Customers
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Rate */}
        <div className={`${styles.successRate} col-md-4`}>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img
                  src={rate}
                  className="img-fluid rounded-start"
                  alt="Card Image"
                />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body d-flex flex-row align-items-center ms-3">
                  <h4 className={`card-title ${styles.cardNumber}`}>98%</h4>
                  <br></br>
                  <h5 className={`card-title ${styles.description}`}>
                    Success Rate
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
