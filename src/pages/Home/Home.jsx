import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HICC</h1>
      <button className={styles.button}>시작하기</button>
    </div>
  );
}

export default Home;
