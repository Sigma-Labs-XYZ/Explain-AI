import "./App.css";
import Header from "./components/Header/Header.js";
import { AppRouter } from "./components/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
