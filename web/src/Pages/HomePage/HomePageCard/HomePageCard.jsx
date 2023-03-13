import React from "react";

import RelationCard from "../../TopicPage/RelationCard/RelationCard";

export default function HomePageCard({ group }) {
  return (
    <div>
      <div className="group-display-title mt-28 span-desc ml-5 phone:mr-0 phone:ml-0 superWideDesktop:mr-[15%] superWideDesktop:ml-[15%] desktop:mr-[15%]">
        <h1 className="group-title">
          {group.name} <h1 className="group-description">{group.description}</h1>
        </h1>{" "}
      </div>
      <br />
      <ul>
        {group.items.map((item, index) => (
          <li>
            <RelationCard
              key={index} //eslint-disable-line
              name={item.topic.name}
              description={item.topic.descriptions[0].extra_short}
              image={item.topic.image}
              parent={group.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
