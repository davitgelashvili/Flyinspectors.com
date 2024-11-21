import CompensationIf from "./CompensationIf/CompensationIf";
import BeAware from "./BeAware/BeAware";
import CompensationInfo from "./CompensationInfo/CompensationInfo";


function LostLuggage() {
  return (
    <div>
      <CompensationInfo />
      <CompensationIf />
      <BeAware />
    </div>
  );
}

export default LostLuggage;
