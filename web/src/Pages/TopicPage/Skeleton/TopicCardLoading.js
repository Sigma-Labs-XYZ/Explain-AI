import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function TopicCardLoading() {
  return (
    <div className="topic-card-parent">
      <div className="topic-card">
        <div>
          <h1>
            <Skeleton className="m-[20px] " />
          </h1>
        </div>
        <div>
          <p data-testid="description-container" className="topic-desc">
            <Skeleton count={3} className="ml-[20px] mr-[15px] w-[100%]" />
          </p>
        </div>

        <div className="topic-card-img-btn">
          {/* <Skeleton height={50} width={300} className="translate-x-[13%] translate-y-[75%]" /> */}
          <button type="button">Tell me more</button>
          <div>
            <Skeleton circle height={200} width={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
