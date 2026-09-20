# Portfolio UX/UI Spec for Codex — Minimal Typographic Edition

> 목표: 포트폴리오 전체를 **이미지 최소화 + 선형 레이아웃 + 타이포그래피 중심**으로 구현한다.  
> 분위기: 쇼핑몰 배너처럼 보이지 않게, **에디토리얼 포트폴리오 / 스위스 모더니즘 계열의 정돈된 웹 레이아웃**을 지향한다.  
> 프로젝트 상세 페이지의 정보 구조는 기존 명세를 유지하되, 시각 스타일은 본 문서 기준으로 통일한다.

---

## 0. 핵심 원칙

이 포트폴리오는 “예쁜 이미지 갤러리”가 아니라  
**읽히는 구조, 여백, 선, 타이포로 경력과 사고방식을 전달하는 사이트**다.

### 반드시 지킬 것

- 이미지 사용 최소화
- Hero는 이미지 없음
- Profile도 사진 없음
- Project 메인에서도 제품 이미지는 선택적
- 상세 프로젝트에서만 제품 이미지를 제한적으로 사용할 수 있음
- 흰색 또는 아주 옅은 아이보리 배경
- 얇은 라인으로 영역 분할
- 타이포 크기 차이로 위계 표현
- 숫자/섹션 번호를 시각적 리듬으로 활용
- 둥근 카드 남발 금지
- 그림자 사용 금지
- 그라디언트 사용 금지
- 일러스트, 장식 아이콘 남발 금지
- “광고 배너”처럼 큰 제품 이미지 + 카피 조합 금지

---

# 1. Visual Direction

## Overall Mood

키워드:

```text
Minimal
Editorial
Swiss Modernist
Typographic
Structured
Calm
Precise
```

### 시각적으로 보여야 하는 것

- 정돈됨
- 논리적임
- 차분함
- 구조화된 사고
- 실무형 포트폴리오
- 과한 감성보다 정보 전달 우선

---

# 2. Color System

기본은 거의 흑백.

```text
Background        #FAFAF7 또는 #FCFCFA
Primary Text      #111111
Secondary Text    #5F5F5F
Muted Text        #989898
Divider           #DDDDD8
Soft Fill         #F3F3EF
Accent            #5B56F6
```

### Accent 사용 범위

Accent는 아주 제한적으로:

- 섹션 번호
- active navigation
- 링크 hover
- 현재 Product Case tab
- 작은 arrow 또는 underline

페이지 전체에 보라색 면을 크게 깔지 않는다.

---

# 3. Typography

추천:

```css
font-family:
  "Pretendard",
  "Inter",
  "Noto Sans KR",
  system-ui,
  sans-serif;
```

## 권장 크기

### Desktop

```text
Hero Title            54–68px
Section Main Copy     28–36px
Section Heading       15–18px
Body                  15–17px
Small Meta            12–14px
Nav                   13–15px
Impact Number         34–44px
```

### Mobile

```text
Hero Title            36–44px
Section Main Copy     24–28px
Body                  15–16px
```

### 원칙

- 폰트 웨이트는 400 / 500 / 600 / 700 정도만
- 너무 많은 크기 단계 금지
- 대문자 영문 라벨은 작게
- 한글 본문은 읽기 편하게 line-height 1.65–1.8
- 제목은 짧고 강하게

---

# 4. Grid System

Desktop:

```text
Left Rail: 180–220px
Main Content: 나머지 영역
Max Width: 1360–1440px
```

메인 콘텐츠 안에서는 12-column grid 사용 가능.

각 섹션은:

```text
top border
section number
section title
content
bottom whitespace
```

형태로 반복.

---

# 5. Left Rail

Desktop에서 왼쪽에 고정.

```text
SUNG HEE

PRODUCT · BRAND ·
OPERATIONS

01 Intro
02 Profile
03 Project
04 More Experience
05 Career
```

하단:

```text
© 2026 SUNG HEE
All rights reserved.
```

## Active State

- 현재 섹션 번호만 accent
- 또는 아주 얇은 세로선
- 배경색 highlight 금지

---

# 6. Main Page IA

```text
01. INTRO / HERO
02. PROFILE
03. PROJECT
04. MORE EXPERIENCE
05. CAREER SUMMARY
```

Career Snapshot은 Profile 안에 포함한다.

---

# 7. 01. INTRO / HERO

## Exact Title

> **일을 수행하는 것을 넘어,  
> 일이 흐르는 방식을 설계합니다.**

변경하지 않는다.

## Subcopy

> 제품과 사업이 실제로 움직일 수 있도록,  
> 복잡한 업무를 구조화하고 실행까지 연결합니다.

## Layout

이미지 없음.

예시:

