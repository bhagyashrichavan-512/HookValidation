import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  RegistrationForm  from './RegistrationForm';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? '' : '', // Clear the error message when the user types
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Display validation errors
    setErrors(newErrors);

    // If there are no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', formData);
      console.log('errors:', errors);
    }
  };

  return (
    <>
    <RegistrationForm/>
    </>
  );
};

export default App;
