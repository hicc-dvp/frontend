import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import PlaceIcon from "../../assets/svg/place.svg?url";
import PeopleIcon from "../../assets/svg/people.svg?url";
import PizzaIcon from "../../assets/svg/pizza.svg?url";
import RamenIcon from "../../assets/svg/ramen.svg?url";
import HamIcon from "../../assets/svg/ham.svg?url";
import SushiIcon from "../../assets/svg/sushi.svg?url";
import CakeIcon from "../../assets/svg/cake.svg?url";

function Home() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRotaing, setIsRotating] = useState(false);

  const icons = [PizzaIcon, RamenIcon, HamIcon, SushiIcon, CakeIcon];

  const handleStart = () => {
    if (isAnimating) return; // 중복 실행 방지
    setIsRotating(true); // 애니메이션 시작

    // 일정 시간 후 페이지 이동
    setTimeout(() => {
      // 중간 대기 (400ms 동안 정지)
      setIsAnimating(true);
      setTimeout(() => {
        navigate("/select"); // 400ms 대기 후 페이드아웃 후 이동
      }, 500);
    }, 600); // 첫 번째 400ms (아이콘 회전)
  };

  return (
    <motion.div
      className={styles.container}
      animate={isAnimating ? { opacity: 0 } : { opacity: 1 }} // 페이드 아웃 효과
      transition={{ duration: 0.5 }} // 2.5초 동안 서서히 사라짐
    >
      <p className={styles.footerText}>중앙 컴퓨터 동아리 HICC</p>

      {/* 무한 루프 애니메이션 */}
      <div className={styles.floatingIconsWrapper}>
        <motion.div
          className={styles.floatingIcons}
          animate={isAnimating ? { x: "-50%" } : { x: "0%" }}
          transition={{ ease: "linear", duration: 3 }}
        >
          {[...icons, ...icons].map((icon, index) => (
            <img
              key={index}
              src={icon}
              className={`${styles.iconFloating} ${isRotaing ? styles.rotating : ""}`}
              alt={`아이콘-${index}`}
            />
          ))}
        </motion.div>
      </div>

      <div className={styles.banner}>
        <div className={styles.bannerRow}>
          <div className={styles.bannerItem}>
            <span>홍대맛집</span>
            <img src={PlaceIcon} className={styles.icon} alt="위치 아이콘" />
          </div>
          <span className={styles.bannerText}>추천받고</span>
        </div>
        <div className={styles.bannerRow}>
          <div className={styles.bannerItem}>
            <span>식사메이트 &nbsp;</span>
            <img src={PeopleIcon} className={styles.icon} alt="사람 아이콘" />
          </div>
          <span className={styles.bannerText}>구하자</span>
        </div>
      </div>

      <button
        className={styles.button}
        onClick={handleStart}
        disabled={isAnimating}
      >
        시작하기
      </button>
    </motion.div>
  );
}

export default Home;
