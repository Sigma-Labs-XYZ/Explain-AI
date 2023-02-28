import "../../Styles/header.css";

export default function DropDownSelector(props) {
  const { audience, select } = props;
  return (
    <>
      <div data-test-id="dropdown" className="dropdown">
        <form action="/action_page.php">
          <select
            value={audience}
            name="explainLevels"
            id="explainLevels"
            onChange={(event) => {
              select(event.target.value);
            }}
          >
            <option name="5" value="5">
              5
            </option>
            <option name="10" value="10">
              10
            </option>
            <option name="adult" value="Adult">
              Adult
            </option>
          </select>
        </form>
      </div>
    </>
  );
}
