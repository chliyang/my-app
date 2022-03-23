import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h3>Practice Home Page</h3>
      <nav>
        <Link to="/magazine">Magazine</Link>
        <Link to="/flex-layout">FlexLayout</Link>
        <Link to="/grid-layout">GridLayout</Link>
      </nav>
      <></>
    </div>
  );
}

export default Home;
