import React from "react";
import AuthorCard from "../AuthorCard/AuthorCard";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import "./CardsGrid.css";

function AuthorsGrid({ arrayToBeMapped }) {
  return (
    <>
      <PrimaryHeading text="AUTHORS" />
      <div className="CardsGrid">
        {arrayToBeMapped.map((author) => (
          <div key={author.id}>
            <AuthorCard {...author} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AuthorsGrid;
