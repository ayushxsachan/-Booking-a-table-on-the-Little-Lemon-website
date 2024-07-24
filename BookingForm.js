import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
      alert('Please fill out all fields');
      return;
    }
    console.log('Booking Data:', formData);
    alert('Table booked successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="specialRequests">Special Requests:</label>
        <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange} />
      </div>
      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
