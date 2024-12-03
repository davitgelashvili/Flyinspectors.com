import styles from "./CompensationIf.module.scss";

const BulletPoint = () => {
  return (
    <div>
      <div className={styles.headerOfBullet}>
        According to EC 261 law, due to such a flight, you qualify for
        compensation if:
      </div>
      <ul className={styles.bulletList}>
        <li>The flight is carried out inside EU territory;</li>
        <li>
          You have not received a travel voucher or extra compensation from the
          airline;
        </li>
        <li>
          The denial to sit down was not due to your reasons, for example by
          arriving late or not having a passport;;
        </li>
        <li>If such an incident occurred during the last 3 years.</li>
      </ul>
    </div>
  );
};

export default BulletPoint;
