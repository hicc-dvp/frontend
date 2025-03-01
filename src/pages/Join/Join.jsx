// src/pages/Join/Join.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";
import DownIcon from "../../assets/svg/down.svg?url";
import BackIcon from "../../assets/svg/back.svg?url";

function Join() {
  const navigate = useNavigate();

  // 1. 약관 동의 여부
  const [isAgreed, setIsAgreed] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const isButtonEnabled = isTermsChecked && isPrivacyChecked;

  // 2. 가입 폼 입력 state
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [instagram, setInstagram] = useState("");
  const [intro, setIntro] = useState("");

  const isSubmitEnabled =
    isTermsChecked &&
    isPrivacyChecked &&
    college &&
    department &&
    instagram.trim() !== "";

  // 3. 가입 완료 여부
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  // 약관 동의 상태 변경
  const handleAgree = () => {
    setIsAgreed(true);
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
      <button className={styles.backButton} onClick={handleBack}>
        <img src={BackIcon} alt="뒤로가기" className={styles.backIcon} />
      </button>

      {/* 1. 약관 동의 화면 */}
      {!isAgreed ? (
        <div className={styles.agreementContainer}>
          <h2 className={styles.mainTitle}>
            이용약관 및 개인정보 수집/이용 동의
          </h2>

          {/* 서비스 이용약관 */}
          <div className={styles.agreementBox}>
            <h3 className={styles.agreementTitle}>서비스 이용약관 (필수)</h3>
            <div className={styles.agreementContent}>
              1. 수집하는 개인정보 항목 홍익대학교 중앙 프로그래밍 동아리
              HICC(이하 "HICC")는 서비스 제공을 위해 다음과 같은 개인정보를
              수집합니다. 필수 정보: 학과, 인스타그램 아이디, 자기소개 2.
              개인정보 수집 및 이용 목적 HICC는 수집한 정보를 다음과 같은
              목적으로 이용합니다. 동아리 활동 관련 사용자 구분 및 식별 사용자의
              관심사를 반영한 맞춤형 서비스 제공 같은 학과 및 관심사를 가진
              사용자 간 매칭 서비스 제공 3. 개인정보 보유 및 이용 기간 HICC는
              수집된 개인정보를 동아리 활동이 진행되는 동안 보유하며, 서비스
              목적이 달성되거나 탈퇴 요청 시 즉시 삭제합니다. 4. 동의 거부 권리
              및 불이익 사용자는 개인정보 제공에 동의하지 않을 권리가 있습니다.
              단, 필수 정보 제공에 동의하지 않을 경우, HICC의 일부 서비스 이용이
              제한될 수 있습니다. 위 내용에 동의하십니까?
            </div>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isTermsChecked}
                onChange={() => setIsTermsChecked(!isTermsChecked)}
              />
              동의합니다.
            </label>
          </div>

          {/* 개인정보 수집 및 이용 동의 */}
          <div className={styles.agreementBox}>
            <h3 className={styles.agreementTitle}>
              개인정보 수집 및 이용 동의서 (필수)
            </h3>
            <div className={styles.agreementContent}>
              1. 서비스 목적 HICC는 중앙 프로그래밍 동아리로서, 회원들에게
              다양한 정보 및 활동을 제공하는 온라인 서비스를 운영합니다. 본
              서비스는 학과별 네트워킹 및 정보 공유, 같은 관심사를 가진 사용자
              매칭을 주요 기능으로 합니다. 2. 이용자의 의무 사용자는 허위 정보를
              입력해서는 안 됩니다. 타인의 정보를 도용하거나 부정한 방법으로
              가입할 경우, 서비스 이용이 제한될 수 있습니다. 서비스 내
              커뮤니케이션은 존중과 배려를 바탕으로 이루어져야 하며, 부적절한
              행위 발견 시 이용이 제한될 수 있습니다. 3. 서비스 제공 및 변경
              HICC는 원활한 서비스 운영을 위해 서비스 내용을 변경하거나 중단할
              수 있으며, 중대한 변경 사항이 있을 경우 사전 공지합니다. 4. 책임
              제한 HICC는 회원이 제공한 정보의 정확성과 신뢰성을 보장하지
              않습니다. 사용자의 부주의로 인해 발생한 문제에 대해 HICC는
              책임지지 않습니다. 위 내용에 동의하십니까?
            </div>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isPrivacyChecked}
                onChange={() => setIsPrivacyChecked(!isPrivacyChecked)}
              />
              동의합니다.
            </label>
          </div>

          {/* 다음 단계 버튼 */}
          <button
            className={`${styles.submitButton} ${!isButtonEnabled ? styles.disabled : ""}`}
            onClick={handleAgree}
            disabled={!isButtonEnabled}
          >
            다음 단계
          </button>
        </div>
      ) : (
        // 2. 가입 폼 화면
        <>
          {!isSubmitted ? (
            <>
              <button className={styles.backButton} onClick={handleBack}>
                <img
                  src={BackIcon}
                  alt="뒤로가기"
                  className={styles.backIcon}
                />
              </button>

              <h2 className={styles.mainTitle}>
                딱 이것만 입력하면 등록 완료!
              </h2>

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
                  <img
                    src={DownIcon}
                    alt="드롭다운"
                    className={styles.downIcon}
                  />
                </div>

                {/* 학부/학과 선택 */}
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.selectBox}
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  <img
                    src={DownIcon}
                    alt="드롭다운"
                    className={styles.downIcon}
                  />
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

              <label className={styles.label}>
                간단한 자기소개를 작성해주세요
              </label>
              <textarea
                className={styles.textArea}
                placeholder="100자 이내로 작성해주세요"
                maxLength={100}
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
              />

              <button
                className={`${styles.submitButton} ${!isSubmitEnabled ? styles.disabled : ""}`}
                onClick={handleSubmit}
                disabled={!isSubmitEnabled}
              >
                등록하기
              </button>
            </>
          ) : (
            // 3. 가입 완료 화면
            <div className={styles.completeContainer}>
              <p className={styles.doneText}>등록 완료!</p>
              <p className={styles.questionText}>
                <span className={styles.highlight}>같은 과 친구</span>로
                매칭할까요?
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
        </>
      )}
    </div>
  );
}

export default Join;
