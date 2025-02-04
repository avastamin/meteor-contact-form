import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Meteor.call("submitContactForm", formData, (error, response) => {
      if (error) {
        setStatus({ type: "error", message: error.reason });
      } else {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      }
    });
  };

  return (
    <div className="container mt-5">
      <h2>Contact Form</h2>
      {status && (
        <div
          className={`alert ${
            status.type === "error" ? "alert-danger" : "alert-success"
          }`}
          role="alert"
        >
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

// Render the app
const root = createRoot(document.getElementById("react-target"));
root.render(<ContactForm />);
