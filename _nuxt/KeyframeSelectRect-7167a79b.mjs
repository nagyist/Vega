import{a as $}from"./useTimeline-6cb6bf32.mjs";import{k as b,a as C,r as e,b as x,E as k,S as K,X,o as I,f as L,H as M,u as Y}from"./entry-cf7f9e40.mjs";const D=C({__name:"KeyframeSelectRect",setup(z){const{timeline:R,selectStrip:A,selectKeyframe:S}=$(),i=e(!1),m=e(0),_=e(0),h=e(0),g=e(0),r=e(0),v=e(0),E=e([]),f=e(null),p=x(()=>R.value.selectedStrips.find(o=>!0));k(()=>{if(!f.value)return;const o=f.value.parentElement;o.addEventListener("mousedown",t=>{var l;if(!p.value)return;E.value=[],(l=p.value)==null||l.effects.forEach(s=>{s.animations&&s.animations.forEach(a=>{const u=document.getElementById(`${a.id}`);u&&E.value.push(u)})}),i.value=!0;const c=o.getBoundingClientRect();r.value=t.clientX-c.left,v.value=t.clientY-c.top}),window.addEventListener("mousemove",t=>{var w;if(!i.value||!p.value)return;const c=o.getBoundingClientRect(),l=t.clientX-c.left,s=t.clientY-c.top;m.value=l<r.value?l:r.value,_.value=s<v.value?s:v.value,h.value=Math.abs(l-r.value),g.value=Math.abs(s-v.value);const a=(w=f.value)==null?void 0:w.getBoundingClientRect();if(!a)return;const u=[];E.value.forEach(d=>{const n=d.getBoundingClientRect();n.left<a.right&&n.right>a.left&&n.top<a.bottom&&n.bottom>a.top&&u.push(d.id)});const y=[];p.value.effects.forEach(d=>{d.animations.forEach(n=>{u.includes(`${n.id}`)&&y.push(n)})}),S(y)}),window.addEventListener("mouseup",t=>{t.stopPropagation(),i.value=!1,m.value=0,_.value=0,h.value=0,g.value=0})});const B=x(()=>({left:`${m.value}px`,top:`${_.value}px`,width:`${h.value}px`,height:`${g.value}px`}));return(o,t)=>K((I(),L("div",{ref_key:"el",ref:f,class:"select-rect",style:M(Y(B))},null,4)),[[X,i.value]])}});var T=b(D,[["__scopeId","data-v-51f1e070"]]);export{T as default};
