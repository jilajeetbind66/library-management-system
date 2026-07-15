import { Routes ,Route, Outlet} from 'react-router-dom';
import styles from '../../style/guest/GuestContent.module.css';
//import GuestHome from './GuestHome'
//import GuestAbout from './GuestAbout';
const GuestContent = () => {
  return (
   <>
   
   <Outlet/>
   
    </>

  );
};

export default GuestContent;