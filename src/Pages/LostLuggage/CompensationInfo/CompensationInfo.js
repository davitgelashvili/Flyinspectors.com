import styles from "./CompensationInfo.module.scss";
import Image from "../../../components/Images/PicOfSupport.png"


const CompensationInfo = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img className={styles.image} src={Image} alt="Pic Of canceled FLight"></img>
          </div>
          </div>
        </div>
      </div>
  );
};

export default CompensationInfo;
