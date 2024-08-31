import React, { useState } from 'react';
import styles from './createProfile.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateProfile = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const [skills, setSkills] = useState('');
  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [resumeURL, setResumeURL] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  // Function to handle resume file change
  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  // Function to handle photo file change
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  // Function to upload resume
  const resumeUpload = async () => {
    const formData = new FormData();
    formData.append("file", resume);
    try {
      const upload = await axios.post(
        "http://localhost:4000/api/v1/freelancer/upload_image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return upload.data.url; // Assuming your backend returns the uploaded file URL
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  // Function to upload photo
  const imageUpload = async () => {
    const formData = new FormData();
    formData.append("file", photo);
    try {
      const upload = await axios.post(
        "http://localhost:4000/api/v1/freelancer/upload_image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return upload.data.url; // Assuming your backend returns the uploaded file URL
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadedPhotoURL = await imageUpload();
      const uploadedResumeURL = await resumeUpload();
      if (!uploadedPhotoURL || !uploadedResumeURL) {
        alert('Failed to upload files. Please try again.');
        return;
      }
      setPhotoURL(uploadedPhotoURL);
      setResumeURL(uploadedResumeURL);

      const formData = {
        name: userName,
        email,
        about,
        skills,
        resume: uploadedResumeURL, // Use the uploaded resume URL
        photo: uploadedPhotoURL,   // Use the uploaded photo URL
      };

      // Send form data to backend
      const response = await axios.post(
        "http://localhost:4000/api/v1/freelancer/upload_profile",
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      alert(response.data.message || 'Profile created successfully!');
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Failed to create profile, please try again.");
    }
  };

  return (
    <main
      className={styles['profile-container']}
      style={{
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <section className={`${styles['profile-form-container']} ${styles['card']}`}>
        <h1 className={styles['profile-title']}>BUILD YOUR PROFILE</h1>
        <form onSubmit={handleSubmit} className={styles['profile-form']}>
          <div className={styles['form-group']}>
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Name"
              className={styles['brutalist-input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className={styles['brutalist-input']}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="about">About:</label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="About yourself"
              className={styles["brutalist-input"]}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="skills">Skills:</label>
            <textarea
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter Skills"
              className={styles['brutalist-input']}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="about">About:</label> {/* New "About" field */}
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Enter something about yourself"
              className={styles['brutalist-input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="resume">Upload Resume (PDF):</label>
            <input
              type="file"
              id="resume"
              accept=".pdf"
              onChange={handleResumeChange}
              className={styles['brutalist-input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="photo">Upload Photo:</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className={styles['brutalist-input']}
            />
            {photo && <img src={photoURL} alt="Profile" className={styles['profile-photo']} />}
          </div>

          <div className='flex justify-between'>
            <button type="submit" className={styles['button']}>Create Profile</button>
            <Link to="/updateProfile">
              <button type="button" className={styles['button']}>Update Profile</button>
            </Link>
          </div>
        </form>
      </section>
      <section className={styles['profile-image-container']}>
        <h1 style={{ fontFamily: 'monospace' }} className='font-bold h-auto text-2xl self-center text-black py-10'>
          "Little things make big days"
        </h1>
        <img className={styles['object-contain']} src="/3714960.jpg" alt="Decorative" />
      </section>
    </main>
  );
};

export default CreateProfile;
