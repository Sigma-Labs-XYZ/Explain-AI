import React from "react";

import RelationCard from "../../TopicPage/RelationCard/RelationCard";

export default function HomePageCard({{group}}) {
  return (
    <div>
      <h1> Topic </h1>
      <ul></ul>
      {group.items.map((item,index)=>{
        <li>
          <RelationCard                 
            key={rel.to.name}
            name={rel.to.name}
            description={rel.description}
            image={rel.to.image}
            parent={topic}/>
        </li>
      })}
    </div>
  );
}
