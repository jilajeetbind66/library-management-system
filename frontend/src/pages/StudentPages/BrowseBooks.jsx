import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../style/student/BrowseBook.module.css";
import { Link } from "react-router-dom";

const BrowseBook = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [page,setPage]=useState(1);
  const [totalPage,setTotalPage]=useState(0);
  const limit=3;
  

  useEffect(() => {
    fetchBooks();
  }, [page]);

  const fetchBooks = async () => {
    const base_url='https://library-management-system-z24o.onrender.com';
    try {
      const res = await axios.get(`${base_url}/books/book-list?page=${page}&limit=${limit}`,{withCredentials:true});
    
      setBooks(res.data?.books);
      setTotalPage(res.data?.totalPage)
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>📚 Browse Books</h2>

        <input
          type="text"
          placeholder="Search by title, author or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
      </div>

      <div className={styles.bookGrid}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book._id} className={styles.card}>
              <div className={styles.bookIcon}>📖</div>

              <h3>{book.title}</h3>

              <p>
                <strong>Author :</strong> {book.author}
              </p>

              <p>
                <strong>Category :</strong> {book.category}
              </p>

              <p>
                <strong>ISBN :</strong> {book.isbn}
              </p>

              <p>
                <strong>Available :</strong> {book.available}
              </p>

              <span
                className={
                  book.available > 0
                    ? styles.available
                    : styles.unavailable
                }
              >
                {book.available > 0 ? "Available" : "Unavailable"}
              </span>

              <Link to={`/student/view-details/${book._id}`} className={styles.btn}>👁 View Details</Link>
            </div>
          ))
        ) : (
          <h3 className={styles.noData}>No Books Found</h3>
        )}
      </div>
             <div className={styles.pagination}>
              <button
                className={styles.pageBtn}
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                ⬅ Prev
              </button>
            
              <span className={styles.pageNumber}>
                Page {page} / {totalPage}
              </span>
            
              <button
                className={styles.pageBtn}
                onClick={() => setPage(page + 1)}
                disabled={page === totalPage}
              >
                Next ➡
              </button>
            </div>
    </div>
  );
};

export default BrowseBook;