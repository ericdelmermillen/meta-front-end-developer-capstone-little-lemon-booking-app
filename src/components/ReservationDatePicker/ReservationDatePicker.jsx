import "./ReservationDatePicker.scss";
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import { AppContext } from "../../index.js";

const ReservationDatePicker = () => {
  const { 
    reservationDate,
    setReservationDate,
    formattedReservationDate, 
    setFormattedReservationDate,
    windowWidth,
    setWindowWidth
  } = useContext(AppContext);

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString(undefined, options);
  };

  const handleDatePickerKeyboard = (e) => {
    e.target.readOnly = true;
  }

  return (
    <>
      <DatePicker
        selected={reservationDate}
        onChange={(date) => {
          setReservationDate(date)
          setFormattedReservationDate(formatDate(date));
          }
        }
        value={reservationDate ? formatDate(reservationDate) : ''}
        className={`reservationDatePicker__input ${windowWidth > 400 && "wide"}`}
        minDate={new Date()}
        onFocus={(e) => handleDatePickerKeyboard(e)}
      />
    </>
  )};

export default ReservationDatePicker;
