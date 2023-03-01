import "./App.css";
import React from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
