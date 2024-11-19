import CompensationIf from "./CompensationIf/CompensationIf";
import CompensationHowMuch from "./CompensationHowMuch/CompensationHowMuch";
import BeAware from "./BeAware/BeAware";
import CompensationInfo from "./CompensationInfo/CompensationInfo";

function YourRights() {
  return (
    <div>
      <CompensationInfo />
      <CompensationIf />
      <CompensationHowMuch />
      <BeAware />
    </div>
  );
}

export default YourRights;
