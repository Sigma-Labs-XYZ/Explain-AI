import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "./utils/networking";
import HomePage from "./Pages/HomePage";
import TopicsPage from "./Pages/TopicsPage";

const MAIN_URL = "http://localhost:4000";

function AppRouter() {
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [toi, setTOI] = useState("javascript");

  useEffect(() => {
    (async function () {
      setRetrievedTopics(await fetchData(MAIN_URL + "/topic/" + toi)); //fetches when topic of interest changes
    })();
  }, [toi]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic">
          <Route
            path={`:${toi}`}
            element={<TopicsPage retrievedTopics={retrievedTopics} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
