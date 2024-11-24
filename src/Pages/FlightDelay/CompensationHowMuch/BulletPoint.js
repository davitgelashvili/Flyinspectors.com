import styles from "./CompensationHowMuch.module.scss";

const BulletPoint = () => {
  return (
    <div>
      <div className={styles.headerOfBullet}>
        How much compensation should you get for flight delay?
      </div>
      <div className={styles.headerOfBullet}>
        For flights covered by EU law EC 261, any delay longer than three hours
        entitles you to a financial compensation.
      </div>
      <div className={styles.headerOfBullet}>
        The amount of delayed flight compensation you receive depends on the
        duration of the delay and the distance of your flight. For details see
        the chart:
      </div>
    </div>
  );
};

export default BulletPoint;
