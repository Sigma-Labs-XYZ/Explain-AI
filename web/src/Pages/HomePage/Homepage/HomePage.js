import React, { useEffect, useState, useContext } from "react";
import { homepageFetch } from "../../../utils/networking";
import HomePageCard from "../HomePageCard/HomePageCard";
import "../../../Styling/Homepage/Homepage.css";
import { ageContext } from "../../../components/AudienceContext";

export default function HomePage() {
  const audience = useContext(ageContext);
  const [groupData, setGroupData] = useState(null);
  useEffect(() => {
    const settingGroups = async () => {
      const groupfetch = await homepageFetch();
      setGroupData(groupfetch);
    };
    settingGroups();
  }, []);
  const generateGroups = () => groupData.group.map((group) => <HomePageCard group={group} />);

  return (
    <div className="homepage-container">
      {console.log({ audience })}
      <div className="groups-container">{groupData ? generateGroups() : ""}</div>
    </div>
  );
}
