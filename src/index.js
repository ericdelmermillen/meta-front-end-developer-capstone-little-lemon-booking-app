import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React, { useState, createContext, useContext } from "react"; 

const formatDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString(undefined, options);
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [ showNav, setShowNav ] = useState(false);
  const [ scrollYPos, setScrollYPos ] = useState(window.scrollY);
  const [ prevScrollYPos, setPrevScrollYPos ] = useState(window.scrollY);
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [ showBookingForm, setShowBookingForm ] = useState(false);
  const [ showBookingConfirmed, setShowBookingConfirmed ] = useState(false);
  const [ reservationDate, setReservationDate ] = useState(new Date());
  const [ formattedReservationDate, setFormattedReservationDate ] = useState((formatDate(new Date())));
  
  const [ selectedHour, setSelectedHour ] = useState(new Date().getHours() > 12 ? (new Date().getHours() % 12) + 1: (new Date().getHours() + 1));
  const [ selectedMinute, setSelectedMinute ] = useState(0);
  const [ selectedPeriod, setSelectedPeriod ] = useState(new Date().getHours() < 12 ? 'AM' : 'PM');
  const [ guestNumber, setGuestNumber ] = useState(1);
  const [ reservationName, setReservationName ] = useState("");
  const [ reservationEmail, setReservationEmail ] = useState("");
  const [ extraInfo, setExtraInfo ] = useState("");
  const [ nameIsInvalid, setNameIsInvalid ] = useState(null);
  const [ emailIsInvalid, setEmailIsInvalid ] = useState(null);
  
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
    setGuestNumber,
    reservationName, 
    setReservationName,
    reservationEmail, 
    setReservationEmail,
    extraInfo, 
    setExtraInfo,
    nameIsInvalid, 
    setNameIsInvalid,
    emailIsInvalid, 
    setEmailIsInvalid
  };
  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

export { AppContext, AppProvider }