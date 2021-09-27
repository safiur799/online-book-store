import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link to="/home" style={{ marginRight: "20px" }}>
        hoom
      </Link>
      <Link to="/books">books</Link>
    </div>
  );
}
export default Navbar;
