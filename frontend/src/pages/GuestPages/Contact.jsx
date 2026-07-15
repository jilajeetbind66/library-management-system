import styles from '../../style/guest/Featured.module.css';

const ContactUs = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        📞 Contact Us
      </h1>

      <p className={styles.description}>
        Feel free to contact us for any library-related information or assistance.
      </p>

      <h2 className={styles.heading}>
        📍 Contact Information
      </h2>

      <ul className={styles.list}>

        <li>🏢 ABC Central Library</li>

        <li>📍 New Delhi, India</li>

        <li>📞 +91 9876543210</li>

        <li>📧 library@gmail.com</li>

        <li>🌐 www.library.com</li>

      </ul>

    </div>
  );
};

export default ContactUs;