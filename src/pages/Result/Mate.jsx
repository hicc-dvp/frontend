import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../api/axiosInstance"; // API 요청 추가
import { QRCodeCanvas } from "qrcode.react"; // QR 코드 라이브러리 추가
import BackIcon from "../../assets/svg/back.svg?url";
import styles from "./Mate.module.css";

function Mate() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]); // 같은 식당을 선택한 유저 리스트
  const [currentUser, setCurrentUser] = useState(null); // 현재 표시할 유저

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const restaurantId = localStorage.getItem("selectedRestaurant");
        const myInstagramId = localStorage.getItem("instagramId"); // 🔥 본인의 인스타그램 ID 가져오기

        console.log("현재 로그인한 본인의 인스타그램 ID:", myInstagramId); // 🔥 본인 인스타 아이디 콘솔 출력

        if (!restaurantId) {
          console.error("식당 ID 없음");
          return;
        }

        const response = await getRequest(`/users/${restaurantId}`);
        console.log("받아온 유저 리스트:", response); // API 응답 유저 리스트 출력

        // 🔥 본인 인스타 아이디와 같은 유저 제외
        const filteredUsers = response.filter(
          (user) => user.instagramId !== myInstagramId
        );
        console.log("본인 제외 후 남은 유저 리스트:", filteredUsers); // 필터링된 유저 리스트 출력

        setUsers(filteredUsers);

        if (filteredUsers.length > 0) {
          setCurrentUser(
            filteredUsers[Math.floor(Math.random() * filteredUsers.length)]
          ); // 랜덤 유저 선택
        } else {
          console.log("같은 식당을 고른 친구 없음"); // 유저가 없을 경우 콘솔 출력
          setCurrentUser(null); // 아무도 없을 경우 null 설정
        }
      } catch (error) {
        console.error("유저 목록을 불러오는 중 오류 발생:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleRefresh = () => {
    if (users.length > 1) {
      const newUserList = users.filter((user) => user !== currentUser);
      if (newUserList.length > 0) {
        setCurrentUser(
          newUserList[Math.floor(Math.random() * newUserList.length)]
        );
      } else {
        setCurrentUser(null);
      }
    }
  };

  const handleFinish = () => {
    navigate("/");
  };

  return (
    <div className={styles.mateContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img src={BackIcon} alt="뒤로가기" className={styles.backIcon} />
      </button>
      <div className={styles.content}>
        <h2 className={styles.title}>
          같은 식당을 고른 친구에요.
          <br />
          연락해볼까요?
        </h2>
        <p className={styles.subText}>
          다른 친구를 찾고 싶다면 새로고침을 눌러주세요
        </p>

        {currentUser ? (
          <div className={styles.qrCardRow}>
            {/* 왼쪽 QR 섹션 */}
            <div className={styles.qrWrapper}>
              <QRCodeCanvas
                value={`https://www.instagram.com/${currentUser.instagramId.replace("@", "")}`}
                size={120}
              />
              <p className={styles.handle}>{currentUser.instagramId}</p>
            </div>

            {/* 오른쪽 카드 */}
            <div className={styles.card}>
              <p className={styles.cardIntro}>{currentUser.introduction}</p>
            </div>
          </div>
        ) : (
          <div className={styles.qrCardRow}>
            {/* 왼쪽 QR 섹션 */}
            <div className={styles.qrWrapper}></div>
            <div className={styles.card}>
              <p>이런! 아직 등록된 친구가 없어요.</p>
            </div>
          </div>
        )}

        <div className={styles.buttonGroup}>
          <button
            className={styles.whiteButton}
            onClick={handleRefresh}
            disabled={users.length <= 1}
          >
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
