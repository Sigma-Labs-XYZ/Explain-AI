import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiResponse = await fetch("http://localhost:4000/topics");
    const apiResponseJSON = await apiResponse.json();
    setData(apiResponseJSON);
  };
  return <div className="App"> {data && <p>{JSON.stringify(data)}</p>}</div>;
}

export default App;
