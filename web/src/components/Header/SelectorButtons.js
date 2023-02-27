import "../../Styles/header.css";

export default function SelectorButtons({ select, audience }) {
  return (
    <div data-test-id="selectorButtons" className="selectorButtons">
      <button
        data-testid="five"
        id="five"
        className={audience === "5" ? "selected" : "unselected"}
        name="5"
        onClick={(event) => {
          select(event.target.name);
        }}
      >
        5
      </button>
      <button
        data-testid="ten"
        className={audience === "10" ? "selected" : "unselected"}
        name="10"
        onClick={(event) => {
          select(event.target.name);
        }}
      >
        10
      </button>
      <button
        data-testid="adult"
        id="adult"
        className={audience === "Adult" ? "selected" : "unselected"}
        name="Adult"
        onClick={(event) => {
          select(event.target.name);
        }}
      >
        Adult
      </button>
    </div>
  );
}
