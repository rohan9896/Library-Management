import "./App.css";
import BookPage from "./components/BookPage/BookPage";
import RouterComp from "./RouterComp";

function App() {
  return (
    <div className="App">
      <RouterComp />
      <BookPage />
    </div>
  );
}

export default App;
