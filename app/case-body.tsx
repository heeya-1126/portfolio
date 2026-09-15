import { projects } from './projects';
import { scrollScenes } from './scroll-scenes';
import Artifact from './artifact';
export default function CaseBody({project:p}:{project:typeof projects[number]}) {
 const scenes=scrollScenes[p.slug];
 return <article className="story">
 <section id="overview" className="story-section overview"><div className="eyebrow">01 / OVERVIEW</div><div><h2>{p.name}</h2><p className="section-description">{p.summary}</p><dl className="overview-meta"><div><dt>내 역할</dt><dd>{p.role}</dd></div><div><dt>핵심 역량</dt><dd>{p.tags.join(' · ')}</dd></div>{p.slug==='pipedrive'&&<div><dt>업무 규모</dt><dd>영업사원 9명 · 월 세금계산서 약 40~50건 발행</dd></div>}</dl></div></section>
 <section id="problem" className="story-section"><div className="eyebrow">02 / BACKGROUND</div><h2>{p.problemTitle}</h2><p className="section-description">{p.problem}</p><div className="comparison"><div><span className="eyebrow">BEFORE</span><h3>{scenes[0].title}</h3><ul>{p.before.map(v=><li key={v}>{v}</li>)}</ul></div><div><span className="eyebrow">AFTER</span><h3>{p.name}</h3><ul>{p.tags.map(v=><li key={v}>{v}</li>)}</ul></div></div></section>
 <section id="design" className="story-section"><div className="eyebrow">03 / HOW I DESIGNED IT</div><h2>{p.designTitle}</h2><ol className="design-steps">{scenes.slice(1).map((s,i)=><li key={s.kicker}><span className="design-number">0{i+1}</span><div><span className="eyebrow">{s.kicker.split(' / ')[1]}</span><h3>{s.title}</h3>{s.text&&<p>{s.text}</p>}<div className="step-nodes">{s.nodes.map(n=><span key={n}>{n}</span>)}</div><p className="step-note">{s.note}</p></div></li>)}</ol></section>
 <section id="demo" className="story-section"><div className="eyebrow">04 / DELIVERABLE</div><h2>{p.name}</h2><Artifact slug={p.slug}/></section>
 <section id="results" className="story-section outcome"><div className="eyebrow">05 / OUTCOME</div><h2>{p.resultTitle}</h2>{p.slug==='pipedrive'?<><div className="metrics"><div><strong>0<span>건</span></strong><p>출고 누락</p></div><div><strong>0<span>건</span></strong><p>세금계산서 누락</p></div></div><p className="period">2026.01–09</p></>:<h3 className="outcome-statement">{p.result}</h3>}<p className="section-description">{p.resultNote}</p></section>
 <section id="validation" className="story-section validation"><div className="eyebrow">06 / VALIDATION</div><h2>확인 범위와 남은 과제</h2><p className="section-description">{p.limit}</p>{p.slug==='devices'&&<p className="validation-detail">기기 목록·출고·회수·이력 기능 테스트 완료<br/>실제 운영 도입 전 · 회수율 개선·시간 절감 성과는 미검증</p>}{p.slug==='revenue'&&<p className="validation-detail">입금액은 재무팀이 입력하는 항목입니다.</p>}</section>
 </article>;
}
