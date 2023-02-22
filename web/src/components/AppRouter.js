import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import TopicPage from "./TopicPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:topic" element={<TopicPage />} />
    </Routes>
  );
}
