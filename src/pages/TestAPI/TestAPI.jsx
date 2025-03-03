import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../api/categoryApi"; // API 호출 함수
import styles from "./TestAPI.module.css";

function TestAPI() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetchCategories();
        console.log("📌 API 응답 확인:", response);

        if (Array.isArray(response)) {
          setCategories(response);
        } else {
          console.error("⚠️ 예상과 다른 데이터 형식:", response);
          setError("API 응답이 올바른 형식이 아닙니다.");
        }
      } catch (err) {
        console.error("❌ API 호출 실패:", err);
        setError("API 요청 실패");
      }
    };

    loadCategories();
  }, []);

  return (
    <div className={styles.testContainer}>
      <h2>🔍 API 응답 테스트</h2>

      {/* 에러 발생 시 표시 */}
      {error && <p className={styles.errorText}>❌ {error}</p>}

      {/* API에서 불러온 카테고리 리스트 표시 */}
      <ul className={styles.categoryList}>
        {categories.length > 0 ? (
          categories.map((cat) => (
            <li key={cat.id} className={styles.categoryItem}>
              {cat.id}. {cat.name}
            </li>
          ))
        ) : (
          <p>데이터를 불러오는 중...</p>
        )}
      </ul>
    </div>
  );
}

export default TestAPI;
