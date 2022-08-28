import k from"./InspectorColorInput-39b818bc.mjs";import C from"./InspectorStringInput-80665450.mjs";import{a as I,e as b,c}from"./useTimeline-6cb6bf32.mjs";import{s as B}from"./index-649d6e05.mjs";import{c as z}from"./clone-0e5b969a.mjs";import{s as E}from"./setAnimation-30ab6762.mjs";import p from"./InspectorInput-481748aa.mjs";import{a as S,b as T,u as n,o as F,f as K,h as w,i as l,j as N}from"./entry-cf7f9e40.mjs";import"./VColorInput-a0d91b3b.mjs";import"./VInputBase-452ac88f.mjs";import"./VIcons-4f606c3c.mjs";import"./mdi-00233b2d.mjs";import"./InspectorInputBase-6adc638b.mjs";import"./VStringInput-5d3bcd45.mjs";import"./VInput-171f5ed7.mjs";import"./onDragStart-b67a33ef.mjs";const U={key:0},V={style:{padding:"4px"}},g=w("div",null,"TextEffect",-1),Y=S({__name:"TextStripInspector",props:{strip:null},setup(d){const m=d,{timeline:v,updateEffect:y}=I(),t=T(()=>m.strip.effects.find(a=>a.type==="Text"));function i(a,o){var r;if(t.value&&b(t.value)){const s=z(t.value),e=new Function("effect","value",`
effect.${o} = value;
return effect
`)(s,a);y((r=m.strip)==null?void 0:r.id,{...e}),typeof a=="number"&&u(o)&&f(o,a)}}function f(a,o){if(!t.value)return;const r={id:B.uuid(),key:a,time:v.value.curent-m.strip.start,value:o},s={...t.value,animations:[...t.value.animations]};s.animations=E(s.animations||[],r),y(m.strip.id,s)}function u(a){var o;return((o=t.value)==null?void 0:o.animations.find(r=>r.key===a))!=null}return(a,o)=>{const r=k,s=C;return n(t)&&n(b)(n(t))?(F(),K("div",U,[w("div",V,[g,l(p,{label:"x",value:n(c)(n(t).animations,n(v).curent-d.strip.start,"position.x",n(t).position.x),"key-frame":u("position.x"),onInput:o[0]||(o[0]=e=>i(e,"position.x")),onKeyFrame:o[1]||(o[1]=()=>{var e;return f("position.x",(e=n(t))==null?void 0:e.position.x)})},null,8,["value","key-frame"]),l(p,{label:"y",value:n(c)(n(t).animations,n(v).curent-d.strip.start,"position.y",n(t).position.y),"key-frame":u("position.y"),onInput:o[2]||(o[2]=e=>{var x;return i({...(x=n(t))==null?void 0:x.position,y:e},"position")}),onKeyFrame:o[3]||(o[3]=()=>{var e;return f("position.y",(e=n(t))==null?void 0:e.position.y)})},null,8,["value","key-frame"]),l(p,{"key-frame":u("size"),label:"fontSize",value:n(t).size,onInput:o[4]||(o[4]=e=>i(e,"size")),onKeyFrame:o[5]||(o[5]=()=>{var e;return f("size",(e=n(t))==null?void 0:e.size)})},null,8,["key-frame","value"]),l(r,{label:"color",value:n(t).color,onUpdateColor:o[6]||(o[6]=e=>i(e,"color"))},null,8,["value"]),l(s,{label:"style",value:n(t).style,onInput:o[7]||(o[7]=e=>i(e,"style"))},null,8,["value"]),l(s,{label:"Family",value:n(t).family,onInput:o[8]||(o[8]=e=>i(e,"family"))},null,8,["value"]),l(p,{"key-frame":u("characterSpace"),label:"characterSpace",value:n(t).characterSpace,onInput:o[9]||(o[9]=e=>i(e,"characterSpace"))},null,8,["key-frame","value"]),l(r,{label:"shadowColor",value:n(t).shadowColor,onUpdateColor:o[10]||(o[10]=e=>i(e,"shadowColor"))},null,8,["value"]),l(p,{"key-frame":u("shadowBlur"),label:"shadowBlur",value:n(t).shadowBlur,onInput:o[11]||(o[11]=e=>i(e,"shadowBlur"))},null,8,["key-frame","value"]),l(r,{label:"outlineColor",value:n(t).outlineColor,onUpdateColor:o[12]||(o[12]=e=>i(e,"outlineColor"))},null,8,["value"]),l(p,{label:"outlineWidth",value:n(t).outlineWidth,onInput:o[13]||(o[13]=e=>i(e,"outlineWidth"))},null,8,["value"])])])):N("",!0)}}});export{Y as default};
