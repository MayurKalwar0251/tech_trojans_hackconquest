import React, { useState } from "react";

function PatientForm() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    bloodType: "",
    condition: "",
    admissionType: "",
    insurance: "",
    hospital: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log("Patient Details Submitted:", formData);
  };

  return (
    <div style={styles.container}>
      <h2>Patient Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="bloodType">Blood Type:</label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="condition">Medical Condition:</label>
          <input
            type="text"
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="admissionType">Admission Type:</label>
          <input
            type="text"
            id="admissionType"
            name="admissionType"
            value={formData.admissionType}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="insurance">Insurance Provider:</label>
          <input
            type="text"
            id="insurance"
            name="insurance"
            value={formData.insurance}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="hospital">Hospital:</label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "50%",
    margin: "50px auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  submitButton: {
    backgroundColor: "#5cb85c",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    padding: "10px 15px",
    borderRadius: "4px",
    fontSize: "16px",
  },
};

export default PatientForm;
