import "../components/RelationCard.scss";
import daddy from "./daddy.png";

export default function RelationCard({ name, description }) {
  return (
    <div className="flex items-center">
      <div className="text-left bg-white border-transparent m-5 p-3 pl-10 flex items-center w-full">
        <div className="pr-10">
          <h2 className="text-2xl font-bold mb-0 mt-4">{name}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
      <div className="-ml-16 mr-5">
        <img
          className="w-24 h-24 border-1 rounded-full"
          src={daddy}
          alt="daddy"
        />
      </div>
    </div>
  );
}
