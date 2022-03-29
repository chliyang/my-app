import styles from "../GridLayout.module.scss";

const GridBoxes = (props) => {
  return (
    <div className={props.className}>
      <div className={styles.box1}>1</div>
      <div className={styles.box2}>2</div>
      <div className={styles.box3}>3</div>
      <div className={styles.box4}>4</div>
      <div className={styles.box5}>5</div>
      <div className={styles.box6}>6</div>
      <div className={styles.box7}>7</div>
      <div className={styles.box8}>8</div>
      <div className={styles.box9}>9</div>
    </div>
  );
};

export default GridBoxes;
