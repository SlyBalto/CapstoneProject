import React from 'react';
import Button from './button';
import formatTimeTo12Hour from '../utilities/formatTimeTo12Hour';
import { useBooking } from './bookingContext';
import PageTitle from './PageTitle';
import { useBookingTimes  } from './bookingTimesContext';
import formatDateDisplay from '../utilities/formatDateDisplay';

function BookingConfirm() {
  const { firstName, lastName, date, time, guests, occasion, seating, setStep } = useBooking(); // Access context values and setStep from context
  const { setTimeUnavailable } = useBookingTimes(); // Access booking times context

  // Final confirmation submission
  const handleConfirm = () => {
    setStep("complete"); // Goes to the Complete page
    console.log("Reservation Confirmed:", { date, time, guests, occasion });
    setTimeUnavailable(time);
  };

  // Cancel confirmation to go back to the form
  const handleCancel = () => {
    setStep("form"); // Go back to the form view by setting step to "form"
  };

  return (
    <div>
      <PageTitle titleText={"Looks Good?"} onClick={handleCancel}/>
      <div className="reservation-background" >
        <h1 className='justify-center' style={{margin: "0px"}} >{firstName} {lastName}</h1>
        <p>{formatDateDisplay(date)}</p>
        {time && <p>{formatTimeTo12Hour(time)}</p>}
        <p>{guests == 1 ? `${guests} Guest` : `${guests} Guests`}</p>
        <p>{seating} Seating</p>
        {occasion !== "none" && <p>{occasion}</p>}
        <div className='center-items'>
          <Button buttonText="Edit Reservation" buttonClass="button-black" onClick={handleCancel} style={{marginRight: "15px"}} />
          <Button buttonText="Confirm Reservation" buttonClass="button-yellow" onClick={handleConfirm} />
        </div>
      </div>
    </div>
  );
}

export default BookingConfirm;
