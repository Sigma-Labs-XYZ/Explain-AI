import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RelationCardLoading from "./RelationCardLoading";
import TopicCardLoading from "./TopicCardLoading";

export default function TopicPageLoading() {
  return (
    <>
      <TopicCardLoading />

      <h2 className="text-left text-3xl ml-5 text-white font-bold mb-5 mt-16 superWideDesktop:ml-[15%]">
        Related
      </h2>

      <RelationCardLoading />
      <RelationCardLoading />
      <RelationCardLoading />
    </>
  );
}
