import styles from "./AboutUsSection.module.scss";
import image from "../../../components/Images/FlightAppPic.png";
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";

const AboutUsSection = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <SectionCover image={image} />
            {/* <img
              className={styles.services__image}
              src={image}
              alt="EarthPic"
            ></img> */}
          </div>
          <div className={`col-lg-6 col-12`}>
            <SectionText title={'About Us'}>
            <div className={styles.mainDiv__item}>
              <h4>
                “We have means to ease the process of getting the rightful
                compensation for our customers.”
              </h4>
              <p>Founder - Zura Katsitadze</p>
            </div>
            </SectionText>
            {/* <Item /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
