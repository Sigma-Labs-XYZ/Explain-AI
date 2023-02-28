import "../../Styles/header.css";

export default function SelectorButtons({ select, audience }) {
  const buttonData = [
    { id: "five", name: "5" },
    { id: "ten", name: "10" },
    { id: "adult", name: "Adult" },
  ];
  return (
    <div data-test-id="selectorButtons" className="selectorButtons">
      {buttonData.map((element) => {
        return (
          <button
            data-testid={element.id}
            id={element.id}
            className={audience === element.name ? "selected" : "unselected"}
            name={element.name}
            onClick={(event) => {
              select(event.target.name);
            }}
          >
            {element.name}
          </button>
        );
      })}
    </div>
  );
}
