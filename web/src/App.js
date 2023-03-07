import { React, useEffect } from "react"; // eslint-disable-next-line
import ReactGA from "react-ga4";
import "./App.css";
import AppRouter from "./AppRouter/AppRouter";
import Header from "./Global/Header/Header";

ReactGA.initialize("G-NDPH0VPH2Y");

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  });
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
