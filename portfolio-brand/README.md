# 장성희 포트폴리오

## GitHub 업로드 버전

현재 사이트는 저장소의 `portfolio-brand/`에 보관합니다. 배포 대상은 `portfolio-brand/dist/`이며 별도 빌드가 필요 없습니다. 저장소 루트의 기존 Cloudflare 설정은 이전 사이트용이므로, 현재 사이트 퍼블리싱 시 배포 경로를 별도로 연결해야 합니다. 아래 작업 기록의 로컬 전용 방침은 GitHub 업로드 요청으로 대체되었습니다.

수정 후 상세 페이지를 재생성하려면 이 폴더에서 `node create-detail.mjs`와 `node create-bbss.mjs`를 실행합니다. BBSS 참고 원문은 `content/project_bbss.md`에 포함되어 있습니다.

`dist/` 안의 정적 웹사이트입니다. 별도 패키지 설치나 빌드 없이 실행할 수 있습니다.

## 로컬 실행

이 폴더에서 `node preview.mjs`를 실행하고 `http://127.0.0.1:4178`을 엽니다.

## 파일

- `dist/index.html`: 메인 페이지, 개인정보 및 경력
- `dist/projects/cosmetics-product-launch/index.html`: 독립 프로젝트 상세 페이지
- `dist/styles.css`: 반응형 레이아웃과 시각 시스템
- `dist/site.js`: 현재 섹션 표시, 모바일 메뉴, 접근성 제품 탭
- `content/`: 사용자가 제공한 디자인 명세 및 프로젝트 본문
- `create-detail.mjs`: `content/project.md`를 읽어 상세 페이지를 생성하는 보조 스크립트

사용자가 제공한 실제 제품 사진 3장을 dist/assets에 보관하고 메인 카드 및 상세 페이지에 사용합니다. 동일한 정사각형 영역에 원본 비율을 유지해 표시합니다. 경력은 단정바이오(B2C 소비재 제조업), 윌로그(물류 솔루션 서비스업) 두 회사만 표시합니다. Career Summary는 제거했습니다. 간트차트는 일정 관리 방식을 설명하는 개념도입니다.

확인된 정보: 장성희 / 9dudn@naver.com / 단정바이오 2022.04–2024.11 (2년 8개월) / 윌로그 2025.03–재직중.

## v2 반영 및 대화 우선사항

상세 순서: Overview → What I Worked On → Project Context → Product Cases → How I Worked → Impact → Takeaway. 간트차트는 세 제품별 병렬 일정 개념도입니다.

대화에서 확정한 두 회사 경력, 실제 이메일과 재직 기간, 동일 크기 제품 카드·실제 사진·전체 카드 링크, 세로 성과 목록, Summary 삭제, Project 상위 표시, 제품 사례 바로가기 및 배경부터 읽기 링크를 v2보다 우선합니다. 로컬 전용 작업을 유지합니다.

Minimal Typographic 반영: 메인은 Intro / Profile(두 회사 경력 통합) / Project / More Experience 4개 섹션으로 구성합니다. 밝은 아이보리 배경, 공통 타이포 및 여백, 2열 경험 목록을 적용했습니다. 사진 크기·카드 링크·세로 성과 목록·상세 구조·얇은 간트 목업은 기존 합의대로 유지합니다.

영문 이름 표기는 SEONG HEE이며, 성을 포함하는 경우 JANG SEONG HEE로 표시합니다. 원본 명세의 SUNG HEE보다 이 정정 사항을 우선합니다.

## 빵샤 프로젝트

빵샤는 메인 본문에 삽입하지 않고 별도 파일로 보관합니다. `/projects/bbss/`는 Overview부터 Takeaway까지 7개 섹션, 업무 흐름·교체 판단 기준, 실데이터 검증 및 현재 마이그레이션 상태를 담습니다. 운영 성과는 도입 이후 검증 예정으로 명시합니다. `create-bbss.mjs`는 메인 페이지를 수정하지 않습니다.

- `dist/projects/bbss/index.html`: 빵샤 상세 페이지
- `dist/bbss.css`: 빵샤 전용 반응형 스타일
- `content/project_bbss.md`: 제공받은 원문 사본
- `create-bbss.mjs`: 편집된 본문과 상세 HTML 생성 스크립트. 본문을 수정할 때 스크립트의 내용을 수정한 뒤 `node create-bbss.mjs`를 실행합니다. Markdown은 참고 원문이며 자동 변환하지 않습니다.

실행: `node preview.mjs`, 미리보기: `http://127.0.0.1:4178/projects/bbss/`. 로컬 전용 방침을 유지합니다.
