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
import ContactUs from "./Pages/Contact Us/ContactUs";
import BlogPageMore from "./Pages/BlogPageMore/BlogPageMore";
import UserList from "./components/Dashboard/User/List";
import UserEdit from "./components/Dashboard/User/Edit";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component
import "./i18n/i18n";
import ServicesList from "./components/Dashboard/Services/List";
import ServicesEdit from "./components/Dashboard/Services/Edit";
import RateList from "./components/Dashboard/Rate/List";
import RateEdit from "./components/Dashboard/Rate/Edit";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import ContactList from "./components/Dashboard/ContactList/List";
import ContactEdit from "./components/Dashboard/ContactList/Edit";
import BlogPageMoreAirports from "./Pages/BlogPageMore Airports/BlogPageMore";
import BlogPageMorePets from "./Pages/BlogPageMore Pets/BlogPageMorePets";
import BlogPageMorePilots from "./Pages/BlogPageMore Pilots/BlogPageMorePilots";
import ConditionsList from "./components/Dashboard/Conditions/List";
import ConditionsEdit from "./components/Dashboard/Conditions/Edit";
import ConditionsAdd from "./components/Dashboard/Conditions/Add";
import { useDispatch } from "react-redux";
import { siteTranslateAction } from "./store/translate";
import { useEffect } from "react";

function App() {
  const windowUrl = window.location.host
  const dispatch = useDispatch()

  useEffect(()=> {
    if(windowUrl === `flyinpectors.com`){
      dispatch(siteTranslateAction.changeLanguage('en'))
    }
    
    if(windowUrl === `flyinpectors.ge`){
      dispatch(siteTranslateAction.changeLanguage('ka'))
    }
    
    if(windowUrl === `flyinpectors.co.uk`){
      dispatch(siteTranslateAction.changeLanguage('en'))
    }
    
    if(windowUrl === 'localhost:3000' || windowUrl === 'http://127.0.0.1/'){
      dispatch(siteTranslateAction.changeLanguage('en'))
    }
  }, [dispatch])

  return (
    <>
      <ScrollToTop /> {/* Add ScrollToTop */}
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
        <Route path={"/about-us"} element={<AboutUs />} />
        <Route path={"/about-us/blog"} element={<BlogPage />} />
        <Route path={"/about-us/faq"} element={<FaqPage />} />
        <Route path={"/about-us/blog-page-more"} element={<BlogPageMore />} />
        <Route
          path={"/about-us/blog-page-more-airports"}
          element={<BlogPageMoreAirports />}
        />
        <Route path={"/about-us/blog-page-more-pets"} element={<BlogPageMorePets/>} />
        <Route path={"/about-us/blog-page-more-pilots"} element={<BlogPageMorePilots/>} />
        <Route path={"/contact-us"} element={<ContactUs />} />
        <Route
          path={"/terms-and-conditions"}
          element={<TermsAndConditions />}
        />

        <Route path={"/adminpanel"} element={<AdminPanel />} />

        <Route path={"/adminpanel/userlist"} element={<UserList />} />
        <Route path={"/adminpanel/userlist/:id"} element={<UserEdit />} />

        <Route path={"/adminpanel/services"} element={<ServicesList />} />
        <Route path={"/adminpanel/services/:id"} element={<ServicesEdit />} />

        <Route path={"/adminpanel/rate"} element={<RateList />} />
        <Route path={"/adminpanel/rate/:id"} element={<RateEdit />} />

        <Route path={"/adminpanel/contact"} element={<ContactList />} />
        <Route path={"/adminpanel/contact/edit"} element={<ContactEdit />} />

        <Route path={"/adminpanel/condition"} element={<ConditionsList />} />
        <Route path={"/adminpanel/condition/:id"} element={<ConditionsEdit />} />
        <Route path={"/adminpanel/condition/add"} element={<ConditionsAdd />} />
        <Route path={"/*"} element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
