import React from "react";
import AppRouter from "./components/AppRouter";
import "./App.css";

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
