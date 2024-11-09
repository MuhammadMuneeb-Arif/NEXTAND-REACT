import React from 'react'
import "./contact.css"
const contact = () => {
  return (
    <div class="contact-page">
  <div class="contact-header">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
  </div>

  <form class="contact-form">
    <div class="form-group">
      <label for="name">Your Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required />
    </div>

    <div class="form-group">
      <label for="email">Your Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required />
    </div>

    <div class="form-group">
      <label for="message">Your Message</label>
      <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>
    </div>

    <button type="submit" class="submit-btn">Send Message</button>
  </form>
</div>
  )
}

export default contact