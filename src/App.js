import './App.css';
import AuthorsGrid from './components/AuthorsGrid/AuthorsGrid';
import AuthorsPage from './components/AuthorsPage/AuthorsPage';
import PrimaryHeading from './components/PrimaryHeading/PrimaryHeading';

function App() {
  return (
    <div className="App">
      <PrimaryHeading text="Authors" />
      <AuthorsGrid />
      <AuthorsPage />
    </div>
  );
}

export default App;
