"use client";
import { useState } from "react";
import "../../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        We&apos;d love to hear from you! Please fill out the form below.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}
