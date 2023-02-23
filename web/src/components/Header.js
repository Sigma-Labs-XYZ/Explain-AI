import explainailogo from "../images/explainai-logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <div>
      <header>
        <img src={explainailogo} alt="logo" />
        <div>
          <p>Like I'm</p>
          <button className="btn">5</button>
          <button className="btn">10</button>
          <button className="btn">Adult</button>
          <select className="select-pg">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="adult">Adult</option>
          </select>
        </div>
      </header>
    </div>
  );
}
