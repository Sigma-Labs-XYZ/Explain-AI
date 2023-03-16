import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../../Styling/TopicCard/TopicCard.css";

export default function TopicCardLoading() {
  return (
    <div className="topic-card-parent">
      <div className="topic-card">
        <div className="topic-card-title">
          <Skeleton height={50} width={200} className="mt-[20px] mb-[20px]" />
        </div>
        <div className="topic-card-description">
          <div data-testid="description-container" className="topic-desc">
            <p className="w-full">
              <Skeleton count={3} />
            </p>
          </div>
        </div>
        <div className="topic-card-img-btn">
          <button type="button" className="ml-[10px]">
            <Skeleton />
          </button>

          <div className="topic-card-img">
            <Skeleton circle height={200} width={200} />
          </div>
        </div>
      </div>
    </div>
  );
}

// {
/* <div className="topic-card-parent">
  <div className="topic-card">
    <div className="topic-card-title">
      <h1 data-testid="skeleton">
        <Skeleton height={50} width={200} />
      </h1>
    </div>
    <div className="topic-card-description">
      <div data-testid="description-container" className="topic-desc">
        <p className="topic-desc" data-testid="skeleton">
          <Skeleton count={3} />
        </p>
      </div>
    </div>
    <div className="topic-card-img-btn">
      <button type="button" data-testid="skeleton">
        <Skeleton />
      </button>

      <div className="topic-card-img">
        <div data-testid="skeleton">
          <Skeleton circle height={200} width={200} />
        </div>
      </div>
    </div>
  </div>
</div>; */
// }
