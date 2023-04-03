import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultLocation="Mykolaiv" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nadiia-kyshinska-8aa342168/"
            className="footer-link"
          >
            Nadiia Kyshinska
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Vedina2022/weather-forecast-react-2"
            className="footer-link"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
