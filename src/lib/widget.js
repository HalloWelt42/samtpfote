import { catArt } from './art.js';
import { clamp, follow, idleState, stateLabels } from './behavior.js';
let serial = 0;
const styles = `:host{display:block;width:var(--cat-size,220px);height:auto;aspect-ratio:320/340;contain:layout style;isolation:isolate;line-height:0;touch-action:pan-y;user-select:none}:host([position]){position:fixed;z-index:var(--cat-z-index,50);margin:var(--cat-offset,16px);pointer-events:none}:host([position="bottom-right"]){bottom:env(safe-area-inset-bottom,0px);right:env(safe-area-inset-right,0px)}:host([position="bottom-left"]){bottom:env(safe-area-inset-bottom,0px);left:env(safe-area-inset-left,0px)}:host([position="top-right"]){top:env(safe-area-inset-top,0px);right:env(safe-area-inset-right,0px)}:host([position="top-left"]){top:env(safe-area-inset-top,0px);left:env(safe-area-inset-left,0px)}button{all:unset;display:block;width:100%;height:100%;cursor:pointer;pointer-events:auto;border-radius:40%;-webkit-tap-highlight-color:transparent}button:focus-visible{outline:2px solid #b8a061;outline-offset:-8px}svg{display:block;width:100%;height:100%;overflow:visible}button:hover{cursor:pointer}@media(max-width:600px){:host([position]){width:min(var(--cat-size,180px),35vw)}}`;

