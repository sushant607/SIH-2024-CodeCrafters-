import React, { useState } from 'react';
import styles from './UpdateProfile.module.css';

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
            <label htmlFor="userName">Name:</label>
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
            {photo && <img src={photo} alt="Profile" className={styles['profile-photo']} />}
          </div>

          <button type="submit" className={styles['button']}>Create Profile</button>
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

export default UpdateProfile;
