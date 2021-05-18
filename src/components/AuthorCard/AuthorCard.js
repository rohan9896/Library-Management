import React from "react";
import "./AuthorCard.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/data-context";
import { Heading } from "@chakra-ui/layout";

function AuthorCard({ authorName, authorImg, books, id }) {
  const { dispatch } = useData();

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/author/${id}}`);
        dispatch({ type: "OPEN_AUTHOR_DETAILS", payload: id });
      }}
      className="AuthorCard"
    >
      <img alt="author-img" src={authorImg} />
      <Heading  as="h4" size="md" className="AuthorCard__Heading">{authorName}</Heading>
      <p>Books available - {books.length}</p>
    </div>
  );
}

export default AuthorCard;
