import styles from "./GridLayout.module.scss";
import GridBoxes from "./components/GridBoxes";
import GridBoxesFour from "./components/GridBoxesFour";

const GridLayout = () => {
  return (
    <div className={styles.container}>
      <GridBoxes className={styles.layout1} />
      <GridBoxes className={styles.layout2} />
      <GridBoxes className={styles.layout3} />
      <GridBoxes className={styles.layout4} />
      <GridBoxesFour />
    </div>
  );
};
export default GridLayout;
