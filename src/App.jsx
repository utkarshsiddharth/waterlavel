import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./page2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Page1 />} />

        <Route path="/dashboard2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
