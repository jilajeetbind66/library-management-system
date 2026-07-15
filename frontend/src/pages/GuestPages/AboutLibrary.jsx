import styles from '../../style/guest/Featured.module.css';

const AboutLibrary = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        ℹ️ About Library
      </h1>

      <p className={styles.description}>
        Our Library Management System provides a comfortable and modern learning environment for students and visitors.
      </p>

      <h2 className={styles.heading}>
        🌟 About Our Library
      </h2>

      <ul className={styles.list}>

        <li>📚 Large collection of academic and non-academic books</li>

        <li>💻 Access to digital resources and study materials</li>

        <li>🪑 Quiet and comfortable reading area</li>

        <li>🎓 Supports learning, research and self-study</li>

      </ul>

    </div>
  );
};

export default AboutLibrary;