import w from"./InspectorColorInput-f7d09411.mjs";import C from"./InspectorStringInput-acaaf674.mjs";import{a as I,e as b,c}from"./useTimeline-7a16e4c3.mjs";import{s as B}from"./index-280d1733.mjs";import{c as z}from"./clone-0e5b969a.mjs";import{s as E}from"./setAnimation-30ab6762.mjs";import p from"./InspectorInput-104717ba.mjs";import{a as S,b as T,u as n,o as F,f as K,h as k,i as l,j as N}from"./entry-5a88fbbc.mjs";import"./VColorInput-16f4c929.mjs";import"./VInputBase-de9c7b06.mjs";import"./VIcons-cc72e6c4.mjs";import"./mdi-6b802aa7.mjs";import"./InspectorInputBase-36d5a4a4.mjs";import"./VStringInput-4d92088a.mjs";import"./VInput-27ffc274.mjs";import"./onDragStart-b67a33ef.mjs";const U={key:0},V={style:{padding:"4px"}},g=k("div",null,"TextEffect",-1),Y=S({__name:"TextStripInspector",props:{strip:null},setup(d){const m=d,{timeline:v,updateEffect:y}=I(),t=T(()=>m.strip.effects.find(a=>a.type==="Text"));function i(a,e){var r;if(t.value&&b(t.value)){const s=z(t.value),o=new Function("effect","value",`
effect.${e} = value;
return effect
`)(s,a);y((r=m.strip)==null?void 0:r.id,{...o}),typeof a=="number"&&u(e)&&f(e,a)}}function f(a,e){if(!t.value)return;const r={id:B.uuid(),key:a,time:v.value.curent-m.strip.start,value:e},s={...t.value,animations:[...t.value.animations]};s.animations=E(s.animations||[],r),y(m.strip.id,s)}function u(a){var e;return((e=t.value)==null?void 0:e.animations.find(r=>r.key===a))!=null}return(a,e)=>{const r=w,s=C;return n(t)&&n(b)(n(t))?(F(),K("div",U,[k("div",V,[g,l(p,{label:"x",value:n(c)(n(t).animations,n(v).curent-d.strip.start,"position.x",n(t).position.x),"has-key-frame":u("position.x"),"key-frame":!0,onInput:e[0]||(e[0]=o=>i(o,"position.x")),onKeyFrame:e[1]||(e[1]=()=>{var o;return f("position.x",(o=n(t))==null?void 0:o.position.x)})},null,8,["value","has-key-frame"]),l(p,{label:"y",value:n(c)(n(t).animations,n(v).curent-d.strip.start,"position.y",n(t).position.y),"key-frame":u("position.y"),onInput:e[2]||(e[2]=o=>{var x;return i({...(x=n(t))==null?void 0:x.position,y:o},"position")}),onKeyFrame:e[3]||(e[3]=()=>{var o;return f("position.y",(o=n(t))==null?void 0:o.position.y)})},null,8,["value","key-frame"]),l(p,{"key-frame":u("size"),label:"fontSize",value:n(t).size,onInput:e[4]||(e[4]=o=>i(o,"size")),onKeyFrame:e[5]||(e[5]=()=>{var o;return f("size",(o=n(t))==null?void 0:o.size)})},null,8,["key-frame","value"]),l(r,{label:"color",value:n(t).color,onUpdateColor:e[6]||(e[6]=o=>i(o,"color"))},null,8,["value"]),l(s,{label:"style",value:n(t).style,onInput:e[7]||(e[7]=o=>i(o,"style"))},null,8,["value"]),l(s,{label:"Family",value:n(t).family,onInput:e[8]||(e[8]=o=>i(o,"family"))},null,8,["value"]),l(p,{"key-frame":u("characterSpace"),label:"characterSpace",value:n(t).characterSpace,onInput:e[9]||(e[9]=o=>i(o,"characterSpace"))},null,8,["key-frame","value"]),l(r,{label:"shadowColor",value:n(t).shadowColor,onUpdateColor:e[10]||(e[10]=o=>i(o,"shadowColor"))},null,8,["value"]),l(p,{"key-frame":u("shadowBlur"),label:"shadowBlur",value:n(t).shadowBlur,onInput:e[11]||(e[11]=o=>i(o,"shadowBlur"))},null,8,["key-frame","value"]),l(r,{label:"outlineColor",value:n(t).outlineColor,onUpdateColor:e[12]||(e[12]=o=>i(o,"outlineColor"))},null,8,["value"]),l(p,{label:"outlineWidth",value:n(t).outlineWidth,onInput:e[13]||(e[13]=o=>i(o,"outlineWidth"))},null,8,["value"])])])):N("",!0)}}});export{Y as default};
