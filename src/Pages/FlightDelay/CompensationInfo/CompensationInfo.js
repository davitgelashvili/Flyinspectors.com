import Item from "./Item.js";
import styles from "./CompensationInfo.module.scss";
import image from "../../../components/Images/EarthPic.png"
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";


const CompensationInfo = () => {
  return (
    <div className={styles.services}>
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <SectionCover image={image}/>
          {/* <img className={styles.image} src={image} alt="EarthPic" ></img> */}
          </div>
          <div className={`${styles.item} col-lg-6 col-12`}>
            <SectionText title={'Flight delay compensation of up to 600 EUR'}>
            <div className={styles.item}>
              <h4>Airlines are not always punctual and flight delays happen.</h4>
              <p>
                Often these are insignificant, but sometimes they can disrupt your
                plans.The European Union Act 261 in such cases allows EUR 600
                compensation.
              </p>
              <br></br>
              <h4>Which airlines can you get compensation from.</h4>
              <p>
                According to EC 261 law, compensation coverage depends on the origin
                of the airline and the flight direction. For details see the chart
              </p>
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
