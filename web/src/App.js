import logo from "./logo.svg";
import "./App.css";
import { fetchTopics } from "./Networking";
import { useState, useEffect } from "react";

function App() {
  const [topics, setTopics] = useState("second");
  useEffect(() => {
    fetchTopics(setTopics);
  }, []);

  return (
    <div className="App">
      <p>{topics}</p>
    </div>
  );
}

export default App;
