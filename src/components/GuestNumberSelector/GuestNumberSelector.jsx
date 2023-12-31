import "./GuestNumberSelector.scss";
import { useContext } from 'react';
import { AppContext } from "../../App.jsx";

const GuestNumberSelector = () => {
  const {
    guestNumber, 
    setGuestNumber
  } = useContext(AppContext);
  
  const seatingFor = Array.from({ length: 12 }, (_, i) => i + 1); 
  
  return (
    <>
      <div className="guestNumberSelector">
        <select 
          className="guestNumberSelector__select"
          onChange={(e) => setGuestNumber(e.target.value)}> 
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