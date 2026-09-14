'use client';
/* Custom same-document View Transitions preserve native anchor fallback and modified-click behavior. */
/* eslint-disable next/no-html-link-for-pages */
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { ArrowUpRight, ArrowLeft, ArrowDown } from 'lucide-react';
import { projects, sections } from './projects';
import CaseBody from './case-body';
import Artifact from './artifact';
type TransitionDocument = Document & { startViewTransition?: (callback: () => void) => {finished:Promise<void>} };
export default function Portfolio({initialSlug = ''}:{initialSlug?:string}) {
 const [slug,setSlug] = useState(initialSlug);
 const [active,setActive] = useState('');
 const project = projects.find(p=>p.slug===slug);
 useEffect(()=>{
  const onPop=()=>{const s=location.pathname.split('/')[2] || '';setSlug(s);requestAnimationFrame(()=>{if(!s) window.scrollTo(0,Number(sessionStorage.getItem('portfolio-scroll')||0));});};
  addEventListener('popstate',onPop);return ()=>removeEventListener('popstate',onPop);
 },[]);
 useEffect(()=>{
  document.title=project?`${project.name} — Operations`:'Operations — Process Portfolio';
  if(!project)return;
  let queued=false;
  const update=()=>{queued=false;const threshold=innerHeight*.36;let current='';sections.forEach(s=>{if((document.getElementById(s.id)?.getBoundingClientRect().top??Infinity)<threshold)current=s.id;});setActive(current);};
  const onScroll=()=>{if(!queued){queued=true;requestAnimationFrame(update);}};
  update();addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);return ()=>{removeEventListener('scroll',onScroll);removeEventListener('resize',onScroll);};
 },[project]);
 function navigate(event:React.MouseEvent<HTMLAnchorElement>,next:string){
  if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button!==0)return;
  event.preventDefault();if(!slug)sessionStorage.setItem('portfolio-scroll',String(scrollY));const previous=slug;
  const change=()=>{history.pushState({},'',next?`/projects/${next}`:'/');flushSync(()=>{setSlug(next);setActive('');});window.scrollTo({top:next?0:Number(sessionStorage.getItem('portfolio-scroll')||0),behavior:'instant'});};
  const finish=()=>{const target=next?document.getElementById('detail-title'):document.getElementById(`card-${previous}`);target?.focus({preventScroll:true});};
  const doc=document as TransitionDocument;
  if(doc.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches){doc.startViewTransition(change).finished.then(finish).catch(finish);}else{change();finish();}
 }

 useEffect(()=>{
  const jump=(event:MouseEvent)=>{const link=(event.target as Element).closest('a');const href=link?.getAttribute('href');if(!href||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;const hash=href.startsWith('#')?href:!slug&&href.startsWith('/#')?href.slice(1):'';if(!hash)return;const target=document.getElementById(hash.slice(1));if(target){event.preventDefault();event.stopPropagation();history.replaceState({},'',hash);target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}};
  document.addEventListener('click',jump,true);return()=>document.removeEventListener('click',jump,true);
 },[slug]);
 function visual(p:typeof projects[number]){return <div className="project-thumb"><Artifact slug={p.slug} compact/></div>;}
 return <>
 <a className="skip" href="#main">본문 바로가기</a>
 <header className="header"><a className="brand" href="/" onClick={e=>navigate(e,'')}>SUNGHEE JANG</a><nav className="header-right" aria-label="주 메뉴"><a href="/" onClick={e=>navigate(e,'')}>Home</a><a href="/#about">About</a><a href="/#projects">Projects <ArrowUpRight size={15}/></a></nav></header>
 {!project?<main id="main" className="container">
 <section className="intro"><div className="eyebrow">SALES OPERATIONS / BUSINESS OPERATIONS</div><h1>일을 수행하는 것을 넘어,<br/><span>일이 흐르는 방식을 설계합니다.</span></h1><p className="hero-copy">반복되는 운영 문제를 기준·프로세스·데이터 구조로 바꾸고, 실제 업무에 정착시킵니다.</p><a className="text-link" href="#projects">프로젝트 보기 <ArrowDown size={18}/></a><div className="hero-foot">SUNGHEE JANG <span>OPERATIONS PORTFOLIO / 2026</span></div></section>
 <section id="projects" className="projects"><div className="section-bar"><div className="eyebrow">SELECTED WORK / 01—03</div><h2>문제를 구조로 바꾼 3개의 프로젝트</h2></div><div className="project-list">{projects.map(p=><a id={'card-'+p.slug} className="project-row" key={p.slug} href={'/projects/'+p.slug} onClick={e=>navigate(e,p.slug)}><span className="project-number">{p.number}</span><div className="project-copy"><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><p>{p.summary}</p><span className={'project-status '+(p.slug==='pipedrive'?'impact':'')}>{p.slug==='pipedrive'?'2026.01–09 · 출고 누락 0건 · 세금계산서 누락 0건':p.status}</span></div>{visual(p)}<span className="project-arrow"><span>프로젝트 보기</span><ArrowUpRight size={25}/></span></a>)}</div></section>
 <section id="about" className="about"><div><div className="eyebrow">ABOUT / WORKING PRINCIPLES</div><h2>운영을 통해<br/>더 나은 가능성을 만들고 싶습니다.</h2><p>반복되는 운영 문제를 기준·프로세스·데이터 구조로 바꾸고, 실제 업무에 정착시킵니다.</p></div><ol className="about-principles"><li><span>01</span>문제 발견 · 운영 기준 정의</li><li><span>02</span>프로세스 설계 · 후속 액션 연결</li><li><span>03</span>데이터 구조 설계 · 조직 내 정착</li></ol></section>
 </main>:<main id="main" className="container detail">
 <a className="back" href="/" onClick={e=>navigate(e,'')}><ArrowLeft size={16}/> 프로젝트 목록</a>
 <section className="detail-hero"><div><div className="eyebrow">CASE {project.number} / {project.english}</div><h1 id="detail-title" tabIndex={-1}>{project.title}</h1><p className="hero-copy">{project.summary}</p><span className="project-status">{project.status}</span></div>{visual(project)}</section>
 <div className="reading-layout"><nav className="reading-nav" aria-label="사례 읽기 단계">{sections.map((s,i)=><a key={s.id} href={'#'+s.id} aria-current={active===s.id?'location':undefined}><span className="step-number">0{i+1}</span>{s.label}</a>)}</nav><CaseBody project={project}/></div>
 <a className="next-project" href={'/projects/'+projects[(projects.indexOf(project)+1)%3].slug} onClick={e=>navigate(e,projects[(projects.indexOf(project)+1)%3].slug)}><div><span className="eyebrow">NEXT PROJECT</span><h2>{projects[(projects.indexOf(project)+1)%3].title}</h2></div><ArrowUpRight size={32}/></a>
 </main>}
 <footer className="container footer"><span>SUNGHEE JANG</span><span>Operations / Portfolio</span><span>2026</span></footer>
 </>;
}
