import { React, useState, createContext, useContext } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";

const ageContext = createContext(null);

function App() {
  const [age, setAge] = useState(
    localStorage.getItem("age") || localStorage.setItem("age", "5") || "5",
  );

  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
