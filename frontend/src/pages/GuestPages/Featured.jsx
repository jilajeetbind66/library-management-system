import styles from '../../style/guest/Featured.module.css';

const FeaturedBooks = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        📚 Featured Books
      </h1>

      <p className={styles.description}>
        Explore some of the most popular and recommended books available in our library.
      </p>

      <h2 className={styles.heading}>
        ⭐ Popular Books
      </h2>

      <ul className={styles.list}>

        <li>📖 The Alchemist</li>

        <li>📖 Rich Dad Poor Dad</li>

        <li>📖 Atomic Habits</li>

        <li>📖 Think and Grow Rich</li>

      </ul>

    </div>
  );
};

export default FeaturedBooks;