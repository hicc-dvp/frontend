// src/pages/Join/Join.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";
import DownIcon from "../../assets/svg/down.svg?url";
import BackIcon from "../../assets/svg/back.svg?url";

function Join() {
  const navigate = useNavigate();

  // 입력 폼 state
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [instagram, setInstagram] = useState("");
  const [intro, setIntro] = useState("");

  // 가입 완료 화면 전환 여부
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  // 단과대학과 학부/학과 옵션 리스트
  const colleges = [
    "단과대학",
    "공과대학",
    "사범대학",
    "미술대학",
    "경영대학",
    "사회과학대학",
  ];
  const departments = [
    "학부/학과명",
    "컴퓨터공학과",
    "전자전기공학과",
    "수학교육과",
    "경영학과",
    "심리학과",
  ];

  // 폼 제출
  const handleSubmit = () => {
    console.log("단과대학:", college);
    console.log("학부/학과:", department);
    console.log("인스타:", instagram);
    console.log("자기소개:", intro);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.joinContainer}>
      {!isSubmitted ? (
        <>
          <button className={styles.backButton} onClick={handleBack}>
            <img src={BackIcon} alt="뒤로가기" className={styles.backIcon} />
          </button>

          <h2 className={styles.mainTitle}>딱 이것만 입력하면 가입 완료!</h2>

          <label className={styles.label}>학과를 선택해주세요</label>
          <div className={styles.selectRow}>
            {/* 단과대학 선택 */}
            <div className={styles.selectWrapper}>
              <select
                className={styles.selectBox}
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              >
                {colleges.map((col, index) => (
                  <option key={index} value={col}>
                    {col}
                  </option>
                ))}
              </select>
              <img src={DownIcon} alt="드롭다운" className={styles.downIcon} />
            </div>

            {/* 학부/학과 선택 */}
            <div className={styles.selectWrapper}>
              <select
                className={`${styles.selectBox} ${departments.length > 5 ? styles.scrollable : ""}`}
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <img src={DownIcon} alt="드롭다운" className={styles.downIcon} />
            </div>
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
        <div className={styles.completeContainer}>
          <p className={styles.doneText}>가입 완료!</p>
          <p className={styles.questionText}>
            <span className={styles.highlight}>같은 과 친구</span>로 매칭할까요?
          </p>

          <div className={styles.buttonGroup}>
            <button
              className={styles.blueButton}
              onClick={() => navigate("/mate")}
            >
              좋아요
            </button>
            <button
              className={styles.whiteButton}
              onClick={() => navigate("/")}
            >
              괜찮아요
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Join;
