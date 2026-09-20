import { writeFile, mkdir } from 'node:fs/promises';
const root = new URL('./', import.meta.url);
const target = new URL('dist/projects/bbss/', root);
await mkdir(target, { recursive: true });
const sections = [['overview','Overview'],['work','What I Worked On'],['context','Project Context'],['main-case','Main Case'],['process','How I Worked'],['impact','Impact'],['takeaway','Takeaway']];
const label = (n,t) => `<div class="eyebrow"><span>${String(n).padStart(2,'0')}</span> / ${t.toUpperCase()}</div>`;
const section = (n,body) => `<section id="${sections[n-1][0]}" class="detail-section observed">${label(n,sections[n-1][1])}${body}</section>`;
const flow = (items, cls='') => `<ol class="bbss-flow ${cls}">${items.map((t,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><strong>${t}</strong></li>`).join('')}</ol>`;
const work = [
 ['계약과 기기 정보 연결','계약별 출고 기기의 시리얼을 연결해, 거래처와 계약을 기준으로 사용 중인 기기와 교체·회수 대상을 확인할 수 있도록 구성했습니다.'],
 ['교체·회수 일자 확인','검교정과 USIM 만료일 중 빠른 시점을 교체 기준으로 반영하고, 안내 시점·회수 기한·미회수 상태 등 처리 기준을 정리하여 쉽게 확인할 수 있게 대시보드화 했습니다.'],
 ['반복 업무 지원','회수 대상 목록, 거래명세서와 안내 메일 본문을 생성하도록 구성했습니다. 외부 메일은 담당자가 확인한 뒤 직접 발송하도록 했습니다.']
];
const screens = [
 ['contract-detail.png','계약 상세 화면 - 계약과 연결 기기 정보'],
 ['device-list.png','디바이스 목록 화면 - 검교정 및 SIM 만료 관리'],
 ['mail-center.png','메일 센터 화면 - 검교정 안내 대상 및 메일 작성']
];
const carousel = `<div class="bbss-carousel" role="region" aria-roledescription="캐러셀" aria-label="빵샤 업무 화면" tabindex="0"><div class="bbss-carousel-stage"><button class="bbss-carousel-prev" type="button" aria-label="이전 화면"><span aria-hidden="true">←</span></button><div class="bbss-carousel-slides" aria-live="polite" aria-atomic="true">${screens.map(([file,alt],i)=>`<figure class="bbss-slide" role="group" aria-roledescription="슬라이드" aria-label="${i+1} / 3"${i?' hidden':''}><figcaption><p class="bbss-slide-count">0${i+1} / 03</p><h3>${work[i][0]}</h3><p${i!==1?' class="bbss-single-line" tabindex="0"':''}>${work[i][1]}</p></figcaption><div class="bbss-screen"><img src="/projects/bbss/assets/${file}" alt="${alt}" draggable="false"${i?' loading="lazy"':''}></div></figure>`).join('')}</div><button class="bbss-carousel-next" type="button" aria-label="다음 화면"><span aria-hidden="true">→</span></button></div></div><link rel="stylesheet" href="/projects/bbss/carousel.css"><script src="/projects/bbss/carousel.js" defer></script>`;
const step = (en,title,body) => `<article class="bbss-case-step"><p class="bbss-step-label">${en}</p><div><h3>${title}</h3>${body}</div></article>`;
const page = `<!doctype html>
<html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>빵샤 — 계약·디바이스 통합 운영 시스템 | 장성희</title><meta name="description" content="계약과 기기 생애주기를 연결하고 교체·회수 기준을 정의한 운영 시스템 기획 사례. 프로토타입 검증부터 실제 운영을 위한 데이터 구조 전환까지."><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/bbss.css"><script src="/site.js" defer></script></head>
<body class="bbss-page"><a class="skip" href="#main">본문 바로가기</a><header class="mobile-header"><a class="wordmark" href="/">SEONG HEE<span>PORTFOLIO</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="rail">메뉴 <span aria-hidden="true">＋</span></button></header>
<aside class="rail detail-rail" id="rail"><a class="wordmark" href="/">SEONG HEE<span>PRODUCT · BRAND · OPERATIONS</span></a><div class="project-context"><a href="/#featured-project">← 프로젝트 목록</a><p>계약·디바이스<br>통합 운영 시스템</p></div><nav aria-label="프로젝트 목차">${sections.map(([id,t],i)=>`<a href="#${id}"><span>${String(i+1).padStart(2,'0')}</span>${t}</a>`).join('')}</nav><div class="rail-foot">© 2026<br>SEONG HEE</div></aside>
<main class="main" id="main"><section id="overview" class="detail-hero observed">${label(1,'Overview')}<p class="category">OPERATIONS SYSTEM PLANNING</p><h1>계약·디바이스<br>통합 운영 시스템 <span class="bbss-name">「빵샤」</span></h1><p class="body-copy bbss-lead">계약과 디바이스 정보가 각각 관리되면서 발생하던 교체·회수 업무의 복잡도를 줄이기 위해, <strong>계약과 기기 생애주기를 연결한 운영 시스템을 기획했습니다.</strong></p><p class="body-copy">사내 AI 해커톤에서 운영 데이터 통합 프로토타입으로 1위를 수상한 뒤, 실제 업무에서 발견한 문제를 중심으로 기능과 운영 기준을 다시 설계했습니다.</p><dl class="project-meta"><div><dt>ROLE</dt><dd>업무 기획 · 요구사항 정의<br>운영 기준 수립 · 프로토타입 검증</dd></div><div><dt>TOOLS</dt><dd>Claude Code · Google Apps Script<br>Supabase</dd></div></dl><p class="bbss-status"><span>현재 단계</span> 실운영 적용을 위한 데이터 구조 전환 중</p></section>
${section(2,carousel)}
${section(3,`<h2>분산된 정보 때문에 사람이 직접 이어 붙이던 업무</h2><div class="bbss-prose"><p>계약 정보와 기기 정보가 서로 다른 자료에서 관리되고 있었습니다. 한 거래처에 계약이 여러 개 있으면 사용 중인 기기가 어떤 계약에 연결되어 있는지 바로 확인하기 어려웠습니다. 교체 대상이나 회수 시점도 담당자가 직접 자료를 대조해야 했습니다.</p><p>기기 교체는 담당자 간 연락으로 진행됐습니다. 회수 현황을 계속 확인할 수 있는 기준도 없어 교체 후 기기가 회수되지 않는 경우가 있었습니다.</p><p>해커톤에서는 매출과 계약, 운영 정보를 한 화면에서 보는 대시보드로 시작했습니다. 실제 업무를 맡은 뒤에는 단순히 정보를 한곳에 모으는 것만으로는 부족하다는 걸 알게 됐습니다. <strong>먼저 계약과 기기를 연결하고, 교체와 회수 기준을 정리할 필요가 있었습니다.</strong></p></div>`)}
${section(4,`<h2>계약과 기기 생애주기를<br>하나의 흐름으로 관리하기</h2><div class="bbss-case">
${step('CHALLENGE','기기와 계약의 관계가 명확하지 않았습니다.',`<p>어느 거래처에 어떤 기기가 나갔는지는 확인할 수 있어도, 여러 계약이 동시에 진행되는 거래처에서는 특정 기기가 어떤 계약에 속하는지 확인하는 데 시간이 걸렸습니다. 교체와 회수까지 별도로 진행되어 담당자가 정보를 직접 대조해야 전체 상황을 파악할 수 있었습니다.</p>`)}
${step('DECISION','기능을 추가하기 전에 모호했던 기준부터 정했습니다.',`<p>계약과 기기의 연결 방식을 먼저 정의했습니다. 이후 교체 안내 시점과 회수 기한, 미회수 상태를 어떤 기준으로 관리할지 정리했습니다. 담당자마다 다르게 판단하던 업무를 같은 기준으로 처리할 수 있도록 하기 위해서였습니다.</p><ol class="bbss-decision-rules"><li><h4>01 계약–기기 연결 기준</h4><p>어떤 계약에 어떤 기기가 배정되어 있는지 확인할 수 있도록 연결 구조 확인</p></li><li><h4>02 교체 기준</h4><p>검교정 일정 등을 기준으로 교체 안내 시점과 대상 판단 기준 정리</p></li><li><h4>03 회수 기준</h4><p>교체 후 회수 기한과 미회수 상태를 구분</p></li></ol>`)}
${step('ACTION','업무 기준을 데이터와 기능으로 연결했습니다.',`<p>계약별 출고 기기 시리얼을 연결하고 검교정·USIM 만료일로 교체 대상을 확인하도록 했습니다.<br>기기 목록과 출고·회수 상태, 거래처, 검교정 정보, 출고일과 회수일을 조회하는 프로토타입을 만들었습니다.</p><p>재무팀의 요구도 확인해 계약번호, 서비스 유형, 판매·렌탈 구분과 매출 귀속 정보까지 연결했습니다.<br>반복 자료는 시스템이 만들고, 외부로 나가는 메일은 담당자가 확인·발송하도록 구성했습니다.</p><div class="bbss-human-flow" aria-label="안내 메일 처리 흐름"><span>시스템 생성</span><span aria-hidden="true">→</span><span>담당자 확인</span><span aria-hidden="true">→</span><strong>직접 발송</strong></div>`)}
${step('RESULT','연결 구조를 확인하고 실운영을 위한 전환을 시작했습니다.',`<p>계약, 기기, 교체·회수 상태와 이력을 연결해 관리할 수 있는 기본 구조를 만들었습니다. 다만 일회용 기기를 포함한 <strong>10만 대 이상의 실데이터</strong>를 적용하면서 스프레드시트 구조의 성능·확장성 한계를 확인했습니다.</p><p>장기적인 운영을 위해 현재 Supabase에 별도 데이터 테이블을 구성하고, 기존 데이터를 Raw Data로 활용할 수 있도록 마이그레이션하고 있습니다.</p><p class="bbss-note">실제 운영 적용을 준비하는 단계로, 회수율과 업무시간 개선 효과는 도입 이후 검증할 예정입니다.</p>`)}
</div>`)}
${section(5,`<h2>업무를 이해하고, 구현하고,<br>실제 데이터로 다시 검증했습니다.</h2>${flow(['업무 흐름 파악','문제·예외 정리','운영 기준 정의','요구사항 구체화','프로토타입 구현','실데이터 적용','한계 확인','데이터 구조 전환'],'bbss-process')}<div class="bbss-prose"><p>Claude Code는 아이디어를 빠르게 구현하고 수정하는 데 활용했습니다. <strong>무엇을 구현할지, 어떤 데이터를 연결할지, 어느 단계에서 사람이 판단해야 하는지</strong>는 실제 업무를 기준으로 정했습니다.</p><p>구현한 기능을 실제 데이터와 업무 흐름에 적용하고, 확인한 한계를 다음 설계에 반영하는 과정을 반복했습니다.</p></div>`)}
${section(6,`<ol class="bbss-impact">${[
 ['AI HACKATHON','사내 AI 해커톤 1위','운영 데이터 통합 아이디어를 실제 업무 문제를 해결하는 프로젝트로 발전시켰습니다.'],
 ['DATA CONNECTION','계약 ↔ 기기 ↔ 교체·회수 이력','계약을 기준으로 기기 시리얼과 상태, 이력을 연결하는 기본 구조를 구현했습니다.'],
 ['OPERATING RULE','교체·회수 처리 기준 정의','교체 시점, 회수 기한, 미회수 상태 등 업무에 필요한 판단 기준을 정리했습니다.'],
 ['SCALE TEST','10만+ 기기 데이터 검증','실데이터 적용으로 스프레드시트 구조의 성능·확장성 한계를 확인했습니다.'],
 ['MIGRATION · IN PROGRESS','Supabase 기반 데이터 전환','실운영 적용을 위해 데이터 테이블 재구성과 기존 데이터 마이그레이션을 진행 중입니다.']
 ].map(([en,t,p],i)=>`<li><span class="item-number">0${i+1}</span><div><p class="category">${en}</p><h2>${t}</h2><p>${p}</p></div></li>`).join('')}</ol><p class="bbss-note">회수율·업무시간 등 운영 성과는 실제 도입 이후 별도로 검증할 예정입니다.</p>`)}
