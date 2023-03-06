import { React } from "react";
import { AudienceContext } from "./components/AudienceContext";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <AudienceContext>
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </AudienceContext>
  );
}

export default App;
