# Portfolio UX/UI Design Spec for Codex

> 목적: 개인 웹 포트폴리오의 정보구조와 UI 원칙을 Codex가 그대로 구현할 수 있도록 정리한 디자인 명세서  
> 우선순위: **타이포그래피 > 정보 구조 > 여백 > 장식**  
> 핵심 원칙: **프로젝트 영역에만 실제 제품 이미지를 사용하고, 나머지 화면은 텍스트와 그리드 중심으로 구성한다.**

---

## 0. 전체 방향

이 포트폴리오는 화려한 개인 브랜딩 사이트가 아니라, 채용 담당자가 빠르게 읽고 필요한 깊이까지 들어갈 수 있는 **정돈된 경력 포트폴리오**를 목표로 한다.

- 흰색 배경
- 얇은 회색 구분선
- 강한 타이포 계층
- 넓은 여백
- 카드 남발 금지
- 그림자/글래스모피즘/과도한 라운드 사용 금지
- 컬러는 최소화
- 실제 이미지 사용은 **Featured Project와 Project Detail에만 제한**
- Profile, Career Snapshot, More Experience는 **텍스트 중심**
- 번호 체계로 읽는 순서를 명확하게 표시

---

# 1. Information Architecture

## Main Page

```text
01. HERO
↓
02. PROFILE
↓
03. CAREER SNAPSHOT
↓
04. FEATURED PROJECT (Preview + Detail Page CTA)
↓
05. MORE EXPERIENCE
↓
06. CAREER SUMMARY
```

## Project Detail Page

```text
Project Detail
├─ Project Overview
├─ What I Worked On
├─ Why
├─ How I Worked
├─ Product Cases
│  ├─ Case 01. 데일리 카밍 퍼플 선 크림
│  ├─ Case 02. 다래 핸드크림
│  └─ Case 03. 감자 바디로션
├─ Impact
└─ Takeaway
```

---

# 2. Routing / Interaction

## Main Route

```text
/
```

## Project Detail Route

```text
/projects/cosmetics-product-launch
```

`Featured Project`의 **프로젝트 자세히 보기 →** 클릭 시 모달이 아니라 **별도 상세 페이지로 이동**한다.

### Interaction

- Hero의 `Scroll ↓` → `#profile` smooth scroll
- Profile → `#profile`
- Career → `#career`
- Project → `#featured-project`
- Experience → `#more-experience`
- Summary → `#career-summary`
- Featured Project CTA → `/projects/cosmetics-product-launch`
- Project Detail의 `Back to Home` → `/#featured-project`
- Project Detail 내부는 anchor navigation 또는 sticky index 사용

---

# 3. Visual System

## Typography

```css
font-family:
  "Pretendard",
  "Inter",
  "Noto Sans KR",
  system-ui,
  sans-serif;
```

### Type hierarchy

- Hero Title: 52–68px / 1.15
- Section Main Copy: 28–36px / 1.3
- Section Title: 13–15px
- Body: 15–17px / 1.7
- Meta / Caption: 12–14px
- Impact Number: 32–44px

모바일:

- Hero Title: 36–44px
- Section Main Copy: 24–30px
- Body: 15–16px

## Color

```text
Background       #FFFFFF
Primary Text     #111111
Secondary Text   #666666
Muted Text       #999999
Divider          #E6E6E6
Soft Surface     #F7F7F7
Accent           #4A4FE7
```

Accent는 Section 번호, 링크, hover/focus, Project Detail active tab에만 제한적으로 사용한다.

## Border / Radius / Shadow

```text
Border: 1px solid #E6E6E6
Radius: 0–8px
Shadow: 기본적으로 사용하지 않음
```

금지:

- 큰 둥근 카드
- floating glass card
- heavy box-shadow
- gradient background 남발
- decorative blob
- 의미 없는 일러스트

---

# 4. Desktop Grid

권장 max-width:

```text
1360–1440px
```

Desktop:

```text
┌──────────────┬──────────────────────────────────────────┐
│ LEFT RAIL    │ MAIN CONTENT                             │
│ 180–220px    │ Remaining width                          │
└──────────────┴──────────────────────────────────────────┘
```

