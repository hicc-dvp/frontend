import React from "react";
import styles from "./ChoiceItem.module.css";

function ChoiceItem({ choice, onSelect }) {
  const handleClick = () => {
    onSelect(choice.id);
  };

  return (
    <button className={styles.choiceItemButton} onClick={handleClick}>
      {choice.label}
    </button>
  );
}

export default ChoiceItem;
