import "./App.css";
import { useState, useEffect } from "react";
import { fetchData } from "./utils/networking";
import Header from "./components/Header/Header.js";
import { AppRouter } from "./components/AppRouter";
const MAIN_URL = "http://localhost:4000/topics";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
