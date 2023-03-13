import React, { useEffect } from "react"; // eslint-disable-next-line
import ReactGA from "react-ga4";
// eslint-disable-next-line
import { Helmet } from "react-helmet";
import AudienceContext from "./components/AudienceContext";
import AppRouter from "./AppRouter/AppRouter";
import Header from "./Global/Header/Header";

ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID);

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  });
  return (
    <AudienceContext>
      <div className="App">
        <Helmet>
          <title>My Title</title>
          <meta name="description" content="Explain it to me. Simply." />
        </Helmet>
        <Header />
        <AppRouter />
      </div>
    </AudienceContext>
  );
}

export default App;
