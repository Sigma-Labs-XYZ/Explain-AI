import { useParams } from "react-router-dom";

export default function TopicPage() {
  const { topic } = useParams();
  return (
    <div>
      <h1>Topic</h1>
      <p>{topic}</p>
    </div>
  );
}
