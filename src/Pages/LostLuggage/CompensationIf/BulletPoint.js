import styles from "./CompensationIf.module.scss";

const BulletPoint = () => {
  return (
    <div>
      <div className={styles.headerOfBullet}>
      what to do when the airlines lose your luggage:
      </div>
      <ul className={styles.bulletList}>
        <li>Hold onto your boarding pass or any document where the ticket reserves are set;</li>
        <li>
        Create a list of items that you have placed in your lost bag;
        </li>
        <li>
        Submit a list of missing items, boarding pass and luggage check to airline representatives.
        </li>
        <li>
          If the missing items were primary consumption or items that are 
          vital for you, ask for immediate remuneration.</li>
      </ul>
    </div>
  );
};

export default BulletPoint;
