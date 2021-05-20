import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { AuthorData, BooksData } from "../data/authors-books-data";
import faker from "faker";
import { updateBooksInAuthorsData } from "../update-books-in-authors-arr";

export const DataContext = createContext();

const initialState = {
  booksArr: BooksData,
  authorsArr: AuthorData,
  clickedAuthor: [],
  clickedBook: [],
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "OPEN_AUTHOR_DETAILS":
      return {
        ...state,
        clickedAuthor: state.authorsArr.filter(
          (author) => author.id === action.payload
        ),
      };
    case "OPEN_BOOK_DETAILS":
      return {
        ...state,
        clickedBook: state.booksArr.filter(
          (book) => book.id === action.payload
        ),
      };
    case "ADD_NEW_BOOK":
      const newBookObj = {
        ...action.payload,
        id: faker.datatype.uuid(),
        bookDescription: faker.lorem.paragraph(6),
      };
      //TODO - add toast here with warning as book already exists
      if (
        state.booksArr.some((book) => book.bookName === action.payload.bookName)
      )
        return state;
      const thisAuthorExists = state.authorsArr.some(
        (author) => author.authorName === action.payload.authorName
      );
      // console.log("thisAuthorExists", thisAuthorExists)
      return {
        ...state,
        booksArr: state.booksArr.concat(newBookObj),
        authorsArr: thisAuthorExists
          ? state.authorsArr.map((author) =>
              author.authorName === action.payload.authorName
                ? { ...author, books: author.books.concat(newBookObj) }
                : author
            )
          : state.authorsArr.concat({
              id: faker.datatype.uuid(),
              authorImg: action.payload.authorImg,
              authorName: action.payload.authorName,
              authorDescription: faker.lorem.paragraph(5),
              socials: {
                twitter: "https://twitter.com/rohan_gupta96",
                instagram: "https://www.instagram.com/rohan_gupta94/",
                facebook: "https://www.facebook.com/rohang9896",
              },
              books: [newBookObj],
            }),
      };
    case "DELETE_BOOK":
      return {
        ...state,
        booksArr: state.booksArr.filter((book) => book.id !== action.payload),
      };
    case "DELETE_AUTHOR":
      return {
        ...state,
        authorsArr: state.authorsArr.filter(
          (author) => author.id !== action.payload
        ),
      };
    default:
      break;
  }
};

export default function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const path = useLocation().pathname.toString();
  const getIdFromUrl = (urlPath) => {
    let id = "";
    for (let i = urlPath.length - 1; i >= 0; i--) {
      if (urlPath[i] !== "/") {
        id += urlPath[i];
      } else {
        break;
      }
    }
    return id.split("").reverse().join("");
  };

  useEffect(() => {
    updateBooksInAuthorsData(state.authorsArr, state.booksArr);
  }, [state]);

  return (
    <DataContext.Provider value={{ state, dispatch, path, getIdFromUrl }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
