import styles from '../../style/guest/Featured.module.css';

const LibraryTimings = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        🕒 Library Timings
      </h1>

      <p className={styles.description}>
        Check the official opening and closing hours of the library.
      </p>

      <h2 className={styles.heading}>
        📅 Weekly Schedule
      </h2>

      <ul className={styles.list}>

        <li>📘 Monday : 9:00 AM - 8:00 PM</li>

        <li>📘 Tuesday : 9:00 AM - 8:00 PM</li>

        <li>📘 Wednesday : 9:00 AM - 8:00 PM</li>

        <li>📘 Thursday : 9:00 AM - 8:00 PM</li>

        <li>📘 Friday : 9:00 AM - 8:00 PM</li>

        <li>📗 Saturday : 10:00 AM - 5:00 PM</li>

        <li>🔒 Sunday : Closed</li>

      </ul>

    </div>
  );
};

export default LibraryTimings;