import React from "react";
import BooksCard from "../BooksCard/BooksCard";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import "./CardsGrid.css";

function BooksGrid({ arrayToBeMapped }) {
  return (
    <>
      <PrimaryHeading text="BOOKS" />
      <div className="CardsGrid">
        {arrayToBeMapped.map((book) => (
          <div key={book.id}>
            <BooksCard {...book} />
          </div>
        ))}
      </div>
    </>
  );
}

export default BooksGrid;
