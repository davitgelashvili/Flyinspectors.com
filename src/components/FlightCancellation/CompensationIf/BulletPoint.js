import styles from "./CompensationIf.module.scss";

const BulletPoint = () => {
  return (
    <div>
      <div className={styles.headerOfBullet}>
        You have the right to claim compensation if:
      </div>
      <ul class={styles.bulletList}>
        <li>Your flight was cancelled without at least 14 days prior notice;</li>
        <li>The flight was cancelled no more than three years ago;</li>
        <li>Flight cancellation is caused by airline;</li>
        <li>Even if the airline offered you a voucher for food and hotel.</li>
      </ul>
    </div>
  );
};

export default BulletPoint;
