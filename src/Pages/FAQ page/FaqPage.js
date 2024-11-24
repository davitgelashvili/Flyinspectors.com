import Slider from "./Slider/Slider";
import FeesAndPayout from "./Fees and payout methods/FeesAndPayout";
import SubmitClaim from "./SubmitClaim/SubmitClaim";
import DocPrivacy from "./Documents and privacy/DocPrivacy";
import PassLaw from "./Air passenger Law/PassLaw";


function FaqPage() {
  return (
    <div>
      <Slider />
      <FeesAndPayout />
      <SubmitClaim />
      <DocPrivacy/>
      <PassLaw/>
    </div>
  );
}

export default FaqPage;
