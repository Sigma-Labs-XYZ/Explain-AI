import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import TopicPage from "./pages/TopicPage.js";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:topic" element={<TopicPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
