import styles from "./WeGivesYou.module.scss";
import image from "../Images/LogoLeptop.png";

const Yourself = () => {
  return (
    <div className="gap-5 d-flex justify-content-center">
      <div className="card bg-primary" style={{ width: "18rem" }}>
        <img src={image} className={styles.image} alt="LogoLeptop" />
        <div className={styles.header}>YOURSELF</div>
        <div className="card-body">
          <span className={styles.card__text}>
            Overwhelming, annoying, time consuming
          </span>
          <span className={styles.card__text}>Cost risk : 0</span>
          <span className={styles.card__text}>Time-consuming</span>
          <span className={styles.card__text}>Overwhelming</span>
          <span className={styles.card__text}>Low chance of success</span>
          <span className={styles.card__text}>
            High chance of having to appeal to the court
          </span>
          <span className={styles.card__text}>Stressful</span>
          <span className={styles.card__text}>Most likely to give up</span>
        </div>
      </div>
    </div>
  );
};

export default Yourself;
