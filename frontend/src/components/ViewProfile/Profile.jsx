import React from "react";
import styles from "./Profile.module.css"; // Assuming you're using CSS Modules
import userData from "./user.json"; // Import the JSON file

const ProfileSection = () => {
  const { profilePicture, name, email, location, skills, about } = userData;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileImage}>
          <img src={profilePicture} alt="Profile" />
        </div>
        <div className={styles.profileDetails}>
          <h2>{name}</h2>
          <p>Email: {email}</p>
          <div className={styles.profileInfo}>
            <div className={styles.profileField}>
              <label>Location:</label>
              <p>{location}</p>
            </div>
            <div className={styles.profileField}>
              <label>Skills:</label>
              <p>{skills.join(", ")}</p>
            </div>
            <div className={styles.profileField}>
              <label>About:</label>
              <p>{about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
