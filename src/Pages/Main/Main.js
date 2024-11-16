import Slider from "../../components/Common/Slider/Slider";
import styles from "./SubmitClaim.module.scss"

function Main() {
    return (
        <main>
            <Slider />
            <button className={styles.submitClaimImage}>Submit Claim </button>
            <div className={styles.question}>
                <h3>
                    DO YOU QUALIFY FOR A COMPENSATION
                </h3>
            </div>
            <div className={styles.optionsProblem}>
            <div>
                <h3>Flight Delay Compensation</h3>
                <hr></hr>
                <p>If your flight delayed for 3+ hours you are 
                eligible for compensation.</p>
            </div>

            <div>
            <h3> Flight Cancellation Compensation</h3>
                <hr></hr>
                <p>Problem with flight cancellation without prior notice
                     or less then 14 days? According to EU regulations, 
                     you are eligible for compensation.</p>
                </div>

                <div>
                <h3>Missed Connection Compensation </h3>
                <hr></hr>
                <p>Missed connecting flight because of flight delay? You are eligible for a compensation.</p>
                </div>

                <div>
                <h3>Overbooking Compensation</h3>
                <hr></hr>
                <p>Missed your flight because it was overbooked? You are eligible for a compensation.</p>
                </div>

                <div>
                <h3>Denied Boarding Compensation</h3>
                <hr></hr>
                <p>You were denied boarding a plane without any apparent reason or no reason 
                    at all? You are eligible for EU flight compensation.</p>
                </div>

                <div>
                <h3> Delayed Baggage Compensation</h3>
                    <hr></hr>
                    <p>Was your baggage delayed or arrived damaged? You are eligible for compensation.</p>
                </div>
            </div>
            <div className="sectionThree">
                <div className="headerOfSection">
                    <h3>FLYINSPECTORS HELPED MANY PASSENGERS</h3>
                    <h3>WE CAN HELP YOU TOO</h3>
                </div>
                <div className={styles.cards}>
                    <div>
                        <h3>SUBMIT CLAIM</h3>
                        <p>
                            When having problems with your flight all you need to do is 
                            fill the compensation claim form on our website, you can even get 
                            compensation for up to 6 years prior. From there our experts will 
                            do all the necessary paper and routine works and present the complaint 
                            to the airline company.
                        </p>
                    </div>

                    <div>
                    <h3>SIT BACK AND RELAX</h3>
                    <p>
                        After Flyinspectors engagement you do not have to do anything, except
                        to wait for your flight compensation calmly.
                        Yes, it's as easy as it sounds!
                    </p>
                    </div>

                    <div>
                    <h3>RECEIVE COMPENSATION</h3>
                    <p>
                        After airlines transfer the compensation, we immediately transfer it to you, 
                        with the success fee of 25% deducted. If by any chance we are not successful
                        you pay nothing.
                    </p>
                    </div>
                </div>
            </div>
            </main>
    )
}

export default Main;
