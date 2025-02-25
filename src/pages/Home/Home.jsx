// src/pages/Home/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/select");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HICC</h1>
      <button className={styles.button} onClick={handleStart}>
        시작하기
      </button>
    </div>
  );
}

export default Home;
