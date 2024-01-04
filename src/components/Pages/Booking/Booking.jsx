import "./Booking.scss";
import { AppContext } from "../../../index.js";
import { useContext } from "react";


const Booking = () => {
    const { 
      showBookingForm, 
      setShowBookingForm,
      showBookingConfirmed, 
      setShowBookingConfirmed
    } = useContext(AppContext);
  
  const handleReserve = () => {
    setShowBookingForm(!showBookingForm);
  }

  return (
    <>
      <div className="booking">
        <div className="booking__content">
          <div className="hero">
            <div className="hero__left">
              <h1 className="hero__heading">Bookings</h1>
              <h2 className="hero__subheading">
                Come Dine With Us
              </h2>
              <div className="hero__button-container">
                <div
                  className="hero__button--reversed"
                  onClick={handleReserve}>
                  Reserve
                  </div>
              </div>
              <p className="hero__blurb">
                Little Lemon can accomodate groups of up to 12 people.
              </p>
            </div>
            <div className="hero__right">
              <div className="hero__img--booking"></div>
              <div className="hero__overlay"></div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )};

export default Booking;