import { React } from "react";

function FetchDataDiv({retrievedTopics}) {

  return (
    <div >
      {retrievedTopics && (
        <p data-testid="jsondat">{JSON.stringify(retrievedTopics)}</p>
      )}
    </div>
  );
}

export default FetchDataDiv;
