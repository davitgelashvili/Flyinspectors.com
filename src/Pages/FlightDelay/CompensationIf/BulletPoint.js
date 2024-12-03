import styles from "./CompensationIf.module.scss";

const BulletPoint = () => {
  return (
    <div>
      <div className={styles.headerOfBullet}>
        You have the right to claim compensation if:
      </div>
      <ul className={styles.bulletList}>
        <li>Your flight arrived at the destination 3&lt; hours later</li>
        <li>Your flight took off in the EU or landed in the EU;</li>
        <li>
          You have checked in for your flight on time (at least 45 minutes
          before departure);
        </li>
        <li>The flight was delayed no more than three years ago;</li>
        <li>Flight delay is caused by airline;</li>
        <li>Even if the airline offered you a voucher for food and hotel.</li>
      </ul>
    </div>
  );
};

export default BulletPoint;
