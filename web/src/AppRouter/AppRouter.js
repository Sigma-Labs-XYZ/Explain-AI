import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import TopicPage from "../Pages/TopicPage/TopicPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:topic" element={<TopicPage />} />
    </Routes>
  );
}
