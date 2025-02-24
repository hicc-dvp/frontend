import React from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({ currentStep, totalSteps }) {
  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressFill}
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;
