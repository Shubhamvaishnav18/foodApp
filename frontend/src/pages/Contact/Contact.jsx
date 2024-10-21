import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await axios.post('http://localhost:4000/api/contact/contact', formData); // Make sure the URL matches your backend API route

    if (response.data.success) {
      setSuccessMessage("Thank you, we'll contact you soon");
      setFormData({ name: '', email: '', phone: '', message: '' }); 
    }
    else {
      alert(response.data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact</h2>
        <p>Do fill in the form, or give us a call.</p>
        <div className="contact-info">
          <div className="location">
            <p>Reach out through the form, and We'll respond as soon as possible. We look forward to connecting with you!</p>
            <p>FoodlyApp <br />contact@foodly.com <br /> +91-9974683342</p>
            <img src="https://plus.unsplash.com/premium_photo-1705056547423-de4ef0f85bf7?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>  
        </div>
      </div>

      <div className="contact-form-fields">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"  value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="send-button">SEND</button>
          {successMessage && <p className='masz'>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
