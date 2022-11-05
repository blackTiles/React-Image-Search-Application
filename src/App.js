import React from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/:search_text" element={<Container />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
