// samtpfote | hallowelt42 | Herkunftshinweis erhalten.
import { catArt } from './art.js';
import { coatStyles } from './coats.js';
import { CAT_NAME, ATTRIBUTION } from './config.js';
import { choreography, armPath, torsoPath } from './motion.js';
import { clamp, follow, idleState, stateLabels } from './behavior.js';
let serial = 0;
const styles = `:host{position:relative;display:block;width:var(--cat-size,220px);height:auto;aspect-ratio:320/340;contain:layout style;isolation:isolate;line-height:0;touch-action:pan-y;user-select:none}:host([position]){position:fixed;z-index:var(--cat-z-index,50);margin:var(--cat-offset,16px);pointer-events:none}:host([position="bottom-right"]){bottom:env(safe-area-inset-bottom,0px);right:env(safe-area-inset-right,0px)}:host([position="bottom-left"]){bottom:env(safe-area-inset-bottom,0px);left:env(safe-area-inset-left,0px)}:host([position="top-right"]){top:env(safe-area-inset-top,0px);right:env(safe-area-inset-right,0px)}:host([position="top-left"]){top:env(safe-area-inset-top,0px);left:env(safe-area-inset-left,0px)}button{all:unset;display:block;width:100%;height:100%;cursor:pointer;pointer-events:auto;border-radius:40%;-webkit-tap-highlight-color:transparent}button:focus-visible{outline:2px solid #b8a061;outline-offset:-8px}svg{display:block;width:100%;height:100%;overflow:visible}button:hover{cursor:pointer}.credit{position:absolute;left:0;right:0;bottom:0;text-align:center;font:9px/1.3 sans-serif;color:var(--cat-credit,#7b7c6c);letter-spacing:.25px;pointer-events:none}svg [data-part="credit"]{opacity:0}:host([credit-mode="external"]) .credit{display:none}@media(max-width:600px){:host([position]){width:min(var(--cat-size,180px),35vw)}}`;

