import React, { useState } from "react";
import ProgressBar from "../../components/Common/ProgressBar";
import ChoiceGrid from "../../components/Common/ChoiceGrid";
import styles from "./Select.module.css";

// 3단계 정보
const stepData = [
  {
    id: 1,
    question: "첫 번째 단계 질문?",
    choices: [
      { id: 1, label: "첫단계-선택1" },
      { id: 2, label: "첫단계-선택2" },
    ],
    tip: "Tip: 1단계 관련 팁을 적어주세요",
  },
  {
    id: 2,
    question: "두 번째 단계 질문?",
    choices: [
      { id: 1, label: "두단계-선택1" },
      { id: 2, label: "두단계-선택2" },
      { id: 3, label: "두단계-선택3" },
      { id: 4, label: "두단계-선택4" },
      { id: 5, label: "두단계-선택5" },
      { id: 6, label: "두단계-선택6" },
    ],
    tip: "Tip: 2단계에서는 6가지 선택지가 있습니다",
  },
  {
    id: 3,
    question: "세 번째 단계 질문?",
    choices: [
      { id: 1, label: "세단계-선택1" },
      { id: 2, label: "세단계-선택2" },
      { id: 3, label: "세단계-선택3" },
      { id: 4, label: "세단계-선택4" },
      { id: 5, label: "세단계-선택5" },
      { id: 6, label: "세단계-선택6" },
      { id: 7, label: "세단계-선택7" },
      { id: 8, label: "세단계-선택8" },
      { id: 9, label: "세단계-선택9" },
    ],
    tip: "Tip: 3단계는 9가지 선택지를 확인해보세요",
  },
];

function Select() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = stepData.length;

  const stepInfo = stepData.find((s) => s.id === currentStep);

  // 다음/이전 단계 이동
  const goNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      alert("마지막 단계입니다!");
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      alert("첫 번째 단계입니다!");
    }
  };

  // 선택 시
  const handleSelect = (choiceId) => {
    console.log(`선택: ${choiceId}`);
    // 필요하다면 다음 단계로 자동 이동, 상태 저장 등
  };

  return (
    <div className={styles.selectContainer}>
      {/* 뒤로가기 버튼 (SVG 아이콘 사용 시 URL import) */}
      <button onClick={goBack} className={styles.backButton}>
        뒤로가기
      </button>

      {/* 진행바 */}
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      {/* 질문 */}
      <div className={styles.questionBox}>
        <h2>{stepInfo.question}</h2>
      </div>

      {/* 선택지 */}
      <ChoiceGrid choices={stepInfo.choices} onSelect={handleSelect} />

      {/* 팁 */}
      <div className={styles.tipBox}>{stepInfo.tip}</div>

      {/* 다음 버튼 */}
      <button onClick={goNext} className={styles.nextButton}>
        다음 단계
      </button>
    </div>
  );
}

export default Select;
