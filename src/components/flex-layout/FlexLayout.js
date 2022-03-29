import styles from "./FlexLayout.module.scss";
import Boxes from "./components/Boxes";

const FlexLayout = () => {
  return (
    <div className={styles.container}>
      <Boxes title={"水平正序排列"} className={styles.layout} />
      <Boxes title={"水平逆序排列"} className={styles.layout2} />
      <div className={styles.column}>
        <Boxes title={"垂直正序排列"} className={styles.layout3} />
        <Boxes title={"垂直逆序排列"} className={styles.layout4} />
      </div>
      <>
        <div className={styles.title}>单个项目变化</div>
        <div className={styles.layout}>
          <section className={styles.box}>1</section>
          <section className={styles.box2}>2</section>
          <section className={styles.box3}>3</section>
          <section className={styles.box4}>4</section>
        </div>
      </>
    </div>
  );
};

export default FlexLayout;
