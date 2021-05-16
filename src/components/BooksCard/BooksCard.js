import React from "react";
import "./BooksCard.css";

function BooksCard({img, bookName}) {

    const newBookName = (bookName) => {
        let newBookNameStr = bookName;
        if(bookName.length > 20) {
            newBookNameStr = bookName.substring(0, 18) + "...";
        }
        return newBookNameStr;
    }

  return (
    <div className="BooksCard">
      <img
        src={img}
        alt="book-img"
      />
      <span>{newBookName(bookName)}</span>
    </div>
  );
}

export default BooksCard;
