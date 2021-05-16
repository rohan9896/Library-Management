import { createContext, useContext, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { AuthorData, BooksData } from "../data/authors-books-data";

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

  return (
    <DataContext.Provider value={{ state, dispatch, path, getIdFromUrl }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
