import React, { useState, useEffect } from "react";
import RelationCard from "../../TopicPage/RelationCard/RelationCard";
import "../../../Styling/Homepage/Homepage.css";

export default function HomePageCard({ group, audience }) {
  const [ageIndex, setAgeIndex] = useState(0);
  const mapAge = () => (audience > 10 ? 2 : Math.floor(audience / 5 - 1));
  useEffect(() => {
    setAgeIndex(mapAge());
  }, [audience]);
  return (
    <div>
      <div className="group-display-title mt-28 span-desc ml-5 phone:mr-0 phone:ml-0 superWideDesktop:mr-[15%] superWideDesktop:ml-[15%] desktop:mr-[15%]">
        <h1 className="group-title">
          {group.name} <h1 className="group-description">{group.description}</h1>
        </h1>{" "}
      </div>
      <br />
      <ul>
        {group.items.map((item) => (
          <li key={item.topic.name}>
            <RelationCard
              name={item.topic.name}
              description={item.topic.descriptions[ageIndex].extra_short}
              image={item.topic.image}
              parent={group.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}