Main content는 12-column grid 기반. 각 섹션은 얇은 horizontal divider로 구분한다.

---

# 5. Left Rail / Navigation

Desktop에서만 기본 노출.

```text
SUNG HEE

01  Home
02  Profile
03  Career
04  Project
05  Experience
06  Summary
```

하단:

```text
© 2026
SUNG HEE
```

Behavior:

- 스크롤 위치에 따라 active section 표시
- active item은 글자 굵기 또는 작은 line indicator로만 표현
- 과한 background highlight 금지
- 모바일에서는 top nav 또는 hamburger로 변환

---

# 6. 01. HERO

Hero는 **첫 화면 한 장을 거의 가득 사용**하며 이미지를 사용하지 않는다.

```text
----------------------------------------------------------
01 / HERO

일을 수행하는 것을 넘어,
일이 흐르는 방식을 설계합니다.

제품과 사업이 실제로 움직일 수 있도록,
복잡한 업무를 구조화하고 실행까지 연결합니다.

                                    Scroll ↓
----------------------------------------------------------
```

### Exact Hero Title

> **일을 수행하는 것을 넘어,  
> 일이 흐르는 방식을 설계합니다.**

이 문구는 변경하지 않는다.

### Hero Subcopy

> 제품과 사업이 실제로 움직일 수 있도록,  
> 복잡한 업무를 구조화하고 실행까지 연결합니다.

Visual emphasis:

- 큰 타이포
- 충분한 빈 공간
- 이미지 없음
- `Scroll ↓`만 작게 제공

---

# 7. 02. PROFILE

타이포 중심.

## Main Copy

> **제품·브랜드·영업 운영을 경험하며,  
> 필요한 기준을 만들고 사람과 업무를 연결해 실행해왔습니다.**

## Information

```text
Name        장성희
Email       실제 이메일
Location    Seoul, KR

Product / Brand / Communication / Data-driven / Execution
```

Important:

- 생년월일 기본 노출하지 않음
- 프로필 사진 사용하지 않음
- Skill meter / 별점 / 퍼센트 능력치 사용 금지

---

# 8. 03. CAREER SNAPSHOT

목적: 경력 이동 흐름을 한눈에 보여준다.

## Heading

> 다양한 산업에서 쌓아온  
> 브랜드 · 사업 운영 경험

## Flow

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

실제 기간/회사명은 최종 데이터 기준으로 넣는다.

Style:

- 로고 사용하지 않음
- 세 영역을 타이포와 선으로 연결
- 화려한 timeline graphic 금지

---

# 9. 04. FEATURED PROJECT — Preview

**Main Page에서 유일하게 실제 제품 이미지를 적극적으로 사용하는 영역.**

## Layout

좌측:

```text
Featured Project

화장품 제품 개발·리뉴얼 및 마케팅 실행

지역 특산물을 활용한 신제품 개발과 기존 제품 리뉴얼을 담당하며,
제품 구체화부터 외부 파트너 조율, 마케팅 근거 확보,
프로모션과 판매 준비까지 실행 흐름을 관리했습니다.

[ 프로젝트 자세히 보기 → ]
```

우측 또는 하단:

```text
2     New Products Launched
1     Product Renewed
3+    공공기관 수주 확보
4     인체적용시험 기관 비교
```

실제 제품 이미지:

```text
[ 데일리 카밍 퍼플 선 크림 ]
[ 다래 핸드크림 ]
[ 감자 바디로션 ]
```

Important:

- 실제 제품 이미지 사용
- 이미지가 없으면 neutral placeholder
- AI 생성 제품 이미지를 최종 콘텐츠로 사용하지 않음
- 이미지보다 텍스트가 먼저 읽혀야 함
- 이미지 영역은 Featured Project 전체의 약 35–45%

CTA:

```text
프로젝트 자세히 보기 →
```

Click:

```text
/projects/cosmetics-product-launch
```

---

# 10. 05. MORE EXPERIENCE

이미지 없음.  
둥근 카드보다는 **reference screenshot처럼 grid + line + typography**로 구성한다.

## Heading

> 다양한 경험을 통해  
> 브랜드 운영의 폭을 넓혀왔습니다.

