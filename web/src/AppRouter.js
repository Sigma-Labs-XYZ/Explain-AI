import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Topic from "./Pages/Topic";


function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
            path={`:topicOfInterest`}
            element={<Topic/>}
          />
      </Routes>
    </div>
  );
}

export default AppRouter;
