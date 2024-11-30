import styles from "./CompensationInfo.module.scss";
import Image from "../../../components/Images/FirstImage.png"
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";


const CompensationInfo = () => {
  return (
    <div className={styles.services}>
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            {/* <img className={styles.image} src={Image} alt="Pic Of canceled FLight"></img> */}
            <SectionCover image={Image} />
          </div>
          <div className={`col-lg-6 col-12`}>
            <SectionText title={'Missed Connection Compensation'}>
            <div className={styles.item}>
          <h4>
          Connecting flight ("Transit flight"), which is not direct 
          flight and takes at least one crossing to the destination.
          </h4>
          <br></br>
          <p>
          In this case you may face the problem – you have a ticket, 
          but your place is already taken. EU legislation EC 261,
           provides for up to 600 compensation for such cases.


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
