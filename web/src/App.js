import "./App.css";
import { AppRouter } from "./components/AppRouter";
import Header from "./components/Header";

function App() {
  console.log('fake log (would cause netlify to fail before, should not now)')
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
