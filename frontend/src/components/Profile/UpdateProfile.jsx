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
    <main className="profile-container">
      <section className="profile-form-container card">
        <h1 className="profile-title">BUILD YOUR PROFILE</h1>
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

          <button type="submit" className="button">Create Profile</button>
        </form>
      </section>
      <section className="profile-image-container">
      <h1 style={{fontFamily:"monospace"}}className="font-bold h-auto text-3xl self-center text-black py-10">
     "Little things make big days"
            </h1>
        <img className="object-fill" src="/3714960.jpg" alt="Decorative" />
      </section>
    </main>
  );
};

export default UpdateProfile;
