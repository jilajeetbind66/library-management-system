import styles from '../../style/guest/GuestSidebar.module.css';
import { Link } from 'react-router-dom';
const GuestSidebar = () => {
  return (

    <aside className={styles.sidebar}>

      <h2 className={styles.logo}>
      🧑‍💼GUEST
      </h2>

<ul className={styles.menu}>

  <li>
    <Link to='/' className={styles.link}>🏠 Home</Link>
  </li>

  <li>
    <Link to='/feature' className={styles.link}>
      📚 Featured Books
    </Link>
  </li>


  <li>
    <Link to='/categories' className={styles.link}>
      📚 Book Categories
    </Link>
  </li>

  <li>
    <Link to='/timings' className={styles.link}>
      🕒 Library Timings
    </Link>
  </li>

  <li>
    <Link to='/about' className={styles.link}>
      ℹ️ About Library
    </Link>
  </li>

  <li>
    <Link to='/contact' className={styles.link}>
      📞 Contact Us
    </Link>
  </li>

</ul>
    </aside>

  );
};

export default GuestSidebar;




