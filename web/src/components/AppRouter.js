import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/other" element={<p>Other Page</p>} />
    </Routes>
  );
}
