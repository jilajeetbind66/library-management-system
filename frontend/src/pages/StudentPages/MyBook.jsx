import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../style/student/MyBook.module.css";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
const base_url = import.meta.env.VITE_BACKEND_URL


const MyBook = () => {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchIssuedBooks();
  }, []);

  const fetchIssuedBooks = async () => {
    try {
      const res = await axios.get(
        `${base_url}/issue/my-books`,
        {
          withCredentials: true,
        }
      );
      console.log(res.data.books);
      
      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>📖 My Issued Books</h2>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>id</th>
              <th>Book</th>
              <th>Author</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {books.length > 0 ? (
              books.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  
                  <td>{item.bookId?.title}</td>

                  <td>{item.bookId?.author}</td>

                  <td>
                    {new Date(item.issueDate).toLocaleDateString()}
                  </td>

                  <td>
                    {new Date(item.dueDate).toLocaleDateString()}
                  </td>

                  <td>
                    <span
                      className={
                        item.status === "Returned"
                          ? styles.returned
                          : styles.issued
                      }
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className={styles.noData}>
                  📚 No Books Issued
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBook;