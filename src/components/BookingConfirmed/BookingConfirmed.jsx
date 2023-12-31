import "./BookingConfirmed.scss";
import thankYouLemon from "../../assets/thank-you-lemon.png";
import { useContext } from "react";
import { AppContext } from "../../App.jsx";

const BookingConfirmed = () => {
  const { 
    showBookingConfirmed, 
    setShowBookingConfirmed,
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
  } = useContext(AppContext);
  
  return (
    <>
      <div className={`bookingConfirmed ${showBookingConfirmed && "show"}`}>
        <h1 className="bookingConfirmed__heading">Table for {guestNumber} Confirmed!</h1>
        <img className="bookingConfirmed__lemon" src={thankYouLemon} alt="Thank you graphic" />
        <p className="bookingConfirmed__details">See you {formattedReservationDate} at {`${selectedHour}:${selectedMinute === 0 ? "00" : selectedMinute}:${selectedPeriod}`}</p>
        <div 
          className="bookingConfirmed__button" 
          onClick={() => setShowBookingConfirmed(false)}>
          Ok
        </div>
      </div>
    </>
  )};

export default BookingConfirmed;