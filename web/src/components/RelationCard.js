import "../components/RelationCard.scss";
import daddy from "./daddy.png";

export default function RelationCard({ name, description }) {
  return (
    <div className="text-left bg-white border-transparent m-5 p-3 pl-10 mr-20 flex items-center">
      <div>
        <h2 className="text-2xl font-bold mb-0 mt-4">{name}</h2>
        <p className="mt-2">{description}</p>
      </div>
      <div className="object-right">
        <img
          className="w-20 h-20 border-1 rounded-full"
          src={daddy}
          alt="daddy"
        />
      </div>
    </div>
  );
}
