import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import SampleList from "./pages/SampleList";
import ShareSample from "./pages/ShareSample";
import EditSample from "./pages/EditSample";
import { toneObject, toneTransport, tonePart } from "./data/instruments.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App toneObject={toneObject} toneTransport={toneTransport} tonePart={tonePart}/>} />
          <Route path="/sampleList" element={<SampleList toneObject={toneObject} toneTransport={toneTransport} tonePart={tonePart}/>} />
          <Route path="/shareSample/" element={<ShareSample toneObject={toneObject} toneTransport={toneTransport} tonePart={tonePart} />} />
          <Route path="/editSample" element={<EditSample toneObject={toneObject} toneTransport={toneTransport} tonePart={tonePart}/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

