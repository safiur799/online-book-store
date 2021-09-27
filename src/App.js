import "./App.css";
import SearchBar from "./components/SearchBar";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
function App() {
  return (
    <div className="App">
      <h1>Online book api</h1>
      <Navbar />
      <Switch>
        <Route path="/home"></Route>
        <Route path="/books" exact>
          <SearchBar />
        </Route>
        <Route path="/books/:bookId">
          <BookDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
