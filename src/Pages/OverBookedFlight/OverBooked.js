import CompensationIf from "./CompensationIf/CompensationIf";
import CompensationUSA from "./CompensationUSA/CompensationUSA";
import BeAware from "./BeAware/BeAware";
import CompensationInfo from "./CompensationInfo/CompensationInfo";
import TableJust from "./TableJust/TableJust";
import CompensationEU from "./CompensationEU/CompensationEU";


function OverBooked() {
  return (
    <div>
      <CompensationInfo />
      <CompensationIf />
      <TableJust/>
      <CompensationUSA />
      <CompensationEU/>
      <BeAware />
    </div>
  );
}

export default OverBooked;
