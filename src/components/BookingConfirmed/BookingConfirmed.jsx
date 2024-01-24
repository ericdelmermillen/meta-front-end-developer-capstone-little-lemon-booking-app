import "./BookingConfirmed.scss";
import thankYouLemon from "../../assets/thank-you-lemon.png";
import { useContext } from "react";
import { AppContext } from "../../index.js";

const BookingConfirmed = ( {clearInputs} ) => {
  const { 
    showBookingConfirmed, 
    setShowBookingConfirmed,
    formattedReservationDate, 
    selectedHour, 
    selectedMinute, 
    selectedPeriod, 
    guestNumber
  } = useContext(AppContext);

  const handleConfirmed = () => {
    setShowBookingConfirmed(false)
    clearInputs();
  }
  
  return (
    <>
      <div className={`bookingConfirmed ${showBookingConfirmed && "show"}`}>
        <h1 className="bookingConfirmed__heading">Table for {guestNumber} Confirmed!</h1>
        <img className="bookingConfirmed__lemon" src={thankYouLemon} alt="Thank you graphic" />
        <h3 className="bookingConfirmed__details">See you {formattedReservationDate} at {`${selectedHour}:${selectedMinute === 0 ? "00" : selectedMinute}:${selectedPeriod}`}</h3>
        <div 
          className="bookingConfirmed__button" 
          onClick={handleConfirmed}>
          Ok
        </div>
      </div>
    </>
  )};

export default BookingConfirmed;