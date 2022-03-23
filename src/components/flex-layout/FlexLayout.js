import "./FlexLayout.css";
import Boxes from "./components/Boxes";

const FlexLayout = () => {
  return (
    <div className="flex-container">
      <Boxes title={"水平正序排列"} className={"layout1"} />
    </div>
  );
};

export default FlexLayout;
