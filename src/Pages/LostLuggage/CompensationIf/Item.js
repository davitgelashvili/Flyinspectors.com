import styles from "./CompensationIf.module.scss";

const Item = () => {
  return (
    <div>
      <h3 className={styles.headerOfQuestion}>
        What should you do if the baggage is damaged?
      </h3>
      <ul className={styles.bulletList}>
        <li>Hold onto your boarding pass or any document where the ticket reserves are set;</li>
        <li>
        Officially report the damage before leaving the airport
        </li>
        <li>
        Fill out a damage claim form
        </li>
        <li>Present your bags for inspection so they can be repaired or replaced</li>
      </ul>
    </div>
  );
};

export default Item;