export class Samtpfote extends HTMLElement {
  static observedAttributes = ['sleep-after', 'paused', 'sound-src', 'cat-name'];
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `<style>${styles}${coatStyles}</style><button type="button" aria-label="${CAT_NAME} streicheln">${catArt(`samt-${++serial}`)}</button><span class="credit">${ATTRIBUTION}</span>`;
    this.parts = Object.fromEntries([...this.shadowRoot.querySelectorAll('[data-part]')].map(el=>[el.dataset.part,el]));
    this.state = 'curious'; this.lastActivity = 0; this.lastPointerWake = 0; this.lastFrame = 0; this.time = 0;
    this.gaze = {x:0,y:0}; this.target = {x:0,y:0}; this.pose = {sleep:0,blink:1,pet:0,stretch:0,groom:0,headX:0,headY:0};
    this.nextBlink = 2 + Math.random()*3; this.blinkStart = -100; this.nextAction = 7 + Math.random()*7; this.actionUntil = 0; this.override = null; this.wakeUntil = 0;
    this.sleepElapsed=0;this.nearTime=0;this.swatCooldown=0;this.pointer=null;this.audioVolume=0;this.actionStarted=0;this.groomVariant=0;this.groomCount=0;
    this.frame = this.frame.bind(this);
  }
  connectedCallback() {
    this.abort?.abort(); this.abort = new AbortController(); const signal=this.abort.signal;
    this.media=matchMedia('(prefers-reduced-motion: reduce)');
    this.lastActivity=performance.now(); this.lastFrame=0;
    window.addEventListener('pointermove',e=>{
      if(e.pointerType==='touch') return;
      this.pointer={x:e.clientX,y:e.clientY};
      const r=this.getBoundingClientRect();
      this.target={x:clamp((e.clientX-r.left-r.width*.5)/Math.max(120,innerWidth*.32),-1,1),y:clamp((e.clientY-r.top-r.height*.43)/Math.max(100,innerHeight*.3),-1,1)};
      const now=performance.now();
      if(now-this.lastPointerWake>120) {this.activity();this.lastPointerWake=now;}
    },{passive:true,signal});
    window.addEventListener('scroll',()=>this.activity(),{passive:true,signal,capture:true});
    window.addEventListener('keydown',()=>this.activity(),{signal});
    window.addEventListener('pointerdown',()=>this.activity(),{passive:true,signal});
    document.addEventListener('visibilitychange',()=>{
      cancelAnimationFrame(this.raf);this.lastFrame=0;
      if(document.hidden)this.stopPurr();
      else this.start();
    },{signal});
    this.media.addEventListener('change',()=>{this.lastFrame=0;this.start();},{signal});
    this.shadowRoot.querySelector('button').addEventListener('click',()=>this.perform('petting'),{signal});
    this.start();
  }
  disconnectedCallback() { this.abort?.abort();cancelAnimationFrame(this.raf);this.stopPurr(); }
  attributeChangedCallback(attr) {
    if(attr==='sound-src' || attr==='paused')this.stopPurr();
    if(attr==='cat-name') { const name=this.getAttribute('cat-name')||CAT_NAME;this.shadowRoot.querySelector('button').setAttribute('aria-label',`${name} streicheln`);this.shadowRoot.querySelector('svg').setAttribute('aria-label',`${name}, eine kleine Katze mit großen Augen`);}
    if(this.isConnected)this.start();
  }
  get sleepAfter() {const n=Number(this.getAttribute('sleep-after')||35);return Number.isFinite(n)?clamp(n,5,3600):35;}
  start() {cancelAnimationFrame(this.raf);if(!document.hidden)this.raf=requestAnimationFrame(this.frame);}
  activity() {
    const now=performance.now();
    if(now<(this.ignoreActivityUntil||0))return;
    this.lastActivity=now;
    if(this.override==='sleeping' || this.override==='drowsy') this.override=null;
    if(this.state==='sleeping' || this.state==='drowsy') {this.wakeUntil=now+2200;this.blinkStart=this.time+.7;}
  }
  perform(action) {
    const allowed=['curious','sleeping','drowsy','stretching','grooming','petting','swatting','auto'];
    if(!allowed.includes(action))return;
    this.lastActivity=performance.now(); this.override=action==='auto'?null:action;
    this.ignoreActivityUntil=action==='sleeping'?performance.now()+900:0;
    this.actionStarted=performance.now();
    if(action==='grooming')this.groomVariant=this.groomCount++%3;
    if(['petting','stretching','grooming','swatting'].includes(action)) this.actionUntil=performance.now()+ (action==='grooming'?12200:action==='swatting'?3900:action==='stretching'?5600:4200);
    if(action==='petting')this.playPurr();
    if(action==='curious')this.wakeUntil=performance.now()+1800;
    this.start();
  }
  playPurr() {
    const src=this.getAttribute('sound-src');if(!src)return;
    if(!this.audio || this.audio.dataset.source!==src){this.stopPurr();this.audio?.remove();this.audio=new Audio(src);this.audio.dataset.source=src;this.audio.loop=true;this.audio.preload='none';this.audio.hidden=true;this.audio.setAttribute('aria-hidden','true');this.shadowRoot.append(this.audio);}
    if(!this.audio.paused)return;
    this.audio.volume=0;this.audioVolume=0;
    this.audio.play().catch(()=>this.dispatchEvent(new CustomEvent('cataudio',{detail:{playing:false,label:'Das Schnurren konnte nicht gestartet werden.'},bubbles:true,composed:true})));
  }
  stopPurr() {if(this.audio){this.audio.pause();this.audio.volume=0;this.audioVolume=0;}}
  setState(state) {
    if(state===this.state)return;
    this.state=state;
    this.dispatchEvent(new CustomEvent('catstate',{detail:{state,label:stateLabels[state]},bubbles:true,composed:true}));
  }
  frame(now) {
    const dt=this.lastFrame?clamp((now-this.lastFrame)/1000,0,.05):1/60; this.lastFrame=now;
    const reduced=this.media.matches, paused=this.hasAttribute('paused');
    if(!paused)this.time+=dt;
    const t=this.time;
    if(this.override && !['sleeping','drowsy','curious'].includes(this.override) && now>this.actionUntil)this.override=null;
    let state=this.override||idleState((now-this.lastActivity)/1000,this.sleepAfter);
    if(!this.override && now<this.wakeUntil)state='waking';
    if(!this.override && state==='curious' && t>this.nextAction && !reduced && !paused){
      this.override=Math.random()<.55?'watching':Math.random()<.5?'grooming':'stretching';this.actionStarted=now;if(this.override==='grooming')this.groomVariant=Math.floor(Math.random()*3);this.actionUntil=now+(this.override==='grooming'?12200:this.override==='stretching'?5600:4200);this.nextAction=t+12+Math.random()*15;state=this.override;
    }
    if(this.pointer && !this.override && !['sleeping','drowsy','waking'].includes(state) && !paused && !reduced && now>this.swatCooldown){
      const r=this.shadowRoot.querySelector('svg').getBoundingClientRect();
      const w=Math.min(r.width,r.height*320/340),h=w*340/320;
      const nose={x:r.left+(r.width-w)/2+w*.5,y:r.top+(r.height-h)/2+h*.51};
      const near=Math.hypot((this.pointer.x-nose.x)/(w*.25),(this.pointer.y-nose.y)/(h*.18))<1;
      this.nearTime=near?this.nearTime+dt:0;
      if(this.nearTime>1.3){this.perform('swatting');this.swatCooldown=now+10000;this.nearTime=0;state='swatting';}
    } else this.nearTime=0;
    this.setState(state);
    if(paused)return;
    const sleeping=state==='sleeping',drowsy=state==='drowsy';
    this.sleepElapsed=(sleeping || (this.sleepElapsed>0 && this.pose.sleep>.05))?this.sleepElapsed+dt:0;
    if(this.audio){
      const targetVolume=state==='petting'?clamp(Number(this.getAttribute('volume')||35)/100,0,1):0;
      this.audioVolume=follow(this.audioVolume,targetVolume,state==='petting'?3:5,dt);
      this.audio.volume=clamp(this.audioVolume,0,1);
      if(targetVolume===0&&this.audioVolume<.002)this.audio.pause();
    }
    if(t>this.nextBlink){this.blinkStart=t;this.nextBlink=t+3.5+Math.random()*5;}
    const blinkAge=t-this.blinkStart;
    const blink=blinkAge>=0&&blinkAge<.26?1-Math.sin(blinkAge/.26*Math.PI):1;
    const p=this.pose;
    p.sleep=follow(p.sleep,sleeping?1:drowsy?.36:0,sleeping?1.2:state==='waking'?1.05:2.5,dt);
    p.blink=follow(p.blink,sleeping?0:drowsy?.3:state==='petting'?.1:state==='grooming'?blink*.55:state==='stretching'?blink*.7:blink,30,dt);
    p.pet=follow(p.pet,state==='petting'?1:0,3,dt);
    const actionAge=(now-this.actionStarted)/1000;
    const poseAction=choreography(state,actionAge,this.groomVariant);
    p.stretch=follow(p.stretch,poseAction.stretch||0,10,dt);
    p.groom=follow(p.groom,poseAction.lift||0,12,dt);
    p.wipe=follow(p.wipe||0,poseAction.wipe||0,14,dt);
    p.chest=follow(p.chest||0,poseAction.chest||0,9,dt);p.flank=follow(p.flank||0,poseAction.flank||0,9,dt);
    p.reach=follow(p.reach||0,poseAction.reach||0,10,dt);
    const look=state==='grooming'?{x:-.25+(poseAction.side||0)*.6+p.flank*.7,y:.6+p.chest*.3}:state==='watching'?{x:Math.sin(t*.8)*.7,y:-.4}:this.target;
    this.gaze.x=follow(this.gaze.x,look.x,6,dt);this.gaze.y=follow(this.gaze.y,look.y,6,dt);
    const gx=this.gaze.x*(1-p.sleep),gy=this.gaze.y*(1-p.sleep),motion=reduced?0:1;
    const breath=Math.sin(t*(sleeping?1.7:2.2))*(sleeping?1.6:.65)*motion;
    const s=p.sleep,st=p.stretch,gr=p.groom,pet=p.pet;
    const swatAge=(now-this.actionStarted)/1000;
    const swatTarget=Math.max(poseAction.left||0,poseAction.right||0);
    p.swat=follow(p.swat||0,swatTarget,12,dt);const swat=p.swat;
    const hop=(poseAction.rise||0)*3*motion;
    p.leftReach=follow(p.leftReach||0,poseAction.left||0,14,dt);p.rightReach=follow(p.rightReach||0,poseAction.right||0,14,dt);
    const tx=(name,xform)=>this.parts[name].setAttribute('transform',xform);
    const opacity=(name,n)=>this.parts[name].setAttribute('opacity',String(n));
    tx('root',`translate(${motion*Math.sin(t*.44)*.7} ${-hop})`);
    tx('body',`translate(${158+gr*3+st*1.5} 310) scale(${1+s*.28+st*.06-swat*.04} ${1-s*.47-st*.08+swat*.03+breath*.004}) translate(-158 -310)`);
    this.parts.torso.setAttribute('d',torsoPath(st,swat));
    const tilt=(gx*5+Math.sin(t*.65)*1.1*motion)*(1-s)-s*17+pet*-8+gr*10-p.wipe*7-st*4+p.chest*13+p.flank*24+(poseAction.shake||0)*2;
    tx('head',`translate(${gx*5-s*26-st*3-gr*8+p.flank*15} ${gy*3+s*83+st*25+breath+gr*9-p.wipe*10-hop*3+p.chest*27+p.flank*23+(poseAction.lick||0)*1.2*motion}) rotate(${tilt} 158 175)`);
    const openness=clamp(p.blink*(1-s),.015,1);
    tx('eye-l',`translate(119 143) scale(1 ${openness}) translate(-119 -143)`);
    tx('eye-r',`translate(198 143) scale(1 ${openness}) translate(-198 -143)`);
    opacity('eye-l',clamp(openness*7,0,1));opacity('eye-r',clamp(openness*7,0,1));opacity('closed-eyes',1-clamp(openness*5,0,1));
    tx('pupil-l',`translate(${gx*9} ${gy*6})`);tx('pupil-r',`translate(${gx*9} ${gy*6})`);
    const earFlick=Math.pow(Math.max(0,Math.sin(t*1.13)),18)*9*motion;
    tx('ear-l',`rotate(${-earFlick+pet*9-s*7} 103 105)`);tx('ear-r',`rotate(${earFlick*.6-pet*8+s*7} 219 105)`);
    tx('paw-l',`translate(${-p.reach*10} ${p.reach*2}) rotate(${p.reach*6} 132 248) scale(${1+(poseAction.toes||0)*.025} 1)`);
    tx('paw-r',`translate(${p.reach*10} ${p.reach*2}) rotate(${-p.reach*6} 185 248)`);
    const tailWave=Math.sin(t*1.25)*motion*(1-s)*13;
    const d=`M207 286 C${270+s*14} ${312-s*5} ${294+s*5} ${260+s*41} ${265-s*26+tailWave} ${238+s*61} C${246-s*26+tailWave} ${224+s*75} ${242-s*30} ${245+s*51} ${255-s*39} ${253+s*48}`;
    this.parts.tail.setAttribute('d',d);this.parts['tail-light'].setAttribute('d',d);
    opacity('sleep-marks',s);
    for(let i=0;i<3;i++){
      const phase=((this.sleepElapsed+i*1.7)%5.1)/5.1;
      const fade=Math.pow(Math.sin(phase*Math.PI),2)*.7;
      opacity(`sleep-z-${i}`,fade);
      tx(`sleep-z-${i}`,`translate(${phase*29*motion} ${26-phase*65*motion}) scale(${.8+phase*.3})`);
    }
    this.parts['sleep-blur'].setAttribute('stdDeviation',String(reduced?0:((this.sleepElapsed%5.1)/5.1)*1.5));
    const dreamAge=this.sleepElapsed-8,dreamPhase=dreamAge>=0?(dreamAge%24)/7:2;
    const dream=dreamPhase<=1?Math.pow(Math.sin(dreamPhase*Math.PI),2):0;
    opacity('dream-cloud',dream*s);
    tx('dream-cloud',`translate(${Math.sin(t*.6)*2*motion} ${7-dream*10+Math.sin(t*.7)*2*motion})`);
    opacity('hearts',pet);
    for(let i=0;i<4;i++){
      const phase=((t+i*.67)%2.7)/2.7,side=i%2===0?-1:1;
      opacity(`heart-${i}`,Math.pow(Math.sin(phase*Math.PI),.8));
      tx(`heart-${i}`,`translate(${158+side*(70+phase*30)+Math.sin(t*2+i)*6*motion} ${145-phase*110*motion}) rotate(${side*(12+Math.sin(t+i)*10*motion)}) scale(${(.6+i*.12)*(0.7+phase*.35)})`);
    }
    opacity('glass-paws',Math.min(1,swat*3));
    const l=p.leftReach,r=p.rightReach;
    const lx=130-l*11+gx*7*l,ly=299-l*127-hop*2;
    const rx=188+r*13+gx*7*r,ry=299-r*122-hop*2;
    this.parts['raised-arm-l'].setAttribute('d',armPath(132,238,lx,ly,-7*l));
    this.parts['raised-arm-r'].setAttribute('d',armPath(188,238,rx,ry,7*r));
    tx('glass-paw-l',`translate(${lx} ${ly}) rotate(${-l*9}) scale(${.65+l*.2} ${.7+l*.16})`);
    tx('glass-paw-r',`translate(${rx} ${ry}) rotate(${r*9}) scale(${.65+r*.2} ${.7+r*.16})`);
    opacity('glass-ripples',(poseAction.press||0)*.22);
    tx('glass-ripples',`translate(0 -18)`);
    opacity('paw-l',1-Math.max(l,gr));opacity('paw-r',1-r);
    tx('shadow',`translate(160 312) scale(${1+s*.35+st*.08} ${1-swat*.2}) translate(-160 -312)`);
    opacity('shadow',.34-swat*.05);opacity('cast-shadow',.18+st*.03);
    const groomX=133+gr*14+p.wipe*((poseAction.side||0)?29:-24),groomY=300-gr*108-p.wipe*39;
    opacity('groom-limb',Math.min(1,gr*4));
    this.parts['groom-arm'].setAttribute('d',armPath(133,237,groomX,groomY,-13*gr));
    tx('groom-hand',`translate(${groomX} ${groomY}) rotate(${-gr*12-p.wipe*17})`);
    opacity('tongue',(poseAction.lick||0)*Math.max(gr,p.chest,p.flank));
    tx('tongue',`translate(-3 ${(poseAction.lick||0)*2})`);
    tx('whiskers',`translate(0 ${Math.sin(t*2.2)*.4*motion})`);
    this.raf=requestAnimationFrame(this.frame);
  }
}
if(!customElements.get('samt-pfote'))customElements.define('samt-pfote',Samtpfote);
