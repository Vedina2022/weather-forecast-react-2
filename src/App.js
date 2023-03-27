import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultLocation="Mykolaiv" />
        <footer>
          This project was coded by Nadiia Kyshinska and is{" "}
          <a href="https://github.com/Vedina2022/weather-forecast-react-2">
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
