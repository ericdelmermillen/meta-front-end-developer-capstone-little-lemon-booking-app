import './App.scss';
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react"; 
import { AppContext } from "../src/index.js";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
  
const App = ({ formatDate }) => {
  const { 
    showNav,
    setShowNav,
    windowWidth, 
    showBookingForm, 
    setShowBookingForm,
    showBookingConfirmed, 
    setShowBookingConfirmed,
    setReservationDate,
    setFormattedReservationDate,
    setSelectedHour,
    setSelectedMinute,
    setSelectedPeriod,
    setGuestNumber,
    setReservationName,
    setReservationEmail,
    setExtraInfo,
    setNameIsInvalid,
    setEmailIsInvalid
  } = useContext(AppContext);


const clearInputs = () => {
    setReservationName("");
    setReservationEmail("");
    setExtraInfo("");
    setNameIsInvalid(null);
    setEmailIsInvalid(null);
    setReservationDate(new Date());
    setGuestNumber(1);
    setSelectedHour(new Date().getHours() > 12 ? (new Date().getHours() % 12) + 1: (new Date().getHours() + 1));
    setSelectedMinute(0);
    setSelectedPeriod(new Date().getHours() < 12 ? 'AM' : 'PM');
    setExtraInfo("")
    setGuestNumber(1);
    setFormattedReservationDate(new Date().toLocaleDateString())
  }

  const handleCancel = () => {
    setShowBookingForm(false);
    clearInputs();
  }

  const handleTouchOffDiv = () => {
    if(showNav) {
      setShowNav(false)
    } else if(showBookingForm) {
      setShowBookingForm(false)
    } else if(showBookingConfirmed) {
      setShowBookingConfirmed(false)
    }
    handleCancel()
  }

  const handleInvalidName = () => {
    toast("🍋 Reservation name minimum 2 characters...");
  }

  const handleInvalidEmail = () => {
    toast("🍋 Sorry, we need a valid email...");
  }

  useEffect(() => {
    setShowNav(false)
  }, [windowWidth])

  return (
    <>
      <div className="app">
          <Header />
          <Nav />
          <FloatingBookingButton />
          <BookingForm 
            formatDate={formatDate}
            handleInvalidName={handleInvalidName}
            handleInvalidEmail={handleInvalidEmail}
            handleCancel={handleCancel}
          />
          <BookingConfirmed clearInputs={clearInputs}/>
          {(showNav || showBookingForm || showBookingConfirmed) &&
            <div className="touchOffDiv"
              onClick={handleTouchOffDiv}
            ></div>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        <Footer/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"/>
      </div>
    </>
)};

export default App;