Desktop: 3 columns × 2 rows  
Mobile: 1 column

### 01. 대리점 운영 지원 및 VOC 전달

```text
출고 일정 조율
마케팅 리소스 전달
VOC 수취 후 관련 부서 연결
```

주의: 대리점 관리 총괄, VOC 개선 리딩처럼 과장하지 않는다.

### 02. 매출·원가 분석 및 브랜드 운영

```text
제품·거래처별 매출/원가 분석
지역별 판매 현황 분석
브랜드 운영회의 제안 및 정례화
```

### 03. 멀티채널 상품 운영

```text
9개 채널 · 11개 상품 운영
가격 · 배너 · 상세페이지 · 재고 · 주문 · 배송 · 프로모션
```

### 04. A/B 테스트 기반 마케팅 효과 검증

```text
랜딩페이지 시안 비교
유입 · 클릭 · 전환 결과 검토
```

### 05. 외부기관·거래처 조율

```text
정부지원사업 신청 · 집행 · 정산
외부기관 및 파트너 커뮤니케이션
```

### 06. CRM 기반 영업 데이터 운영 체계

```text
Pipedrive 데이터 이관
CRM 운영 기준 수립
가이드 · 교육 · KPI Dashboard
```

---

# 11. 06. CAREER SUMMARY

페이지의 마무리.

> **지속적으로 새로운 환경에서  
> 업무의 구조를 이해하고 경험을 확장해왔습니다.**

Timeline example:

```text
2022–2024
단정바이오
제품 개발 · 리뉴얼 · 브랜드 운영

2025–Present
윌로그
Sales / BizOps
```

이전 제조업 경력도 필요 시 포함.

Footer:

```text
SUNG HEE
Email
LinkedIn (optional)
© 2026
```

과한 Contact CTA는 넣지 않는다.

---

# 12. PROJECT DETAIL PAGE

Route:

```text
/projects/cosmetics-product-launch
```

Main Page와 동일한 visual system 유지.

## Header

```text
← Back to Home

Project 01

화장품 제품 개발·리뉴얼 및 마케팅 실행

지역 특산물을 활용한 신제품 개발과 기존 제품 리뉴얼을 담당하며,
제품 구체화부터 패키징·마케팅 근거 확보·프로모션·판매 준비까지 경험했습니다.
```

Meta:

```text
Role
제품 개발 및 런칭 실무
외부 파트너 조율
마케팅 실행

Category
Beauty / Consumer Goods
```

---

# 13. Project Detail — Sticky Index

Desktop:

```text
Overview
What I Worked On
Why
How I Worked
Product Cases
Impact
Takeaway
```

active section만 accent color.

모바일에서는 simple anchor list 또는 accordion index.

---

# 14. Project Overview

```text
Product Launch
Brand Management
Promotion
Partner Communication
```

태그는 얇은 border, white background, 작은 radius만 사용.

---

# 15. What I Worked On

실제 제품 이미지 사용 가능.

### 01. 데일리 카밍 퍼플 선 크림 | New Product

제품 네이밍·콘셉트 구체화부터 인체적용시험 기획·운영, 마케팅 근거 확보·출시까지

### 02. 다래 핸드크림 | New Product

제형·향료·패키지 개발부터 세트 구성·프로모션까지

### 03. 감자 바디로션 | Renewal

패키지 리뉴얼과 Dermatest 인증 획득, 화해 프로모션을 통한 기존 제품 활성화

각 제품 클릭 시 다른 route로 이동하지 않고 Product Case 영역으로 이동하거나 active tab을 변경한다.

---

# 16. Why

> 지역 특산물을 활용한 제품군을 확장하고, 주요 고객인 공공기관의 선물 수요에 대응할 상품 구성을 확보하는 한편, 기존 제품에는 리뉴얼과 프로모션을 통해 새로운 판매 기회를 만들고자 했습니다.

이미지 없이 본문 중심으로 처리.

---

# 17. How I Worked

Intro:

> 여러 제품의 개발·패키지·시험·프로모션 일정이 동시에 진행되어, 제품별 주요 마일스톤과 마감일을 간트차트로 관리했습니다.

