import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { fetchData } from "./utils/networking";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function updateData() {
      setData(await fetchData("http://localhost:4000/topics"));
    }
    updateData();
  }, []);

  return <div className="App">{data && <p>{JSON.stringify(data)}</p>}</div>;
}

export default App;
