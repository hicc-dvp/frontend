import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Common/Layout";
import Home from "./pages/Home/Home";
import Select from "./pages/Select/Select";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
