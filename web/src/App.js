import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Header from "./Global/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
