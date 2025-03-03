
[tinywow_2025-03-03 22 09 32_76209237.webm](https://github.com/user-attachments/assets/e65519a2-4e0b-40d2-9b44-05963f909dbe)

## 📌 프로젝트 소개

홍익대학교 중앙 프로그래밍 동아리 **HICC**에서 진행하는 **동아리 박람회** 웹 애플리케이션입니다. 사용자는 자신의 선호도를 입력하여 **식사 메이트**를 매칭하고, 원하는 음식점을 추천받을 수 있습니다.

## 📂 폴더 구조

```plaintext
src/
├── api/                # Axios API 설정
├── components/         # 공통 UI 컴포넌트
├── pages/             # 주요 페이지
│   ├── Home/          # 홈 페이지
│   ├── Select/        # 음식 선택 페이지
│   ├── Join/          # 가입 페이지
│   ├── Result/        # 결과 페이지
│   │   ├── QR.jsx     # 실제로는 결과 페이지
│   │   ├── Mate.jsx   # 매칭된 친구 페이지
│   │   ├── Result.jsx # 사용하지 않는 페이지
├── assets/            # 이미지 및 SVG 파일
├── App.jsx            # 전체 앱 라우팅
├── App.css            # 기본 스타일
```

## 🎯 주요 기능

- **음식점 선택**: 사용자가 강의 끝나는 위치, 선호하는 음식 종류를 선택.
- **QR 코드 페이지**: 추천된 식당의 네이버 지도 링크 제공.
- **가입 기능**: 인스타그램 아이디 및 자기소개를 입력하여 등록.
- **매칭 기능**: 같은 음식점을 선택한 친구와 매칭.

## 🛠️ 실행 방법

### 1️⃣ 프로젝트 클론

```bash
git clone https://github.com/your-repo/dongari-expo.git
cd dongari-expo
```

### 2️⃣ 패키지 설치

```bash
yarn install  # 또는 npm install
```

### 3️⃣ 환경 변수 설정

`.env` 파일을 프로젝트 루트에 생성 후, 아래 내용을 추가합니다.

```env
REACT_APP_API_BASE_URL=https://your-api-url.com
```

### 4️⃣ 실행

```bash
yarn start  # 또는 npm start
```


