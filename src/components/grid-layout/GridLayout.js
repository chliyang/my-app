import "./GridLayout.module.css";
import GridBoxes from "./components/GridBoxes";
import GridBoxesFour from "./components/GridBoxesFour";

const GridLayout = () => {
  return (
    <div className="grid-container">
      <GridBoxes className={"layout-1"} />
      <GridBoxes className={"layout-2"} />
      <GridBoxes className={"layout-3"} />
      <GridBoxes className={"layout-4"} />
      <GridBoxesFour className={"layout-5"} />
    </div>
  );
};
export default GridLayout;
