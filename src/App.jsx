import './App.scss';
import { Route, Routes } from "react-router-dom";
import { useState, createContext, useContext } from "react"; 

import Header from './components/Header/Header.jsx';
import Nav from "../src/components/Nav/Nav.jsx";
import BookingForm from './components/BookingForm/BookingForm.jsx';
import BookingConfirmed from './components/BookingConfirmed/BookingConfirmed.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import FloatingBookingButton from "../src/components/FloatingBookingButton/FloatingBookingButton.jsx";

import Home from './components/Pages/Home/Home.jsx';
import Menu from './components/Pages/Menu/Menu.jsx';
import About from './components/Pages/About/About.jsx';
import Booking from "./components/Pages/Booking/Booking.jsx"
import NotFound from './components/Pages/NotFound/NotFound.jsx';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [ showNav, setShowNav ] = useState(false);
  const [ scrollYPos, setScrollYPos ] = useState(window.scrollY);
  const [ prevScrollYPos, setPrevScrollYPos ] = useState(window.scrollY);
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [ showBookingForm, setShowBookingForm ] = useState(false);
  const [ showBookingConfirmed, setShowBookingConfirmed ] = useState(false);
  const [ reservationDate, setReservationDate ] = useState(new Date());
  const [ formattedReservationDate, setFormattedReservationDate ] = useState(new Date().toLocaleDateString());
  const [ selectedHour, setSelectedHour ] = useState(new Date().getHours() > 12 ? (new Date().getHours() % 12) + 1: (new Date().getHours() + 1));
  const [ selectedMinute, setSelectedMinute ] = useState(0);
  const [ selectedPeriod, setSelectedPeriod ] = useState(new Date().getHours() < 12 ? 'AM' : 'PM');
  const [ guestNumber, setGuestNumber ] = useState(1);
  
  const contextValues = {
    showNav,
    setShowNav,
    scrollYPos,
    setScrollYPos,
    prevScrollYPos,
    setPrevScrollYPos,
    windowWidth, 
    setWindowWidth,
    showBookingForm, 
    setShowBookingForm,
    showBookingConfirmed, 
    setShowBookingConfirmed,
    reservationDate, 
    setReservationDate,
    formattedReservationDate, 
    setFormattedReservationDate,
    selectedHour, 
    setSelectedHour,
    selectedMinute, 
    setSelectedMinute,
    selectedPeriod, 
    setSelectedPeriod,
    guestNumber, 
    setGuestNumber
  };
  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

const App = () => {

  return (
    <>
      <div className="app">
        <AppProvider>
          <Header />
          <Nav />
          <BookingForm />
          <FloatingBookingButton />
          <BookingConfirmed />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AppProvider>
        <Footer/>
      </div>
    </>
)};

export default App;
export { AppContext, useContext };