import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Main from './Pages/Main/Main';
import SubmitClaim from './Pages/SubmitClaim/SubmitClaim';
import YourRights from './Pages/Your Rights/YourRights';
import FlightDelay from './components/FlightDelay/FlightDelay'
import FlightCancellation from './components/FlightCancellation/FlightCancellation'
import OverBooked from './components/OverBookedFlight/OverBooked'
import MissedConnection from './components/MissedConnection/MissedConnection';
import LostLuggage from './components/LostLuggage/LostLuggage';

function App() {
    return (
        <>
        <Header />
        <Routes>
            <Route path={'/'} element={<Main />}/>
            <Route path={'/submit-claim'} element={<SubmitClaim />}/>
            <Route path={'/your-rights'} element={<YourRights />}/>
            <Route path={'/your-rights/flight-delay'} element={<FlightDelay />}/>
            <Route path={'/your-rights/flight-cancellation'} element={<FlightCancellation />}/>
            <Route path={'/your-rights/overbooked-flight'} element={<OverBooked />}/>
            <Route path={'/your-rights/missed-connection'} element={<MissedConnection />}/>
            <Route path={'/your-rights/lost-luggage'} element={<LostLuggage />}/>
        </Routes>
        <Footer />
        </>
    )
}

export default App;
