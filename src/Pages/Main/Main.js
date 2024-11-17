import Slider from "../../components/Common/Slider/Slider";
import OptionsSection from "../../components/OptionsSection/OptionsSection";
import styles from "./SubmitClaim.module.scss";

function Main() {
  return (
    <main>
      <Slider />
      <button className={styles.submitClaimImage}>Submit Claim </button>
      <OptionsSection />
      {/* es undat rom dinamiuri iyos da mere gadavcvalot. */}
      <div className={styles.sectionThree}>
        <div className={styles.headerOfSection}>
          <h3>
            <span>FLYINSPECTORS</span> HELPED MANY PASSENGERS
          </h3>
          <h3>WE CAN HELP YOU TOO</h3>
        </div>

        <div className={styles.cards}>
          <div>
            <h3>SUBMIT CLAIM</h3>
            <p>
              When having problems with your flight all you need to do is fill
              the compensation claim form on our website, you can even get
              compensation for up to 6 years prior. From there our experts will
              do all the necessary paper and routine works and present the
              complaint to the airline company.
            </p>
          </div>

          <div>
            <h3>SIT BACK AND RELAX</h3>
            <p>
              After Flyinspectors engagement you do not have to do anything,
              except to wait for your flight compensation calmly. Yes, it's as
              easy as it sounds!
            </p>
          </div>

          <div>
            <h3>RECEIVE COMPENSATION</h3>
            <p>
              After airlines transfer the compensation, we immediately transfer
              it to you, with the success fee of 25% deducted. If by any chance
              we are not successful you pay nothing.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sectionFour}>
        <h1>here will be picture</h1>
        <div>
            <h3> WHY FLYINSPECTORS?</h3>
            <p>
                When struggling with flight-related problem, most of the passengers don't
                even know they are eligible for compensation. let alone the resources they
                need to determine if they qualify for it. You may need legal 
                expertise and a lot of time to get familiar with the flight
                regulations and your rights as an airline passenger.
                Fortunately, there is easier solution, Flyinspectors are experts in this field. 
                We can ease the process of getting the flight compensation you may qualify for.
                And it's completely free for you, we only take fee of 25% in case of success. 
                Are we not successful, you pay nothing.
             </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
