import "./BookingForm.scss";
import { useState, useContext } from "react";
import { AppContext } from "../../index.js";
import ReservationDatePicker from "../ReservationDatePicker/ReservationDatePicker.jsx";
import ReservationTimePicker from "../ReservationTimePicker/ReservationTimePicker.jsx";
import GuestNumberSelector from "../GuestNumberSelector/GuestNumberSelector.jsx";




const getScreenHeight = () => {
  const screenHeight = window.innerHeight;
  console.log(`Screen height: ${screenHeight}px`);
}


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
    reservationName, 
    setReservationName,
    reservationEmail, 
    setReservationEmail,
    extraInfo, 
    setExtraInfo,
    nameIsInvalid, 
    setNameIsInvalid,
    emailIsInvalid, 
    setEmailIsInvalid,
    windowWidth
  } = useContext(AppContext);
  
    const handleNameChange = (e) => {
      setReservationName(e.target.value);
      nameIsInvalid && nameValidation()
    }
    
    const handleEmailChange = (e) => {
      setReservationEmail(e.target.value);
      emailIsInvalid && emailValidation()
    }

  const nameValidation = () => {
    const isInvalidName = reservationName.trim().length < 2;
    setNameIsInvalid(isInvalidName);
    return !isInvalidName; 
  }

  const emailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isInvalidEmail = !emailRegex.test(reservationEmail);
    setEmailIsInvalid(isInvalidEmail);
    return !isInvalidEmail; 
  }

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
  }

  const handleCancel = () => {
    setShowBookingForm(false);
    clearInputs();
  }

  const handleSubmit = (e) => {
    let isNameValid = nameValidation();
    let isEmailValid = emailValidation();
    const dateWithoutTime = reservationDate.toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];
    const todayHour = new Date().getHours();
    console.log(dateWithoutTime > today)
      
      if (!isNameValid || !isEmailValid) {
        return;
      } else { 
        setShowBookingForm(false);
        setShowBookingConfirmed(true);
        setGuestNumber(1);
        setReservationDate(reservationDate);
        setFormattedReservationDate(formattedReservationDate);
        setGuestNumber(guestNumber);
      }
    }
  
  return (
    <>
      <form className={`bookingForm ${showBookingForm && "show"}`}>

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
          
          <div className="bookingForm__guestsAndTime">
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
              <label className="bookingForm__label" htmlFor="reservationTime">{windowWidth > 400 ? "Reservation Time:": "Time"}</label>
              <ReservationTimePicker
                id="reservationTime" />
            </div>
          </div>

        </div>

        <div className="bookingForm__specialRequests">
          <label 
            className="bookingForm__label" 
            htmlFor="extraInfo">
              Extra Info:
          </label>
          <textarea
            className="bookingForm__input bookingForm__extra-info"
            value={extraInfo}
            id="extraInfo"
            onChange={(e) => setExtraInfo(e.target.value)}
            aria-label="Extra Info"
            placeholder="Special Requests"/>
        </div>

        <div className="bookingForm__button-container">
          <div
            className="bookingForm__button"
            onClick={handleCancel}>
            Cancel
          </div>
          <div
            className="bookingForm__button"
            onClick={handleSubmit}>
            Confirm
          </div>
        </div>
      </form>
    </>
  )};

export default BookingForm;