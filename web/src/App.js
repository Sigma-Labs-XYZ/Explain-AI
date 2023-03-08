import { React } from "react";
import { AudienceContext } from "./components/AudienceContext";
import AppRouter from "./AppRouter/AppRouter";
import Header from "./Global/Header/Header";

function App() {
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
