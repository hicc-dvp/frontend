// src/pages/Result/QR.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QR.module.css";

// png 이미지 URL로 임포트(ES6 모듈 사용)
import qrImg from "../../assets/images/qr.png";

function QR() {
  const navigate = useNavigate();

  const handleFinish = () => {
    // "마치기" 버튼 로직 (예: 홈으로 이동)
    navigate("/");
  };

  const handleJoin = () => {
    // "가입하고 식사 메이트 찾기" 버튼 로직
    alert("가입 페이지로 이동해 가입하면 됩니다!");
  };

  // 뒤로가기 버튼
  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className={styles.qrContainer}>
      {/* 왼쪽 상단 뒤로가기 버튼 */}
      <button className={styles.backButton} onClick={handleBack}>
        &lt;
      </button>

      {/* 중앙 컨텐츠 */}
      <div className={styles.content}>
        <h2 className={styles.title}>
          '제순식당'
          <span className={styles.highlight}>의 네이버 지도 QR이에요.</span>
          <br />
          스캔하고 바로 위치를 저장하세요!
        </h2>
        <p className={styles.subText}>
          가입하면 함께 갈 식사 메이트를 구할 수 있어요
        </p>

        {/* QR 코드 이미지 */}
        <img src={qrImg} alt="qr" className={styles.qrImage} />

        {/* 버튼 2개 */}
        <div className={styles.buttonGroup}>
          <button className={styles.whiteButton} onClick={handleFinish}>
            마치기
          </button>
          <button className={styles.blueButton} onClick={handleJoin}>
            가입하고 식사 메이트 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default QR;
