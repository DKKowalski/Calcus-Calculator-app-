import "./App.css";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        {" "}
        <Header />
        <Screen />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
