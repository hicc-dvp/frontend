import React from "react";
import ChoiceItem from "../../components/Select/ChoiceItem";
import styles from "./ChoiceGrid.module.css";

function ChoiceGrid({ choices, onSelect }) {
  // 선택지 개수에 따라 열 개수 결정
  const columnCount = choices.length >= 3 ? 3 : choices.length;

  return (
    <div
      className={styles.gridContainer}
      style={{ gridTemplateColumns: `repeat(${columnCount}, 120px)` }}
    >
      {choices.map((choice) => (
        <ChoiceItem key={choice.id} choice={choice} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default ChoiceGrid;
