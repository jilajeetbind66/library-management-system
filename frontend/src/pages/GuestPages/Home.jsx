import styles from '../../style/guest/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        📚 Welcome to Library Management System
      </h1>


      <h2 className={styles.heading}>
        ✨ Features
      </h2>

      <ul className={styles.list}>
        <li>📚 Huge Collection of Books</li>

        <li>📖 Digital Resources</li>

        <li>🕒 Flexible Library Timings</li>

        <li>🎓 Study Environment</li>
      </ul>

    </div>
  );
};

export default Home;