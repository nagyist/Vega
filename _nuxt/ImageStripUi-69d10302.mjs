import b from"./VIcons-75f8714f.mjs";import{a as w,e as S,b as j,f as n,r as B,u as t,o as a,i,j as f,l as u,F as $,y as z,D as E,c as O,z as I}from"./entry-b43eb9fc.mjs";import{u as A}from"./usePixPerSec-93cd73aa.mjs";import{d as C}from"./mdi-00233b2d.mjs";const F={style:{overflow:"hidden"}},L=["src"],D=w({__name:"ImageStripUi",props:{strip:null},setup(d){const l=d,{timeline:h}=S(),{assets:_}=j(),r=n(()=>l.strip.effects.find(e=>e.type==="Image")),c=B(null),m=n(()=>{var e,s;return A((s=(e=c.value)==null?void 0:e.parentElement)==null?void 0:s.parentElement)}),v=n(()=>E.get(r.value.id)),p=n(()=>(l.strip.start-h.value.start)*m.value),o=12,g=n(()=>{var e;return(e=_.value.assets.find(s=>s.id===r.value.imageAssetId))==null?void 0:e.path});return(e,s)=>{const x=b;return t(r)?(a(),i("div",{key:0,ref_key:"el",ref:c,style:{height:"100%",display:"flex",overflow:"hidden",padding:"0 12px",position:"relative"}},[f("div",F,[t(v)?(a(),i("img",{key:0,style:{height:"100%"},src:t(g)},null,8,L)):u("",!0)]),f("div",null,[(a(!0),i($,null,z(t(r).animations,(y,k)=>(a(),O(x,{key:k,path:t(C),style:I([{fill:"orange",stroke:"white","stroke-width":"2px",position:"absolute"},`width: ${o}px; height: ${o}px; left: ${y.time*t(m)-4-o/2+(t(p)<-50?t(p)+50:0)}px; z-index: 1; bottom: ${0}px`]),viewBox:"0 0 24 24"},null,8,["path","style"]))),128))])],512)):u("",!0)}}});export{D as default};
