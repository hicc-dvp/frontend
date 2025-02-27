// src/pages/Join/Join.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";

function Join() {
  const navigate = useNavigate();

  // 입력 폼 state
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [instagram, setInstagram] = useState("");
  const [intro, setIntro] = useState("");

  // 가입 완료 화면 전환 여부
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 폼 제출
  const handleSubmit = () => {
    console.log("단과대학:", college);
    console.log("학부/학과:", department);
    console.log("인스타:", instagram);
    console.log("자기소개:", intro);

    // 실제 가입 로직(백엔드 전송 등)
    setIsSubmitted(true);
  };

  // “같은 과 친구로 매칭할까요?” → “좋아요” 버튼
  const handleLike = () => {
    navigate("/mate");
  };

  // “같은 과 친구로 매칭할까요?” → “괜찮아요” 버튼
  const handleOk = () => {
    navigate("/");
  };

  return (
    <div className={styles.joinContainer}>
      {!isSubmitted ? (
        // ---------- 폼 입력 화면 ----------
        <>
          <h2 className={styles.mainTitle}>딱 이것만 입력하면 가입 완료!</h2>

          <label className={styles.label}>학과를 선택해주세요</label>
          <div className={styles.selectRow}>
            <select
              className={styles.selectBox}
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            >
              <option value="">단과대학</option>
              <option value="공과대학">공과대학</option>
              <option value="사범대학">사범대학</option>
              <option value="미술대학">미술대학</option>
              {/* ... */}
            </select>

            <select
              className={styles.selectBox}
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">학부/학과명</option>
              <option value="컴퓨터공학과">컴퓨터공학과</option>
              <option value="전자전기공학과">전자전기공학과</option>
              <option value="수학교육과">수학교육과</option>
              {/* ... */}
            </select>
          </div>

          <label className={styles.label}>
            인스타그램 아이디를 입력해주세요
          </label>
          <input
            className={styles.inputBox}
            placeholder="ex) @hongik_hicc"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />

          <label className={styles.label}>간단한 자기소개를 작성해주세요</label>
          <textarea
            className={styles.textArea}
            placeholder="100자 이내로 작성해주세요"
            maxLength={100}
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />

          <button className={styles.submitButton} onClick={handleSubmit}>
            입력 완료
          </button>
        </>
      ) : (
        // ---------- 가입 완료 화면 ----------
        <div className={styles.completeContainer}>
          <p className={styles.doneText}>가입 완료!</p>
          <p className={styles.questionText}>
            <span className={styles.highlight}>같은 과 친구</span>로 매칭할까요?
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.blueButton} onClick={handleLike}>
              좋아요
            </button>
            <button className={styles.whiteButton} onClick={handleOk}>
              괜찮아요
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Join;
