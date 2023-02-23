import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
export default function HomePage() {
  const [link, setLink] = useState("javascript");
  return (
    <div>
      <h1>Homepage</h1>
      <Link to={`/${link}`}>Topic Page</Link>
    </div>
  );
}
