import Item from "./Item.js";
import styles from "./CompensationInfo.module.scss";
import image from "../../../components/Images/EarthPic.png"
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";

const CompensationInfo = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <SectionCover image={image} />
          </div>
          <div className={`col-lg-6 col-12`}>
            <SectionText title={'Flight Cancellation Compensation of up to 600 EUR'}>
              <div className={styles.item}>
                <h4>Just like delays, flight cancellations happen. And it's not rare.</h4>
                <p>
                Flight cancellations can happen without prior notice, which can harm your travel plans.
                The European Union Act 261 in such cases allows up to 600 EUR compensation.
                </p>
                <br></br>
                <h4>Which airlines can you get compensation from.</h4>
                <p>
                  According to EC 261 law, compensation coverage depends on the origin
                  of the airline and the flight direction. For details see the chart
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
