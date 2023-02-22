import "./App.css";
import { useState, useEffect } from "react";
import { fetchData } from "./utils/networking";
import Header from "./components/Header.js";
const MAIN_URL = "http://localhost:4000/topics";
function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