```text
01 / INTRO

일을 수행하는 것을 넘어,
일이 흐르는 방식을 설계합니다.

제품과 사업이 실제로 움직일 수 있도록,
복잡한 업무를 구조화하고 실행까지 연결합니다.

                         Product
                         Brand
                         Operations
                         Growth
```

오른쪽에는 이미지 대신:

- 아주 얇은 대각선
- 짧은 키워드
- 작은 영어 문구

정도만 허용.

예:

```text
Product
Brand
Operations
Growth
```

또는:

```text
Better Products
Better Operations
```

---

# 8. 02. PROFILE

이미지 없음.

## Main Copy

> **제품·브랜드·영업 운영을 경험하며,  
> 필요한 기준을 만들고 사람과 업무를 연결해 실행해왔습니다.**

## 구성

왼쪽:

```text
Main Copy
짧은 자기소개
```

오른쪽:

```text
Career Summary
Keywords
Working Style
```

### Career Flow

```text
제조업
제품 기획 및 마케팅

→

소비재(화장품)
제품 개발 · 리뉴얼 · 브랜드 운영

→

SaaS
영업지원 · 운영기획
```

### Keywords

pill 스타일 대신 선형 텍스트도 가능.

```text
Product
Brand
Communication
Data-driven
Execution
```

또는:

```text
Product · Brand · Communication · Data-driven · Execution
```

## AI / Automation

작게:

> 업무를 구조화하고, 필요한 경우 AI·자동화 도구를 활용해 실행 효율을 높입니다.

AI가 주요 역량처럼 보이지 않게 한다.

---

# 9. 03. PROJECT

## 구조

프로젝트는 하나.

```text
화장품 제품 개발·리뉴얼 및 마케팅 실행
```

그 안에 3개의 Product Case.

```text
01 데일리 카밍 퍼플 선 크림
02 다래 핸드크림
03 감자 바디로션
```

## Main Description

> 지역 특산물을 활용한 신제품 개발과 기존 제품 리뉴얼을 담당하며,  
> 제품 구체화부터 외부 파트너 조율, 마케팅 근거 확보,  
> 프로모션과 판매 준비까지 실행 흐름을 관리했습니다.

---

# 10. Project Layout — Image Minimal

기존처럼 3개의 제품 이미지를 크게 보여주지 않는다.

대신:

```text
┌────────────────────────────────────────────┐
│ 03 / PROJECT                               │
│                                            │
│ 화장품 제품 개발·리뉴얼 및 마케팅 실행      │
│                                            │
│ 설명                                       │
│                                            │
│ 01        02        03                     │
│ ─────     ─────     ─────                  │
│ New       New       Renewal                │
│ Product   Product                          │
│                                            │
│ 데일리     다래       감자                  │
│ 카밍 퍼플   핸드크림   바디로션              │
│ 선 크림                                    │
│                                            │
│ →         →         →                      │
└────────────────────────────────────────────┘
```

### 제품 이미지 사용

선택지:

1. 메인 페이지에서는 제품 이미지 **완전 미사용**
2. hover 시 작은 thumbnail 노출
3. 각 Product Case 옆에 아주 작은 1:1 thumbnail만 사용

기본 권장:

> 메인에서는 이미지 없이 타이포 중심

---

# 11. Project CTA

```text
프로젝트 자세히 보기 →
```

단순 텍스트 링크.

Button처럼 박스 처리하지 않는다.

Hover:

- underline
- arrow 4px 이동

---

# 12. Project Metrics

숫자도 카드로 만들지 않는다.

선형으로 표시.

```text
2        1        3+       4
신제품    리뉴얼    공공기관   시험기관
출시      1종       수주      비교
```

위아래 line만 사용.

---

# 13. 04. MORE EXPERIENCE

## Heading

> **다양한 경험을 통해  
> 브랜드 운영의 폭을 넓혀왔습니다.**

## Layout

카드 금지.

한 줄 또는 2열 리스트.

예:

```text
01  매출·원가 분석
    브랜드 운영

02  멀티채널 상품 운영
    9개 채널 · 11개 상품

03  대리점 운영 지원
    출고 일정 · 마케팅 자료 · VOC 전달

04  A/B 테스트
    랜딩페이지 기반 마케팅 효과 검증

05  외부기관·거래처 조율
    정부지원사업 및 파트너 커뮤니케이션

06  CRM 운영 체계
    영업 데이터 관리 및 프로세스 구조화
```

각 항목 사이에 얇은 divider.

아이콘 사용하지 않는다.

---

# 14. Optional Selected Experience — 빵샤

More Experience 아래에 텍스트 블록 하나로 사용 가능.

## 계약·디바이스 통합 운영 시스템 기획

> 계약·매출·디바이스 정보를 분산 관리하면서 발생하던 운영 복잡도를 줄이기 위해, 계약과 디바이스 라이프사이클을 하나의 흐름으로 관리하는 운영 시스템을 기획했습니다. AI 해커톤에서 아이디어를 구체화한 뒤 요구사항과 운영 기준을 정리하고 프로토타입까지 발전시켰습니다.

