import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UpdateProfile.module.css";

const UpdateProfile = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const [imageData, setImageData] = useState(null);
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    if (imageData && resumeData && imageData.photo && resumeData.photo) {
      setResume(resumeData.photo);
      setPhoto(imageData.photo);
    }
  }, [imageData, resumeData]);

  const handleResumeChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB.");
      return;
    }
    setResume(selectedFile);
  };

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
      alert("Photo size should be less than 2MB.");
      return;
    }
    setPhoto(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !email || !skills) {
      alert("All fields are required.");
      return;
    }

    setLoading(true);
    const formData = {
      name: userName,
      email: email,
      skills: skills,
      resume: resume,
      photo: photo,
    };

    const resumeUpload = async () => {
      const formData = new FormData();
      formData.append("file", resume);
      try {
        const upload = await axios.post(
          "http://localhost:4000/api/v1/freelancer/upload_image",
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        return upload.data;
      } catch (e) {
        console.error(e);
        return e;
      }
    };
    const imageUpload = async () => {
      const formData = new FormData();
      formData.append("file", photo);
      try {
        const upload = await axios.post(
          "http://localhost:4000/api/v1/freelancer/upload_image",
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        return upload.data;
      } catch (e) {
        console.error(e);
        return e;
      }
    };

    try {
      const imageGet = await imageUpload();
      console.log(imageData);
      const resumeGet = await resumeUpload();
      console.log(resumeData);
      setImageData(imageGet);
      setResumeData(resumeGet);
      const myData = {
        userName,
        email,
        skills,
        resume,
        photo,
      };
      const response = await axios.put(
        "http://localhost:4000/api/v1/freelancer/upload_profile",
        { ...myData },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(
        error.response?.data?.message ||
          "Failed to update profile, please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className={styles["profile-container"]}
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <section
        className={`${styles["profile-form-container"]} ${styles["card"]}`}
      >
        <h1 className={styles["profile-title"]}>UPDATE YOUR PROFILE</h1>
        <form onSubmit={handleSubmit} className={styles["profile-form"]}>
          <div className={styles["form-group"]}>
            <label htmlFor='userName'>Name:</label>
            <input
              type='text'
              id='userName'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='Enter Name'
              className={styles["brutalist-input"]}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor='email'>Email Address:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Email'
              className={styles["brutalist-input"]}
            />
          </div>

          {/* <div className={styles["form-group"]}>
            <label htmlFor="skills">About:</label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="About yourself"
              className={styles["brutalist-input"]}
            />
          </div> */}

          <div className={styles["form-group"]}>
            <label htmlFor='skills'>Skills:</label>
            <textarea
              id='skills'
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder='Enter Skills'
              className={styles["brutalist-input"]}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor='resume'>Upload Resume (PDF):</label>
            <input
              type='file'
              id='resume'
              accept='.pdf'
              onChange={handleResumeChange}
              className={styles["brutalist-input"]}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor='photo'>Upload Photo:</label>
            <input
              type='file'
              id='photo'
              accept='image/*'
              name='profile-image'
              onChange={handlePhotoChange}
              className={styles["brutalist-input"]}
            />
            {photo && (
              <img
                src={URL.createObjectURL(photo)}
                alt='Profile'
                className={styles["profile-photo"]}
                style={{ maxWidth: "100px", borderRadius: "50%" }}
              />
            )}
          </div>

          <button type='submit' className={styles["button"]} disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </button>
          {error && <p className='text-red-500 mt-3 font-semibold'>{error}</p>}
        </form>
      </section>
      <section className={styles["profile-image-container"]}>
        <h1
          style={{ fontFamily: "monospace" }}
          className='font-bold h-auto text-2xl self-center text-black py-10'
        >
          "Little things make big days"
        </h1>
        <img
          className={styles["object-fill"]}
          src='/3714960.jpg'
          alt='Decorative'
        />
      </section>
    </main>
  );
};

export default UpdateProfile;