Gantt는 실제 이미지가 없다면 CSS로 단순하게 표현한다.

```text
            1  2  3  4  5  6  7  8
제품 개발   ━━━━━━━
패키지         ━━━━━━━
시험              ━━━━━━━
프로모션              ━━━━━━━
```

목적은 프로젝트 관리 방식을 보여주는 것. 장식용 차트로 만들지 않는다.

---

# 18. Product Cases

Desktop:

```text
[ 선크림 ] [ 핸드크림 ] [ 바디로션 ]
```

선택한 제품만 상세 노출.

기본 active:

```text
데일리 카밍 퍼플 선 크림
```

3개의 모든 상세 내용을 동시에 세로로 펼치지 않는다.

---

# 19. Case Layout

공통:

```text
Product Name
Challenge
Decision
Action
Result
```

## Case 01. 데일리 카밍 퍼플 선 크림

Intro:

> 자영감자를 활용한 선크림 신제품 개발 프로젝트입니다. 제품군 선택은 경영진에서 결정했으며, 이후 제품 콘셉트·원가·패키징 디자인·출시 준비·마케팅 프로모션 전반의 사이클을 담당했습니다.

### Challenge

> 지역 특산물 원료를 사용했다는 사실만으로는 소비자에게 제품의 차별점을 설명하기 어려웠고, ‘피부 진정’이라는 제품 콘셉트를 뒷받침할 객관적인 마케팅 근거가 필요했습니다.

### Decision

> 콘셉트 원료와 제품 방향을 단순한 스토리텔링으로 끝내지 않고, 인체적용시험을 통해 소비자가 이해할 수 있는 근거로 전환하고자 했습니다.

### Action

> 인체적용시험 기관 4곳에 문의해 피부 온도 감소·모공 개선·자외선 차단 관련 시험 가능 여부와 비용·일정을 비교했습니다. 기관 선정 후 시험 항목 협의, 견적 조율, 일정 관리까지 진행했습니다.

### Result

> 확보한 인체적용시험 결과를 제품의 마케팅 근거로 활용해 상세페이지와 홍보물에 반영했습니다.

---

## Case 02. 다래 핸드크림

### Challenge

> 담당 브랜드 매출의 약 40%가 공공기관의 기념품 구매에서 발생했지만, 주요 요청 가격대인 1만원대에 대응할 수 있는 상품군이 없었습니다.

### Decision

> 다른 콘셉트의 핸드크림을 추가 출시해 기존 제품과 세트로 구성하면 공공기관 판매 기회를 확대할 수 있고, 동시에 원료 시리즈화를 통해 제품군 확장도 가능하다고 판단했습니다.

### Action

> 신규 핸드크림 제품군을 경영진에 제안하고, 승인 후 제형·향료·패키지 개발을 진행했습니다. 기존 핸드크림과 함께 1만원대 기념품으로 판매할 수 있도록 세트 패키지를 기획하고 출시·프로모션 일정을 관리했습니다.

### Result

> 기존 상품 구성으로는 가격 조건을 맞추지 못했던 공공기관 수주를 신규 세트상품을 통해 3건 이상 확보했습니다.

---

## Case 03. 감자 바디로션

### Challenge

> 회사 초기에 출시된 제품으로 최근 제품들과 디자인의 일관성이 부족했고, 소비자에게 전달할 차별화 포인트도 충분히 드러나지 않았습니다.

### Decision

> 단순 패키지 교체로 끝내지 않고, 브랜드 라인업의 시각적 일관성을 맞추는 동시에 소비자 접점에서 다시 노출될 수 있는 마케팅 액션을 함께 진행하고자 했습니다.

### Action

> 패키지를 리디자인해 최근 제품군과 디자인 체계를 통일했습니다. 제품을 독일 Dermatest에 직접 발송해 시험을 진행하고, 시험 통과 후 인증마크 사용권을 확보해 패키지와 마케팅 소재에 적용했습니다. 이후 화해 프로모션을 집행하고, 성과를 바탕으로 후속 라이브커머스까지 진행했습니다.

### Result

> 화해 바디로션 카테고리에서 약 1주간 1위를 기록하고 이후 약 한 달간 순위권을 유지했으며, 이를 기반으로 후속 라이브커머스까지 진행했습니다.

