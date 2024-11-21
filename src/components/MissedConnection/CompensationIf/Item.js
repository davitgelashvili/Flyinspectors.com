import styles from "./CompensationIf.module.scss";

const Item = () => {
  return (
    <div>
      <h3 className={styles.headerOfQuestion}>Which flights are covered?</h3>
    <div className={styles.item}>
      <div className={styles.TextOfQuestion}>
      In the case of international flights carried out from the US, 
      the amount of compensation may reach USD 1350.
      </div>
      <div className={styles.TextOfQuestion}>
      According to EC 261 law applicable to the European Union, 
      compensation depends on the origin and flight of the airline. For details see the chart:
      </div>
    </div>
    </div>
  );
};

export default Item;
