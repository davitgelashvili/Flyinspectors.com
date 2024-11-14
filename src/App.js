import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Main from './Pages/Main/Main';
import SubmitClaim from './Pages/SubmitClaim/SubmitClaim';

function App() {
    return (
        <>
        <Header />
        <Routes>
            <Route path={'/'} element={<Main />}/>
            <Route path={'/submit-claim'} element={<SubmitClaim />}/>
        </Routes>
        <Footer />
        </>
    )
}

export default App;
