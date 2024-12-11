import React, { useState } from 'react';
import Button from './button';
import { useBooking } from './bookingContext';
import PageTitle from './PageTitle';
import { useFilterAvailableTimes } from '../utilities/useFilterAvailableTimes';
import formatTimeTo12Hour from '../utilities/formatTimeTo12Hour';
import { useBookingTimes } from './bookingTimesContext';


function BookingForm() {

  const {
    firstName, setFirstName,
    lastName, setLastName,
    date, setDate,
    time, setTime,
    guests, setGuests,
    occasion, setOccasion,
    seating, setSeating,
    setStep
  } = useBooking(); // Imports from context

  const {
    selectedTime, setSelectedTime
  } = useBookingTimes();

  setTime(selectedTime);

  const availableTimes = useFilterAvailableTimes();

    // Submit the form to move to the confirmation screen
    const handleFormSubmit = (e) => {
      e.preventDefault();
      setStep("confirm"); // Goes to Confirm page
    };

  return (
    <section>
      <PageTitle titleText={"Reserve A Table"} link={'/'} />
      <div className='reservation-background reservation-form'>
        <form onSubmit={handleFormSubmit} className="reservation-form">

          <div className="form-row-single">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>

          <div className="form-row-single">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>

          <div className="form-row" style={{justifyContent: "space-between"}}>
            <div className="form-row-item" style={{marginRight: "10px"}}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                style={{width: "150px", paddingRight: "10px"}}
              />
            </div>

            <div className="form-row-item" style={{marginLeft: "10px"}}>
              <label htmlFor="time">Time</label>
              <select
                style={{width: "165px"}}
                id="time"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                  setSelectedTime(e.target.value);
                }}
                required
              >
                <option value="" disabled>Select a time</option>
                {availableTimes.map(({ time }) => (
                  <option key={time} value={time}>
                    {formatTimeTo12Hour(time)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row-single" style={{display: "flex", justifyContent: "center"}}>
            <div>
              <label htmlFor="guests">How Many</label>
                <input
                  style={{width: "250px"}}
                  className='center-text'
                  type="number"
                  id="guests"
                  min="1"
                  max="10"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                />
            </div>
          </div>

          <div className="form-row-single" style={{display: "flex", justifyContent: "center"}}>
            <div                   >
              <label>Seating</label>
              <div className="form-row-no-padding" style={{width: "250px"}}>
                <label>
                  <input
                    type="radio"
                    name="seating"
                    value="Inside"
                    checked={seating === "Inside"}
                    onChange={(e) => setSeating(e.target.value)}
                    className='input-radio'
                  />
                  Inside
                </label>
                <label>
                  <input
                    type="radio"
                    name="seating"
                    value="Outside"
                    checked={seating === "Outside"}
                    onChange={(e) => setSeating(e.target.value)}
                    className='input-radio'
                  />
                  Outside
                </label>
              </div>
            </div>

          </div>

          <div className="form-row" style={{display: "flex", justifyContent: "center"}}>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                style={{width: "250px"}}
                className='center-text'
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="none">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

          </div>

          <div className="form-row-no-padding">
          <Button type="submit" buttonClass="button-yellow" buttonText="Let's Do it!" style={{ width: "150px" }} />
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;