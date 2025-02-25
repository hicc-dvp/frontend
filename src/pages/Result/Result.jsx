// src/pages/Result/Result.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Result.module.css";

// ex1.png를 일반 이미지로 불러오기
import ex1Img from "../../assets/images/ex1.png";

function Result() {
  const navigate = useNavigate();

  // 서버에서 받은 데이터라고 가정(제목, 설명 등)
  // 실제로는 props나 context, 또는 API 호출 등을 이용해 받아올 수 있음
  const placeName = "제순식당";
  const placeDescription = "홍대생이라면 모두 아는 제육볶음 맛집";

  // 뒤로가기 버튼
  const handleBack = () => {
    // 필요한 로직 (예: 이전 페이지로 이동)
    navigate(-1);
  };

  const handleCheckLocation = () => {
    navigate("/qr");
  };

  return (
    <div className={styles.resultContainer}>
      {/* 왼쪽 뒤로가기 버튼 */}
      <button className={styles.backButton} onClick={handleBack}>
        {/* 여기서 SVG 화살표 아이콘을 쓰고 싶다면, 
            svg가 ES6 모듈로 설정되었는지 확인 후 ReactComponent로 import하거나,
            URL로 불러오기 등 주의해! */}
        &lt;
      </button>

      <div className={styles.content}>
        {/* 상단 제목 */}
        <h2 className={styles.title}>'{placeName}'</h2>
        <p className={styles.description}>{placeDescription}</p>

        {/* 가게 사진 */}
        <img src={ex1Img} alt="ex1" className={styles.mainImage} />

        {/* QR 버튼 */}
        <button className={styles.qrButton} onClick={handleCheckLocation}>
          QR로 위치 확인하기
        </button>
      </div>
    </div>
  );
}

export default Result;
