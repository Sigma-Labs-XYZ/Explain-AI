import React from "react";
import { withRouter } from "react-router-dom"; // eslint-disable-next-line
import ReactGA from "react-ga4";

function RouteChangeTracker({ history }) {
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.send(location.pathname);
  });

  return <>null</>;
}

export default withRouter(RouteChangeTracker);
