import React, { useState } from 'react';
import './UpdateProfile.css';

const UpdateProfile = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display a prompt message
    alert('Profile updated successfully!');
    console.log({
      userName,
      email,
      skills,
      resume,
      photo,
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-form-container card">
        <h1 className="profile-title">User Profile</h1>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Name"
              className="brutalist-input"
            />
            <label className="brutalist-label">NAME</label>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="brutalist-input"
            />
            <label className="brutalist-label">EMAIL</label>
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <textarea
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter Skills"
              className="brutalist-input"
            />
            <label className="brutalist-label">SKILLS</label>
          </div>

          <div className="form-group">
            <label htmlFor="resume">Upload Resume (PDF):</label>
            <input
              type="file"
              id="resume"
              accept=".pdf"
              onChange={handleResumeChange}
              className="brutalist-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo">Upload Photo:</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="brutalist-input"
            />
            {photo && <img src={photo} alt="Profile" className="profile-photo" />}
          </div>

          <button type="submit" className="submit-button">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
