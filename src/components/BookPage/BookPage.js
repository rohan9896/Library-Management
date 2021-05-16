import React from "react";
import "./BookPage.css";

function BookPage() {
  return (
    <div className="BookPage">
      <div className="BookPage__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
          alt="book-img"
        />
        <div>
          <h1>Rich Dad, Poor Dad</h1>
          <p>
            <strong>About the book - </strong>
            <br />
            Sit occaecati dolore et sit qui amet voluptatem placeat. Accusamus
            nihil iusto nesciunt aliquid sed reprehenderit. Dolor eaque commodi
            maiores quia vel. Eum est ab eveniet molestiae. Perferendis qui
            doloremque explicabo laboriosam. Qui molestiae praesentium et
            perferendis qui neque illum. Quidem id repellat facere modi aliquid
            cum aliquid. Et quo in quam qui occaecati.
          </p>
          <p>
            <strong>ISBN NO. - </strong>980765432312
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
