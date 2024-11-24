import styles from "./BeAware.module.scss";

const Item = () => {
  return (
    <div>
      <div className={styles.headerOfBullet}>
      What to do if the luggage is delayed:
      </div>
      <ul class={styles.bulletList}>
        <li>Hold onto your boarding pass or any document where the ticket reserves are set;</li>
        <li>
        Inform airlines of luggage delay;
        </li>
        <li>
        Fill in the form of formal complaint. The form has a unique number, which is necessary to remember;
        </li>
        <li>
        Ask for luggage tax returns, in case of payment;</li>
        <li>
        You can fill up a complaint within 45 days of luggage loading on US 
        flights and 21 days for EU or international flights.x</li>
      </ul>
    </div>
  );
};

export default Item;
