import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import TopicPage from "./TopicPage";

export function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:topic" element={<TopicPage />} />
      </Routes>
    </>
  );
}
