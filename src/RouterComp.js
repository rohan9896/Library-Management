import { Routes, Route } from "react-router-dom";
import AuthorsGrid from "./components/CardsGrid/AuthorsGrid";
import { useNavigate } from "react-router-dom";
import AuthorsPage from "./components/AuthorsPage/AuthorsPage";
import { useData } from "./Context/data-context";
import BooksGrid from "./components/CardsGrid/BooksGrid";
import BookPage from "./components/BookPage/BookPage";
import { Button, Heading } from "@chakra-ui/react"
import NavBar from "./components/NavBar/NavBar";

export default function RouterComp() {
  const { state } = useData();
  let navigate = useNavigate();

  return (
    <Routes>
      <NavBar />
      <Route
        path="/"
        element={
          <>
            <Heading as="h2" size="2xl">Landing page</Heading>
            <Button onClick={() => navigate(`/author`)} colorScheme="blue">Authors</Button>
            <Button onClick={() => navigate(`/book`)} colorScheme="blue">Books</Button>
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
