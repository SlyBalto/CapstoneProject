function formatTimeTo12Hour(time) {
    const [hours, minutes] = time.split(':');
    let hour = parseInt(hours, 10);
    const isPM = hour >= 12;

    hour = hour % 12 || 12; // Convert "0" or "12+" to "12" and convert hours to 12-hour format.
    const period = isPM ? 'PM' : 'AM';

    return `${hour}:${minutes} ${period}`;
  }

  export default formatTimeTo12Hour