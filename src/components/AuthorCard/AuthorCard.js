import React from "react";
import "./AuthorCard.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/data-context";
import { Heading } from "@chakra-ui/layout";
import deleteImg from "../../img/remove.svg";

function AuthorCard({ authorName, authorImg, books, id }) {
  const { dispatch } = useData();

  const navigate = useNavigate();

  const isDisabled = books.length !== 0;

  return (
    <div className="AuthorCard">
      <div
        onClick={() => {
          navigate(`/author/${id}}`);
          dispatch({ type: "OPEN_AUTHOR_DETAILS", payload: id });
        }}
      >
        <img className="AuthorCard__author" alt="author-img" src={authorImg} />
        <Heading as="h4" size="md" className="AuthorCard__Heading">
          {authorName}
        </Heading>
      </div>
      <p>Books available - {books.length}</p>
      <button
        style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
        disabled={isDisabled}
        className="AuthorCard__delete"
      >
        <img
          onClick={() => {
            if (!isDisabled) {
              dispatch({ type: "DELETE_AUTHOR", payload: id });
            }
          }}
          alt="delete"
          src={deleteImg}
        />
      </button>
    </div>
  );
}

export default AuthorCard;
