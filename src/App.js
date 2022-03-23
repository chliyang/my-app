import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Magazine from "./components/magazine/Magazine";
import FlexLayout from "./components/flex-layout/FlexLayout";
import GridLayout from "./components/grid-layout/GridLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="magazine" element={<Magazine />} />
        <Route path="flex-layout" element={<FlexLayout />} />
        <Route path="grid-layout" element={<GridLayout />} />
      </Routes>
    </div>
  );
}

export default App;
