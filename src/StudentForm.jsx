import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAddStudent }) {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
  };

  const [formData, setFormData] = useState(initialForm);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddStudent(formData);
    setFormData(initialForm);
  }

  return (
    <section className="registration-card">
      <h2>Student Registration</h2>
      <p className="form-subtitle">
        Enter your details below
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          pattern="[0-9]{10}"
          title="Enter a 10-digit phone number"
          placeholder="10-digit phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="course">Select Course *</label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">Choose course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Com">B.Com</option>
          <option value="MCA">MCA</option>
          <option value="B.Tech">B.Tech</option>
        </select>

        <label htmlFor="gender">Gender *</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" className="submit-btn">
          Register Student
        </button>
      </form>
    </section>
  );
}

export default StudentForm;