import styles from '../../style/admin/AdminSidebar.module.css';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>📚 Admin</h2>

      <ul className={styles.menu}>
        <li>
          <Link to="/admin">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/admin/add-book">➕ Add Book</Link>
        </li>

        <li>
          <Link to="/admin/book-list" style={{whiteSpace:'nowrap'}}>📚 Manage Books</Link>
        </li>

        <li>
          <Link to="/admin/students" style={{whiteSpace:'nowrap'}}>👨‍🎓Manage Students</Link>
        </li>

        <li>
          <Link to="/admin/issue-book">📥 Issue Book</Link>
        </li>

        <li>
          <Link to="/admin/return-book">📤 Return Book</Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;