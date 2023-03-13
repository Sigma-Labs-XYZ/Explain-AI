import React, { useEffect, useState, useContext } from "react";
import { homepageFetch } from "../../../utils/networking";
import HomePageCard from "../HomePageCard/HomePageCard";
import "../../../Styling/Homepage/Homepage.css";
import { ageContext } from "../../../components/AudienceContext";

export default function HomePage() {
  const { audience } = useContext(ageContext);
  const [groupData, setGroupData] = useState(null);
  useEffect(() => {
    const settingGroups = async () => {
      setGroupData(await homepageFetch());
    };
    settingGroups();
  }, []);
  // eslint-disable-next-line
  const generateGroups = () => {
    console.log(groupData);
    return groupData.group.map((group) => (
      <HomePageCard key={`${group.name}`} group={group} audience={audience} />
    ));
  };
  return (
    <div className="homepage-container">
      <div className="groups-container">{groupData ? generateGroups() : ""}</div>
    </div>
  );
}