${section(7,`<div class="bbss-prose"><p>기능을 만들기 전에 먼저 실제 업무에서 어떤 판단이 필요한지 정리했습니다. 담당자가 무엇을 확인해야 다음 단계로 넘어갈 수 있는지도 함께 봤습니다.</p><p>프로토타입이 잘 작동해도 실제 데이터를 넣으면 예상하지 못한 문제가 생겼습니다. 그래서 한 번에 완성하려 하기보다 실제 데이터를 적용해 보고, 문제가 생기는 부분을 다시 수정하는 방식으로 진행했습니다.</p><p>정보는 단순히 관리하는것이 중요한 것이 아니라 실제 사용할 수 있도록 연결하여 관리하는것이 중요하다는 것을 깨달았습니다.</p><p>현재는 관리되지 않던 계약과 디바이스 흐름을 기준부터 다시 정리하고 있습니다. 프로토타입과 실데이터 검증을 거치면서 실제 운영에 사용할 수 있는 형태로 계속 보완하고 있습니다.</p></div>`)}
<div class="reading-next"><a class="project-link" href="/#featured-project">프로젝트 목록 <span aria-hidden="true">↗</span></a><a class="project-link" href="/projects/cosmetics-product-launch">화장품 프로젝트 보기 <span aria-hidden="true">→</span></a></div><footer><a href="/">SEONG HEE</a><a class="footer-email" href="mailto:9dudn@naver.com">9dudn@naver.com</a><span>© 2026</span></footer></main></body></html>`;
await writeFile(new URL('index.html', target), page);
console.log('Generated standalone /projects/bbss/ only.');
