import React from "react";
import "./AuthorsPage.css";

function AuthorsPage() {
  return (
    <div className="AuthorsPage">
      <img src="https://i.insider.com/5978b6df197cf7fd1f8b48a4?width=750&format=jpeg&auto=webp" alt="author-img" />
      <div className="AuthorsPage__DeatilsCard">
        <p className="AuthorsPage__PrimaryHeading">JK Rowling</p>
        <div>
          <p className="AuthorsPage__SecondaryHeading">About the author - </p>
          <p className="AuthorsPage__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga?
          </p>
        </div>
        <div className="AuthorsPage__socials">
          <a href="https://twitter.com/rohan_gupta96" target="_blank" rel="noopener noreferrer">
            <img
              alt="twitter"
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
            />
          </a>
          <a href="https://www.instagram.com/rohan_gupta94/" target="_blank" rel="noopener noreferrer">
            <img
              alt="instagram"
              src="https://lh3.googleusercontent.com/proxy/2gbm5v0CfdGsgJDR42BmdcX_YR4a1NatBsU_25T6Puwrye8OOeYRGdNChheFG3q-4xk7mwkyIWNDZVX-p_p5FZud8WXQODnbIdR1W4rT6mkFD6PgYVd1UwQ6R5lhpTqINCOGENkX0jAzsvqoZ8Q2dkzzZNX1"
            />
          </a>
          <a href="https://www.facebook.com/rohang9896" target="_blank" rel="noopener noreferrer">
            <img
              alt="fb"
              src="https://www.designbust.com/download/640/png/facebook_logo_transparent512.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AuthorsPage;
