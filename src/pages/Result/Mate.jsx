// src/pages/Result/Mate.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Mate.module.css";

// QR 이미지를 재활용하거나, 새 이미지가 있다면 import
import qrImg from "../../assets/images/qr.png";

function Mate() {
  const navigate = useNavigate();

  const handleRefresh = () => {
    // "새로고침" 로직
    // 예: 다른 친구 정보를 다시 불러오는 API 호출 등
    alert("다른 친구를 찾는 로직을 넣어주세요!");
  };

  const handleFinish = () => {
    // "완료" 버튼 로직
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  // 예시 데이터 (학과, 자기소개)
  const department = "심리학과";
  const intro =
    "안녕하세요~ 22학번 심리학과 홍길동입니다. 친구가 많아졌으면 좋겠어요 :)";

  return (
    <div className={styles.mateContainer}>
      {/* 중앙 컨텐츠 */}
      <div className={styles.content}>
        {/* 상단 텍스트 */}
        <h2 className={styles.title}>
          같은 식당을 고른 친구에요.
          <br />
          연락해볼까요?
        </h2>
        <p className={styles.subText}>
          다른 친구를 찾고 싶다면 새로고침을 눌러주세요
        </p>

        {/* QR + 카드 묶는 래퍼 */}
        <div className={styles.qrCardRow}>
          {/* 왼쪽 QR 섹션 */}
          <div className={styles.qrWrapper}>
            <img src={qrImg} alt="qr" className={styles.qrImage} />
            <p className={styles.handle}>@hicc_hongik</p>
          </div>

          {/* 오른쪽 카드 */}
          <div className={styles.card}>
            <p className={styles.cardMajor}>학과: {department}</p>
            <p className={styles.cardIntro}>{intro}</p>
          </div>
        </div>

        {/* 버튼 2개 */}
        <div className={styles.buttonGroup}>
          <button className={styles.whiteButton} onClick={handleRefresh}>
            새로고침
          </button>
          <button className={styles.blueButton} onClick={handleFinish}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mate;
