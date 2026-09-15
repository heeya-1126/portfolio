'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowDown,ArrowRight,Check,GitBranch} from 'lucide-react';
import {scrollScenes,type Scene} from './scroll-scenes';
function Diagram({scene}:{scene:Scene}){
 return <div className={`scene-diagram diagram-${scene.kind}`}>
  {scene.kind==='form'&&<div className="form-caption"><span>STANDARD INPUT</span><span>작성 기준</span></div>}
  {scene.nodes.map((node,i)=><div className={`scene-node node-${i}`} key={node}><span className="node-sequence">{scene.kind==='result'?<Check size={18}/>:String(i+1).padStart(2,'0')}</span><strong>{node}</strong>{(scene.kind==='flow'&&i<scene.nodes.length-1)&&<ArrowRight className="flow-arrow" size={22}/>}</div>)}
  {scene.kind==='branch'&&<GitBranch className="branch-sign" size={30} strokeWidth={1.2}/>}
 </div>;
}
export default function Scrollytelling({slug}:{slug:string}){
 const scenes=scrollScenes[slug]||scrollScenes.devices;
 const track=useRef<HTMLDivElement>(null);
 const [progress,setProgress]=useState(0);
 const [still,setStill]=useState(false);
 const active=Math.min(scenes.length-1,Math.floor(progress*scenes.length));
 useEffect(()=>{
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  const onMedia=()=>setStill(media.matches);onMedia();media.addEventListener('change',onMedia);
  let frame=0;
  const update=()=>{frame=0;const el=track.current;if(!el)return;const rect=el.getBoundingClientRect();const distance=el.offsetHeight-Math.min(innerHeight-100,640);setProgress(Math.max(0,Math.min(1,(88-rect.top)/Math.max(1,distance))));};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  schedule();addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
  return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);media.removeEventListener('change',onMedia);};
 },[slug]);
 return <div className={`scrollytelling ${still?'motion-static':''}`}>
  <div className="scrolly-intro"><span>스크롤로 보는 설계 과정 <ArrowDown size={15}/></span><a href="#results">결과로 바로 이동 ↗</a></div>
  <div className="cinema-track" ref={track}>
   <div className="cinema-frame">
    <div className="cinema-header"><span>PROCESS IN MOTION</span><span>{String(active+1).padStart(2,'0')} / 05</span></div>
    <div className="cinema-layers">{scenes.map((scene,i)=><div className={`cinema-scene ${i===active?'scene-active':i<active?'scene-past':'scene-future'}`} key={scene.kicker} aria-hidden={i!==active}>
     <Diagram scene={scene}/><div className="scene-caption"><span className="eyebrow">{scene.kicker}</span><h3>{scene.title}</h3><p>{scene.text}</p><small>{scene.note}</small></div>
    </div>)}</div>
    <div className="cinema-progress" aria-hidden="true">{scenes.map((s,i)=><span key={s.kicker}><i style={{transform:`scaleX(${Math.max(0,Math.min(1,progress*5-i))})`}}/></span>)}</div>
    <div className="cinema-footer"><span>스크롤을 내리면 다음 장면으로 이어집니다</span><ArrowDown size={15}/></div>
   </div>
  </div>
  <details className="scene-transcript" open={still||undefined}><summary>전체 과정 한 번에 읽기</summary><div>{scenes.map(scene=><section className="transcript-step" key={scene.kicker}><span className="eyebrow">{scene.kicker}</span><h3>{scene.title}</h3><Diagram scene={scene}/><p>{scene.text}</p><small>{scene.note}</small></section>)}</div></details>
  <div className="mobile-scenes">{scenes.map(scene=><section className="transcript-step" key={scene.kicker}><span className="eyebrow">{scene.kicker}</span><h3>{scene.title}</h3><Diagram scene={scene}/><p>{scene.text}</p><small>{scene.note}</small></section>)}</div>
 </div>;
}
