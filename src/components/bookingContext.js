import React, { createContext, useContext, useState } from 'react';
import { useFirstThreeAvailableTimes } from '../utilities/useFilterAvailableTimes'; // Adjust path as necessary

// Creates context
const BookingContext = createContext();

// Gets access to context
export const useBooking = () => useContext(BookingContext);

// Context provider component
export const BookingProvider = ({ children }) => {

  const firstThreeTimes = useFirstThreeAvailableTimes();

  // Determine the date to use
  let dateToUse = firstThreeTimes.length > 0
    ? new Date() // Today's date
    : new Date(new Date().setDate(new Date().getDate() + 1)); // Tomorrow's date

  dateToUse = dateToUse.toISOString().split("T")[0];  // Date to use in yyyy-mm-dd format

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState(dateToUse);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('none');
  const [seating, setSeating] = useState('Inside');

  // Navigation
  const [step, setStep] = useState("form");

  return (
    <BookingContext.Provider value={{
      firstName, setFirstName,
      lastName, setLastName,
      date, setDate,
      time, setTime,
      guests, setGuests,
      occasion, setOccasion,
      seating, setSeating,
      step, setStep
    }}>
      {children}
    </BookingContext.Provider>
  );
};
