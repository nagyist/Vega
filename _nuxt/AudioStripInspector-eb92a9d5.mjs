import{a as v,e as _,f as E,u as s,y as l,o as I,i as k,j as p,k as r,l as w}from"./entry-46ab768b.mjs";import{g as x}from"./getEffect-48db328c.mjs";import i from"./InspectorInput-563cc940.mjs";import"./VInput-ed9ea9ef.mjs";import"./VIcons-49ca4ef0.mjs";import"./mdi-4cca1244.mjs";import"./onDragStart-b67a33ef.mjs";import"./InspectorInputBase-dc629f5b.mjs";const A={key:0},N={class:"p-4"},g=p("div",null,"AudioEffect",-1),F=v({__name:"AudioStripInspector",props:{strip:null},setup(c){const n=c,{updateEffect:f}=_(),e=E(()=>x(n.strip,"Audio"));function a(u,t){var o;if(e.value&&l(e.value)){const m={...e.value},d=new Function("effect","value",`
effect.${t} = value;
return effect
`)(m,u);f((o=n.strip)==null?void 0:o.id,{...d})}}return(u,t)=>s(e)&&s(l)(s(e))?(I(),k("div",A,[p("div",N,[g,r(i,{label:"start",value:s(e).start,step:.01,scale:.01,onInput:t[0]||(t[0]=o=>a(o,"start"))},null,8,["value","step","scale"]),r(i,{label:"volume",value:s(e).volume,step:.1,scale:.1,min:0,max:1,onInput:t[1]||(t[1]=o=>a(o,"volume"))},null,8,["value","step","scale"])])])):w("",!0)}});export{F as default};
