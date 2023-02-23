import explainailogo from "../images/explainai-logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <div>
      <header>
        <img src={explainailogo} alt="logo" />
      </header>
    </div>
  );
}
