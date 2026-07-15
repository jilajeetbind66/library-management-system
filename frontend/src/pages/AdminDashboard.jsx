import AdminHeader from '../components/Admin/AdminHeader'
import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminFooter from "../components/Admin/AdminFooter";
//import AdminContent from '../components/Admin/AdminHome'
import { Outlet } from 'react-router-dom';
import styles from '../style/admin/AdminDashboard.module.css';

const AdminDashboard = () => {
  return (
    <div className={styles.container}>

      <AdminSidebar />

      <div className={styles.main}>

      <AdminHeader />

        <div className={styles.content}>
        <Outlet/>

        </div>

        <AdminFooter/>

      </div>

    </div>
  );
};

export default AdminDashboard;