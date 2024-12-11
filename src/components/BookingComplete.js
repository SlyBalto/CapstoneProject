import React from 'react';
import Button from './button';
import PageTitle from './PageTitle';
import formatTimeTo12Hour from '../utilities/formatTimeTo12Hour';
import { useBooking } from './bookingContext';

function BookingComplete() {
  const { time } = useBooking(); // Access context values properly



  // Ensure `time` has a valid value before formatting
  const timeDisplay = time ? formatTimeTo12Hour(time) : 'N/A';

  return (
    <div>
      <PageTitle titleText="Table Reserved!"/>
      <div className="reservation-background" style={{textAlign: "center"}}>
        <h1>Your table for {timeDisplay} has been set!</h1>
        <div className='center-items'>
          <Button buttonText="Return To Homepage" buttonClass="button-yellow" link="/" />
        </div>
      </div>
    </div>
  );
}

export default BookingComplete;
