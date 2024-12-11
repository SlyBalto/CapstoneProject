const formatDateDisplay = (input) => {
  let year, month, day;

  if (input instanceof Date) {
    // Handle pure Date object
    year = input.getFullYear();
    month = String(input.getMonth() + 1).padStart(2, '0'); // Add 1 to zero-based month
    day = String(input.getDate()).padStart(2, '0');
  } else if (typeof input === 'string' && input.includes('-')) {
    // Handle yyyy-mm-dd string
    [year, month, day] = input.split('-');
  } else {
    // Invalid input
    return 'Invalid date';
  }

  // Return the date in mm/dd/yyyy format
  return `${month}/${day}/${year}`;
};

export default formatDateDisplay;
