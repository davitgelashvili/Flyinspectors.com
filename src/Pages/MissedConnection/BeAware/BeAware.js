import styles from "./BeAware.module.scss";
import image from "../../../components/Images/MonitorImage.png"
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";

const BeAware = () => {
  return (
    <div className={styles.services}>
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <SectionCover image={image} />
            {/* <img className={styles.image} src={image} alt="MonitorImage"></img> */}
          </div>
          <div className={`${styles.item} col-lg-6 col-12`}>
            <SectionText title={'Be Aware'} >
            <ul className={styles.bulletList}>
              <li>Do not give up your place in exchange for voucher or other things;</li>
              <li>Keep boarding pass and passport;</li>
              <li>Find out the reasons for refusal;</li>
              <li>Request an alternative ticket;</li>
              <li>Request compensation in cash on place;</li>
              <li>Ask whether the airline will cover your food and hotel expenses.</li>
            </ul>
            </SectionText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAware;
