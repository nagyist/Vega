import O from"./VButton-7c09fb6b.mjs";import R from"./VModal-9b58df8b.mjs";import{a1 as B,a2 as b,A as J,H as P,e as h,b as S,a as M,r as V,x as D,o as _,c as H,h as d,j as p,k as j,i as g,y as I,F as U,a3 as x,t as z}from"./entry-5722d099.mjs";import{g as F}from"./getIsElectron-dd460f76.mjs";function y(){return{path:"",timeline:{...B},assets:{selectedAssets:[],assets:[]},container:{...b}}}function K(){return{project:J("project",()=>y(),"$rUpZX11gTX")}}function te(n){const{setContainer:r}=P(),{setTimeline:c}=h(),{setAssets:a}=S(),s=JSON.parse(n);return r(s.container),c(s.timeline),a(s.assets),s}function X(n,r){return new Promise(c=>{window.ipcRenderer.on(n,a=>{c(a)}),window.ipcRenderer.send(n,r)})}const Y=p("h3",{style:{margin:"12px","margin-left":"0"}}," Projects ",-1),G=x(" New Project "),L=p("div",{style:{margin:"12px","margin-left":"0"}}," Recent used projects ",-1),Z={style:{gap:"4px",display:"flex","flex-direction":"column"}},$=M({__name:"ProjectModal",props:{isOpen:{default:!1,type:Boolean}},emits:["open"],setup(n,{emit:r}){const{setContainer:c,resize:a}=P(),{setTimeline:s}=h(),{setAssets:m}=S(),{project:E}=K(),C="RECENT_USED_PROJECT_PATHS_KEY";async function T(e){return(await fetch(e)).json()}function w(){const e=F();return JSON.parse(localStorage.getItem(C)||(e?"[]":'["/Vega/demo/demo_project.json"]')).map(async t=>({...e?await X("getProjectById",t):await T(t),path:t}))}const f=V([]);function v(e,o){const t=[];let l=0;function i(){l<e.length?e[l++].then(u=>{t.push(u),i()}):o(t)}i()}D(()=>{v(w(),e=>{f.value=e})});function N(e){const o=e.path.split("/");return o.length===0?"":o.at(-1)}function k(){const e=y();m(e.assets),s(e.timeline),c(e.container),r("open"),a()}function A(e){m(e.assets),s(e.timeline),c(e.container),r("open"),E.value=e,a()}return(e,o)=>{const t=O,l=R;return _(),H(l,{"show-close":!1,"is-open":n.isOpen},{default:d(()=>[Y,p("div",null,[j(t,{onClick:k},{default:d(()=>[G]),_:1})]),L,p("div",Z,[(_(!0),g(U,null,I(f.value,(i,u)=>(_(),g("div",{key:u},[j(t,{onClick:()=>A(i)},{default:d(()=>[x(z(N(i)),1)]),_:2},1032,["onClick"])]))),128))])]),_:1},8,["is-open"])}}});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{ne as P,$ as _,te as a,X as i,K as u};
