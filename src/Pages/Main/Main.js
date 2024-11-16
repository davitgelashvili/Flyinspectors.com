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
            <div className="option1">
                <h3>Flight Delay Compensation</h3>
                <hr></hr>
                <p>If your flight delayed for 3+ hours you are 
                eligible for compensation.</p>
            </div>

            <div className="option2">
            <h3> Flight Cancellation Compensation</h3>
                <hr></hr>
                <p>Problem with flight cancellation without prior notice
                     or less then 14 days? According to EU regulations, 
                     you are eligible for compensation.</p>
                </div>

                <div className="option3">
                <h3>Missed Connection Compensation </h3>
                <hr></hr>
                <p>Missed connecting flight because of flight delay? You are eligible for a compensation.</p>
                </div>

                <div className="option4">
                <h3>Overbooking Compensation</h3>
                <hr></hr>
                <p>Missed your flight because it was overbooked? You are eligible for a compensation.</p>
                </div>

                <div className="option5">
                <h3>Denied Boarding Compensation</h3>
                <hr></hr>
                <p>You were denied boarding a plane without any apparent reason or no reason 
                    at all? You are eligible for EU flight compensation.</p>
                </div>

                <div className="option6">
                <h3> Delayed Baggage Compensation</h3>
                    <hr></hr>
                    <p>Was your baggage delayed or arrived damaged? You are eligible for compensation.</p>
                </div>
            </div>
            </main>
    )
}

export default Main;
