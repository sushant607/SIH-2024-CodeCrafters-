import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Profile.module.css"; // Assuming you're using CSS Modules
import defaultProfileImage from "./Profile-Image.png";
const ProfileSection = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/freelancer/view_profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUserData(response.data.data); // Assuming 'data' contains the user profile
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to fetch profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const { name, email, skills, about } = userData;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileImage}>
          <img src={defaultProfileImage} alt="" />
        </div>
        <div className={styles.profileDetails}>
          <h2>{name}</h2>
          <p>Email: {email}</p>
          <div className={styles.profileInfo}>
            {/* <div className={styles.profileField}>
              <label>Location:</label>
              <p>{location}</p>
            </div> */}
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
