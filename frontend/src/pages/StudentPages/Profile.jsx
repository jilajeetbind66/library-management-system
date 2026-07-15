import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../style/student/Profile.module.css";

const Profile = () => {
  const [student, setStudent] = useState({});
  const base_url='https://library-management-system-z24o.onrender.com';

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `${base_url}/student/profile`,
        {
          withCredentials: true,
        }
      );

      setStudent(res.data.student);
      console.log(res.data.student);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.topSection}>
          <div className={styles.avatar}>
            {student.image ? (
              <img
                src={`${base_url}/images/${student.image}`}
                alt="Student"
              />
            ) : (
              <span>👤</span>
            )}
          </div>

          <h2>{student.name}</h2>
          <p>{student.email}</p>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.box}>
            <label>🎓 Course</label>
            <span>{student.course}</span>
          </div>

          <div className={styles.box}>
            <label>🆔 Enrollment No.</label>
            <span>{student.enrollmentNo}</span>
          </div>

          <div className={styles.box}>
            <label>Name</label>
            <span>{student.name}</span>
          </div>

          <div className={styles.box}>
            <label>✉️Email</label>
            <span>{student.email}</span>
          </div>

          <div className={styles.box}>
            <label>📅 Joined</label>
            <span>
              {student.createdAt
                ? new Date(student.createdAt).toLocaleDateString()
                : ""}
            </span>
          </div>

          <div className={styles.box}>
            <label>👨‍🎓Role</label>
            <span className={styles.active}>{student.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;