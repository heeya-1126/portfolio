# SUNGHEE JANG — Operations Portfolio

Sales Operations / Business Operations 포트폴리오. 기존 홈페이지의 문구, 레이아웃, 프로젝트 상세 화면을 옮긴 Cloudflare Workers 배포용 소스입니다.

## Cloudflare에 배포

Cloudflare 대시보드 → Workers & Pages → Create application → GitHub 저장소 연결에서 이 저장소를 선택합니다. **Workers** 프로젝트를 사용합니다.

| 설정 | 값 |
| --- | --- |
| Worker 이름 | portfolio |
| Production branch | main |
| Root directory | 저장소 루트 |
| Build command | npm run build |
| Deploy command | npm run deploy |
| Node.js | 22.13 이상 (권장 22 LTS) |

Worker 이름은 wrangler.jsonc의 name과 일치해야 합니다. 다른 이름을 사용하면 파일도 함께 수정하세요. Git 연결 후 main에 반영한 변경 사항은 Cloudflare 설정에 따라 자동 배포됩니다.

Sites 전용 플러그인·인증·프로젝트 설정을 제거했습니다. 애플리케이션에 API 키, 데이터베이스, ChatGPT 로그인은 필요하지 않습니다. 배포 권한은 Cloudflare의 Git 연결 과정에서 관리합니다.

## 로컬 실행

```sh
npm ci
npm run dev
```

빌드: npm run build / 빌드 후 로컬 확인: npm start

## 주요 파일

- app/portfolio.tsx: 홈과 상세 화면, 메뉴 이동
- app/projects.ts: 프로젝트 사실관계와 주요 문구
- app/scroll-scenes.ts: 설계 단계별 설명
- app/case-body.tsx: 상세 페이지 구성
- app/artifact.tsx: 가상 데이터로 재구성한 산출물
- app/globals.css: 디자인과 반응형
- public/: 이미지 등 정적 파일
- vite.config.ts, wrangler.jsonc: Cloudflare 빌드·배포 설정

프로젝트 주소: /projects/devices, /projects/pipedrive, /projects/revenue

## 표현 범위

빵샤는 운영 검증 전이며, 검증되지 않은 개선 수치를 추가하지 않습니다. 출고 프로세스의 자동화는 후속 활동 생성이며 실제 세금계산서 발행 판단은 담당자가 수행합니다. 매출 자료의 입금액은 재무팀 입력 항목입니다. 예시 화면은 가상 데이터이며 실제 회사 시스템에 연결되지 않습니다.

[Cloudflare Git 배포 안내](https://developers.cloudflare.com/workers/ci-cd/builds/)
