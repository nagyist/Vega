import i from"./VModal-03166157.mjs";import{a,o as t,c,h as d,i as s,j as p}from"./entry-46ab768b.mjs";import"./VIcons-49ca4ef0.mjs";import"./mdi-4cca1244.mjs";const m=p("div",null,null,-1),_=a({__name:"RecordingModal",props:{isOpen:{default:!1,type:Boolean},isRecording:{default:!1,type:Boolean}},emits:["close","start-recording","stop-recording"],setup(o,{emit:n}){return(u,e)=>{const l=i;return t(),c(l,{"is-open":o.isOpen,closable:!o.isRecording,onClose:e[2]||(e[2]=()=>n("close"))},{default:d(()=>[o.isRecording?(t(),s("button",{key:1,onClick:e[1]||(e[1]=r=>n("stop-recording"))}," cancel ")):(t(),s("button",{key:0,onClick:e[0]||(e[0]=r=>n("start-recording"))}," export ")),m]),_:1},8,["is-open","closable"])}}});export{_ as default};
