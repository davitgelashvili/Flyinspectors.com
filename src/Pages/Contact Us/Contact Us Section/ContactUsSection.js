import Item from "./Item.js";
import styles from "./ContactUs.module.scss";
import image from "../../../components/Images/PicOfSupport.png";
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";

const ContactUsSection = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <SectionCover image={image} />
            {/* <img
              className={styles.services__image}
              src={image}
              alt="PicOfSupport"
            ></img> */}
          </div>
          <div className={`col-lg-6 col-12`}>
            <SectionText title={'Contact Us'}>
              <Item />
            </SectionText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
