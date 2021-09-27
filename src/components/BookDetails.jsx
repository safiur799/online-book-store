import React from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const params = useParams();
  return (
    <div>
      <h1>books details</h1>
      <h1>{params.bookId}</h1>
    </div>
  );
}

export default BookDetails;
