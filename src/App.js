import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Magazine from "./components/magazine/Magazine";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="magazine" element={<Magazine />} />
      </Routes>
    </div>
  );
}

export default App;
