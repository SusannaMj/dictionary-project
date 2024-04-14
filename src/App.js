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
        <footer>
          This project has been coded by Susanna and is{" "}
          <a
            href="https://github.com/SusannaMj/dictionary-project"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://verdant-narwhal-45be13.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
