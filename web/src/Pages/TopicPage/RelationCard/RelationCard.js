import React from "react";
import { Link } from "react-router-dom";

function RelationCard({ name, description, image }) {
  return (
    <Link to={`/${name.toLowerCase()}`}>
      <div
        className="flex items-center ml-5 phone:mr-0 phone:ml-0 superWideDesktop:mr-[15%]"
        data-test-id="link-div"
      >
        <div className="text-left bg-white border-transparent mb-3 p-3 pl-10 flex items-center w-full phone:ml-0 phone:pr-0 superWideDesktop:ml-[15%]">
          <div className="pr-24 phone:mr-10">
            <h2 className="text-2xl font-bold mb-0 mt-4">{name}</h2>
            <p className="mt-2">{description}</p>
          </div>
        </div>
        <div
          className="mr-5 -ml-12 mb-[0.8%] phone:-ml-32 phone:mr-8 "
          data-test-id="img container"
        >
          <div className="w-24 h-24">
            <img className="rounded-full object-cover h-full w-full" src={image} alt={name} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RelationCard;
