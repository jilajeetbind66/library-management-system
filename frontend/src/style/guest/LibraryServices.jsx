import styles from '../../style/guest/Featured.module.css';

const LibraryServices = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        📖 Library Services
      </h1>

      <p className={styles.description}>
        Explore the facilities and services available in our library.
      </p>

      <h2 className={styles.heading}>
        ✨ Available Services
      </h2>

      <ul className={styles.list}>

        <li>📚 Book Borrowing</li>

        <li>💻 Digital Resources</li>

        <li>🪑 Reading Area</li>

        <li>🖨️ Printing & Photocopy</li>

      </ul>

    </div>
  );
};

export default LibraryServices;