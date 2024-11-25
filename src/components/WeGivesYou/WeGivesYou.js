import FlyinspectorsCard from "./FlyinspectorCard";
import Yourself from "./Yourself";
import Lawyer from "./Lawyer";
const WeGivesYou = () => {
  return (
    <div className="WeGivesYou">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <Yourself />
          </div>
          <div className="col-lg-4 col-12">
            <FlyinspectorsCard />
          </div>
          <div className="col-lg-4 col-12">
            <Lawyer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeGivesYou;
