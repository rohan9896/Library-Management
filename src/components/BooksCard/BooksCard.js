import React from "react";
import "./BooksCard.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/data-context";
import deleteImg from "../../img/remove.svg";

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
    <div className="BooksCard">
      <img src={img} className="BooksCard__Book" alt="book-img" />
      <span
        onClick={() => {
          navigate(`/book/${id}`);
          dispatch({ type: "OPEN_BOOK_DETAILS", payload: id });
        }}
      >
        {newBookName(bookName)}
      </span>
      <img
        onClick={() => dispatch({ type: "DELETE_BOOK", payload: id })}
        className="BooksCard__delete"
        src={deleteImg}
        alt="delete"
      />
    </div>
  );
}

export default BooksCard;
