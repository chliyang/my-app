const Boxes = (props) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <div className={props.className}>
        <section className="box">1</section>
        <section className="box">2</section>
        <section className="box">4</section>
        <section className="box">5</section>
        <section className="box">6</section>
        <section className="box">7</section>
        <section className="box">8</section>
        <section className="box">9</section>
      </div>
    </>
  );
};

export default Boxes;
