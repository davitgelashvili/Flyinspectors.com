import Slider from "../../components/Common/Slider/Slider";
import styles from "./SubmitClaim.module.scss"

function Main() {
    return (
        <main>
            <Slider />
            <button className={styles.submitClaimImage}>Submit Claim </button>
            </main>
    )
}

export default Main;
