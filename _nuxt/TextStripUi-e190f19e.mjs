import S from"./VIcons-4f606c3c.mjs";import{a as B}from"./useTimeline-6cb6bf32.mjs";import{d as j}from"./mdi-00233b2d.mjs";import{k as E,a as R,b as u,r as g,E as T,u as a,o as p,f as w,h as f,H as y,F as $,G as O,j as z,R as F,c as U}from"./entry-cf7f9e40.mjs";const H={style:{overflow:"hidden"}},I=R({__name:"TextStripUi",props:{strip:null},setup(k){const m=k,{timeline:o}=B(),d=u(()=>m.strip.effects.find(e=>e.type==="Text")),h=g(null),_=u(()=>{var n,s,r;const e=((r=(s=(n=h.value)==null?void 0:n.parentElement)==null?void 0:s.parentElement)==null?void 0:r.getBoundingClientRect().width)||1,l=(o.value.end-o.value.start)/o.value.length;return e/o.value.length/l}),t=g(null),c=u(()=>F.effectObjectMap.get(d.value.id));function b(){var x;if(!t.value)return;const e=(x=t.value)==null?void 0:x.getContext("2d");if(!e||!c.value)return;const l=c.value.canvas,n=l.getContext("2d");if(!n)return;const s=c.value.mesureWidth,r=c.value.mesureHeight,C=s/r;t.value.width=t.value.height*C,e.clearRect(0,0,t.value.width,t.value.height),e.drawImage(n.canvas,l.width/2-s/2,n.canvas.height/2-r/2,s,r,0,0,t.value.width,t.value.height)}T(()=>{const e=()=>{b(),window.requestAnimationFrame(e)};e()});const i=u(()=>(m.strip.start-o.value.start)*_.value),v=12;return(e,l)=>{const n=S;return a(d)?(p(),w("div",{key:0,ref_key:"el",ref:h,style:{height:"100%",display:"flex",overflow:"hidden",padding:"0 12px",position:"relative"}},[f("div",H,[f("canvas",{ref_key:"canvas",ref:t,class:"video",style:y({left:(a(i)<0?a(i)<-50?62:12-a(i):12)+"px"})},null,4)]),f("div",null,[(p(!0),w($,null,O(a(d).animations,(s,r)=>(p(),U(n,{key:r,path:a(j),style:y([{fill:"orange",stroke:"white","stroke-width":"2px",position:"absolute"},`width: ${v}px; height: ${v}px; left: ${s.time*a(_)-4-v/2+(a(i)<-50?a(i)+50:0)}px; z-index: 1; bottom: ${0}px`]),viewBox:"0 0 24 24"},null,8,["path","style"]))),128))])],512)):z("",!0)}}});var q=E(I,[["__scopeId","data-v-674cbb2c"]]);export{q as default};
