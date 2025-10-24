# Gemini News - Netlify Functions

AI 기반 글로벌 게임 산업 뉴스 분석 서비스 (Netlify Functions)

## 🚀 Netlify 배포 방법

### 1. 로컬 개발 환경 설정
```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```

### 2. Netlify 배포

#### 방법 1: Netlify CLI 사용
```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 로그인
netlify login

# 배포
netlify deploy --prod
```

#### 방법 2: GitHub 연동
1. GitHub에 코드 푸시
2. Netlify 대시보드에서 "New site from Git" 선택
3. GitHub 저장소 연결
4. 빌드 설정:
   - Build command: `echo "No build required"`
   - Publish directory: `public`
   - Functions directory: `netlify/functions`

### 3. 환경변수 설정
Netlify 대시보드에서:
1. Site settings → Environment variables
2. `GEMINI_API_KEY` 추가 (실제 Gemini API 키 입력)

### 4. 파일 구조
```
gemini_news/
├── netlify/
│   └── functions/
│       ├── gemini-api.js      # Gemini API 프록시
│       └── config-status.js   # API 키 상태 확인
├── public/
│   └── index.html            # 프론트엔드
├── netlify.toml             # Netlify 설정
├── package.json
└── README.md
```

## 🔒 보안 특징
- API 키가 클라이언트에 노출되지 않음
- Netlify 환경변수로 안전한 API 키 관리
- 서버리스 함수를 통한 API 프록시

## 📝 API 엔드포인트
- `GET /api/config-status` - API 키 상태 확인
- `POST /api/gemini-api` - Gemini API 프록시

## 🎯 주요 기능
- **자동 뉴스 스크랩**: 사이트 접속 시 자동으로 최신 뉴스 로드
- **AI 요약**: Gemini를 활용한 상세 뉴스 요약
- **캐시 시스템**: 24시간 캐시로 성능 최적화
- **필터링**: 국내/해외 뉴스 분류
- **반응형 디자인**: 모바일/데스크톱 최적화

## 🛠️ 기술 스택
- **Frontend**: HTML, CSS (Tailwind), Vanilla JavaScript
- **Backend**: Netlify Functions (Node.js)
- **AI**: Google Gemini API
- **Hosting**: Netlify

## 📋 사용법
1. Netlify에 배포
2. 환경변수에 `GEMINI_API_KEY` 설정
3. 사이트 접속 시 자동으로 뉴스 로드
4. 카드 클릭으로 상세 요약 확인

## 🔧 개발자 정보
- **개발**: AI 기반 뉴스 분석 서비스
- **배포**: Netlify Functions
- **API**: Google Gemini 2.5 Flash