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
      <>
        <div className="title">单个项目变化</div>
        <div className="layout1">
          <section className="box">1</section>
          <section className="box2">2</section>
          <section className="box3">3</section>
          <section className="box4">4</section>
        </div>
      </>
    </div>
  );
};

export default FlexLayout;
