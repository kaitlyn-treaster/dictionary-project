import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header"></header>
      <main>
        <Dictionary />
      </main>
        <footer className="App-footer">
          <small>
          Coded by {" "}
            <a href="www.linkedin.com/in/kaitlyn-treaster" target="_blank" rel="noreferrer">
               Kaitlyn Treaster
            </a>
            and is{" "} 
            <a href="https://github.com/kaitlyn-treaster/dictionary-project" target="_blank" rel="noreferrer">
            open-sourced on GitHub
            </a>
            {" "}and hosted on {" "} 
            <a href="https://upbeat-cori-a4f735.netlify.app/" target="_blank" rel="noreferrer">
              Netlify
              </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
