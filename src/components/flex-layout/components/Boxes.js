import styles from "../FlexLayout.module.scss";

const Boxes = (props) => {
  return (
    <>
      <div className={styles.title}>{props.title}</div>
      <div className={props.className}>
        <section className={styles.box}>1</section>
        <section className={styles.box}>2</section>
        <section className={styles.box}>4</section>
        <section className={styles.box}>5</section>
        <section className={styles.box}>6</section>
        <section className={styles.box}>7</section>
        <section className={styles.box}>8</section>
        <section className={styles.box}>9</section>
      </div>
    </>
  );
};

export default Boxes;
