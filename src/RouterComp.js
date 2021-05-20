import { Routes, Route } from "react-router-dom";
import AuthorsGrid from "./components/CardsGrid/AuthorsGrid";
import AuthorsPage from "./components/AuthorsPage/AuthorsPage";
import { useData } from "./Context/data-context";
import BooksGrid from "./components/CardsGrid/BooksGrid";
import BookPage from "./components/BookPage/BookPage";
import { Heading } from "@chakra-ui/react"

export default function RouterComp() {
  const { state } = useData();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Heading as="h2" size="2xl">Landing page</Heading>
          </>
        }
      />
      <Route
        path="/author"
        element={<AuthorsGrid arrayToBeMapped={state.authorsArr} />}
      />
      <Route
        path="/author/:id"
        element={<AuthorsPage {...state.clickedAuthor[0]} />}
      />
      <Route
        path="/book"
        element={<BooksGrid addingNewBookOption arrayToBeMapped={state.booksArr} />}
      />
      <Route
        path="/book/:id"
        element={<BookPage {...state.clickedBook[0]} />}
      />
    </Routes>
  );
}
