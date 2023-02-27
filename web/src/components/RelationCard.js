import "../components/RelationCard.scss";
import daddy from "./daddy.png";

export default function RelationCard({ name, description }) {
  return (
    <div class="text-left">
      <h2 className="text-2xl font-bold ">{name}</h2>
      <p className="">{description}</p>
      <img src={daddy} alt="daddy" />
    </div>
  );
}