아래:

```text
Process Design · Operations · Data Structure · Prototype
```

박스 없이 구분선만.

---

# 15. 05. CAREER SUMMARY

## Heading

> **지속적으로 새로운 환경에서  
> 업무의 구조를 이해하고 경험을 확장해왔습니다.**

## Layout

타임라인 대신 선형 텍스트.

```text
2019–2022
제조업
제품 기획 및 마케팅

2022–2024
단정바이오
제품 개발 · 리뉴얼 · 브랜드 운영

2025–Present
윌로그
Sales / BizOps
```

세 구간을 가로로 배치하고 divider 사용.

모바일에서는 세로.

---

# 16. PROJECT DETAIL PAGE

기존 정보 구조 유지.

```text
01 Overview
02 What I Worked On
03 Project Context
04 Product Cases
05 How I Worked
06 Impact
07 Takeaway
```

시각 스타일만 본 문서 기준으로 바꾼다.

---

# 17. Project Detail — What I Worked On

제품 이미지 최소화.

가능한 방식:

```text
02 / WHAT I WORKED ON

01
────────────
데일리 카밍 퍼플 선 크림
New Product
인체적용시험 · 마케팅 근거 확보
→

02
────────────
다래 핸드크림
New Product
제품 제안 · 세트 구성 · 수주
→

03
────────────
감자 바디로션
Renewal
Dermatest · 화해 프로모션
→
```

이미지를 쓰더라도 thumbnail 크기로만.

---

# 18. Project Detail — Product Cases

상단 탭:

```text
선크림    핸드크림    바디로션
```

active tab만 accent.

아래:

```text
CASE 01 / NEW PRODUCT

데일리 카밍 퍼플 선 크림

Intro paragraph

────────────────────────

Challenge
본문

────────────────────────

Decision
본문

────────────────────────

Action
본문

────────────────────────

Result
본문
```

표, 카드, 이미지보다 선과 텍스트가 중심.

---

# 19. Project Detail — How I Worked

간트차트는 선형 유지.

제품별 색상만 최소한으로 사용.

```text
Purple   퍼플 선크림
Green    다래 핸드크림
Beige    감자 바디로션
```

차트 배경은 neutral.

grid는 아주 옅게.

---

# 20. Responsive

## Desktop

- left rail 유지
- 2–3 column typography grid
- Project는 텍스트 3분할
- More Experience 2열

## Tablet

- left rail 축소
- Profile 2열
- Project 2+1 wrap 가능

## Mobile

- left rail 제거
- 상단 compact nav
- Hero single column
- Profile single column
- Project는 세로 리스트
- More Experience accordion 가능
- 상세 프로젝트 Product Case는 tab 유지

---

# 21. Motion

최소.

허용:

```text
smooth scroll
text underline
arrow translate
tab fade 150ms
section opacity fade 150–200ms
```

금지:

```text
large fade-up
zoom
parallax
cursor animation
3D
scroll-jacking
```

---

# 22. 이미지 사용 규칙

## Main Page

```text
Hero               이미지 없음
Profile            이미지 없음
Project            기본 이미지 없음
More Experience    이미지 없음
Career Summary     이미지 없음
```

## Project Detail

제품 확인이 필요한 경우에만 thumbnail 수준으로 사용.

대형 배너 금지.

제품 이미지가 없어도 레이아웃이 완성돼 보여야 한다.

---

# 23. 전체 느낌 체크

완성본은 다음처럼 보여야 한다.

```text
디자인 회사 포트폴리오
+
컨설팅 리포트
+
에디토리얼 웹사이트
```

쇼핑몰:

```text
X
```

브랜드 광고 페이지:

```text
X
```

화려한 SaaS 랜딩페이지:

```text
X
```

---

# 24. Codex 구현 우선순위

1. Grid
2. Typography
3. Divider
4. Spacing
5. Main page IA
6. Project typography layout
7. More Experience list
8. Project Detail
9. Responsive
10. 마지막에 Accent 및 micro interaction

이미지 작업은 가장 마지막.

---

# 25. 최종 체크리스트

- Hero에 이미지가 없는가?
- 첫 화면에서 카피가 주인공인가?
- Profile이 사진 없이도 충분히 완성돼 보이는가?
- Project가 쇼핑몰 상품 카드처럼 보이지 않는가?
- Product Case 3개가 “상품 판매 카드”가 아니라 “경험 사례”처럼 보이는가?
- More Experience에 아이콘이 없는가?
- 섹션 간 선과 여백만으로 구분되는가?
- 상세 페이지도 같은 타이포 시스템을 유지하는가?
- 포트폴리오 전체에서 실제 이미지가 없어도 구조가 무너지지 않는가?
- 전체 느낌이 차분하고 실무적으로 보이는가?
