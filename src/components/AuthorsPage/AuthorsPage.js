import React from "react";
import "./AuthorsPage.css";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import { useData } from "../../Context/data-context";
import BooksGrid from "../CardsGrid/BooksGrid";

function AuthorsPage({
  id,
  authorImg,
  authorName,
  authorDescription,
  socials,
}) {
  const { state } = useData();

  const booksByThisAuthor = state.authorsArr.filter(
    (author) => author.id === id
  )[0]?.books;

  return (
    <>
      <PrimaryHeading text={`Author Details`} />
      <div className="AuthorsPage">
        <img src={authorImg} alt="author-img" />
        <div className="AuthorsPage__DeatilsCard">
          <p className="AuthorsPage__PrimaryHeading">{authorName}</p>
          <div>
            <p className="AuthorsPage__SecondaryHeading">About the author - </p>
            <p className="AuthorsPage__para">{authorDescription}</p>
          </div>
          <div className="AuthorsPage__socials">
            <a
              href={socials?.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="twitter"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
              />
            </a>
            <a
              href={socials?.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="instagram"
                src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png"
              />
            </a>
            <a
              href={socials?.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="fb"
                src="https://www.designbust.com/download/640/png/facebook_logo_transparent512.png"
              />
            </a>
          </div>
        </div>
      </div>
      <BooksGrid arrayToBeMapped={booksByThisAuthor} />
    </>
  );
}

export default AuthorsPage;
