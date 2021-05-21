import { Routes, Route } from "react-router-dom";
import AuthorsGrid from "./components/CardsGrid/AuthorsGrid";
import AuthorsPage from "./components/AuthorsPage/AuthorsPage";
import { useData } from "./Context/data-context";
import BooksGrid from "./components/CardsGrid/BooksGrid";
import BookPage from "./components/BookPage/BookPage";
import LoginForm from "./components/Login/LoginForm";
import LandingPage from "./components/LandingPage/LandingPage";
import PrivateRoute from "./components/PrivateRoute";

export default function RouterComp() {
  const { state } = useData();
  const isUserLoggedIn = false;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <PrivateRoute
        path="/author"
        element={<AuthorsGrid arrayToBeMapped={state.authorsArr} />}
        login={isUserLoggedIn}
      />
      <PrivateRoute
        path="/author/:id"
        element={<AuthorsPage {...state.clickedAuthor[0]} />}
        login={isUserLoggedIn}
      />
      <PrivateRoute
        path="/book"
        element={
          <BooksGrid addingNewBookOption arrayToBeMapped={state.booksArr} />
        }
        login={isUserLoggedIn}
      />
      <PrivateRoute
        path="/book/:id"
        element={<BookPage {...state.clickedBook[0]} />}
        login={isUserLoggedIn}
      />
    </Routes>
  );
}
