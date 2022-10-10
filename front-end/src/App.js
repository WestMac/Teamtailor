import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <h1>
            <span className="company-name">Teamtailor</span> recruitment task
          </h1>
        </div>
      </header>
      <main className="App-main">
        <Button />
      </main>
    </div>
  );
}

export default App;
