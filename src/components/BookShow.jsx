import React from "react";

function BookShow({ title, author, description }) {
  return (
    <div>
      <h4 style={{ color: "blue" }}>title:{title}</h4>
      <h4 style={{ color: "red" }}>author:{author}</h4>
      <h4 style={{ color: "peru" }}>description:{description}</h4>
    </div>
  );
}

export default BookShow;
