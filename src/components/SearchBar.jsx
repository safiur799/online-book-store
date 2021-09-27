import React from "react";
import { useEffect, useState } from "react";
import BookShow from "./BookShow";
import { Link } from "react-router-dom";
function SearchBar() {
  const [book, setBook] = useState([]);
  const [page, setPage] = useState(0);
  const [searchMovie, setSeachMovie] = useState("");
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
  const changeHandler = (e) => {
    setSeachMovie(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="search book " onChange={changeHandler} />
      <button type="submit">search</button>
      <div>
        {book
          .filter((val) => {
            if (searchMovie === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchMovie.toLowerCase())
            ) {
              return val;
            }
          })
          .map((el) => (
            <Link to={`/books/${el.title}`}>
              {" "}
              <BookShow
                title={el.title}
                description={el.description}
                author={el.author}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
