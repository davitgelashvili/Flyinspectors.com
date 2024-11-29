import styles from "./BeAware.module.scss";
import image from "../../../components/Images/MonitorImage.png"
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";

const BeAware = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg-5">
            <SectionCover image={image} />
          </div>
          <div className={`${styles.item} col-lg-7 col-12`}>
            <SectionText title={'Be Aware'}>
              <div className={styles.item}>
                <h4>Compensation for business travelers and public officials</h4>
                <p>
                Even if the flight was delayed during the business visit and the ticket 
                was purchased by your employer, you have the right to receive compensation 
                as a victim passenger and not a ticket buyer
                </p>
                <br></br>
                <h4>Provision of food, communication facilities and accommodation</h4>
                <p>
                The EC 261 law imposes obligation to airline. You as a delayed flight passenger, 
                carrier must provide you with meals and refreshments during the delay as well as 
                access to communications. You also have the right to request international call, 
                send mail or fax and stay in hotel.
                </p>
                <br></br>
                <h4>Alternate flight</h4>
                <p>
                During the delayed flight, you have the option of a different flight,
                you have the right to request an alternative flight operator to purchase 
                an alternative ticket. This is also possible even if the new flight class 
                exceeds the ticket class you purchased on the delayed flight.
                </p>
                <br></br>
                <h4>Cash compensation or voucher</h4>
                <p>
                When your flight is delayed, your airline may offer you compensation in the form
                of flight vouchers. But be careful - in accordance with the legislation, with 
                the passenger voucher you refuse to accept financial compensation in the future.
                </p>
              </div>
            </SectionText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAware;
