import { Routes, Route } from "react-router-dom";
import AuthorsGrid from "./components/AuthorsGrid/AuthorsGrid";
import PrimaryHeading from "./components/PrimaryHeading/PrimaryHeading";

export default function RouterComp() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Landing page</h1>
          </>
        }
      />
      <Route
        path="/authors"
        element={
          <>
            <PrimaryHeading text="AUTHORS" />
            <AuthorsGrid />
          </>
        }
      />
      {/* <Route path="/authors/:id" element={
        <>
        
        </>
      } /> */}
    </Routes>
  );
}
