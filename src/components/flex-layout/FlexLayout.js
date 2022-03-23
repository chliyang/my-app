import "./FlexLayout.css";
import Boxes from "./components/Boxes";

const FlexLayout = () => {
  return (
    <div className="flex-container">
      <Boxes title={"水平正序排列"} className={"layout1"} />
      <Boxes title={"水平逆序排列"} className={"layout2"} />
      <div className="column">
        <Boxes title={"垂直正序排列"} className={"layout3"} />
        <Boxes title={"垂直逆序排列"} className={"layout4"} />
      </div>
    </div>
  );
};

export default FlexLayout;
