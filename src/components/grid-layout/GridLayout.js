import "./GridLayout.css";
import GridBoxes from "./components/GridBoxes";

const GridLayout = () => {
  return (
    <div className="grid-container">
      <GridBoxes className={"layout-1"} />
      <GridBoxes className={"layout-2"} />
      <GridBoxes className={"layout-3"} />
      <GridBoxes className={"layout-4"} />
    </div>
  );
};
export default GridLayout;
