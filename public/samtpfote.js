function F(i) {
  return `<svg viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eine kleine schwarze Katze mit goldenen Augen">
<defs>
 <radialGradient id="${i}-fur" cx=".3" cy=".15" r=".9"><stop stop-color="#343844"/><stop offset=".5" stop-color="#1c1e28"/><stop offset="1" stop-color="#11121b"/></radialGradient>
 <radialGradient id="${i}-head" cx=".32" cy=".12" r="1"><stop stop-color="#343845"/><stop offset=".55" stop-color="#20222c"/><stop offset="1" stop-color="#13151e"/></radialGradient>
 <radialGradient id="${i}-iris" cx=".4" cy=".3" r=".8"><stop stop-color="#fff3b8"/><stop offset=".48" stop-color="#e8d77c"/><stop offset="1" stop-color="#b29440"/></radialGradient>
 <linearGradient id="${i}-ear" x2="1" y2="1"><stop stop-color="#dba6a0"/><stop offset="1" stop-color="#805c6a"/></linearGradient>
 <clipPath id="${i}-eye-l"><ellipse cx="119" cy="143" rx="23" ry="26"/></clipPath>
 <clipPath id="${i}-eye-r"><ellipse cx="198" cy="143" rx="23" ry="26"/></clipPath>
</defs>
<ellipse data-part="shadow" cx="166" cy="312" rx="86" ry="9" fill="#292139" opacity=".12"/>
<g data-part="root">
<path data-part="tail" d="M207 286 C270 312 294 260 265 238 C246 224 242 245 255 253" stroke="#191b25" stroke-width="24" stroke-linecap="round"/>
<path data-part="tail-light" d="M207 282 C270 308 294 256 265 234 C246 220 242 241 255 249" stroke="#3a3e4a" stroke-opacity=".4" stroke-width="3" stroke-linecap="round"/>
<g data-part="body">
 <path d="M128 188 C110 195 95 228 89 267 C83 298 104 311 158 311 C211 312 232 299 224 269 C217 235 209 203 189 188Z" fill="url(#${i}-fur)"/>
 <ellipse cx="111" cy="282" rx="26" ry="28" fill="#20222d"/>
 <ellipse cx="208" cy="282" rx="26" ry="28" fill="#171923"/>
 <path d="M133 211 Q148 225 161 215 Q174 223 186 209" stroke="#3c404c" stroke-width="1.5" opacity=".65"/>
 <path d="M122 232 Q116 266 125 298 M192 232 Q199 269 190 298" stroke="#0d1018" stroke-width="3" stroke-linecap="round"/>
 <g data-part="paw-l"><path d="M123 257 Q116 272 119 295 Q113 303 118 309 Q127 316 146 310 L148 259" fill="#242733"/><path d="M125 305 L125 310 M133 305 L133 311" stroke="#52515c" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <g data-part="paw-r"><path d="M174 258 L174 302 Q169 312 180 313 Q201 316 204 308 Q204 303 198 298 L195 257" fill="#20232e"/><path d="M182 306 L182 312 M191 306 L191 312" stroke="#52515c" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <path d="M101 245 Q94 266 99 274 M213 245 Q222 270 216 282" stroke="#565765" stroke-opacity=".4" stroke-linecap="round" stroke-width="2"/>
</g>
<g data-part="head">
 <g data-part="ear-l"><path d="M84 123 Q65 91 77 46 Q80 40 86 47 L128 85Z" fill="#242733" stroke="#3b3d49" stroke-width="1.5"/><path d="M88 91 L83 60 Q100 73 109 89 L98 100Z" fill="url(#${i}-ear)"/><path d="M83 90 L92 82 L88 100" fill="#292b37"/></g>
 <g data-part="ear-r"><path d="M191 86 L230 46 Q236 39 240 46 Q253 89 234 124Z" fill="#1b1e28" stroke="#3b3d49" stroke-width="1.5"/><path d="M213 88 Q221 72 232 60 L231 97 L220 101Z" fill="url(#${i}-ear)"/><path d="M229 86 L236 96 L225 102" fill="#252733"/></g>
 <path d="M82 121 Q89 83 126 80 L139 72 L145 79 L157 69 L165 78 Q219 73 236 116 L248 132 L241 138 L252 151 L241 155 Q248 186 216 201 Q198 213 162 215 Q121 213 101 200 Q70 187 76 157 L65 151 L76 139 L69 133Z" fill="url(#${i}-head)"/>
 <path d="M102 105 Q115 97 129 101 M188 101 Q203 96 216 105" stroke="#535662" stroke-width="2" stroke-linecap="round" opacity=".55"/>
 <g data-part="eye-l"><ellipse cx="119" cy="143" rx="26" ry="29" fill="#0d1018"/><ellipse cx="119" cy="143" rx="23" ry="26" fill="url(#${i}-iris)"/><g clip-path="url(#${i}-eye-l)"><g data-part="pupil-l"><ellipse cx="122" cy="142" rx="13.5" ry="22" fill="#10131a"/><ellipse cx="116" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="130" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M99 152 Q103 165 115 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/></g>
 <g data-part="eye-r"><ellipse cx="198" cy="143" rx="26" ry="29" fill="#0d1018"/><ellipse cx="198" cy="143" rx="23" ry="26" fill="url(#${i}-iris)"/><g clip-path="url(#${i}-eye-r)"><g data-part="pupil-r"><ellipse cx="195" cy="142" rx="13.5" ry="22" fill="#10131a"/><ellipse cx="189" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="203" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M179 152 Q182 164 193 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/></g>
 <g data-part="closed-eyes" opacity="0"><path d="M99 145 Q119 157 139 145 M178 145 Q198 157 218 145" stroke="#8b8586" stroke-width="3" stroke-linecap="round"/></g>
 <ellipse cx="136" cy="178" rx="15" ry="11" fill="#30303c" opacity=".5"/><ellipse cx="180" cy="178" rx="15" ry="11" fill="#30303c" opacity=".5"/>
 <path d="M152 173 Q159 170 165 173 Q166 175 159 180 Q152 177 152 173Z" fill="#d3a5a5"/>
 <path d="M159 180 L159 184 M159 183 Q152 191 146 184 M159 183 Q166 191 172 184" stroke="#ab999e" stroke-width="1.7" stroke-linecap="round"/>
 <g data-part="whiskers" stroke="#93909d" stroke-width="1.4" stroke-linecap="round" opacity=".65"><path d="M119 179 Q90 169 63 172 M118 186 Q89 184 69 193 M197 178 Q227 167 251 171 M198 185 Q227 183 249 193"/></g>
 <path d="M145 202 Q159 207 174 201" stroke="#54515d" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
</g>
</g>
<g data-part="hearts" fill="#c89191" opacity="0"><path d="M252 102 C237 89 247 79 254 88 C263 75 277 88 252 102Z"/><path d="M75 58 C63 49 71 41 76 48 C83 38 93 48 75 58Z"/></g>
<g data-part="sleep-marks" fill="#8a819a" font-family="sans-serif" font-weight="500" opacity="0"><text x="235" y="104" font-size="17">z</text><text x="256" y="82" font-size="23">z</text><text x="278" y="55" font-size="30">z</text></g>
</svg>`;
}
const p = (i, t, a) => Math.max(t, Math.min(a, i)), d = (i, t, a, l) => t + (i - t) * Math.exp(-a * l);
function P(i, t) {
  return i >= t ? "sleeping" : i >= t * 0.62 ? "drowsy" : "curious";
}
const U = { curious: "Neugierig", drowsy: "Schläfrig", sleeping: "Im Traumland", waking: "Wird langsam wach", petting: "Genießt die Streicheleinheit", stretching: "Streckt sich", grooming: "Putzt die Pfote", watching: "Schaut sich um" };
let G = 0;
const Z = ':host{display:block;width:var(--cat-size,220px);height:auto;aspect-ratio:320/340;contain:layout style;isolation:isolate;line-height:0;touch-action:pan-y;user-select:none}:host([position]){position:fixed;z-index:var(--cat-z-index,50);margin:var(--cat-offset,16px);pointer-events:none}:host([position="bottom-right"]){bottom:env(safe-area-inset-bottom,0px);right:env(safe-area-inset-right,0px)}:host([position="bottom-left"]){bottom:env(safe-area-inset-bottom,0px);left:env(safe-area-inset-left,0px)}:host([position="top-right"]){top:env(safe-area-inset-top,0px);right:env(safe-area-inset-right,0px)}:host([position="top-left"]){top:env(safe-area-inset-top,0px);left:env(safe-area-inset-left,0px)}button{all:unset;display:block;width:100%;height:100%;cursor:pointer;pointer-events:auto;border-radius:40%;-webkit-tap-highlight-color:transparent}button:focus-visible{outline:2px solid #b8a061;outline-offset:-8px}svg{display:block;width:100%;height:100%;overflow:visible}button:hover{cursor:pointer}@media(max-width:600px){:host([position]){width:min(var(--cat-size,180px),35vw)}}';
class W extends HTMLElement {
  static observedAttributes = ["sleep-after", "paused"];
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `<style>${Z}</style><button type="button" aria-label="Katze streicheln">${F(`samt-${++G}`)}</button>`, this.parts = Object.fromEntries([...this.shadowRoot.querySelectorAll("[data-part]")].map((t) => [t.dataset.part, t])), this.state = "curious", this.lastActivity = 0, this.lastPointerWake = 0, this.lastFrame = 0, this.time = 0, this.gaze = { x: 0, y: 0 }, this.target = { x: 0, y: 0 }, this.pose = { sleep: 0, blink: 1, pet: 0, stretch: 0, groom: 0, headX: 0, headY: 0 }, this.nextBlink = 2 + Math.random() * 3, this.blinkStart = -100, this.nextAction = 7 + Math.random() * 7, this.actionUntil = 0, this.override = null, this.wakeUntil = 0, this.frame = this.frame.bind(this);
  }
  connectedCallback() {
    this.abort?.abort(), this.abort = new AbortController();
    const t = this.abort.signal;
    this.media = matchMedia("(prefers-reduced-motion: reduce)"), this.lastActivity = performance.now(), this.lastFrame = 0, window.addEventListener("pointermove", (a) => {
      if (a.pointerType === "touch") return;
      const l = this.getBoundingClientRect();
      this.target = { x: p((a.clientX - l.left - l.width * 0.5) / Math.max(120, innerWidth * 0.32), -1, 1), y: p((a.clientY - l.top - l.height * 0.43) / Math.max(100, innerHeight * 0.3), -1, 1) };
      const f = performance.now();
      f - this.lastPointerWake > 120 && (this.activity(), this.lastPointerWake = f);
    }, { passive: !0, signal: t }), window.addEventListener("scroll", () => this.activity(), { passive: !0, signal: t, capture: !0 }), window.addEventListener("keydown", () => this.activity(), { signal: t }), window.addEventListener("pointerdown", () => this.activity(), { passive: !0, signal: t }), document.addEventListener("visibilitychange", () => {
      cancelAnimationFrame(this.raf), this.lastFrame = 0, document.hidden || this.start();
    }, { signal: t }), this.media.addEventListener("change", () => {
      this.lastFrame = 0, this.start();
    }, { signal: t }), this.shadowRoot.querySelector("button").addEventListener("click", () => this.perform("petting"), { signal: t }), this.start();
  }
  disconnectedCallback() {
    this.abort?.abort(), cancelAnimationFrame(this.raf);
  }
  attributeChangedCallback() {
    this.isConnected && this.start();
  }
  get sleepAfter() {
    const t = Number(this.getAttribute("sleep-after") || 35);
    return Number.isFinite(t) ? p(t, 5, 3600) : 35;
  }
  start() {
    cancelAnimationFrame(this.raf), document.hidden || (this.raf = requestAnimationFrame(this.frame));
  }
  activity() {
    const t = performance.now();
    t < (this.ignoreActivityUntil || 0) || (this.lastActivity = t, (this.override === "sleeping" || this.override === "drowsy") && (this.override = null), (this.state === "sleeping" || this.state === "drowsy") && (this.wakeUntil = t + 2200, this.blinkStart = this.time + 0.7));
  }
  perform(t) {
    ["curious", "sleeping", "drowsy", "stretching", "grooming", "petting", "auto"].includes(t) && (this.lastActivity = performance.now(), this.override = t === "auto" ? null : t, this.ignoreActivityUntil = t === "sleeping" ? performance.now() + 900 : 0, ["petting", "stretching", "grooming"].includes(t) && (this.actionUntil = performance.now() + (t === "grooming" ? 4800 : 3200)), t === "curious" && (this.wakeUntil = performance.now() + 1800), this.start());
  }
  setState(t) {
    t !== this.state && (this.state = t, this.dispatchEvent(new CustomEvent("catstate", { detail: { state: t, label: U[t] }, bubbles: !0, composed: !0 })));
  }
  frame(t) {
    const a = this.lastFrame ? p((t - this.lastFrame) / 1e3, 0, 0.05) : 0.016666666666666666;
    this.lastFrame = t;
    const l = this.media.matches, f = this.hasAttribute("paused");
    f || (this.time += a);
    const r = this.time;
    this.override && !["sleeping", "drowsy", "curious"].includes(this.override) && t > this.actionUntil && (this.override = null);
    let n = this.override || P((t - this.lastActivity) / 1e3, this.sleepAfter);
    if (!this.override && t < this.wakeUntil && (n = "waking"), !this.override && n === "curious" && r > this.nextAction && !l && !f && (this.override = Math.random() < 0.55 ? "watching" : Math.random() < 0.5 ? "grooming" : "stretching", this.actionUntil = t + 4200, this.nextAction = r + 12 + Math.random() * 15, n = this.override), this.setState(n), f) return;
    const g = n === "sleeping", $ = n === "drowsy";
    r > this.nextBlink && (this.blinkStart = r, this.nextBlink = r + 3.5 + Math.random() * 5);
    const w = r - this.blinkStart, S = w >= 0 && w < 0.26 ? 1 - Math.sin(w / 0.26 * Math.PI) : 1, s = this.pose;
    s.sleep = d(s.sleep, g ? 1 : $ ? 0.36 : 0, g ? 1.2 : n === "waking" ? 1.05 : 2.5, a), s.blink = d(s.blink, g ? 0 : $ ? 0.3 : n === "petting" ? 0.1 : S, 30, a), s.pet = d(s.pet, n === "petting" ? 1 : 0, 3, a), s.stretch = d(s.stretch, n === "stretching" ? 1 : 0, 2, a), s.groom = d(s.groom, n === "grooming" ? 1 : 0, 3, a);
    const Q = n === "watching" ? { x: Math.sin(r * 0.8) * 0.7, y: -0.4 } : this.target;
    this.gaze.x = d(this.gaze.x, Q.x, 6, a), this.gaze.y = d(this.gaze.y, Q.y, 6, a);
    const x = this.gaze.x * (1 - s.sleep), b = this.gaze.y * (1 - s.sleep), h = l ? 0 : 1, L = Math.sin(r * (g ? 1.7 : 2.2)) * (g ? 1.6 : 0.65) * h, e = s.sleep, c = s.stretch, u = s.groom, y = s.pet, o = (M, v) => this.parts[M].setAttribute("transform", v), m = (M, v) => this.parts[M].setAttribute("opacity", String(v));
    o("root", `translate(${h * Math.sin(r * 0.44) * 0.7} ${-c * 11})`), o("body", `translate(158 310) scale(${1 + e * 0.28 - c * 0.08} ${1 - e * 0.47 + c * 0.14 + L * 4e-3}) translate(-158 -310)`);
    const E = (x * 5 + Math.sin(r * 0.65) * 1.1 * h) * (1 - e) - e * 17 + y * -8 + u * 15;
    o("head", `translate(${x * 5 - e * 26} ${b * 3 + e * 83 - c * 7 + L + u * 15}) rotate(${E} 158 175)`);
    const k = p(s.blink * (1 - e), 0.015, 1);
    o("eye-l", `translate(119 143) scale(1 ${k}) translate(-119 -143)`), o("eye-r", `translate(198 143) scale(1 ${k}) translate(-198 -143)`), m("eye-l", p(k * 7, 0, 1)), m("eye-r", p(k * 7, 0, 1)), m("closed-eyes", 1 - p(k * 5, 0, 1)), o("pupil-l", `translate(${x * 9} ${b * 6})`), o("pupil-r", `translate(${x * 9} ${b * 6})`);
    const A = Math.pow(Math.max(0, Math.sin(r * 1.13)), 18) * 9 * h;
    o("ear-l", `rotate(${-A + y * 9 - e * 7} 103 105)`), o("ear-r", `rotate(${A * 0.6 - y * 8 + e * 7} 219 105)`), o("paw-l", `translate(${u * 15 - c * 4} ${-u * (30 + Math.sin(r * 9) * 7 * h) + c * 2}) rotate(${u * 25} 130 270)`), o("paw-r", `translate(${c * 6} ${c * 2})`);
    const C = Math.sin(r * 1.25) * h * (1 - e) * 13, z = `M207 286 C${270 + e * 14} ${312 - e * 5} ${294 + e * 5} ${260 + e * 41} ${265 - e * 26 + C} ${238 + e * 61} C${246 - e * 26 + C} ${224 + e * 75} ${242 - e * 30} ${245 + e * 51} ${255 - e * 39} ${253 + e * 48}`;
    this.parts.tail.setAttribute("d", z), this.parts["tail-light"].setAttribute("d", z), m("sleep-marks", e * 0.8), o("sleep-marks", `translate(0 ${Math.sin(r * 1.2) * 4 * h + e * 25})`), m("hearts", y * 0.8), o("hearts", `translate(0 ${-y * 12 + Math.sin(r * 2) * 3 * h})`), o("whiskers", `translate(0 ${Math.sin(r * 2.2) * 0.4 * h})`), this.raf = requestAnimationFrame(this.frame);
  }
}
customElements.get("samt-pfote") || customElements.define("samt-pfote", W);
export {
  W as Samtpfote
};
