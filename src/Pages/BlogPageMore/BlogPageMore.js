import Slider from "../../components/Common/Slider/Slider";
import CancelledFlights from "./CancelledFlights/CancelledFlights";
import MechanicalIssues from "./Mechanical Issues/MechanicalIssues";


function BlogPageMore() {
  return (
    <div>
      <Slider/>
      <CancelledFlights />
      <MechanicalIssues />
    </div>
  );
}

export default BlogPageMore;
