import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/Homepage/HomePage";
import TopicPage from "../Pages/TopicPage/TopicPage";
import "../Styling/AppRouter/AppRouter.css";

export default function AppRouter() {
  return (
    <div className="inner">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:topic" element={<TopicPage />} />
      </Routes>
    </div>
  );
}
