import CompensationIf from "./CompensationIf/CompensationIf";
import CompensationUSA from "./CompensationUSA/CompensationUSA";
import BeAware from "./BeAware/BeAware";
import CompensationInfo from "./CompensationInfo/CompensationInfo";
import TableJust from "./TableJust/TableJust";
import CompensationEU from "./CompensationEU/CompensationEU";
import styles from "./MissedConnection.module.scss"


function MissedConnection() {
  return (
    <div className={styles.MainContainer}>
      <CompensationInfo />
      <CompensationIf />
      <TableJust/>
      <CompensationUSA />
      <CompensationEU/>
      <BeAware />
    </div>
  );
}

export default MissedConnection;
