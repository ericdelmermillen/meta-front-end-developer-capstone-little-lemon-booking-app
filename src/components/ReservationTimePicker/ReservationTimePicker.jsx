import "./ReservationTimePicker.scss";
import { useContext } from "react";
import { AppContext } from "../../index.js";

const ReservationTimePicker = () => {
  const { 
    showNav, 
    setShowNav, 
    scrollYPos, 
    setScrollYPos, 
    prevScrollYPos, 
    setPrevScrollYPos,
    selectedHour, 
    setSelectedHour,
    selectedMinute, 
    setSelectedMinute,
    selectedPeriod, 
    setSelectedPeriod
  } = useContext(AppContext);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1); 
  const minutes = Array.from({ length: 4 }, (_, i) => i * 15);
  const periods = ['AM', 'PM'];

  const handleHourChange = (e) => {
    setSelectedHour(parseInt(e.target.value, 10));
  };

  const handleMinuteChange = (e) => {
    setSelectedMinute(parseInt(e.target.value, 10));
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  return (
    <div className="reservationTimePicker">
      <select 
        className="reservationTimePicker__hour"
        value={selectedHour} 
        onChange={(e) => handleHourChange(e)}>
        {hours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
          <span>:</span>
      {/* <label htmlFor="minutes"></label> */}
      <select id="minutes" value={selectedMinute} onChange={handleMinuteChange}>
        {minutes.map((minute) => (
          <option key={minute} value={minute}>
            {minute === 0 ? "00" : minute}
          </option>
        ))}
      </select>

      <label htmlFor="period"></label>
      <select 
        id="period" 
        className="reservationTimePicker__minutes"
        value={selectedPeriod} 
        onChange={handlePeriodChange}>
        {periods.map((period) => (
          <option key={period} value={period}>
            {period}
          </option>
        ))}
      </select>

      {/* <p>
        Selected Time: {selectedHour}:{selectedMinute === 0 ? '00' : selectedMinute} {selectedPeriod}
      </p> */}
    </div>
  );
};

export default ReservationTimePicker;
