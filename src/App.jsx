import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Common/Layout";
import Home from "./pages/Home/Home";
import Select from "./pages/Select/Select";
import Result from "./pages/Result/Result";
import QR from "./pages/Result/qr";
import Join from "./pages/Join/Join";
import Mate from "./pages/Result/Mate";
import TestAPI from "./pages/TestAPI/TestAPI";
import "./styles/colors.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home 페이지는 Layout 없이 */}
        <Route path="/" element={<Home />} />

        {/* 나머지 페이지들은 Layout 적용 */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/select" element={<Select />} />
                <Route path="/result" element={<Result />} />
                <Route path="/qr" element={<QR />} />
                <Route path="/join" element={<Join />} />
                <Route path="/mate" element={<Mate />} />
                <Route path="/test-api" element={<TestAPI />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
