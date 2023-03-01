import "../components/RelationCard.scss";
import pedroImage from "./pedro.png";
import { useNavigate } from "react-router-dom";

export default function RelationCard({ name, description }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center phone:mr-0"
      onClick={() => navigate(`/${name.toLowerCase()}`)}
      data-testid="link-div"
    >
      <div className="text-left bg-white border-transparent ml-5 mb-3 p-3 pl-10 flex items-center w-full phone:ml-0 phone:pr-0">
        <div className="pr-24 phone:mr-10">
          <h2 className="text-2xl font-bold mb-0 mt-4">{name}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
      <div
        className="-ml-12 mr-5 mb-[0.8%] phone:-ml-32 phone:mr-0 "
        data-test-id="img container"
      >
        <img
          className="w-24 h-24 border-1 rounded-full"
          src={pedroImage}
          alt="pedro"
        />
      </div>
    </div>
  );
}
