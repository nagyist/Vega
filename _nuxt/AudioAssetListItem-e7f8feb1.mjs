import c from"./VIcons-49ca4ef0.mjs";import i from"./AssetListItemErrorIcon-2d037e51.mjs";import{c as u}from"./mdi-4cca1244.mjs";import{a as m,r as a,x as _,o as t,i as p,k as f,u as d,c as k,l as v,j as h,F as y}from"./entry-46ab768b.mjs";const A=m({__name:"AudioAssetListItem",props:{asset:null},setup(s){const r=s,e=a(null),o=a(!1);return _(()=>{e.value&&(e.value.src=r.asset.path,e.value.onerror=()=>{o.value=!0})}),(B,x)=>{const n=c,l=i;return t(),p(y,null,[f(n,{style:{margin:"auto"},fill:"white",path:d(u)},null,8,["path"]),o.value?(t(),k(l,{key:0})):v("",!0),h("audio",{ref_key:"audio",ref:e,style:{display:"none"}},null,512)],64)}}});export{A as default};
