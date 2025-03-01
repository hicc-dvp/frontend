// src/pages/Result/QR.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QR.module.css";
import BackIcon from "../../assets/svg/back.svg?url";

function QR() {
  const navigate = useNavigate();
  const placeUrl =
    "https://map.naver.com/p/search/%EC%A0%9C%EC%88%9C%EC%8B%9D%EB%8B%B9/place/1299875051";

  const handleFinish = () => {
    navigate("/");
  };

  const handleJoin = () => {
    navigate("/join");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.qrContainer}>
      {/* 왼쪽 상단 뒤로가기 버튼 */}
      <button className={styles.backButton} onClick={handleBack}>
        <img src={BackIcon} alt="뒤로가기" className={styles.backIcon} />
      </button>

      {/* 중앙 컨텐츠 */}
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>'제순식당'</span>의 네이버 지도에요
          <br />
          아래에서 바로 확인하세요!
        </h2>
        <p className={styles.subText}>
          등록하면 함께 갈 식사 메이트를 구할 수 있어요
        </p>

        {/* 네이버 지도 페이지를 iframe으로 표시 */}
        <div className={styles.iframeWrapper}>
          <iframe
            src={placeUrl}
            className={styles.mapIframe}
            title="네이버 지도"
            allowFullScreen
          ></iframe>
        </div>

        {/* 버튼 2개 */}
        <div className={styles.buttonGroup}>
          <button className={styles.whiteButton} onClick={handleFinish}>
            마치기
          </button>
          <button className={styles.blueButton} onClick={handleJoin}>
            등록하고 식사 메이트 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default QR;
