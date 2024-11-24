import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";
import Main from "./Pages/Main/Main";
import SubmitClaim from "./Pages/SubmitClaim/SubmitClaim";
import FlightDelay from "./Pages/FlightDelay/FlightDelay";
import FlightCancellation from "./Pages/FlightCancellation/FlightCancellation";
import OverBooked from "./Pages/OverBookedFlight/OverBooked";
import MissedConnection from "./Pages/MissedConnection/MissedConnection";
import LostLuggage from "./Pages/LostLuggage/LostLuggage";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import AboutUs from "./Pages/About Us/AboutUs";
import BlogPage from "./Pages/Blog page/BlogPage";
import FaqPage from "./Pages/FAQ page/FaqPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/submit-claim"} element={<SubmitClaim />} />
        <Route path={"/your-rights/flight-delay"} element={<FlightDelay />} />
        <Route
          path={"/your-rights/flight-cancellation"}
          element={<FlightCancellation />}
        />
        <Route
          path={"/your-rights/overbooked-flight"}
          element={<OverBooked />}
        />
        <Route
          path={"/your-rights/missed-connection"}
          element={<MissedConnection />}
        />
        <Route path={"/your-rights/lost-luggage"} element={<LostLuggage />} />
        <Route path={"/adminpanel"} element={<AdminPanel />} />
        <Route path={"/about-us"} element={<AboutUs />} />
        <Route path={"/about-us/blog"} element={<BlogPage />} />
        <Route path={"/about-us/faq"} element={<FaqPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
