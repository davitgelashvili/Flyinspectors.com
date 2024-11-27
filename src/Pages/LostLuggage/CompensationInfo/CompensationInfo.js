import Item from "./Item.js";
import styles from "./CompensationInfo.module.scss";
import Image from "../../../components/Images/LostLuggage.png";
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";


const CompensationInfo = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            {/* <img className={styles.image} src={Image} alt="Lost Luggage"></img> */}
            <SectionCover image={Image} />
          </div>
          <div className={`${styles.item} col-lg-6 col-12`}>
            <SectionText title={'Lost Luggage Compensation'}>
            <div className={styles.item}>
              <h4>When using air transport, one of the most common problems 
                is the lose of luggage, delay and damage. Such cases are completely compensable.
              </h4>
            </div>
            </SectionText>
            {/* <Item /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationInfo;
