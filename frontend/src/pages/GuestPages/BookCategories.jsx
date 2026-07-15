import styles from '../../style/guest/Featured.module.css';

const BookCategories = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        📚 Book Categories
      </h1>

      <p className={styles.description}>
        Browse books available in different categories.
      </p>

      <h2 className={styles.heading}>
        📖 Available Categories
      </h2>

      <ul className={styles.list}>

        <li>💻 Computer Science</li>

        <li>🧮 Mathematics</li>

        <li>⚛️ Science</li>

        <li>🏛️ History</li>

        <li>🌍 Geography</li>

        <li>📚 Literature</li>

      </ul>

    </div>
  );
};

export default BookCategories;