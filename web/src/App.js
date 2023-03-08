<<<<<<< HEAD
import { React, useEffect } from "react"; // eslint-disable-next-line
import ReactGA from "react-ga4";
import { AudienceContext } from "./components/AudienceContext";
=======
import { React } from "react";
import AudienceContext from "./components/AudienceContext";
import "./App.css";
>>>>>>> 7c3d93f (added in all prop types)
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
        <Header />
        <AppRouter />
      </div>
    </AudienceContext>
  );
}

export default App;