---

# 20. Impact

숫자 중심.

```text
1
Product Renewed

2
New Products Launched

3+
공공기관 수주 확보

4
인체적용시험 기관 비교
```

보조 결과:

```text
인체적용시험 결과
→ 상세페이지 · 마케팅 소재 활용

Dermatest 인증 + 화해 프로모션
→ 카테고리 상위권 · 라이브커머스 확장
```

---

# 21. Takeaway

> 제품을 출시하는 일은 제품 자체를 만드는 데서 끝나지 않았습니다. 제조사·디자인·임상기관 등 외부 파트너와 일정을 조율하고, 제품 특성을 설명할 근거를 확보하며, 패키지와 프로모션까지 하나의 흐름으로 연결해야 실제 판매로 이어질 수 있다는 것을 경험했습니다.

이미지 없이 큰 텍스트 한 단락으로 마무리한다.

---

# 22. Responsive Rules

## Desktop ≥ 1200

- left rail 고정
- 12-column grid
- Featured Project: text + image split
- More Experience: 3 × 2 grid
- Project Detail index sticky

## Tablet 768–1199

- left rail 축소 또는 top nav
- Featured Project: 60/40 또는 stacked
- More Experience: 2 columns

## Mobile < 768

- single column
- Hero title 36–44px
- left rail 제거
- top compact nav
- Career Snapshot 세로 timeline
- Featured Project 제품 이미지는 horizontal swipe 또는 stacked
- More Experience single column
- Project Detail Product Case는 tabs 또는 accordion

---

# 23. Motion

허용:

```text
anchor smooth scroll
link arrow translateX
section fade-in 150–250ms
tab content fade
```

금지:

```text
parallax
3D tilt
large zoom
cursor effects
scroll-jacking
long entrance animation
```

---

# 24. Accessibility

- WCAG AA 수준 contrast
- hover만으로 정보 전달 금지
- keyboard 접근 가능
- focus ring 유지
- product image alt 제공
- heading hierarchy 유지
- prefers-reduced-motion 지원

---

# 25. Content / Asset Rules

실제 제품 이미지 사용 가능 영역:

```text
Featured Project Preview
Project Detail
Product Case
```

이미지 미사용 영역:

```text
Hero
Profile
Career Snapshot
More Experience
Career Summary
```

실제 제품 이미지가 아직 없으면 neutral light-gray placeholder와 제품명 텍스트로 처리한다.

임의의 AI 제품 이미지를 최종 버전에 넣지 않는다.

---

# 26. Non-goals

이 사이트는 다음이 아니다.

- 디자이너 포트폴리오처럼 이미지가 주인공인 사이트
- 개인 브랜딩용 화려한 랜딩페이지
- 모든 경력을 상세하게 나열하는 경력기술서
- SaaS dashboard 스타일 UI
- Behance 스타일 case study gallery

목표:

> **짧게 보면 경력의 방향이 보이고, 깊게 보면 실제로 어떻게 일했는지가 보이는 포트폴리오.**

---

# 27. Codex Implementation Priority

1. Main layout / grid
2. Hero typography
3. Section spacing / divider
4. Main page IA
5. Featured Project preview
6. Separate Project Detail route
7. Product Case tabs
8. Responsive
9. Motion
10. 실제 제품 asset 교체

장식 작업은 마지막에 한다.

---

# 28. Final UX Check

- 첫 화면에서 5초 안에 메인 메시지가 읽히는가?
- Hero에서 이미지 없이도 화면이 충분히 완성돼 보이는가?
- Career Snapshot만 보고 경력 이동이 이해되는가?
- Featured Project가 Main Page에서 가장 강하게 보이는가?
- 제품 이미지는 프로젝트 영역에만 존재하는가?
- More Experience가 이미지 없이도 읽기 쉬운가?
- Project CTA 클릭 시 별도 상세 페이지로 이동하는가?
- Detail Page에서 Challenge → Decision → Action → Result가 빠르게 스캔되는가?
- 페이지가 디자인 쇼케이스보다 경력 포트폴리오처럼 보이는가?
