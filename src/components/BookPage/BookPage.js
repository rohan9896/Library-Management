import React from "react";
import "./BookPage.css";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import { Box, Heading } from "@chakra-ui/react"

function BookPage({ id, img, bookName, bookDescription, authorName, isbn }) {

  return (
    <>
      <PrimaryHeading text="Book's Details" />
      <div className="BookPage">
        <div className="BookPage__container">
          <img src={img} alt="book-img" />
          <Box d="flex" flexDirection="column" justifyContent="space-around" height="30rem" margin="0 1rem">
            <Heading>
              {bookName}
              <br /> - by {authorName}
            </Heading>
            <p>
              <strong>About the book - </strong>
              <br />
              {bookDescription}
            </p>
            <p>
              <strong>ISBN NO. - </strong>
              {isbn}
            </p>
          </Box>
        </div>
      </div>
    </>
  );
}

export default BookPage;
