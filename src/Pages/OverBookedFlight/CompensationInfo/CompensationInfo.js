import Item from "./Item.js";
import styles from "./CompensationInfo.module.scss";
import Image from "../../../components/Images/FirstImage.png"
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";


const CompensationInfo = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <SectionCover image={Image} />
          </div>
          <div className={`col-lg-6 col-12`}>
            <SectionText title={'Overbooked Flight Compensation'}>
            <div className={styles.item}>
          <h4>The “overbooked” flight is called a flight where more tickets are sold 
            than real places are in the plane.
          </h4>
          <br></br>
          <p>
          In this case you may face the problem - you have a ticket, 
          but your place is already taken. EU legislation EC 261, provides 
          for up to 600 compensation for such cases.
          </p>
        </div>
            </SectionText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationInfo;
