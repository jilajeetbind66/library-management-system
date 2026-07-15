import React, { useContext } from "react";
import styles from "../../style/student/StudentHeader.module.css";
import { UserContext } from "../../Context/UserContext";

const StudentHeader = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h2>📚 Library Management System</h2>
      </div>

      <div className={styles.center}>
        <input
          type="text"
          placeholder="🔍 Search books..."
          className={styles.search}
        />
      </div>
   <div className={styles.right}>
  <div className={styles.profile}>
    <img
      src={`http://localhost:5000/images/${user?.image}`}
      alt="Profile"
      className={styles.profileImg}
    />
  </div>
</div>   

    </header>
  );
};

export default StudentHeader;