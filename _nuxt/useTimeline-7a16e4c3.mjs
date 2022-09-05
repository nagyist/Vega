import{q as M,C as P,M as b,s as O,O as F,v as z,A as W,P as x,x as j,V as C,L as f,D as V,y as B,z as I,T as A,B as R,R as l}from"./entry-5a88fbbc.mjs";const k={selectedAssets:[],assets:[]},q={id:"system-text",name:"System Text",path:"",type:"Text"},L={id:"timestamp-plugin",name:"TimeStamp",path:"/scripts/plugins/timestamp.js",type:"Plugin"};function H(){const e=M("assets",()=>k,"$vKaQ1RIqzx");return{assets:e,setAssets:(t=>s=>{const a=[q,L,...s.assets.map(i=>i)].filter((i,n,o)=>o.findIndex(r=>r.id===i.id)===n);t.value={assets:a,selectedAssets:s.selectedAssets}})(e),addAsset:(t=>s=>{t.value.assets=[...t.value.assets,s]})(e),updateAsset:(t=>s=>{t.value.assets=t.value.assets.map(a=>a.id===s.id?s:a)})(e),removeAsset:(t=>s=>{t.value.assets=t.value.assets.filter(a=>a.id!==s.id)})(e)}}function U(e,t,s){return(s-e)/(t-e)}function D(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function $(e,t,s){let a=-1;for(let r=0;r<e.length;r++)e[r].key===s&&e[r].time<=t&&(a=r);const i=a!==-1?e[a]:null;let n=-1;for(let r=e.length-1;r>=0;r--)e[r].key===s&&e[r].time>=t&&(n=r);const o=n!==-1?e[n]:null;return[i,o]}const K={easeInOutCubic:D,liner:e=>e};function v(e,t,s,a=0,i="liner"){if(e.filter(h=>h.key===s).length===0)return a;const[n,o]=$(e,t,s);let r=a;if(n&&o){if(n===o)return n==null?void 0:n.value;r=n.value+K[i](U(n.time,o.time,t))*(o.value-n.value)}else n&&!o?r=n.value:o&&!n&&(r=o.value);return r}class y{constructor(t){}updateStrip(t){}update(t){}}class G extends y{constructor(t){super(t),this.mesureWidth=0,this.mesureHeight=0,this.prevSize=0,this.prevText="";const s=t.effect;this.text=s.text,this.canvas=document.createElement("canvas"),this.canvas.width=2048,this.canvas.height=1024,this.ctx=this.canvas.getContext("2d"),this.texture=new P(this.canvas),this.texture.needsUpdate=!0,this.texture.premultiplyAlpha=!0,this.material=new b({map:this.texture,transparent:!0,depthTest:!0,depthWrite:!1,opacity:1,blending:O,blendSrc:F,blendDst:z,blendEquation:W,stencilWriteMask:255,stencilWrite:!0}),this.geometry=new x(1,1,1,1),this.obj=new j(this.geometry,this.material),this.obj.uuid=s.id,this.obj.position.setX(s.position.x),this.obj.position.setY(s.position.y),this.obj.position.setZ(s.position.z),t.scene.add(this.obj)}updateFont(t,s,a){if(t.size===this.prevSize&&t.text===this.prevText)return;const i=document.createElement("span");i.innerHTML=this.text,i.style.fontFamily=t.family;const n=v(t.animations,a-s.start,"size",t.size);i.style.fontSize=n+"px",i.style.fontStyle=t.style,i.style.whiteSpace="nowrap",document.body.append(i);const o=i.getBoundingClientRect();this.mesureHeight=o.height*t.text.split(`
`).length-1,i.remove(),this.prevSize=n,this.prevText=t.text}draw(t,s,a){if(!this.ctx||!this.obj||!this.canvas)return;let i=v(t.animations,a-s.start,"characterSpace",t.characterSpace);const n=v(t.animations,a-s.start,"size",t.size);this.updateFont(t,s,a),this.ctx.font=`${t.style} ${n}px ${t.family}`,this.mesureWidth=0,t.text.split(`
`).forEach((c,u)=>{const p=this.ctx.measureText(c);i||(i=0),this.mesureWidth=Math.max(p.width+i*(c.length-1),this.mesureWidth)});const o=t.text.split(`
`).length-1,r=this.mesureHeight/(o+1);this.obj.scale.set(this.canvas.width,this.canvas.height,1),this.ctx.textAlign="left",this.ctx.textBaseline="bottom",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.shadowColor=t.shadowColor,this.ctx.shadowBlur=t.shadowBlur,this.ctx.lineJoin="round",this.ctx.strokeStyle=t.outlineColor,this.ctx.lineWidth=t.outlineWidth;let h=this.canvas.width/2-this.mesureWidth/2,d=this.canvas.height/2+r/2-r/2*o;for(let c=0;c<t.text.length;c++){const u=t.text[c];if(u===`
`){d+=r,h=this.canvas.width/2-this.mesureWidth/2;continue}const p=this.ctx.measureText(u).width;this.ctx.strokeText(u,h,d),h+=p+i}this.ctx.fillStyle=t.color,this.ctx.shadowBlur=t.shadowBlur,h=this.canvas.width/2-this.mesureWidth/2,d=this.canvas.height/2+r/2-r/2*o;for(let c=0;c<t.text.length;c++){const u=t.text[c];if(u===`
`){d+=r,h=this.canvas.width/2-this.mesureWidth/2;continue}const p=this.ctx.measureText(u).width;this.ctx.fillText(u,h,d),h+=p+i}this.texture.needsUpdate=!0,this.ctx.fillStyle="red"}update({strip:t,effect:s,timeline:a,isPlay:i,jump:n}){const o=s,r=a.curent,h=v(o.animations,r-t.start,"position.x",o.position.x),d=v(o.animations,r-t.start,"position.y",o.position.y);this.obj.position.set(h,d,t.layer),t.start<=r&&r<t.start+t.length?(this.obj.visible=!0,this.draw(o,t,r)):this.obj.visible=!1}}class N extends y{constructor(t){var o;super(t),this.type="Video",this.loaded=!1,this.videoOffset=0,this.videoDuration=0,this.event=new EventTarget,this.inProgress=!1,this.prevTime=0;const s=t.effect,a=((o=t.assets.assets.find(r=>r.id===s.videoAssetId))==null?void 0:o.path)||"";if(this.video=document.createElement("video"),this.video.controls=!0,this.canvas=document.createElement("canvas"),this.canvas.width=this.video.videoWidth,this.canvas.height=this.video.videoHeight,this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error("context2d error");this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.tex=new C(this.video),this.tex.minFilter=f,this.tex.magFilter=f;const i=new b({map:this.tex,side:V}),n=new x(this.canvas.width,this.canvas.height);this.obj=new j(n,i),s.id&&(this.obj.uuid=s.id),this.updateAsset(a),t.scene.add(this.obj)}get src(){return this.video.src}updateStrip(t){var i;const s=t.effect,a=((i=t.assets.assets.find(n=>n.id===s.videoAssetId))==null?void 0:i.path)||"";this.updateAsset(a)}updateAsset(t){this.loaded=!1;const s=()=>{!this.canvas||this.loaded||(this.videoDuration=this.video.duration,this.canvas.width=this.video.videoWidth,this.canvas.height=this.video.videoHeight,this.obj.geometry=new x(this.canvas.width,this.canvas.height),this.loaded=!0,this.event.dispatchEvent(new CustomEvent("update")))};this.video.onloadedmetadata=()=>s(),this.video.src=t,this.video.load()}update({strip:t,effect:s,timeline:a,isPlay:i,jump:n}){const o=s,r=a.curent;if(this.tex&&(this.tex.needsUpdate=!0),this.ctx&&this.video&&this.ctx.drawImage(this.video,0,0),this.obj.position.copy(new B(o.position.x,o.position.y,t.layer)),!this.loaded){this.obj.visible=!1;return}o.scale||(o.scale={x:1,y:1,z:1}),this.obj.scale.set(o.scale.x,o.scale.y,1),t.start<=r&&r<t.start+t.length?(this.obj.visible=!0,this.video.volume=o.volume!==void 0?Math.min(Math.max(o.volume,0),1):1,this.prevTime!==t.start&&(this.video.currentTime=r-t.start+o.start),(i&&this.video.paused||n)&&I&&(this.inProgress||(this.inProgress=!0,this.video.play().then(()=>{this.inProgress=!1})),this.video.currentTime=r-t.start+o.start),!i&&!this.inProgress&&this.video.pause()):(this.video.volume=0,!this.video.paused&&!this.inProgress&&this.video.pause(),this.obj.visible=!1),this.prevTime=t.start}}const T=1/60;function g(e){return Math.floor(e/T)*T}class _ extends y{constructor(t){var i;super(t),this.type="Audio",this.loaded=!1,this.videoOffset=0,this.inProgress=!1,this.prevTime=0;const s=t.effect;this.audio=document.createElement("audio"),document.body.append(this.audio);const a=((i=t.assets.assets.find(n=>n.id===s.audioAssetId))==null?void 0:i.path)||"";this.audio.volume=s.volume,this.updateAsset(a)}updateStrip(t){var i;const s=t.effect,a=((i=t.assets.assets.find(n=>n.id===s.audioAssetId))==null?void 0:i.path)||"";this.updateAsset(a)}updateAsset(t){this.loaded=!1;const s=()=>{this.loaded||(this.loaded=!0)};this.audio.onloadedmetadata=()=>s(),this.audio.src=t,this.audio.load()}update({strip:t,effect:s,timeline:a,isPlay:i,jump:n}){const o=s,r=a.curent;if(!this.loaded){this.audio.volume=0;return}t.start<=r&&r<t.start+t.length?(this.audio.volume=o.volume,this.prevTime!==t.start&&(this.audio.currentTime=r-t.start+o.start),(i&&this.audio.paused||n)&&I&&(this.inProgress||(this.inProgress=!0,this.audio.play().then(()=>{this.inProgress=!1})),this.audio.currentTime=r-t.start+o.start),!i&&!this.inProgress&&this.audio.pause()):(this.audio.volume=0,!this.audio.paused&&!this.inProgress&&this.audio.pause()),this.prevTime=t.start}}class J extends y{constructor(t){var i;super(t),this.type="Image",this.playRequests=[],this.videoDuration=0,this.event=new EventTarget;const s=t.effect,a=((i=t.assets.assets.find(n=>n.id===s.imageAssetId))==null?void 0:i.path)||"";this.tex=new A().load(a,()=>{var n,o;this.obj&&this.obj.scale.set((n=this.tex)==null?void 0:n.image.width,(o=this.tex)==null?void 0:o.image.height,1)}),this.tex.minFilter=f,this.tex.magFilter=f,this.material=new b({map:this.tex,transparent:!0}),this.geometry=new x(1,1,1,1),this.obj=new j(this.geometry,this.material),s.id&&(this.obj.uuid=s.id),this.obj.position.set(s.position.x,s.position.y,0),this.updateAsset(a),t.scene.add(this.obj)}get width(){var t;return(t=this.tex)!=null&&t.image?this.tex.image.width:0}get height(){var t;return(t=this.tex)!=null&&t.image?this.tex.image.height:0}updateStrip(t){var i;const s=t.effect,a=((i=t.assets.assets.find(n=>n.id===s.imageAssetId))==null?void 0:i.path)||"";this.updateAsset(a)}updateAsset(t){var s;(s=this.tex)==null||s.dispose(),new A().load(t,a=>{this.obj&&this.obj.scale.set(1,1,1),a.needsUpdate=!0,a.minFilter=f,a.magFilter=f,this.tex=a,this.material&&(this.geometry=new x(a.image.width,a.image.height),this.obj.geometry=this.geometry,this.material.map=this.tex,this.material.needsUpdate=!0)})}update({strip:t,effect:s,timeline:a,isPlay:i,jump:n}){const o=s,r=a.curent;this.obj.position.set(o.position.x,o.position.y,t.layer),this.obj.scale.set(o.scale.x,o.scale.y,1),t.start<=r&&r<t.start+t.length?this.obj.visible=!0:this.obj.visible=!1}}function S(e,t){for(const s of t.strips)if(s.id===e)return s;return null}function Q(e){return(t,s,a,i)=>{const n=S(t,e.value);!n||(n.start=g(s),n.length=g(a),n.layer=i!=null?i:n.layer)}}function X(e){return(t,s)=>{t<0&&(t=0),s>e.value.length&&(s=g(e.value.length)),s-t<1&&(s=t+1),e.value.start=g(t),e.value.end=g(s)}}const E=1/60;function Y(e){return(t,s=!1)=>{var a;t<0&&(t=0),e.value.curent=t,s&&(e.value.curent=Math.floor(t/E)*E);for(let i=0;i<e.value.strips.length;i++){const n=e.value.strips[i];for(let o=0;o<n.effects.length;o++){const r=n.effects[o],h={strip:n,effect:r,timeline:e.value,assets:{assets:[],selectedAssets:[]},jump:s,scene:l.scene,isPlay:e.value.isPlay,updateEffect:w(e)};(a=l.effectObjectMap.get(r.id))==null||a.update(h)}}}}function Z(e){return t=>{e.value.isPlay=t}}function it(e){return e.type==="Text"}function at(e){return e.type==="Video"}function nt(e){return e.type==="Audio"}function ot(e){return e.type==="Image"}function tt(e){return t=>{e.value=t}}const et=e=>t=>{e.value.strips=e.value.strips.map(s=>s.id===t.id?t:s)},w=e=>(t,s)=>{const a=S(t,e.value);if(!a)return;const i=a.effects.findIndex(o=>o.id===s.id);if(i===-1)return;const n=[];s.animations.forEach(o=>{n.find(r=>r.key===o.key&&r.time===o.time)||n.push(o)}),s.animations=n,a.effects[i]=s},m={Video:N,Text:G,Image:J,Audio:_};function rt(){const e=M("timeline",()=>R,"$wiSKqgVxs8"),t=H();return{timeline:e,init:()=>{for(const a of e.value.strips)for(const i of a.effects){const n={strip:a,effect:i,timeline:e.value,assets:t.assets.value,jump:!1,scene:l.scene,isPlay:e.value.isPlay,updateEffect:w(e)},o=l.effectObjectMap.get(i.id);if(o)o.updateStrip(n);else if(i.type==="Plugin"&&"name"in i){const r=n.assets.assets.find(h=>h.name===i.name);if(!r)return;m[r.name]?l.effectObjectMap.set(i.id,new m[i.name](n)):require([r.path],()=>{require([r.name],h=>{m[r.name]=h.default,l.effectObjectMap.set(i.id,new m[i.name](n))})})}else l.effectObjectMap.set(i.id,new m[i.type](n))}},addStrip:(a=>i=>{a.value.strips.push(i)})(e),removeStrips:(a=>i=>{a.value.strips=a.value.strips.filter(n=>!i.includes(n.id))})(e),moveStrip:Q(e),changeView:X(e),update:Y(e),play:Z(e),setTimeline:tt(e),startRecording:(a=>(i=!0)=>{a.value.isRecording=i})(e),updateLength:(a=>i=>{a.value.length=i})(e),getFisrtSelectedStrip:(a=>()=>a.value.selectedStrips.length>0?a.value.selectedStrips[0]:null)(e),setFocusStripId:(a=>i=>{a.value.focusStripId=i})(e),selectStrip:(a=>i=>{const n=i.map(o=>S(o,a.value)).filter(o=>o);a.value.selectedStrips=n})(e),updateStrip:et(e),updateEffect:w(e),selectKeyframe:(a=>i=>{a.value.selectedKeyframes=i})(e),changeTimelineTool:(a=>i=>{a.value.timelineTool=i})(e)}}export{_ as A,J as I,G as T,N as V,rt as a,ot as b,v as c,m as d,it as e,at as f,nt as i,g as s,H as u};
