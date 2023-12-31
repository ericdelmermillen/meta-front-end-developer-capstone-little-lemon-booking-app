import "./BookingForm.scss";
import { useState, useContext } from "react";
import { AppContext } from "../../App.jsx";
import ReservationDatePicker from "../ReservationDatePicker/ReservationDatePicker.jsx";
import ReservationTimePicker from "../ReservationTimePicker/ReservationTimePicker.jsx";
import GuestNumberSelector from "../GuestNumberSelector/GuestNumberSelector.jsx";

const BookingForm = () => {
  const { 
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
  } = useContext(AppContext);

  const [ reservationName, setReservationName ] = useState("");
  const [ reservationEmail, setReservationEmail ] = useState("");
  const [ extraInfo, setExtraInfo ] = useState("");
  const [ nameIsInvalid, setNameIsInvalid ] = useState(null);
  const [ emailIsInvalid, setemailIsInvalid ] = useState(null);

  const nameValidation = () => {
    const isInvalidName = reservationName.trim().length < 2;
    setNameIsInvalid(isInvalidName);
  }

  const emailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isInvalidEmail = !emailRegex.test(reservationEmail);
    setemailIsInvalid(isInvalidEmail);
  }

  const handleNameChange = (e) => {
    setReservationName(e.target.value);
    nameIsInvalid && nameValidation()
  }
  
  const handleEmailChange = (e) => {
    setReservationEmail(e.target.value);
    emailIsInvalid && emailValidation()
  }

  const handleSubmit = () => {

    nameValidation()
    console.log(nameIsInvalid); 

    const dateString = (
      `${new Date(reservationDate).getDate()}-${new Date(reservationDate).getMonth() + 1}-${new Date(reservationDate).getFullYear()}`)
    
    // console.log(reservationDate)
    const reservationTimeString = selectedPeriod === 'PM' ? `${selectedHour + 12}:${selectedMinute === 0 ? "00:00" : selectedMinute}:00` : `${selectedPeriod === 'PM' ? selectedHour + 12 : selectedHour}:${selectedMinute === 0 ? "00" : selectedMinute}` + ":00"

    // console.log(new Date(`${dateString} ${reservationTimeString}`))
    // console.log(reservationTimeString)



    setShowBookingForm(false);
    setShowBookingConfirmed(true);
    // setReservationName("");
    // setReservationEmail("");
    setGuestNumber(1);
    // setExtraInfo("");
    setReservationDate(reservationDate);
    setFormattedReservationDate(formattedReservationDate);
    setGuestNumber(guestNumber);
  }

  return (
    <>
      <form className={`bookingForm ${showBookingForm && "show"}`}>
        <h1 className="bookingForm__h1">Reserve A Table</h1>

        <label 
          className="bookingForm__label" 
          htmlFor="reservationName">
            Reservation Name:
        </label>
        <input 
          className={`bookingForm__input ${nameIsInvalid && "invalid"}`} 
          type="text" 
          value={reservationName}
          onBlur={nameValidation}
          onChange={(e) => handleNameChange(e)}
          id="reservationName" 
          aria-label="Reservation Name"
          placeholder="Reservation Name"/>

        <label 
          className="bookingForm__label" 
          htmlFor="reservationEmail">
            Reservation Email:
        </label>
        <input 
          className={`bookingForm__input ${emailIsInvalid && "invalid"}`} 
          type="email" 
          value={reservationEmail}
          onChange={(e) => handleEmailChange(e)}
          onBlur={emailValidation}
          id="reservationEmail" 
          aria-label="Reservation Email"
          placeholder="Reservation Email"/>
          
        <div className="bookingForm__options">
          <div className="bookingForm__date">
            <label 
              className="bookingForm__label" 
              htmlFor="reservationDate">
                Reservation Date:
            </label>
            <ReservationDatePicker 
              aria-label="Reservation Date"
              id="reservationDate" />
          </div>
          
          <div className="bookingForm__guests-selector">
            <label 
              className="bookingForm__label" 
              htmlFor="guestNumber">
                Seating for:
            </label>
              <GuestNumberSelector
                className="bookingForm__input"
                id="guestNumber"
                aria-label="Guest Number" />
          </div>

          <div className="bookingForm__time">
            <label className="bookingForm__label" htmlFor="reservationTime">Reservation Time:</label>
            <ReservationTimePicker 
              id="reservationTime"
            />
          </div>
        </div>

        <div className="bookingForm__specialRequests">
          <label 
            className="bookingForm__label" 
            htmlFor="extraInfo">
              Extra Info:
          </label>
          <textarea
            className="bookingForm__input"
            value={extraInfo}
            id="extraInfo"
            onChange={(e) => setExtraInfo(e.target.value)}
            aria-label="Extra Info"
            placeholder="Special Requests"/>
        </div>

        <div 
          className="bookingForm__button"
          onClick={() => setShowBookingForm(false)}>
          Cancel
        </div>
        <div
          className="bookingForm__button"
          onClick={handleSubmit}>
          Confirm
        </div>
      </form>
    </>
  )};

export default BookingForm;