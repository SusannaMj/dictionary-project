import logo from "./dog-and-dictionary.jpg";
import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> </header>
        <main>
          <img src={logo} className="App-logo" alt="logo" />
          <Dictionary />
        </main>
        <footer>This project has been coded by Susanna</footer>
      </div>
    </div>
  );
}

export default App;
