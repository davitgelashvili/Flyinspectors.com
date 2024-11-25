import styles from "./WeGivesYou.module.scss";
import MainLogo from "../Images/MainLogo.png";

const FlyinspectorCard = () => {
  return (
    <div className="gap-5 d-flex justify-content-center">
      <div className={`${styles.card} bg-primary`} style={{ width: "18rem" }}>
        <img src={MainLogo} className={styles.Main__logo} alt="Main Logo" />
        <div className="card-body">
          <span className={styles.card__text}>
            Simple, takes 5 minutes, promising
          </span>
          <span className={styles.card__text}>Cost risk : 0</span>
          <span className={styles.card__text}>
            You only need to submit claim (takes 5 minutes)
          </span>
          <span className={styles.card__text}>High chance of success</span>
          <span className={styles.card__text}>
            Help of experts in this field
          </span>
          <span className={styles.card__text}>
            Stress free (We do everything)
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlyinspectorCard;
