import styles from '../../style/guest/GuestHeader.module.css';
import { Link } from 'react-router-dom';
const GuestHeader = () => {
  return (

    <header className={styles.header}>

      <div>

        <h2>📚 Library Management System</h2>

      </div>

      <div className={styles.right}>

        <div className={styles.searchBox}>

          <input
            type="text"
            placeholder="Search books, students..."
          />

          <button>
            🔍
          </button>

        </div>

        <div className={styles.profile}>

         <Link to='/login/' className={styles.login}>👤Login</Link> 

        </div>

      </div>

    </header>

  );
};

export default GuestHeader;