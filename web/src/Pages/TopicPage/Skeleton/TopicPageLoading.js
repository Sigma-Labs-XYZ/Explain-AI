import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RelationCardLoading from "./RelationCardLoading";

export default function TopicPageLoading() {
  return (
    <>
      <div className="topic-card-parent">
        <div className="topic-card">
          <div>
            <p>
              <Skeleton height={50} width={200} className="m-[20px] " />
            </p>
          </div>
          <div>
            <p>
              <Skeleton count={3} className="ml-[20px] mr-[15px]" width={550} />
            </p>
          </div>

          <div className="flex ">
            <Skeleton height={50} width={300} className="translate-x-[13%] translate-y-[75%]" />

            <Skeleton
              circle
              height={200}
              width={200}
              className="translate-y-[30%] translate-x-[30%] "
            />
          </div>
        </div>
      </div>

      <h2 className="text-left text-3xl ml-5 text-white font-bold mb-5 mt-16 superWideDesktop:ml-[15%]">
        Related
      </h2>

      <RelationCardLoading />
      <RelationCardLoading />
      <RelationCardLoading />
    </>
  );
}
