import React from "react";
import "./BookPage.css";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";

function BookPage({ id, img, bookName, bookDescription, authorName, isbn }) {

  return (
    <>
      <PrimaryHeading text="Book's Details" />
      <div className="BookPage">
        <div className="BookPage__container">
          <img src={img} alt="book-img" />
          <div>
            <h1>
              {bookName}
              <br /> - by {authorName}
            </h1>
            <p>
              <strong>About the book - </strong>
              <br />
              {bookDescription}
            </p>
            <p>
              <strong>ISBN NO. - </strong>
              {isbn}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPage;
