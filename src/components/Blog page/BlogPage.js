import BeAware from "./BeAware/BeAware";
import Slider from "./Slider/Slider";
import CancelledFlights from "./CancelledFlights/CancelledFlights";

function BlogPage() {
  return (
    <div>
      <Slider />
      <CancelledFlights />
      <BeAware />
    </div>
  );
}

export default BlogPage;
