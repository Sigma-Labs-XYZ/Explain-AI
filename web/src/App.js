import React, { useEffect } from "react"; // eslint-disable-next-line
import ReactGA from "react-ga4";
import AudienceContext from "./components/AudienceContext";
import AppRouter from "./AppRouter/AppRouter";
import Header from "./Global/Header/Header";
import Generating from "./Pages/TopicPage/Generating/Generating";

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
        <Header />
        {/* <Generating /> */}
        <AppRouter />
      </div>
    </AudienceContext>
  );
}

export default App;
