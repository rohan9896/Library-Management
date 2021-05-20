import React from "react";
import "./BooksCard.css";

function AddNewBookCard() {
  return (
    <div className="BooksCard">
      <img
        src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/80d802203afb84af2efc2d8707c3a96057969b18/icons/plus.svg"
        alt="add-img"
      />
      <span>Add New Book</span>
    </div>
  );
}

export default AddNewBookCard;
