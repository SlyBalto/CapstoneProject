import React from 'react';
import BookingForm from './bookingform';
import BookingFormConfirm from './BookingConfirm';
import BookingFormComplete from './BookingComplete';
import { BookingProvider, useBooking } from './bookingContext';

function Booking() {
  const { step } = useBooking(); // gets current step from context

  // Determine which component to render based on the current step
  let CurrentComponent;
  switch (step) {
    case "confirm":
      CurrentComponent = BookingFormConfirm;
      break;
    case "complete":
      CurrentComponent = BookingFormComplete;
      break;
    default:
      CurrentComponent = BookingForm;
  }

  return (
    <main className="vertical-stack" id="booking-container">
      <div>
        <CurrentComponent />
      </div>
    </main>
  );
}

export default function BookingWrapper() {
  return (
    <BookingProvider>
      <div className='reservation-container'>
          <Booking />
      </div>
    </BookingProvider>
  );
}
