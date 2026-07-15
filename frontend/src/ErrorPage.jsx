import React from "react";

const ErrorPage = () => {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    heading: {
      fontSize: "80px",
      color: "#e74c3c",
      margin: "0",
    },
    subHeading: {
      fontSize: "28px",
      margin: "10px 0",
      color: "#333",
    },
    text: {
      fontSize: "18px",
      color: "#666",
      marginBottom: "25px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "16px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#3498db",
      color: "#fff",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subHeading}>Page Not Found</h2>
      <p style={styles.text}>
        Sorry, the page you are looking for does not exist.
      </p>

      <button
        style={styles.button}
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
