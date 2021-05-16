import { Routes, Route } from "react-router-dom";
import AuthorsGrid from "./components/CardsGrid/AuthorsGrid";
import { useNavigate } from "react-router-dom";
import AuthorsPage from "./components/AuthorsPage/AuthorsPage";
import { useData } from "./Context/data-context";
import BooksGrid from "./components/CardsGrid/BooksGrid";

export default function RouterComp() {
  const { state } = useData();
  let navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Landing page</h1>
            <button onClick={() => navigate(`/author`)}>Authors</button>
            <button onClick={() => navigate(`/book`)}>Books</button>
          </>
        }
      />
      <Route path="/author" element={<AuthorsGrid arrayToBeMapped={state.authorsArr} />} />
      <Route
        path="/author/:id"
        element={<AuthorsPage {...state.clickedAuthor[0]} />}
      />
      <Route path="/book" element={<BooksGrid arrayToBeMapped={state.booksArr} />} />
    </Routes>
  );
}
