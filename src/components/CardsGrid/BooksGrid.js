import React, { useState } from "react";
import AddNewBookCard from "../BooksCard/AddNewBookCard";
import BooksCard from "../BooksCard/BooksCard";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import "./CardsGrid.css";
import { Modal } from "react-modal-overlay";
import { useData } from "../../Context/data-context";

function BooksGrid({ arrayToBeMapped, addingNewBookOption }) {
  const initialInpState = {
    bookName: "",
    img: "",
    authorName: "",
    authorsImg: '',
    isbn: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBookData, setNewBookData] = useState(initialInpState);
  const { state, dispatch } = useData();

  const isISBNValid = (isbn) => {
    isbn = Number(isbn);
    if (isNaN(isbn)) return false;
    if (isbn.toString().length === 13) return true;
    return false;
  };

  const thisAuthorExists = state.authorsArr.some(
    (author) => author.authorName === newBookData.authorName
  );

  return (
    <>
      <PrimaryHeading text="BOOKS" />
      <div className="CardsGrid">
        {arrayToBeMapped?.map((book) => (
          <div key={book.id}>
            <BooksCard {...book} />
          </div>
        ))}
        <div
          style={{ display: addingNewBookOption ? null : "none" }}
          onClick={() => setIsModalOpen(true)}
        >
          <AddNewBookCard />
        </div>
        <div
          style={{ display: isModalOpen ? null : "none" }}
          className="CardsGrid__Modal"
        >
          <Modal show={isModalOpen} closeModal={() => setIsModalOpen(false)}>
            <h1 className="CardsGrid__Modal__heading">Enter Book Data</h1>
            <input
              value={newBookData.bookName}
              onChange={(e) =>
                setNewBookData({
                  ...newBookData,
                  bookName: e.target.value,
                })
              }
              type="text"
              placeholder="Book Name"
            />
            <input
              value={newBookData.img}
              onChange={(e) =>
                setNewBookData({
                  ...newBookData,
                  img: e.target.value,
                })
              }
              type="text"
              placeholder="Book's image URL"
            />
            <input
              value={newBookData.authorName}
              onChange={(e) =>
                setNewBookData({
                  ...newBookData,
                  authorName: e.target.value,
                })
              }
              type="text"
              placeholder="Author's name"
            />
            {!thisAuthorExists && (
              <input placeholder="Author's img URL" type="text" value={newBookData.authorsImg} onChange={(e) => setNewBookData({
                ...newBookData,
                authorsImg: e.target.value
              })} />
            )}
            <input
              value={newBookData.isbn}
              onChange={(e) =>
                setNewBookData({
                  ...newBookData,
                  isbn: e.target.value,
                })
              }
              type="text"
              placeholder="ISBN No."
            />
            {!isISBNValid(newBookData.isbn) && (
              <p style={{ margin: "0.2rem", color: "red" }}>
                ISBN must be a no. of 13 digits
              </p>
            )}
            <br />
            <button
              onClick={() => {
                dispatch({ type: "ADD_NEW_BOOK", payload: newBookData });
                setNewBookData(initialInpState);
              }}
              disabled={!isISBNValid(newBookData.isbn)}
            >
              Submit
            </button>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default BooksGrid;
