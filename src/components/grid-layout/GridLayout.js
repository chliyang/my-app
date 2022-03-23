import "./GridLayout.css";
import GridBoxes from "./components/GridBoxes";

const GridLayout = () => {
  return (
    <div className="grid-container">
      <GridBoxes className={"layout-1"} />
    </div>
  );
};
export default GridLayout;
