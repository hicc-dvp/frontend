import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/Common/ProgressBar";
import ChoiceGrid from "../../components/Common/ChoiceGrid";
import styles from "./Select.module.css";

// 단계별 데이터
const stepData = [
  {
    id: 1,
    question: "첫 번째 단계 질문?",
    subquestion: "안녕하세요",
    choices: [
      { id: 1, label: "1단계 - 선택1" },
      { id: 2, label: "1단계 - 선택2" },
    ],
    tip: " 1단계 관련 팁",
  },
  {
    id: 2,
    question: "두 번째 단계 질문?",
    choices: [
      { id: 1, label: "2단계 - 선택1" },
      { id: 2, label: "2단계 - 선택2" },
      { id: 3, label: "2단계 - 선택3" },
      { id: 4, label: "2단계 - 선택4" },
      { id: 5, label: "2단계 - 선택5" },
      { id: 6, label: "2단계 - 선택6" },
    ],
  },
  {
    id: 3,
    question: "세 번째 단계 질문?",
    choices: [
      { id: 1, label: "3단계 - 선택1" },
      { id: 2, label: "3단계 - 선택2" },
      { id: 3, label: "3단계 - 선택3" },
      { id: 4, label: "3단계 - 선택4" },
      { id: 5, label: "3단계 - 선택5" },
      { id: 6, label: "3단계 - 선택6" },
      { id: 7, label: "3단계 - 선택7" },
      { id: 8, label: "3단계 - 선택8" },
      { id: 9, label: "3단계 - 선택9" },
    ],
  },
];

function Select() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = stepData.length;
  const stepInfo = stepData.find((s) => s.id === currentStep);
  const navigate = useNavigate();

  function goNext() {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  }

  // 선택 시 다음 단계로 이동 (예: 0.5초 후 이동)
  const handleSelect = (choiceId) => {
    console.log(`선택: ${choiceId}`);
    setTimeout(goNext, 200);
  };

  // 뒤로가기 (단순히 1단계면 홈으로, 2단계 이상이면 이전 단계 이동)
  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      // 1단계에서 더 뒤로 갈 수 없다면, 뒤로가기 로직
      window.history.back();
    }
  };

  return (
    <div className={styles.selectContainer}>
      {/* 플로팅 뒤로가기 버튼 */}
      <button className={styles.backButton} onClick={handleGoBack}>
        뒤로가기
      </button>

      {/* 진행바 */}
      <div className={styles.fixedProgressBar}>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* 본문 */}
      <div className={styles.questionText}>
        <h2>{stepInfo.question}</h2>
        <p className={styles.subText}>{stepInfo.subquestion}</p>
      </div>
      {/* 선택지 */}
      <ChoiceGrid choices={stepInfo.choices} onSelect={handleSelect} />

      <p className={styles.tip}>
        <span className={styles.highlight}>Tip!</span>
        {stepInfo.tip}
      </p>
    </div>
  );
}

export default Select;
