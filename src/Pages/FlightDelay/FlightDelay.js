import CompensationIf from "./CompensationIf/CompensationIf";
import CompensationHowMuch from "./CompensationHowMuch/CompensationHowMuch";
import BeAware from "./BeAware/BeAware";
import CompensationInfo from "./CompensationInfo/CompensationInfo";
import styles from "./FlightDelay.module.scss"
import Tablethree from "../../components/Tables/tablethree/tablethree"

function FlightDelay() {
  return (
    <div className={styles.MainContainer}>
      <CompensationInfo />
      <CompensationIf />
      <CompensationHowMuch />
      <BeAware />
      <Tablethree/>
    </div>
  );
}

export default FlightDelay;
