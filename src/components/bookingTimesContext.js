import React, { createContext, useContext, useEffect, useState} from 'react';

// This project uses a custom fake API to better simulate API data fetching.
const fetchInitialBookingTimes = async () => {
  const API_URL = "https://my-json-server.typicode.com/SlyBalto/little-lemon-booking/bookingTimes";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error!! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched booking times:", data);

    const bookingTimes = Array.isArray(data) ? data : Object.values(data);
    console.log("booking times:", bookingTimes);

    return bookingTimes;

  } catch (error) {
    console.error("Error fetching booking times:", error);
    return []; // returns empty array in case of error
  }
};

const BookingTimesContext = createContext();

// Provider component
export const BookingTimesProvider = ({ children }) => {
  const [bookingTimes, setBookingTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  // Fetch booking times when the provider mounts
  useEffect(() => {
    const fetchData = async () => {
      const times = await fetchInitialBookingTimes(); // Waits for the API response
      setBookingTimes(times); // Update the state with the fetched data
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures this only runs once on mount

  // sets a specific time as unavailable
  const setTimeUnavailable = (selectedTime) => {
    setBookingTimes((prevBookingTimes) =>
      prevBookingTimes.map((timeSlot) =>
        timeSlot.time === selectedTime
          ? { ...timeSlot, isAvailable: false }
          : timeSlot
      )
    );
  };

  return (
    <BookingTimesContext.Provider value={{ bookingTimes, setTimeUnavailable, selectedTime, setSelectedTime }}>
      {children}
    </BookingTimesContext.Provider>
  );
};

// Custom hook to use the context
export const useBookingTimes = () => useContext(BookingTimesContext);

export default BookingTimesContext;
