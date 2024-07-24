import React, { useState } from 'react';
import './ex2.css';

const RegisterForm = () => {
  const [collegeId, setCollegeId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('College ID:', collegeId);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Branch:', branch);
    console.log('Year:', year);
    console.log('Gender:', gender);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <p>Provide your details to login</p>
        <div className="form-group">
          <label htmlFor="college-id">College Id</label>
          <input
            type="text"
            id="college-id"
            value={collegeId}
            onChange={(e) => setCollegeId(e.target.value)}
            placeholder="College Id"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select a branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          >
            <option value="">Select a year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div>
            <label>
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="Other"
                checked={gender === 'Other'}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
