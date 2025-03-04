import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/Common/ProgressBar";
import ChoiceGrid from "../../components/Common/ChoiceGrid";
import styles from "./Select.module.css";
import BackIcon from "../../assets/svg/back.svg?url"; // 뒤로가기 아이콘

const stepData = [
  {
    id: 1,
    question: "주로 어디에서 강의가 끝나나요?",
    subquestion: "홍대입구역/상수역 중 한 군데만 선택해주세요",
    choices: [
      { id: 1, label: "홍대입구역" },
      { id: 2, label: "상수역" },
    ],
    tip: "정문은 홍대입구역, 후문은 상수역이 가까워요",
  },
  {
    id: 2,
    question: "어떤 음식을 좋아하시나요?",
    subquestion: "좋아하는 음식 카테고리를 하나만 선택해주세요",
    choices: [
      { id: 1, label: "한식" },
      { id: 2, label: "일식" },
      { id: 3, label: "중식" },
      { id: 4, label: "양식" },
      { id: 6, label: "카페" },
      { id: 5, label: "술집" },
      { id: 7, label: "분식" },
      { id: 8, label: "구이" },
      { id: 9, label: "패스트푸드" },
    ],
  },
];

// 2단계 선택에 따른 3단계 선택지 (3~9개)
const thirdStepOptions = {
  1: [
    { id: 99, label: "없음" },
    { id: 1, label: "제육" },
    { id: 2, label: "국밥" },
    { id: 3, label: "백반" },
    { id: 4, label: "찌개" },
    { id: 5, label: "냉면" },
  ],
  2: [
    { id: 99, label: "없음" },
    { id: 6, label: "스시" },
    { id: 7, label: "우동" },
    { id: 8, label: "카레" },
    { id: 9, label: "라멘" },
    { id: 10, label: "돈까스" },
  ],
  3: [
    { id: 99, label: "없음" },
    { id: 15, label: "짜장/짬뽕" },
    { id: 11, label: "마라탕" },
    { id: 12, label: "탄탄면" },
    { id: 13, label: "양꼬치" },
    { id: 14, label: "딤섬" },
  ],
  4: [
    { id: 99, label: "없음" },
    { id: 16, label: "파스타" },
    { id: 17, label: "피자" },
    { id: 18, label: "햄버거" },
    { id: 19, label: "샌드위치" },
    { id: 20, label: "스테이크" },
  ],
  6: [
    { id: 99, label: "없음" },
    { id: 29, label: "브런치" },
    { id: 30, label: "베이커리" },
    { id: 31, label: "데이트" },
    { id: 32, label: "카공" },
    { id: 33, label: "메이드" },
  ],
  5: [
    { id: 99, label: "없음" },
    { id: 28, label: "소개팅" },
    { id: 21, label: "횟집" },
    { id: 22, label: "칵테일바" },
    { id: 23, label: "와인바" },
    { id: 24, label: "막걸리" },
    { id: 25, label: "이자카야" },
    { id: 26, label: "가성비" },
    { id: 27, label: "단체석" },
  ],
  7: [
    { id: 99, label: "없음" },
    { id: 34, label: "떡볶이" },
    { id: 35, label: "김밥" },
  ],
  8: [
    { id: 99, label: "없음" },
    { id: 36, label: "고기" },
    { id: 37, label: "곱창" },
  ],
};

function Select() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSecondStep, setSelectedSecondStep] = useState(null);
  const navigate = useNavigate();

  // 3단계일 경우 동적으로 선택지 변경
  let stepInfo = stepData.find((s) => s.id === currentStep);
  if (currentStep === 3 && selectedSecondStep) {
    stepInfo = {
      id: 3,
      question: "선호하는 메인 디쉬가 있으신가요?",
      subquestion: "없다면 ‘없음'을 눌러주세요",
      choices: thirdStepOptions[selectedSecondStep] || [],
    };
  }

  function goNext() {
    if (currentStep === 1) {
      setCurrentStep(2); // 2단계로 이동
    } else if (currentStep === 2) {
      if (selectedSecondStep && thirdStepOptions[selectedSecondStep]) {
        setCurrentStep(3); // 3단계로 이동
      } else {
        navigate("/qr"); // 3단계가 없으면 바로 결과 페이지로 이동
      }
    } else {
      navigate("/qr"); // 3단계 이후 결과 페이지로 이동
    }
  }

  const handleSelect = (choiceId) => {
    if (currentStep === 1) {
      localStorage.setItem(
        "selectedStation",
        choiceId === 1 ? "홍대입구역" : "상수역"
      );
      setCurrentStep(2); // 다음 단계로 이동
    } else if (currentStep === 2) {
      setSelectedSecondStep(choiceId);
      localStorage.setItem("selectedCategoryId", choiceId); // 선택한 카테고리 ID 저장

      setTimeout(() => {
        if (thirdStepOptions[choiceId]) {
          setCurrentStep(3);
        } else {
          localStorage.removeItem("selectedDish");
          navigate("/qr");
        }
      }, 200);
    } else if (currentStep === 3) {
      if (choiceId !== 99) {
        localStorage.setItem("selectedDish", choiceId); // '없음'이 아닐 때만 저장
      } else {
        localStorage.removeItem("selectedDish"); // '없음'이면 기존 선택값 삭제
      }
      setTimeout(() => navigate("/qr"), 200);
    }
  };

  const handleGoBack = () => {
    if (currentStep === 1) {
      navigate("/"); // 첫 번째 단계에서 뒤로 가기 누르면 홈으로 이동
    } else {
      setCurrentStep((prev) => prev - 1); // 이전 단계로 이동
    }
  };

  return (
    <div className={styles.selectContainer}>
      <button className={styles.backButton} onClick={handleGoBack}>
        <img src={BackIcon} alt="뒤로가기" className={styles.backIcon} />
      </button>

      <div className={styles.fixedProgressBar}>
        <ProgressBar currentStep={currentStep} totalSteps={3} />
      </div>

      <div className={styles.questionText}>
        <h2>{stepInfo.question}</h2>
      </div>

      <div className={styles.subText}>
        <h2>{stepInfo.subquestion}</h2>
      </div>

      <ChoiceGrid choices={stepInfo.choices} onSelect={handleSelect} />

      {currentStep === 1 && (
        <p className={styles.tip}>
          <span className={styles.highlight}>Tip!</span> {stepInfo.tip}
        </p>
      )}
    </div>
  );
}

export default Select;
