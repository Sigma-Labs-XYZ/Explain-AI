import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "./utils/networking";
import HomePage from "./Pages/HomePage";
import Topic from "./Pages/Topic";


const MAIN_URL = "http://localhost:4000";

function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
            path={`:toi`}
            element={<Topic/>}
          />
      </Routes>
    </div>
  );
}

export default AppRouter;
