import React from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";

export function App() {
  return (
    <HashRouter>
      <div>
        Zakar Handricken - CS5610.20595.202510<br />
        <a href="https://github.com/zakarh/kanbas-react-web-app">https://github.com/zakarh/kanbas-react-web-app</a>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;