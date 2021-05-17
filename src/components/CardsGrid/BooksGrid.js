import React, { useState } from "react";
import AddNewBookCard from "../BooksCard/AddNewBookCard";
import BooksCard from "../BooksCard/BooksCard";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import "./CardsGrid.css";

function BooksGrid({ arrayToBeMapped, addingNewBookOption }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PrimaryHeading text="BOOKS" />
      <div className="CardsGrid">
        {arrayToBeMapped.map((book) => (
          <div key={book.id}>
            <BooksCard {...book} />
          </div>
        ))}
        <div style={{display: addingNewBookOption ? null : "none"}} onClick={() => console.log("add krdo")}>
          <AddNewBookCard />
        </div>
      </div>
    </>
  );
}

export default BooksGrid;
