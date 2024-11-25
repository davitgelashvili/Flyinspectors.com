import styles from "./WeGivesYou.module.scss";
import Operator from "../Images/Operator.png";
const Lawyer = () => {
  return (
    <div className="gap-5 d-flex justify-content-center">
      <div className={`${styles.card} bg-primary`} style={{ width: "18rem" }}>
        <img
          src={Operator}
          className={styles.OperatorLogo}
          alt="Operator Logo"
        />
        <div className={styles.header}>LAWYER</div>
        <div className="card-body">
          <span className={styles.card__text}>Expensive, Complex </span>
          <span className={styles.card__text}>
            Cost risk: several hundred euros as much as the compensation you
            may get
          </span>
          <span className={styles.card__text}>Time-consuming </span>
          <span className={styles.card__text}>
            High chance of having to appeal to the court
          </span>
          <span className={styles.card__text}>
            chance of success depends on the specialist
          </span>
          <span className={styles.card__text}>
            Stressful (you have to cooperate with the lawyer)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
