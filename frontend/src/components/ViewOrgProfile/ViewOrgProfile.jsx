import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ViewOrgProfile.module.css";
import defaultProfileImage from "./Profile-Image.png";
const OrgProfileSection = () => {
  const [orgData, setOrgData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrgData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/org/view_profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrgData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to fetch profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchOrgData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  console.log(orgData);
  const { name, description, roles, logo } = orgData.data;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileImage}>
          <img src={defaultProfileImage} alt={logo} />
        </div>
        <div className={styles.profileDetails}>
          <h2>{name}</h2>
          <div className={styles.profileInfo}>
            {/* <div className={styles.profileField}>
              <label>Location:</label>
              <p>{location}</p>
            </div> */}
            <div className={styles.profileField}>
              <label>Roles Offered:</label>
              <p>{roles}</p>
            </div>
            <div className={styles.profileField}>
              <label>Description:</label>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgProfileSection;
