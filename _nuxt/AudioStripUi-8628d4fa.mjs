import{p as L,a as Q,e as Y,b as Z,r as d,f as v,x as $,w as B,u as q,o as G,i as J,j as D,C as K,l as W,Q as X,Y as ee,Z as I}from"./entry-46ab768b.mjs";const te=Q({__name:"AudioStripUi",props:{strip:null},setup(P){const h=P,{timeline:s}=Y(),{assets:U}=Z(),V=d([]),c=v(()=>h.strip.effects.find(e=>e.type==="Audio")),F=v(()=>{var e;return((e=U.value.assets.find(t=>t.id===c.value.audioAssetId))==null?void 0:e.path)||""}),u=d(null),C=v(()=>{var n,i,o;const e=((o=(i=(n=u.value)==null?void 0:n.parentElement)==null?void 0:i.parentElement)==null?void 0:o.getBoundingClientRect().width)||1,t=(s.value.end-s.value.start)/s.value.length;return e/s.value.length/t}),N=v(()=>X.get(c.value.id)),T=40,r=d(null),a=d(null);let f=null;const R=v(()=>(h.strip.start-s.value.start)*C.value);function S(){var A,M,j,k,O;if(!a.value)return;const e=(M=(A=r.value)==null?void 0:A.parentElement)==null?void 0:M.getBoundingClientRect(),t=(k=(j=u.value)==null?void 0:j.parentElement)==null?void 0:k.getBoundingClientRect();if(!e||!t||!f)return;const n=f.sampleRate,i=f.getChannelData(0),o=t.width/C.value,E=Math.floor(o*n),g=Math.floor(E/t.width),m=[];let _=0,w=0,x=Math.floor(c.value.start*n);R.value<-50&&(x=Math.floor(g*(-50-R.value)));for(let l=x;l<E+x;l++)if(_+=Math.abs(i[l]),w++,w>=g){const y=_/g;m.push(y),_=0,w=0}if(a.value.clearRect(0,0,e.width,e.height),a.value.fillStyle="#fff2",a.value.fillRect(0,0,e.width,e.height),a.value.fillStyle="orange",!!((O=r.value)==null?void 0:O.getBoundingClientRect()))for(let l=0;l<m.length;l++){const y=m[l+12]*40;a.value.fillRect(l,40-y*2*c.value.volume,1,40)}}let b=!1;function z(){if(f){S();return}b||(b=!0,fetch(F.value).then(e=>e.arrayBuffer()).then(async e=>{var n,i;await ee(),!(!I||!a.value||!((i=(n=u.value)==null?void 0:n.parentElement)==null?void 0:i.getBoundingClientRect()))&&I.decodeAudioData(e).then(o=>{f=o,S()})}))}$(()=>{!N.value||!r.value||(a.value=r.value.getContext("2d"),p())});const H=d(0),p=()=>{if(!u.value)return;const e=u.value.getBoundingClientRect();!e||!r.value||(r.value.width=e.width,z())};return B(V.value,()=>p()),B(h.strip,()=>{p()}),B(s.value,()=>{p()}),(e,t)=>q(c)?(G(),J("div",{key:0,ref_key:"el",ref:u,style:{height:"100%",display:"flex",overflow:"hidden",padding:"0 4px",position:"absolute",width:"100%"}},[D("div",{style:K(`margin-left: ${H.value+4}px; display: flex; pointer-events: none;`)},[D("canvas",{ref_key:"canvas",ref:r,height:T,class:"video"},null,512)],4)],512)):W("",!0)}});var le=L(te,[["__scopeId","data-v-dbd0879a"]]);export{le as default};
