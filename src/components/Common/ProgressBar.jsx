import React, { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({ currentStep, totalSteps }) {
  const [progress, setProgress] = useState(0); // 초기값을 0으로 설정

  useEffect(() => {
    const progressPercentage = Math.round((currentStep / totalSteps) * 100);
    setTimeout(() => setProgress(progressPercentage), 0); // 0.2초 딜레이 후 애니메이션 시작
  }, [currentStep, totalSteps]);

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressFill} style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
