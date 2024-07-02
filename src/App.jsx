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

// interface ILocations {
//   stationName: string;
//   coordinates: { longitude: number; latitude: number };
// }

// export const stations: Array<ILocations> = [
//   {
//     // 30°42′11″N 76°49′19″E
//     coordinates: { longitude: 30.703, latitude: 76.822 },
//     stationName: "Chandigarh Junction",
//   },
//   {
//     //30.3382, 76.8287
//     coordinates: { longitude: 30.3382, latitude: 76.8287 },
//     stationName: "Ambala Junction",
//   },
//   {
//     //29.970135, 76.851816
//     coordinates: { longitude: 29.970135, latitude: 76.851816 },
//     stationName: "Kurukshetra",
//   },
//   {
//     //29.696520, 76.969795
//     coordinates: { longitude: 29.69652, latitude: 76.969795 },
//     stationName: "Karnal",
//   },
//   {
//     //28.6417, 77.2207
//     coordinates: { longitude: 28.6417, latitude: 77.2207 },
//     stationName: "New Delhi",
//   },
// ];
