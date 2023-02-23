import { Link } from "react-router-dom";
import { useState } from "react";
export default function HomePage() {
  const [endpoint, setEndpoint] = useState("javascript");
  return (
    <div>
      <h1>Homepage</h1>
      <Link to={`/${endpoint}`}>Topic Page</Link>
    </div>
  );
}
