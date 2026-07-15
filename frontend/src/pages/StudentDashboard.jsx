import StudentHeader from '../components/Student/StudentHeader'
import StudentSidebar from "../components/Student/StudentSidebar";
import StudentFooter from "../components/Student/StudentFooter";
//import StudentContent from '../components/Student/StudentContent'
import styles from '../style/student/StudentDashboard.module.css';
import { Outlet } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className={styles.container}>

      <StudentSidebar />

      <div className={styles.main}>

      <StudentHeader />

        <div className={styles.content}>
        <Outlet/>

        </div>

        <StudentFooter />

      </div>

    </div>
  );
};

export default StudentDashboard;