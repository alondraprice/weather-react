import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />
        <footer>
            <a
              href="https://github.com/alondraprice/weather-react"
              target="blank"
            >
              Open-source coded {""}
            </a>
            by Alondra Price
        </footer>
      </div>
    </div>
  );
}
