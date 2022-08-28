import G from"./VInputBase-452ac88f.mjs";import H from"./TimeView-1fc9943e.mjs";import U from"./TimelineCursor-071ed992.mjs";import $ from"./ScaleScroll-07b8b5f8.mjs";import{a as q,c as J}from"./useTimeline-6cb6bf32.mjs";import{a as Q,N as W,b as M,r as c,a0 as X,w as A,E as Y,u as i,o as s,f as v,h as p,F as x,G as b,i as _,H as P,j as Z,t as ee,c as te}from"./entry-cf7f9e40.mjs";import ae from"./KeyframeMarker-6006f6c5.mjs";import oe from"./KeyframeSelectRect-7167a79b.mjs";import"./usePixPerSec-9f443e7e.mjs";import"./onDragStart-b67a33ef.mjs";import"./useKeyboard-b743da98.mjs";const ne={style:{height:"100%","border-right":"solid 1px white"}},le=p("div",{style:{"border-bottom":"1px solid",height:"20px"}}," Properties ",-1),ie={style:{width:"200px",height:"100%"}},re={style:{margin:"auto 4px"}},se={style:{position:"relative",height:"calc(100% - 12px)"}},ue={style:{display:"flex",position:"relative",height:"20px","border-bottom":"1px solid"}},de={style:{position:"absolute",bottom:"0",width:"100%"}},ke=Q({__name:"KeyframePanel",setup(ce){const{timeline:h,updateEffect:T,update:V}=q(),{addEventListener:L}=W(),t=M(()=>h.value.selectedStrips.length>0?h.value.selectedStrips[0]:null),r=c(new Map),C=c(new Map),N=M(()=>[...Array(Math.floor(R.value))].map((e,l)=>l)),u=c(0),m=c(1);function K(){var a;r.value.clear(),(a=t.value)==null||a.effects.forEach(o=>{"animations"in o&&o.animations.forEach(n=>{var f;r.value.has(n.key)||r.value.set(n.key,[]),C.value.set(n.id,{...o}),(f=r.value.get(n.key))==null||f.push(n)})});const e=new Map,l=[...r.value.keys()];l.sort((o,n)=>o.localeCompare(n)),l.forEach(o=>{e.set(o,r.value.get(o)||[])}),r.value=e}const w=c(null),y=c(0);function F(){var a;if(!t.value){y.value=1;return}const e=(a=w.value)==null?void 0:a.getBoundingClientRect(),l=(e==null?void 0:e.width)||0;y.value=l/t.value.length/(m.value-u.value)}function k(){F(),I()}X(k);const g=c(0);function I(){var a;if(!t.value){g.value=0;return}const e=(a=w.value)==null?void 0:a.getBoundingClientRect(),l=(e==null?void 0:e.width)||0;g.value=-l*u.value/(m.value-u.value)}const R=M(()=>t.value?t.value.length:0);A(t,()=>{K()}),A(()=>{var e;return[...((e=t.value)==null?void 0:e.effects)||[]]},()=>{K()});const z=c(null);Y(()=>{var e;L("resize",k),window.addEventListener("resize",k),(e=z.value)==null||e.addEventListener("keydown",l=>{!t.value||l.key==="x"&&t.value.effects.filter(a=>{if("animations"in a){const o=[];a.animations.forEach(n=>{h.value.selectedKeyframes.forEach(f=>{n.id!==f.id&&o.push({...n})}),t.value&&T(t.value.id,{...a,animations:o})})}return!0})})});function O(e){u.value=e}function j(e){m.value=e}function D(e){!t.value||V(t.value.start+e,!0)}return(e,l)=>{const a=G,o=H,n=U,f=$;return i(t)?(s(),v("div",{key:0,ref_key:"el",ref:z,style:{display:"flex",height:"100%"}},[p("div",ne,[le,p("div",ie,[(s(!0),v(x,null,b(r.value,(d,E)=>(s(),v("div",{key:E,style:{display:"flex",overflow:"hidden",height:"20px","white-space":"nowrap","box-sizing":"border-box","border-bottom":"1px solid var(--border-grey)"}},[p("div",re,ee(d[0])+": ",1),_(a,{style:{margin:"2px 4px 2px auto"},value:i(J)(d[1],i(h).curent-i(t).start,d[0],0).toFixed(3),readonly:""},null,8,["value"])]))),128))])]),p("div",{ref_key:"timeArea",ref:w,style:{overflow:"hidden",position:"relative",width:"100%",height:"100%","user-select":"none"}},[p("div",se,[_(oe),p("div",ue,[_(o,{start:u.value*i(t).length,length:(m.value-u.value)*i(t).length,onMove:D},null,8,["start","length"])]),_(n,{style:P({left:(i(h).curent-i(t).start-u.value*i(t).length)*y.value+"px"})},null,8,["style"]),(s(!0),v(x,null,b(i(N),d=>(s(),v("div",{key:d,style:P([{left:`${g.value+d*y.value}px`},{display:"flex",position:"absolute",height:"100%","border-left":"1px solid var(--bg2)"}])},null,4))),128)),(s(!0),v(x,null,b(r.value,(d,E)=>(s(),v("div",{key:E,style:{dislplay:"flex",position:"relative",height:"24px",width:"100%","border-bottom":"1px solid var(--bg2)","box-sizing":"border-box"}},[(s(!0),v(x,null,b(d[1],S=>{var B;return s(),te(ae,{key:S.id,animation:S,scale:y.value,left:g.value,effect:C.value.get(S.id),"strip-id":((B=i(t))==null?void 0:B.id)||""},null,8,["animation","scale","left","effect","strip-id"])}),128))]))),128))]),p("div",de,[_(f,{start:u.value,end:m.value,onStart:O,onEnd:j},null,8,["start","end"])])],512)],512)):Z("",!0)}}});export{ke as default};
