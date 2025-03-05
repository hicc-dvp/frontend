import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QR.module.css";
import BackIcon from "../../assets/svg/back.svg?url";
import { getRequest } from "../../api/axiosInstance";

function QR() {
  const navigate = useNavigate();
  const [restaurantList, setRestaurantList] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const station = localStorage.getItem("selectedStation") || "홍대입구역"; // 선택한 역 반영
        const categoryId = localStorage.getItem("selectedCategoryId");
        const dishId = localStorage.getItem("selectedDish");

        let apiUrl = "";
        if (dishId && dishId !== "10") {
          apiUrl = `/restaurants/search-queries/${dishId}/restaurant?station=${encodeURIComponent(station)}`;
        } else {
          apiUrl = `/restaurants/categories/${categoryId}/restaurant?station=${encodeURIComponent(station)}`;
        }

        const response = await getRequest(apiUrl);
        setRestaurantList(response);

        if (response.length > 0) {
          // 🚀 처음부터 랜덤한 음식점 선택!
          setCurrentRestaurant(
            response[Math.floor(Math.random() * response.length)]
          );
        }
      } catch (error) {
        console.error("음식점 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const getMapUrl = (name) =>
    `https://map.naver.com/v5/search/${encodeURIComponent(name)}`;

  const handleRefresh = () => {
    if (restaurantList.length > 1) {
      const newRestaurantList = restaurantList.filter(
        (r) => r !== currentRestaurant
      );
      setCurrentRestaurant(
        newRestaurantList[Math.floor(Math.random() * newRestaurantList.length)]
      );
    }
  };

  const handleRegister = () => {
    if (currentRestaurant) {
      localStorage.setItem("selectedRestaurant", currentRestaurant.id);
    }
    navigate("/join");
  };

  return (
    <div className={styles.qrContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img src={BackIcon} alt="뒤로가기" className={styles.backIcon} />
      </button>

      {currentRestaurant ? (
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>‘{currentRestaurant.name}’</span>
            의 네이버 지도에요
          </h2>
          <p className={styles.subText}>
            등록하면 함께 갈 식사 메이트를 구할 수 있어요
          </p>

          <div className={styles.iframeWrapper}>
              <embed
                src={getMapUrl(currentRestaurant.name)}
                className={styles.mapIframe}
                title="네이버 지도"
                width="100%"
                height="500"
              ></embed>
          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.whiteButton}
              onClick={() => navigate("/")}
            >
              마치기
            </button>
            <button className={styles.skyButton} onClick={handleRefresh}>
              다른 음식점 보기
            </button>
            <button className={styles.blueButton} onClick={handleRegister}>
              등록하기
            </button>
          </div>
        </div>
      ) : (
        <p>음식점 데이터를 불러오는 중...</p>
      )}
    </div>
  );
}

export default QR;
