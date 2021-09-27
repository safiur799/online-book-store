import React from "react";
import { useEffect, useState } from "react";

function SearchBar() {
  const [book, setBook] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    getBooks();
  }, []);

  function getBooks() {
    fetch(`http://localhost:8000/books?_page=${page}&_limit=10`)
      .then((data) => data.json())
      .then((data) => {
        console.log("books", data);
        setBook(data);
      });
  }

  return (
    <div>
      <input type="text" placeholder="search book " />
      <button type="submit">search</button>
    </div>
  );
}

export default SearchBar;
