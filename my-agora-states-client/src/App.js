import "./App.css";
import Header from "./components/header";
import Discussions from "./components/discussions";

function App() {
  return (
    <div className="App">
      <header>{<Header />}</header>
      <main>{<Discussions />}</main>
    </div>
  );
}

export default App;
