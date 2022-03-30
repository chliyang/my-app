import React from "react";
import { Link } from "react-router-dom";
import styles from "./magazine/Magazine.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <h3>Practice Home Page</h3>
      <nav>
        <Link to="/magazine">Magazine</Link>
        <Link to="/flex-layout">FlexLayout</Link>
        <Link to="/grid-layout">GridLayout</Link>
        <Link to="/react-bootstrap">React Bootstrap</Link>
      </nav>
      <></>
    </div>
  );
}

export default Home;
