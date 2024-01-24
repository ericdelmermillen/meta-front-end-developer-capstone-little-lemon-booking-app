import "./FloatingBookingButton.scss";
import { AppContext } from "../../index.js";
import { useContext } from "react";
import floatingBookingButton from "../../assets/little-lemon-floating-button.png";

const FloatingBookingButton = () => {
  const { 
    showBookingForm, 
    setShowBookingForm,
    showBookingConfirmed
  } = useContext(AppContext);

const handleFloatingButton = () => {
  setShowBookingForm(!showBookingForm);
}

  return (
    <div 
      className={`floatingBookingButton ${!showBookingForm && !showBookingConfirmed && "show"}`}
      onClick={handleFloatingButton}>
      <img 
        className="floatingBookingButton__img"
        src={floatingBookingButton} alt="Floating Resvervation Booking Button" />
    </div>
  )};

export default FloatingBookingButton;