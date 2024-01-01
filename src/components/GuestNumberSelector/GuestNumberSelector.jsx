import "./GuestNumberSelector.scss";
import { useContext } from 'react';
import { AppContext } from "../../index.js";

const GuestNumberSelector = () => {
  const {
    guestNumber, 
    setGuestNumber
  } = useContext(AppContext);
  
  const seatingFor = Array.from({ length: 12 }, (_, i) => i + 1); 

  const handleSeatingChange = (e) => {
    setGuestNumber(e.target.value)
  }
  
  return (
    <>
      <div className="guestNumberSelector">
        <select 
          className="guestNumberSelector__select"
          value={guestNumber} 
          onChange={(e) => handleSeatingChange(e)}> 
            {seatingFor.map((seatingOption) => (
              <option 
                className="guestNumberSelector__option"
                value={seatingOption} 
                key={seatingOption}>
                  {seatingOption}
              </option>
            )
          )}
        </select>
      </div>
    </>
  )};

export default GuestNumberSelector;