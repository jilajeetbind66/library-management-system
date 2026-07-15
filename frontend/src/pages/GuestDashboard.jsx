import GuestHeader from '../components/Guest/GuestHeader'
import GuestSidebar from "../components/Guest/GuestSidebar";
import GuestFooter from "../components/Guest/GuestFooter";
//import GuestContent from '../components/Guest/GuestContent'
import styles from '../style/guest/GuestDashboard.module.css';
import { Outlet } from 'react-router-dom';
const GuestDashboard = () => {
  return (
    <div className={styles.container}>

      <GuestSidebar />

      <div className={styles.main}>

      <GuestHeader />

        <div className={styles.content}>
        <main>
        <Outlet/>
        </main>

        </div>

        <GuestFooter/>

      </div>

    </div>
  );
};

export default GuestDashboard;