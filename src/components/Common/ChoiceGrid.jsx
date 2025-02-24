import React from "react";
import styles from "./ChoiceGrid.module.css";

function ChoiceGrid({ choices, onSelect }) {
  return (
    <div className={styles.gridContainer}>
      {choices.map((choice) => (
        <button
          key={choice.id}
          className={styles.choiceButton}
          onClick={() => onSelect(choice.id)}
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
}

export default ChoiceGrid;
