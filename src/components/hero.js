import React from 'react';
import Button from './button';
import { useFirstThreeAvailableTimes } from '../utilities/useFilterAvailableTimes'; // Adjust path as necessary
import formatTimeTo12Hour from '../utilities/formatTimeTo12Hour';
import { useBookingTimes } from './bookingTimesContext';
import formatDateDisplay from '../utilities/formatDateDisplay';


function Hero() {
  const firstThreeTimes = useFirstThreeAvailableTimes();

  // Determine the date to use
  const dateToUse = firstThreeTimes.length > 0
    ? new Date() // Today's date
    : new Date(new Date().setDate(new Date().getDate() + 1)); // Tomorrow's date

  // Set the dateToUseString
  const dateToUseString = firstThreeTimes.length > 0 ? "today" : "tomorrow";

  const {
    setSelectedTime
  } = useBookingTimes();

  return (
    // this background should go across the entire screen.
    <section className={"section-container"} style={{backgroundColor: "#495E57", color: "white"}}>
      <div className={"width-limiter" }>
          <div id={"hero-inner-container"}>

            <div>
              {/* left side */}
              <h1 className={"hero-title"}>Little Lemon</h1>
              <h2 className={"hero-subtitle"}>Chicago</h2>
              <p>
                We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </p>
              <div style={{display: "flex", alignItems: "center"}}>
                <Button buttonText={"Reserve a Table"} buttonClass={"button-black"} link="/booking" />
               <p style={{marginLeft: "10px"}}>for {dateToUseString}, {formatDateDisplay(dateToUse)}</p>
              </div>
              {/* Display first 3 available booking times */}
              <div aria-label='Available reservation times' style={{ marginTop: "30px" }}>
                {firstThreeTimes.map(({ time }) => (
                  <Button
                    style={{marginRight: "20px"}}
                    key={time}
                    buttonText={formatTimeTo12Hour(time)}
                    buttonClass={"button-yellow"}
                    link="/booking"
                    onClick={setSelectedTime(formatTimeTo12Hour(time))}
                    ariaLabel={`Reserve a table for ${formatTimeTo12Hour(time)}`}
                  />
                ))}
              </div>
            </div>
            <img id={"hero-img"} style={{ maxHeight: "200px" }} className="image-rounded" src="Mario and Adrian A.jpg" />
          </div>
      </div>
    </section>
  );
}

export default Hero;
