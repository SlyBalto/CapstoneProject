# Little Lemon Restaurant Project

## Overview

Welcome to my capstone project for the Coursera Front-End Professional Certificate! The goal was to create a user-friendly, responsive table booking system for the fictional restaurant **Little Lemon**.

---

## Features

### Homepage
- **Responsive Design**: Adjusts seamlessly to desktop, tablet, and mobile devices.
- **Hero Section**: Features a visually appealing banner with information about the restaurant and quick reservation options.
- **Navigation**: Easy-to-use navigation links to other sections (e.g., menu, reservations, contact).

### Table Reservation System
- **Interactive Form**: Users can reserve a table by providing:
  - First and last name
  - Date and time
  - Number of guests
  - Special Occasion (birthday or anniversary)
  - Seating preference (inside or outside)
- **Dynamic Validation**: Ensures all fields are filled correctly before submission.
- **Default Settings**: Automatically sets the current date and default values for a seamless user experience.
- **Confirmation Page**: Displays booking details after successful submission.

---

## Technologies Used

- **Frontend**:
  - React.js
  - CSS for styling (responsive design)
  - JavaScript (form validation and dynamic features)
- **Backend**:
  - Fake API hosted by My JSON Server for booking time slots
- **Utilities**:
  - formatDateDisplay.js: Formats dates into a user-friendly display format
  - formatTimeTo12Hour.js: Converts 24-hour times to 12-hour format for better readability
  - useFilterAvailableTimes.js: Filters booking times to show only the next three available times
  - useWindowSize.js: Custom React hook to track and respond to changes in the browser's window size

---

## Project Goals

1. Create a functional, visually appealing website for Little Lemon.
2. Implement a no-hassle and reliable table booking system.
3. Ensure the site is responsive and accessible across devices.

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your system.

### Installation
1. Clone this repository:
```bash
git clone https://github.com/SlyBalto/SlyCapstoneProject.git
```
2. Navigate to the project directory:
```bash
cd SlyCapstoneProject
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm start
```
5. Open your browser and navigate to:
```bash
http://localhost:3000
```
The application should now be running locally!
