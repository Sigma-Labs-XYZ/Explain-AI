import { Outlet, Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link data-testid="topicLink" to="/topic">
        Topic Page
      </Link>
    </div>
  );
}
