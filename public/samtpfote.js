const V = "Miso", st = "samtpfote", ot = "hallowelt42", at = `${ot} / ${st}`;
function lt(a) {
  return String(a).replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
}
function ct(a, t = V) {
  return `<svg viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${lt(t)}, eine kleine Katze mit großen Augen">
<defs>
 <linearGradient id="${a}-side-light" x1="0" y1="0" x2="1" y2=".6"><stop stop-color="#ffdda2" stop-opacity=".65"/><stop offset=".45" stop-color="#e8bc78" stop-opacity=".15"/><stop offset="1" stop-color="#e8bc78" stop-opacity="0"/></linearGradient>
 <filter id="${a}-contact-soft" x="-60%" y="-120%" width="220%" height="340%"><feGaussianBlur stdDeviation="2"/></filter>
 <filter id="${a}-cast-soft" x="-60%" y="-120%" width="220%" height="340%"><feGaussianBlur stdDeviation="4"/></filter>
 <filter id="${a}-dream-blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur data-part="sleep-blur" stdDeviation="0"/></filter>
 <radialGradient id="${a}-fur" cx=".3" cy=".15" r=".9"><stop stop-color="var(--cat-fur-top,#35312e)"/><stop offset=".5" stop-color="var(--cat-fur-mid,#191715)"/><stop offset="1" stop-color="var(--cat-fur-base,#0e0d0c)"/></radialGradient>
 <radialGradient id="${a}-head" cx=".32" cy=".12" r="1"><stop stop-color="var(--cat-head-top,#38332f)"/><stop offset=".55" stop-color="var(--cat-head-mid,#1b1917)"/><stop offset="1" stop-color="var(--cat-head-base,#11100e)"/></radialGradient>
 <radialGradient id="${a}-iris" cx=".4" cy=".3" r=".8"><stop stop-color="var(--cat-iris-top,#fff3b8)"/><stop offset=".48" stop-color="var(--cat-iris-mid,#e8d77c)"/><stop offset="1" stop-color="var(--cat-iris-base,#b29440)"/></radialGradient>
 <linearGradient id="${a}-ear" x2="1" y2="1"><stop stop-color="#dba6a0"/><stop offset="1" stop-color="#805c6a"/></linearGradient>
 <clipPath id="${a}-eye-l"><ellipse cx="119" cy="143" rx="23" ry="26"/></clipPath>
 <clipPath id="${a}-eye-r"><ellipse cx="198" cy="143" rx="23" ry="26"/></clipPath>
</defs>
<path data-part="tail-shadow" d="M207 286 C270 312 294 260 265 238 C246 224 242 245 255 253" stroke="#211508" stroke-width="22" stroke-linecap="round" opacity=".2" filter="url(#${a}-cast-soft)"/>
<path data-part="cast-shadow" d="M105 307Q162 300 212 308Q240 315 286 325Q301 336 263 335L162 325Q104 324 105 307Z" fill="#27190d" opacity=".2" filter="url(#${a}-cast-soft)"/>
<ellipse data-part="shadow" cx="160" cy="312" rx="65" ry="7" fill="#1c1209" opacity=".35" filter="url(#${a}-contact-soft)"/>
<g data-part="root">
<path data-part="tail" d="M207 286 C270 312 294 260 265 238 C246 224 242 245 255 253" stroke="var(--cat-tail,#171512)" stroke-width="24" stroke-linecap="round"/>
<path data-part="tail-light" d="M207 282 C270 308 294 256 265 234 C246 220 242 241 255 249" stroke="var(--cat-tail-light,#45403a)" stroke-opacity=".4" stroke-width="3" stroke-linecap="round"/>
<g data-part="body">
 <path data-part="torso" d="M129 190 C119 192 115 203 111 214 Q102 224 101 239 C90 251 85 272 91 290 C95 306 119 311 157 311 C193 313 221 306 225 290 C232 273 221 248 215 238 Q214 223 204 213 C201 201 193 192 187 190 Q158 203 129 190Z" fill="url(#${a}-fur)"/>
 <path data-part="torso-light" d="M129 190 C119 192 115 203 111 214 Q102 224 101 239 C90 251 85 272 91 290 C95 306 119 311 157 311 C193 313 221 306 225 290 C232 273 221 248 215 238 Q214 223 204 213 C201 201 193 192 187 190 Q158 203 129 190Z" fill="url(#${a}-side-light)" opacity="var(--cat-light-opacity,0)"/>
 <path d="M112 252 C94 253 86 272 91 289 Q85 300 96 306 Q111 313 129 305 Q141 298 131 281 C129 265 124 254 112 252Z" fill="var(--cat-fur-detail,#211e1b)"/><path d="M96 301 Q97 297 99 297 M104 305 Q104 300 107 300" stroke="var(--cat-toe,#796c5e)" stroke-opacity=".4" stroke-width="1.3" stroke-linecap="round"/>
 <path d="M207 253 C224 252 233 275 226 289 Q232 301 223 306 Q209 313 191 305 Q182 299 188 282 C189 267 196 256 207 253Z" fill="var(--cat-fur-shadow,#191613)"/><path d="M218 302 Q218 298 215 298 M210 306 Q210 302 208 301" stroke="var(--cat-toe,#796c5e)" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/>
 <path d="M133 211 Q148 225 161 215 Q174 223 186 209" stroke="#3c404c" stroke-width="1.5" opacity=".65"/>
 <path d="M122 232 Q116 266 125 298 M192 232 Q199 269 190 298" stroke="var(--cat-line,#0d0c0a)" stroke-width="3" stroke-linecap="round"/>
 <g data-part="paw-l"><path d="M124 245 C123 260 119 278 121 291 Q119 297 114 299 C108 303 109 311 116 314 Q122 318 129 315 Q137 320 146 315 C155 315 157 307 152 301 Q147 296 148 288 L149 248" fill="var(--cat-fur-detail,#211e1b)"/><path d="M119 303 Q116 308 119 313 M131 304 Q127 311 130 315 M143 303 Q140 309 143 314" stroke="var(--cat-toe,#65594e)" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <g data-part="paw-r"><path d="M172 248 L173 287 Q176 296 171 300 C164 306 167 315 176 315 Q184 319 191 315 Q202 319 208 312 C213 305 207 299 202 296 Q198 283 197 272 L194 245" fill="var(--cat-paw,#1f1c18)"/><path d="M176 304 Q172 310 176 315 M188 305 Q184 311 188 316 M201 303 Q198 309 202 314" stroke="var(--cat-toe,#65594e)" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <path d="M101 245 Q94 266 99 274 M213 245 Q222 270 216 282" stroke="var(--cat-body-light,#6a5f53)" stroke-opacity=".4" stroke-linecap="round" stroke-width="2"/>
</g>
<g data-part="head">
 <g data-part="ear-l"><path d="M84 123 Q65 91 77 46 Q80 40 86 47 L128 85Z" fill="var(--cat-fur-detail,#211e1b)" stroke="var(--cat-edge,#3d3730)" stroke-width="1.5"/><path d="M88 91 L83 60 Q100 73 109 89 L98 100Z" fill="url(#${a}-ear)"/><path d="M83 90 L92 82 L88 100" fill="var(--cat-tuft,#29241f)"/></g>
 <g data-part="ear-r"><path d="M191 86 L230 46 Q236 39 240 46 Q253 89 234 124Z" fill="var(--cat-ear,#1b1815)" stroke="var(--cat-edge,#3d3730)" stroke-width="1.5"/><path d="M213 88 Q221 72 232 60 L231 97 L220 101Z" fill="url(#${a}-ear)"/><path d="M229 86 L236 96 L225 102" fill="var(--cat-tuft,#26211c)"/></g>
 <path d="M81 122 C86 97 103 84 128 82 Q135 75 142 76 Q137 80 140 83 Q151 78 158 76 Q153 80 155 82 C195 76 225 89 236 120 Q238 127 243 131 L239 132 Q243 141 249 145 Q245 147 241 146 Q244 156 249 161 Q244 163 240 160 C238 181 226 194 207 200 Q191 213 161 214 Q128 213 110 202 C91 196 79 183 77 165 Q72 166 68 162 Q74 156 76 149 Q71 152 67 148 Q74 140 77 134 L73 134 Q78 128 81 122Z" fill="url(#${a}-head)"/>
 <path d="M81 122 C86 97 103 84 128 82 Q135 75 142 76 Q137 80 140 83 Q151 78 158 76 Q153 80 155 82 C195 76 225 89 236 120 Q238 127 243 131 L239 132 Q243 141 249 145 Q245 147 241 146 Q244 156 249 161 Q244 163 240 160 C238 181 226 194 207 200 Q191 213 161 214 Q128 213 110 202 C91 196 79 183 77 165 Q72 166 68 162 Q74 156 76 149 Q71 152 67 148 Q74 140 77 134 L73 134 Q78 128 81 122Z" fill="url(#${a}-side-light)" opacity="var(--cat-light-opacity,0)"/>
 <path d="M102 105 Q115 97 129 101 M188 101 Q203 96 216 105" stroke="var(--cat-brow,#645b50)" stroke-width="2" stroke-linecap="round" opacity=".55"/>
 <g data-part="eye-l"><ellipse cx="119" cy="143" rx="26" ry="29" fill="var(--cat-line,#0d0c0a)"/><ellipse cx="119" cy="143" rx="23" ry="26" fill="url(#${a}-iris)"/><g clip-path="url(#${a}-eye-l)"><g data-part="pupil-l"><ellipse cx="122" cy="142" rx="13.5" ry="22" fill="#16120e"/><ellipse cx="116" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="130" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M99 152 Q103 165 115 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/></g>
 <g data-part="eye-r"><ellipse cx="198" cy="143" rx="26" ry="29" fill="var(--cat-line,#0d0c0a)"/><ellipse cx="198" cy="143" rx="23" ry="26" fill="url(#${a}-iris)"/><g clip-path="url(#${a}-eye-r)"><g data-part="pupil-r"><ellipse cx="195" cy="142" rx="13.5" ry="22" fill="#16120e"/><ellipse cx="189" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="203" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M179 152 Q182 164 193 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/></g>
 <g data-part="closed-eyes" opacity="0"><path d="M99 145 Q119 157 139 145 M178 145 Q198 157 218 145" stroke="#a29380" stroke-width="3" stroke-linecap="round"/></g>
 <ellipse cx="136" cy="178" rx="15" ry="11" fill="var(--cat-muzzle,#3b332b)" opacity=".5"/><ellipse cx="180" cy="178" rx="15" ry="11" fill="var(--cat-muzzle,#3b332b)" opacity=".5"/>
 <path d="M152 173 Q159 170 165 173 Q166 175 159 180 Q152 177 152 173Z" fill="var(--cat-nose,#d3a5a5)"/>
 <path d="M159 180 L159 184 M159 183 Q152 191 146 184 M159 183 Q166 191 172 184" stroke="var(--cat-mouth,#ab999e)" stroke-width="1.7" stroke-linecap="round"/>
 <path data-part="tongue" d="M152 187Q159 196 162 188" fill="#df9f97" opacity="0"/>
 <g data-part="whiskers" stroke="var(--cat-whisker,#b0a391)" stroke-width="1.4" stroke-linecap="round" opacity=".65"><path d="M119 179 Q90 169 63 172 M118 186 Q89 184 69 193 M197 178 Q227 167 251 171 M198 185 Q227 183 249 193"/></g>
 <path d="M113 194 Q119 198 126 198 M192 197 Q199 195 204 192" stroke="#74695d" stroke-width="1" stroke-opacity=".35" stroke-linecap="round"/>
 <path d="M145 202 Q159 207 174 201" stroke="var(--cat-chin,#64584c)" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
</g>
</g>
<g data-part="hearts" opacity="0" aria-hidden="true">
 <g data-part="heart-0"><path d="M0 9 C-30 -9 -13 -29 0 -15 C13 -29 30 -9 0 9Z" fill="#df969e"/><path d="M-12 -14Q-16 -11 -13 -6" stroke="#ffe3dd" stroke-width="2" stroke-linecap="round"/></g>
 <g data-part="heart-1"><path d="M0 9 C-30 -9 -13 -29 0 -15 C13 -29 30 -9 0 9Z" fill="#e8b1a0"/></g>
 <g data-part="heart-2"><path d="M0 9 C-30 -9 -13 -29 0 -15 C13 -29 30 -9 0 9Z" fill="#cb8798"/></g>
 <g data-part="heart-3"><path d="M0 9 C-30 -9 -13 -29 0 -15 C13 -29 30 -9 0 9Z" fill="#e9b3b5"/></g>
</g>
<g data-part="groom-limb" opacity="0" aria-hidden="true">
 <path data-part="groom-arm" fill="var(--cat-fur-detail,#211e1b)" stroke="var(--cat-edge,#3d3730)" stroke-opacity=".4" stroke-width="1"/>
 <g data-part="groom-hand"><path d="M-11 12Q-18 2 -13 -8Q-10 -17 -5 -12Q0 -20 5 -12Q15 -14 16 -4Q20 5 11 13Q0 18 -11 12Z" fill="var(--cat-fur-detail,#211e1b)"/><path d="M-8 -8Q-5 -3 -6 0 M0 -11V-3 M8 -8L7 -1" stroke="var(--cat-toe,#65594e)" stroke-opacity=".7" stroke-linecap="round" stroke-width="1.1"/></g>
</g>
<g data-part="glass-paws" opacity="0" aria-hidden="true">
 <path data-part="raised-arm-l" fill="var(--cat-fur-detail,#211e1b)" stroke="var(--cat-edge,#3d3730)" stroke-width="1" stroke-opacity=".5"/>
 <path data-part="raised-arm-r" fill="var(--cat-paw,#1f1c18)" stroke="var(--cat-edge,#3d3730)" stroke-width="1" stroke-opacity=".5"/>
 <g data-part="glass-paw-l"><path d="M-16 11C-24 4 -21 -10 -13 -10Q-13 -23 -5 -20Q3 -30 10 -19Q23 -22 24 -8Q31 -2 24 9Q24 21 12 24Q4 29 -6 24Q-19 25 -16 11Z" fill="var(--cat-fur-detail,#211e1b)" stroke="var(--cat-edge,#3d3730)" stroke-width="1"/><path d="M-4 2Q2 -5 9 2Q20 13 11 17Q5 21 0 17Q-12 21 -12 11Q-10 5 -4 2Z" fill="#d89d96"/><ellipse cx="-13" cy="-3" rx="4.3" ry="6.1" fill="#e6b0a7" transform="rotate(-22 -13 -3)"/><ellipse cx="2" cy="-11" rx="4.5" ry="6.7" fill="#e6b0a7"/><ellipse cx="17" cy="-4" rx="4.3" ry="6.1" fill="#e6b0a7" transform="rotate(22 17 -4)"/><path d="M-4 10Q-1 6 3 7" stroke="#f7ccc2" stroke-width="1.6" stroke-linecap="round"/></g>
 <g data-part="glass-paw-r"><path d="M-16 11C-24 4 -21 -10 -13 -10Q-13 -23 -5 -20Q3 -30 10 -19Q23 -22 24 -8Q31 -2 24 9Q24 21 12 24Q4 29 -6 24Q-19 25 -16 11Z" fill="var(--cat-paw,#1f1c18)" stroke="var(--cat-edge,#3d3730)" stroke-width="1"/><path d="M-4 2Q2 -5 9 2Q20 13 11 17Q5 21 0 17Q-12 21 -12 11Q-10 5 -4 2Z" fill="#d89d96"/><ellipse cx="-13" cy="-3" rx="4.3" ry="6.1" fill="#e6b0a7" transform="rotate(-22 -13 -3)"/><ellipse cx="2" cy="-11" rx="4.5" ry="6.7" fill="#e6b0a7"/><ellipse cx="17" cy="-4" rx="4.3" ry="6.1" fill="#e6b0a7" transform="rotate(22 17 -4)"/><path d="M-4 10Q-1 6 3 7" stroke="#f7ccc2" stroke-width="1.6" stroke-linecap="round"/></g>
 <g data-part="glass-ripples" stroke="#e7e9e1" stroke-width="1" fill="none"><ellipse cx="120" cy="190" rx="25" ry="23"/><ellipse cx="202" cy="190" rx="25" ry="23"/></g>
</g>
<g data-part="sleep-marks" fill="var(--cat-sleep-ink,#8a819a)" font-family="sans-serif" font-weight="500" opacity="0" aria-hidden="true">
 <g data-part="sleep-z-0" filter="url(#${a}-dream-blur)"><text x="233" y="133" font-size="14">z</text></g>
 <g data-part="sleep-z-1" filter="url(#${a}-dream-blur)"><text x="233" y="133" font-size="18">z</text></g>
 <g data-part="sleep-z-2" filter="url(#${a}-dream-blur)"><text x="233" y="133" font-size="22">z</text></g>
</g>
<g data-part="dream-cloud" opacity="0" aria-hidden="true">
 <circle cx="213" cy="146" r="3" fill="#fffaf0" fill-opacity=".8"/>
 <circle cx="224" cy="129" r="5" fill="#fffaf0" fill-opacity=".85"/>
 <path d="M224 111C211 114 203 104 208 95C193 91 200 76 210 75C207 60 222 51 234 56C243 41 262 44 267 55C280 52 292 63 287 75C302 81 297 99 285 101C285 114 269 119 259 112C247 124 229 123 224 111Z" fill="#fffaf0" fill-opacity=".94" stroke="#c6c4b3" stroke-width="1"/>
 <path d="M250 62Q249 50 261 48Q276 47 272 36" stroke="#8d9888" stroke-width="2" stroke-linecap="round"/>
 <g transform="rotate(20 250 87)"><rect x="235" y="66" width="30" height="40" rx="14" fill="#a7b49a" stroke="#718568" stroke-width="1.3"/><path d="M250 67V83 M235 82H265" stroke="#718568" stroke-width="1.2"/><rect x="247.8" y="71" width="4.4" height="9" rx="2.2" fill="#e7d396"/><path d="M241 89Q239 96 243 99" stroke="#d2ddc6" stroke-width="2" stroke-linecap="round"/></g>
 <path d="M221 66L223 61 M217 63L227 64 M280 101L281 96 M277 98L285 99" stroke="#c9b67b" stroke-width="1.5" stroke-linecap="round"/>
</g>
<text data-part="credit" x="160" y="335" text-anchor="middle" font-family="sans-serif" font-size="8" fill="var(--cat-credit,#85877b)" letter-spacing=".4">${at}</text>
</svg>`;
}
const nt = `
:host([coat="cream"]){--cat-fur-top:#f5e8d2;--cat-fur-mid:#e5d2ae;--cat-fur-base:#bfa783;--cat-head-top:#fff2db;--cat-head-mid:#e9d6b5;--cat-head-base:#c5ab87;--cat-tail:#ceb58f;--cat-tail-light:#f5e4c9;--cat-fur-detail:#e3c9a3;--cat-fur-shadow:#c9af89;--cat-paw:#dcc29d;--cat-line:#a98f6d;--cat-ear:#d5ba97;--cat-edge:#bd9f7b;--cat-tuft:#e3c8a4;--cat-brow:#b99d7b;--cat-muzzle:#f4e6d0;--cat-whisker:#8e7b68;--cat-nose:#b88283;--cat-mouth:#886a65;--cat-chin:#aa8e72;--cat-toe:#9a8064;--cat-body-light:#f4e4c8;--cat-iris-top:#e4efbd;--cat-iris-mid:#a6bb72;--cat-iris-base:#6b8849;--cat-credit:#9d9d8b}
:host([coat="smoke"]){--cat-fur-top:#a39b8f;--cat-fur-mid:#82786a;--cat-fur-base:#594f43;--cat-head-top:#b2a799;--cat-head-mid:#908576;--cat-head-base:#645749;--cat-tail:#746555;--cat-tail-light:#baaa96;--cat-fur-detail:#928471;--cat-fur-shadow:#6c5d4d;--cat-paw:#887763;--cat-line:#514333;--cat-ear:#87745f;--cat-edge:#77644f;--cat-tuft:#9a8870;--cat-brow:#cfbfa9;--cat-muzzle:#b5a48e;--cat-whisker:#e5d5b9;--cat-nose:#d0a093;--cat-mouth:#d7b8a1;--cat-chin:#cab79e;--cat-toe:#d9c7ae;--cat-body-light:#e1d0b6}
@media(prefers-color-scheme:dark){:host([coat="auto"]),:host(:not([coat])){--cat-fur-top:#f5e8d2;--cat-fur-mid:#e5d2ae;--cat-fur-base:#bfa783;--cat-head-top:#fff2db;--cat-head-mid:#e9d6b5;--cat-head-base:#c5ab87;--cat-tail:#ceb58f;--cat-tail-light:#f5e4c9;--cat-fur-detail:#e3c9a3;--cat-fur-shadow:#c9af89;--cat-paw:#dcc29d;--cat-line:#a98f6d;--cat-ear:#d5ba97;--cat-edge:#bd9f7b;--cat-tuft:#e3c8a4;--cat-brow:#b99d7b;--cat-muzzle:#f4e6d0;--cat-whisker:#8e7b68;--cat-nose:#b88283;--cat-mouth:#886a65;--cat-chin:#aa8e72;--cat-toe:#9a8064;--cat-body-light:#f4e4c8;--cat-iris-top:#e4efbd;--cat-iris-mid:#a6bb72;--cat-iris-base:#6b8849;--cat-credit:#9d9d8b}}
:host([lighting="day"]){--cat-light-opacity:.065}
:host([lighting="night"]){--cat-light-opacity:.15}
:host([lighting="night"][coat="black"]){--cat-fur-top:#3e3225;--cat-head-top:#443626;--cat-edge:#51432f;--cat-brow:#6d5b42;--cat-body-light:#736047;--cat-whisker:#c0a782}
`, y = (a, t, i) => Math.max(t, Math.min(i, a)), u = (a, t, i, c) => t + (a - t) * Math.exp(-i * c);
function ht(a, t) {
  return a >= t ? "sleeping" : a >= t * 0.62 ? "drowsy" : "curious";
}
const dt = { curious: "Neugierig", drowsy: "Schläfrig", sleeping: "Im Traumland", waking: "Wird langsam wach", petting: "Genießt die Streicheleinheit", stretching: "Streckt sich", grooming: "Putzt sich in aller Ruhe", watching: "Schaut sich um", swatting: "Oh! Eine Maus vor der Nase" }, U = (a) => {
  const t = y(a, 0, 1);
  return t * t * (3 - 2 * t);
};
function b(a, t) {
  if (a <= t[0][0]) return t[0][1];
  for (let i = 1; i < t.length; i++) if (a <= t[i][0]) {
    const [c, g] = t[i - 1], [o, s] = t[i];
    return g + (s - g) * U((a - c) / (o - c));
  }
  return t.at(-1)[1];
}
function pt(a, t, i = 0) {
  if (a === "stretching") return {
    stretch: b(t, [[0, 0], [0.6, 0.08], [1.7, 1], [3.2, 1], [4.5, 0.15], [5.4, 0]]),
    reach: b(t, [[0, 0], [0.45, 0], [1.3, 1], [3.3, 1], [4.9, 0]]),
    toes: b(t, [[0, 0], [1.5, 0], [2, 1], [3.2, 0.7], [4.5, 0]])
  };
  if (a === "grooming") {
    const c = i !== 2, g = b(t, c ? [[0, 0], [0.4, 0], [1.1, 1], [6.9, 1], [7.8, 0]] : [[0, 0], [0.4, 0], [1.1, 1], [4.5, 1], [5.3, 0]]), o = c ? [[1.25, 2.65], [4.5, 5.65]] : [[1.25, 2.65]];
    let s = 0;
    for (const [S, h] of o) if (t >= S && t <= h) {
      const P = U((t - S) / 0.2) * U((h - t) / 0.2);
      s = Math.pow(Math.max(0, Math.sin((t - S) * 10)), 2) * P;
    }
    const k = b(t, c ? [[0, 0], [2.8, 0], [3.3, 1], [3.8, 0.12], [4.15, 0.8], [4.5, 0], [5.75, 0], [6.2, 1], [6.7, 0.1], [7.1, 0.75], [7.5, 0]] : [[0, 0], [2.8, 0], [3.3, 1], [3.9, 0.1], [4.3, 0.9], [4.7, 0]]), z = b(t, c ? [[0, 0], [7.6, 0], [8.2, 1], [9.5, 1], [10.3, 0]] : [[0, 0], [5.3, 0], [6, 1], [8, 1], [8.6, 0]]), x = i === 2 ? b(t, [[0, 0], [8.25, 0], [8.9, 1], [10, 1], [10.6, 0]]) : 0, L = (z + x) * Math.pow(Math.max(0, Math.sin(t * 8)), 2), e = t > 10.5 && t < 11.3 ? Math.sin((t - 10.5) * 18) * Math.sin((t - 10.5) / 0.8 * Math.PI) : 0;
    return { lift: g, lick: Math.max(s, L), wipe: k, chest: z, flank: x, shake: e, side: i === 1 ? 1 : 0 };
  }
  return a === "swatting" ? {
    left: b(t, [[0, 0], [0.25, 0.05], [0.8, 1], [1.45, 1], [1.85, 0.9], [2.25, 1], [2.7, 0.65], [3.5, 0]]),
    right: b(t, [[0, 0], [0.45, 0], [1.2, 1], [1.75, 0.92], [2.15, 1], [2.8, 0.65], [3.65, 0]]),
    rise: b(t, [[0, 0], [0.25, -0.1], [0.95, 1], [2.6, 1], [3.7, 0]]),
    press: b(t, [[0, 0], [0.85, 0], [1.1, 1], [1.45, 0], [1.85, 0.75], [2.2, 0], [2.5, 0.5], [2.85, 0]])
  } : {};
}
function G(a, t, i, c, g = 0) {
  const o = a + (i - a) * 0.3 + g, s = t + (c - t) * 0.55;
  return `M${a - 9} ${t} Q${o - 10} ${s} ${i - 10} ${c + 7} Q${i} ${c + 17} ${i + 10} ${c + 7} Q${o + 10} ${s + 3} ${a + 9} ${t + 3}Z`;
}
function ft(a, t) {
  return `M${129 - a * 4 + t * 3} ${190 + a * 12 - t * 7} C${119 - a * 8 + t * 3} ${192 + a * 10 - t * 6} ${115 - a * 10} ${203 + a * 12 - t * 4} ${111 - a * 8} ${214 + a * 8} Q${102 - a * 4} ${224 + a * 6} 101 239 C90 251 85 272 91 290 C95 306 119 311 157 311 C193 313 221 306 225 290 C232 273 221 248 215 238 Q214 223 ${204 + a * 6} ${213 + a * 8} C${201 + a * 7 - t * 3} ${201 + a * 10 - t * 4} ${193 + a * 5 - t * 3} ${192 + a * 10 - t * 6} ${187 + a * 3 - t * 3} ${190 + a * 12 - t * 7} Q158 ${203 + a * 10 - t * 7} ${129 - a * 4 + t * 3} ${190 + a * 12 - t * 7}Z`;
}
let ut = 0;
const gt = ':host{position:relative;display:block;width:var(--cat-size,220px);height:auto;aspect-ratio:320/340;contain:layout style;isolation:isolate;line-height:0;touch-action:pan-y;user-select:none}:host([position]){position:fixed;z-index:var(--cat-z-index,10000);margin:var(--cat-offset,16px);pointer-events:none}:host([position="bottom-right"]){bottom:env(safe-area-inset-bottom,0px);right:env(safe-area-inset-right,0px)}:host([position="bottom-left"]){bottom:env(safe-area-inset-bottom,0px);left:env(safe-area-inset-left,0px)}:host([position="top-right"]){top:env(safe-area-inset-top,0px);right:env(safe-area-inset-right,0px)}:host([position="top-left"]){top:env(safe-area-inset-top,0px);left:env(safe-area-inset-left,0px)}button{all:unset;display:block;width:100%;height:100%;cursor:pointer;pointer-events:auto;border-radius:40%;-webkit-tap-highlight-color:transparent}button:focus-visible{outline:2px solid #b8a061;outline-offset:-8px}svg{display:block;width:100%;height:100%;overflow:visible}button:hover{cursor:pointer}.credit{position:absolute;left:0;right:0;bottom:0;text-align:center;font:9px/1.3 sans-serif;color:var(--cat-credit,#7b7c6c);letter-spacing:.25px;pointer-events:none}svg [data-part="credit"]{opacity:0}:host([credit-mode="external"]) .credit{display:none}@media(max-width:600px){:host([position]){width:min(var(--cat-size,180px),35vw)}}';
class mt extends HTMLElement {
  static observedAttributes = ["sleep-after", "paused", "sound-src", "cat-name"];
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `<style>${gt}${nt}</style><button type="button" aria-label="${V} streicheln">${ct(`samt-${++ut}`)}</button><span class="credit">${at}</span>`, this.parts = Object.fromEntries([...this.shadowRoot.querySelectorAll("[data-part]")].map((t) => [t.dataset.part, t])), this.state = "curious", this.lastActivity = 0, this.lastPointerWake = 0, this.lastFrame = 0, this.time = 0, this.gaze = { x: 0, y: 0 }, this.target = { x: 0, y: 0 }, this.pose = { sleep: 0, blink: 1, pet: 0, stretch: 0, groom: 0, headX: 0, headY: 0 }, this.nextBlink = 2 + Math.random() * 3, this.blinkStart = -100, this.nextAction = 7 + Math.random() * 7, this.actionUntil = 0, this.override = null, this.wakeUntil = 0, this.sleepElapsed = 0, this.nearTime = 0, this.swatCooldown = 0, this.pointer = null, this.audioVolume = 0, this.actionStarted = 0, this.groomVariant = 0, this.groomCount = 0, this.frame = this.frame.bind(this);
  }
  connectedCallback() {
    this.abort?.abort(), this.abort = new AbortController();
    const t = this.abort.signal;
    this.media = matchMedia("(prefers-reduced-motion: reduce)"), this.lastActivity = performance.now(), this.lastFrame = 0, window.addEventListener("pointermove", (i) => {
      if (i.pointerType === "touch") return;
      this.pointer = { x: i.clientX, y: i.clientY };
      const c = this.getBoundingClientRect();
      this.target = { x: y((i.clientX - c.left - c.width * 0.5) / Math.max(120, innerWidth * 0.32), -1, 1), y: y((i.clientY - c.top - c.height * 0.43) / Math.max(100, innerHeight * 0.3), -1, 1) };
      const g = performance.now();
      g - this.lastPointerWake > 120 && (this.activity(), this.lastPointerWake = g);
    }, { passive: !0, signal: t }), window.addEventListener("scroll", () => this.activity(), { passive: !0, signal: t, capture: !0 }), window.addEventListener("keydown", () => this.activity(), { signal: t }), window.addEventListener("pointerdown", () => this.activity(), { passive: !0, signal: t }), document.addEventListener("visibilitychange", () => {
      cancelAnimationFrame(this.raf), this.lastFrame = 0, document.hidden ? this.stopPurr() : this.start();
    }, { signal: t }), this.media.addEventListener("change", () => {
      this.lastFrame = 0, this.start();
    }, { signal: t }), this.shadowRoot.querySelector("button").addEventListener("click", () => this.perform("petting"), { signal: t }), this.start();
  }
  disconnectedCallback() {
    this.abort?.abort(), cancelAnimationFrame(this.raf), this.stopPurr();
  }
  attributeChangedCallback(t) {
    if ((t === "sound-src" || t === "paused") && this.stopPurr(), t === "cat-name") {
      const i = this.getAttribute("cat-name") || V;
      this.shadowRoot.querySelector("button").setAttribute("aria-label", `${i} streicheln`), this.shadowRoot.querySelector("svg").setAttribute("aria-label", `${i}, eine kleine Katze mit großen Augen`);
    }
    this.isConnected && this.start();
  }
  get sleepAfter() {
    const t = Number(this.getAttribute("sleep-after") || 35);
    return Number.isFinite(t) ? y(t, 5, 3600) : 35;
  }
  start() {
    cancelAnimationFrame(this.raf), document.hidden || (this.raf = requestAnimationFrame(this.frame));
  }
  activity() {
    const t = performance.now();
    t < (this.ignoreActivityUntil || 0) || (this.lastActivity = t, (this.override === "sleeping" || this.override === "drowsy") && (this.override = null), (this.state === "sleeping" || this.state === "drowsy") && (this.wakeUntil = t + 2200, this.blinkStart = this.time + 0.7));
  }
  perform(t) {
    ["curious", "sleeping", "drowsy", "stretching", "grooming", "petting", "swatting", "auto"].includes(t) && (this.lastActivity = performance.now(), this.override = t === "auto" ? null : t, this.ignoreActivityUntil = t === "sleeping" ? performance.now() + 900 : 0, this.actionStarted = performance.now(), t === "grooming" && (this.groomVariant = this.groomCount++ % 3), ["petting", "stretching", "grooming", "swatting"].includes(t) && (this.actionUntil = performance.now() + (t === "grooming" ? 12200 : t === "swatting" ? 3900 : t === "stretching" ? 5600 : 4200)), t === "petting" && this.playPurr(), t === "curious" && (this.wakeUntil = performance.now() + 1800), this.start());
  }
  playPurr() {
    const t = this.getAttribute("sound-src");
    t && ((!this.audio || this.audio.dataset.source !== t) && (this.stopPurr(), this.audio?.remove(), this.audio = new Audio(t), this.audio.dataset.source = t, this.audio.loop = !0, this.audio.preload = "none", this.audio.hidden = !0, this.audio.setAttribute("aria-hidden", "true"), this.shadowRoot.append(this.audio)), this.audio.paused && (this.audio.volume = 0, this.audioVolume = 0, this.audio.play().catch(() => this.dispatchEvent(new CustomEvent("cataudio", { detail: { playing: !1, label: "Das Schnurren konnte nicht gestartet werden." }, bubbles: !0, composed: !0 })))));
  }
  stopPurr() {
    this.audio && (this.audio.pause(), this.audio.volume = 0, this.audioVolume = 0);
  }
  setState(t) {
    t !== this.state && (this.state = t, this.dispatchEvent(new CustomEvent("catstate", { detail: { state: t, label: dt[t] }, bubbles: !0, composed: !0 })));
  }
  frame(t) {
    const i = this.lastFrame ? y((t - this.lastFrame) / 1e3, 0, 0.05) : 0.016666666666666666;
    this.lastFrame = t;
    const c = this.media.matches, g = this.hasAttribute("paused");
    g || (this.time += i);
    const o = this.time;
    this.override && !["sleeping", "drowsy", "curious"].includes(this.override) && t > this.actionUntil && (this.override = null);
    let s = this.override || ht((t - this.lastActivity) / 1e3, this.sleepAfter);
    if (!this.override && t < this.wakeUntil && (s = "waking"), !this.override && s === "curious" && o > this.nextAction && !c && !g && (this.override = Math.random() < 0.55 ? "watching" : Math.random() < 0.5 ? "grooming" : "stretching", this.actionStarted = t, this.override === "grooming" && (this.groomVariant = Math.floor(Math.random() * 3)), this.actionUntil = t + (this.override === "grooming" ? 12200 : this.override === "stretching" ? 5600 : 4200), this.nextAction = o + 12 + Math.random() * 15, s = this.override), this.pointer && !this.override && !["sleeping", "drowsy", "waking"].includes(s) && !g && !c && t > this.swatCooldown) {
      const r = this.shadowRoot.querySelector("svg").getBoundingClientRect(), d = Math.min(r.width, r.height * 320 / 340), M = d * 340 / 320, tt = { x: r.left + (r.width - d) / 2 + d * 0.5, y: r.top + (r.height - M) / 2 + M * 0.51 }, rt = Math.hypot((this.pointer.x - tt.x) / (d * 0.25), (this.pointer.y - tt.y) / (M * 0.18)) < 1;
      this.nearTime = rt ? this.nearTime + i : 0, this.nearTime > 1.3 && (this.perform("swatting"), this.swatCooldown = t + 1e4, this.nearTime = 0, s = "swatting");
    } else this.nearTime = 0;
    if (this.setState(s), g) return;
    const k = s === "sleeping", z = s === "drowsy";
    if (this.sleepElapsed = k || this.sleepElapsed > 0 && this.pose.sleep > 0.05 ? this.sleepElapsed + i : 0, this.audio) {
      const r = s === "petting" ? y(Number(this.getAttribute("volume") || 35) / 100, 0, 1) : 0;
      this.audioVolume = u(this.audioVolume, r, s === "petting" ? 3 : 5, i), this.audio.volume = y(this.audioVolume, 0, 1), r === 0 && this.audioVolume < 2e-3 && this.audio.pause();
    }
    o > this.nextBlink && (this.blinkStart = o, this.nextBlink = o + 3.5 + Math.random() * 5);
    const x = o - this.blinkStart, L = x >= 0 && x < 0.26 ? 1 - Math.sin(x / 0.26 * Math.PI) : 1, e = this.pose;
    e.sleep = u(e.sleep, k ? 1 : z ? 0.36 : 0, k ? 1.2 : s === "waking" ? 1.05 : 2.5, i), e.blink = u(e.blink, k ? 0 : z ? 0.3 : s === "petting" ? 0.1 : s === "grooming" ? L * 0.55 : s === "stretching" ? L * 0.7 : L, 30, i), e.pet = u(e.pet, s === "petting" ? 1 : 0, 3, i);
    const S = (t - this.actionStarted) / 1e3, h = pt(s, S, this.groomVariant);
    e.stretch = u(e.stretch, h.stretch || 0, 10, i), e.groom = u(e.groom, h.lift || 0, 12, i), e.wipe = u(e.wipe || 0, h.wipe || 0, 14, i), e.chest = u(e.chest || 0, h.chest || 0, 9, i), e.flank = u(e.flank || 0, h.flank || 0, 9, i), e.reach = u(e.reach || 0, h.reach || 0, 10, i);
    const P = s === "grooming" ? { x: -0.25 + (h.side || 0) * 0.6 + e.flank * 0.7, y: 0.6 + e.chest * 0.3 } : s === "watching" ? { x: Math.sin(o * 0.8) * 0.7, y: -0.4 } : this.target;
    this.gaze.x = u(this.gaze.x, P.x, 6, i), this.gaze.y = u(this.gaze.y, P.y, 6, i);
    const C = this.gaze.x * (1 - e.sleep), T = this.gaze.y * (1 - e.sleep), f = c ? 0 : 1, B = Math.sin(o * (k ? 1.7 : 2.2)) * (k ? 1.6 : 0.65) * f, l = e.sleep, w = e.stretch, m = e.groom, Z = e.pet;
    (t - this.actionStarted) / 1e3;
    const et = Math.max(h.left || 0, h.right || 0);
    e.swat = u(e.swat || 0, et, 12, i);
    const A = e.swat, R = (h.rise || 0) * 3 * f;
    e.leftReach = u(e.leftReach || 0, h.left || 0, 14, i), e.rightReach = u(e.rightReach || 0, h.right || 0, 14, i);
    const n = (r, d) => this.parts[r].setAttribute("transform", d), p = (r, d) => this.parts[r].setAttribute("opacity", String(d));
    n("root", `translate(${f * Math.sin(o * 0.44) * 0.7} ${-R})`), n("body", `translate(${158 + m * 3 + w * 1.5} 310) scale(${1 + l * 0.28 + w * 0.06 - A * 0.04} ${1 - l * 0.47 - w * 0.08 + A * 0.03 + B * 4e-3}) translate(-158 -310)`);
    const q = ft(w, A);
    this.parts.torso.setAttribute("d", q), this.parts["torso-light"].setAttribute("d", q);
    const it = (C * 5 + Math.sin(o * 0.65) * 1.1 * f) * (1 - l) - l * 17 + Z * -8 + m * 10 - e.wipe * 7 - w * 4 + e.chest * 13 + e.flank * 24 + (h.shake || 0) * 2;
    n("head", `translate(${C * 5 - l * 26 - w * 3 - m * 8 + e.flank * 15} ${T * 3 + l * 83 + w * 25 + B + m * 9 - e.wipe * 10 - R * 3 + e.chest * 27 + e.flank * 23 + (h.lick || 0) * 1.2 * f}) rotate(${it} 158 175)`);
    const E = y(e.blink * (1 - l), 0.015, 1);
    n("eye-l", `translate(119 143) scale(1 ${E}) translate(-119 -143)`), n("eye-r", `translate(198 143) scale(1 ${E}) translate(-198 -143)`), p("eye-l", y(E * 7, 0, 1)), p("eye-r", y(E * 7, 0, 1)), p("closed-eyes", 1 - y(E * 5, 0, 1)), n("pupil-l", `translate(${C * 9} ${T * 6})`), n("pupil-r", `translate(${C * 9} ${T * 6})`);
    const I = Math.pow(Math.max(0, Math.sin(o * 1.13)), 18) * 9 * f;
    n("ear-l", `rotate(${-I + Z * 9 - l * 7} 103 105)`), n("ear-r", `rotate(${I * 0.6 - Z * 8 + l * 7} 219 105)`), n("paw-l", `translate(${-e.reach * 10} ${e.reach * 2}) rotate(${e.reach * 6} 132 248) scale(${1 + (h.toes || 0) * 0.025} 1)`), n("paw-r", `translate(${e.reach * 10} ${e.reach * 2}) rotate(${-e.reach * 6} 185 248)`);
    const N = Math.sin(o * 1.25) * f * (1 - l) * 13, F = `M207 286 C${270 + l * 14} ${312 - l * 5} ${294 + l * 5} ${260 + l * 41} ${265 - l * 26 + N} ${238 + l * 61} C${246 - l * 26 + N} ${224 + l * 75} ${242 - l * 30} ${245 + l * 51} ${255 - l * 39} ${253 + l * 48}`;
    this.parts.tail.setAttribute("d", F), this.parts["tail-light"].setAttribute("d", F), this.parts["tail-shadow"].setAttribute("d", F), p("sleep-marks", l);
    for (let r = 0; r < 3; r++) {
      const d = (this.sleepElapsed + r * 1.7) % 5.1 / 5.1, M = Math.pow(Math.sin(d * Math.PI), 2) * 0.7;
      p(`sleep-z-${r}`, M), n(`sleep-z-${r}`, `translate(${d * 29 * f} ${26 - d * 65 * f}) scale(${0.8 + d * 0.3})`);
    }
    this.parts["sleep-blur"].setAttribute("stdDeviation", String(c ? 0 : this.sleepElapsed % 5.1 / 5.1 * 1.5));
    const W = this.sleepElapsed - 8, D = W >= 0 ? W % 24 / 7 : 2, H = D <= 1 ? Math.pow(Math.sin(D * Math.PI), 2) : 0;
    p("dream-cloud", H * l), n("dream-cloud", `translate(${Math.sin(o * 0.6) * 2 * f} ${7 - H * 10 + Math.sin(o * 0.7) * 2 * f})`), p("hearts", Z);
    for (let r = 0; r < 4; r++) {
      const d = (o + r * 0.67) % 2.7 / 2.7, M = r % 2 === 0 ? -1 : 1;
      p(`heart-${r}`, Math.pow(Math.sin(d * Math.PI), 0.8)), n(`heart-${r}`, `translate(${158 + M * (70 + d * 30) + Math.sin(o * 2 + r) * 6 * f} ${145 - d * 110 * f}) rotate(${M * (12 + Math.sin(o + r) * 10 * f)}) scale(${(0.6 + r * 0.12) * (0.7 + d * 0.35)})`);
    }
    p("glass-paws", Math.min(1, A * 3));
    const $ = e.leftReach, Q = e.rightReach, O = 130 - $ * 11 + C * 7 * $, X = 299 - $ * 127 - R * 2, Y = 188 + Q * 13 + C * 7 * Q, j = 299 - Q * 122 - R * 2;
    this.parts["raised-arm-l"].setAttribute("d", G(132, 238, O, X, -7 * $)), this.parts["raised-arm-r"].setAttribute("d", G(188, 238, Y, j, 7 * Q)), n("glass-paw-l", `translate(${O} ${X}) rotate(${-$ * 9}) scale(${0.75 + $ * 0.32} ${0.78 + $ * 0.26})`), n("glass-paw-r", `translate(${Y} ${j}) rotate(${Q * 9}) scale(${0.75 + Q * 0.32} ${0.78 + Q * 0.26})`), p("glass-ripples", (h.press || 0) * 0.22), n("glass-ripples", "translate(0 -18)"), p("paw-l", 1 - Math.max($, m)), p("paw-r", 1 - Q), n("shadow", `translate(160 312) scale(${1 + l * 0.35 + w * 0.08} ${1 - A * 0.2}) translate(-160 -312)`);
    const v = this.getAttribute("lighting") === "night", K = v ? 0.4 : 0.24;
    n("tail-shadow", `matrix(1 0 ${-K} -.16 ${312 * K} ${312 * 1.16 + 2})`), p("tail-shadow", v ? 0.27 : 0.18), p("shadow", (v ? 0.43 : 0.33) - A * 0.05), p("cast-shadow", (v ? 0.23 : 0.16) + w * 0.03), n("cast-shadow", `translate(160 312) skewX(${v ? 22 : 10}) scale(${v ? 1.18 : 1} ${v ? 1.15 : 0.85}) translate(-160 -312)`);
    const _ = 133 + m * 14 + e.wipe * (h.side ? 29 : -24), J = 300 - m * 108 - e.wipe * 39;
    p("groom-limb", Math.min(1, m * 4)), this.parts["groom-arm"].setAttribute("d", G(133, 237, _, J, -13 * m)), n("groom-hand", `translate(${_} ${J}) rotate(${-m * 12 - e.wipe * 17}) scale(1.12)`), p("tongue", (h.lick || 0) * Math.max(m, e.chest, e.flank)), n("tongue", `translate(-3 ${(h.lick || 0) * 2})`), n("whiskers", `translate(0 ${Math.sin(o * 2.2) * 0.4 * f})`), this.raf = requestAnimationFrame(this.frame);
  }
}
customElements.get("samt-pfote") || customElements.define("samt-pfote", mt);
export {
  mt as Samtpfote
};
