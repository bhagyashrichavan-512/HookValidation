import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const RegistrationForm = () => {
  const backgroundImageUrl = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp' ;

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

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
    <div>
      <section className="vh-100 bg-image" style={sectionStyle}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Registration Form</h2>
             <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example1cg">
              First Name:
            </label>
            <div>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`form-control ${errors.firstName && 'is-invalid'}`}
              />
              <div  className="invalid-feedback">{errors.firstName}</div>
            </div>              
          </div>


          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example1cg"></label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`form-control ${errors.lastName && 'is-invalid'}`}
              />
              <div className="invalid-feedback">{errors.lastName}</div>
            
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example1cg"></label>
              Email:
              <input
                type="text" id="form3Example1cg" 
                value={formData.email}
                onChange={handleChange}
                className={`form-control  form-control-lg ${errors.email && 'is-invalid'}`}
              />
              <div className="invalid-feedback">{errors.email}</div>
            
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example1cg"></label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-control ${errors.password && 'is-invalid'}`}
              />
              <div className="invalid-feedback">{errors.password}</div>
           
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationForm;
