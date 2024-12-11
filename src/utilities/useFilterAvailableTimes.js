import { useBookingTimes } from '../components/bookingTimesContext';

// Custom hook to filter available booking times
export const useFilterAvailableTimes = () => {
  const { bookingTimes } = useBookingTimes();
  const currentTime = new Date();

  return bookingTimes.filter(({ time, isAvailable }) => {
    if (!isAvailable) return false;

    // Converts the time to a Date object for easy comparing
    const [hours, minutes] = time.split(':').map(Number);
    const timeDate = new Date();
    timeDate.setHours(hours, minutes, 0, 0);

    // Only include future times
    return timeDate > currentTime;
  });
};

// Custom hook to get first three available future times
export const useFirstThreeAvailableTimes = () => {
  const availableTimes = useFilterAvailableTimes();
  return availableTimes.slice(0, 3);
};