import React from "react";
import "./AuthorCard.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/data-context";

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
      <h3>{authorName}</h3>
      <span>Books available - {books.length}</span>
    </div>
  );
}

export default AuthorCard;