export class Samtpfote extends HTMLElement {
  static observedAttributes = ['sleep-after', 'paused'];
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `<style>${styles}</style><button type="button" aria-label="Katze streicheln">${catArt(`samt-${++serial}`)}</button>`;
    this.parts = Object.fromEntries([...this.shadowRoot.querySelectorAll('[data-part]')].map(el=>[el.dataset.part,el]));
    this.state = 'curious'; this.lastActivity = 0; this.lastPointerWake = 0; this.lastFrame = 0; this.time = 0;
    this.gaze = {x:0,y:0}; this.target = {x:0,y:0}; this.pose = {sleep:0,blink:1,pet:0,stretch:0,groom:0,headX:0,headY:0};
    this.nextBlink = 2 + Math.random()*3; this.blinkStart = -100; this.nextAction = 7 + Math.random()*7; this.actionUntil = 0; this.override = null; this.wakeUntil = 0;
    this.frame = this.frame.bind(this);
  }
  connectedCallback() {
    this.abort?.abort(); this.abort = new AbortController(); const signal=this.abort.signal;
    this.media=matchMedia('(prefers-reduced-motion: reduce)');
    this.lastActivity=performance.now(); this.lastFrame=0;
    window.addEventListener('pointermove',e=>{
      if(e.pointerType==='touch') return;
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
      if(!document.hidden) this.start();
    },{signal});
    this.media.addEventListener('change',()=>{this.lastFrame=0;this.start();},{signal});
    this.shadowRoot.querySelector('button').addEventListener('click',()=>this.perform('petting'),{signal});
    this.start();
  }
  disconnectedCallback() { this.abort?.abort();cancelAnimationFrame(this.raf); }
  attributeChangedCallback() { if(this.isConnected)this.start(); }
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
    const allowed=['curious','sleeping','drowsy','stretching','grooming','petting','auto'];
    if(!allowed.includes(action))return;
    this.lastActivity=performance.now(); this.override=action==='auto'?null:action;
    this.ignoreActivityUntil=action==='sleeping'?performance.now()+900:0;
    if(['petting','stretching','grooming'].includes(action)) this.actionUntil=performance.now()+ (action==='grooming'?4800:3200);
    if(action==='curious')this.wakeUntil=performance.now()+1800;
    this.start();
  }
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
      this.override=Math.random()<.55?'watching':Math.random()<.5?'grooming':'stretching';this.actionUntil=now+4200;this.nextAction=t+12+Math.random()*15;state=this.override;
    }
    this.setState(state);
    if(paused)return;
    const sleeping=state==='sleeping',drowsy=state==='drowsy';
    if(t>this.nextBlink){this.blinkStart=t;this.nextBlink=t+3.5+Math.random()*5;}
    const blinkAge=t-this.blinkStart;
    const blink=blinkAge>=0&&blinkAge<.26?1-Math.sin(blinkAge/.26*Math.PI):1;
    const p=this.pose;
    p.sleep=follow(p.sleep,sleeping?1:drowsy?.36:0,sleeping?1.2:state==='waking'?1.05:2.5,dt);
    p.blink=follow(p.blink,sleeping?0:drowsy?.3:state==='petting'?.1:blink,30,dt);
    p.pet=follow(p.pet,state==='petting'?1:0,3,dt);
    p.stretch=follow(p.stretch,state==='stretching'?1:0,2,dt);
    p.groom=follow(p.groom,state==='grooming'?1:0,3,dt);
    const look=state==='watching'?{x:Math.sin(t*.8)*.7,y:-.4}:this.target;
    this.gaze.x=follow(this.gaze.x,look.x,6,dt);this.gaze.y=follow(this.gaze.y,look.y,6,dt);
    const gx=this.gaze.x*(1-p.sleep),gy=this.gaze.y*(1-p.sleep),motion=reduced?0:1;
    const breath=Math.sin(t*(sleeping?1.7:2.2))*(sleeping?1.6:.65)*motion;
    const s=p.sleep,st=p.stretch,gr=p.groom,pet=p.pet;
    const tx=(name,xform)=>this.parts[name].setAttribute('transform',xform);
    const opacity=(name,n)=>this.parts[name].setAttribute('opacity',String(n));
    tx('root',`translate(${motion*Math.sin(t*.44)*.7} ${-st*11})`);
    tx('body',`translate(158 310) scale(${1+s*.28-st*.08} ${1-s*.47+st*.14+breath*.004}) translate(-158 -310)`);
    const tilt=(gx*5+Math.sin(t*.65)*1.1*motion)*(1-s)-s*17+pet*-8+gr*15;
    tx('head',`translate(${gx*5-s*26} ${gy*3+s*83-st*7+breath+gr*15}) rotate(${tilt} 158 175)`);
    const openness=clamp(p.blink*(1-s),.015,1);
    tx('eye-l',`translate(119 143) scale(1 ${openness}) translate(-119 -143)`);
    tx('eye-r',`translate(198 143) scale(1 ${openness}) translate(-198 -143)`);
    opacity('eye-l',clamp(openness*7,0,1));opacity('eye-r',clamp(openness*7,0,1));opacity('closed-eyes',1-clamp(openness*5,0,1));
    tx('pupil-l',`translate(${gx*9} ${gy*6})`);tx('pupil-r',`translate(${gx*9} ${gy*6})`);
    const earFlick=Math.pow(Math.max(0,Math.sin(t*1.13)),18)*9*motion;
    tx('ear-l',`rotate(${-earFlick+pet*9-s*7} 103 105)`);tx('ear-r',`rotate(${earFlick*.6-pet*8+s*7} 219 105)`);
    tx('paw-l',`translate(${gr*15-st*4} ${-gr*(30+Math.sin(t*9)*7*motion)+st*2}) rotate(${gr*25} 130 270)`);
    tx('paw-r',`translate(${st*6} ${st*2})`);
    const tailWave=Math.sin(t*1.25)*motion*(1-s)*13;
    const d=`M207 286 C${270+s*14} ${312-s*5} ${294+s*5} ${260+s*41} ${265-s*26+tailWave} ${238+s*61} C${246-s*26+tailWave} ${224+s*75} ${242-s*30} ${245+s*51} ${255-s*39} ${253+s*48}`;
    this.parts.tail.setAttribute('d',d);this.parts['tail-light'].setAttribute('d',d);
    opacity('sleep-marks',s*.8);tx('sleep-marks',`translate(0 ${Math.sin(t*1.2)*4*motion+s*25})`);
    opacity('hearts',pet*.8);tx('hearts',`translate(0 ${-pet*12+Math.sin(t*2)*3*motion})`);
    tx('whiskers',`translate(0 ${Math.sin(t*2.2)*.4*motion})`);
    this.raf=requestAnimationFrame(this.frame);
  }
}
if(!customElements.get('samt-pfote'))customElements.define('samt-pfote',Samtpfote);
