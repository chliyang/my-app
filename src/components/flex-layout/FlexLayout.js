import "./FlexLayout.css";

const FlexLayout = () => {
  return (
    <div className="flex-container">
      <div className="title">水平正序排列</div>
      <div className="layout1">
        <section className="box">1</section>
        <section className="box">2</section>
        <section className="box">4</section>
        <section className="box">5</section>
        <section className="box">6</section>
        <section className="box">7</section>
        <section className="box">8</section>
        <section className="box">9</section>
      </div>
    </div>
  );
};

export default FlexLayout;
