import React from "react";
import "./BooksCard.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/data-context";

function BooksCard({ id, img, bookName }) {
  const navigate = useNavigate();
  const { dispatch } = useData();

  const newBookName = (bookName) => {
    let newBookNameStr = bookName;
    if (bookName.length > 20) {
      newBookNameStr = bookName.substring(0, 18) + "...";
    }
    return newBookNameStr;
  };

  return (
    <div
      onClick={() => {
        navigate(`/book/${id}`);
        dispatch({ type: "OPEN_BOOK_DETAILS", payload: id });
      }}
      className="BooksCard"
    >
      <img src={img} alt="book-img" />
      <span>{newBookName(bookName)}</span>
    </div>
  );
}

export default BooksCard;
