const W = "Miso", yt = "samtpfote", vt = "hallowelt42", dt = `${vt} / ${yt}`;
function wt(e) {
  return String(e).replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
}
function kt(e, t = W) {
  return `<svg viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${wt(t)}, eine kleine Katze mit großen Augen">
<defs>
 <linearGradient id="${e}-side-light" x1="0" y1="0" x2="1" y2=".6"><stop stop-color="#ffdda2" stop-opacity=".65"/><stop offset=".45" stop-color="#e8bc78" stop-opacity=".15"/><stop offset="1" stop-color="#e8bc78" stop-opacity="0"/></linearGradient>
 <filter id="${e}-contact-soft" x="-60%" y="-120%" width="220%" height="340%"><feGaussianBlur stdDeviation="2"/></filter>
 <filter id="${e}-cast-soft" x="-60%" y="-120%" width="220%" height="340%"><feGaussianBlur stdDeviation="4"/></filter>
 <filter id="${e}-dream-blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur data-part="sleep-blur" stdDeviation="0"/></filter>
 <radialGradient id="${e}-fur" cx=".3" cy=".15" r=".9"><stop stop-color="var(--cat-fur-top,#35312e)"/><stop offset=".5" stop-color="var(--cat-fur-mid,#191715)"/><stop offset="1" stop-color="var(--cat-fur-base,#0e0d0c)"/></radialGradient>
 <radialGradient id="${e}-head" cx=".32" cy=".12" r="1"><stop stop-color="var(--cat-head-top,#38332f)"/><stop offset=".55" stop-color="var(--cat-head-mid,#1b1917)"/><stop offset="1" stop-color="var(--cat-head-base,#11100e)"/></radialGradient>
 <radialGradient id="${e}-iris" cx=".4" cy=".3" r=".8"><stop stop-color="var(--cat-iris-top,#fff3b8)"/><stop offset=".48" stop-color="var(--cat-iris-mid,#e8d77c)"/><stop offset="1" stop-color="var(--cat-iris-base,#b29440)"/></radialGradient>
 <linearGradient id="${e}-ear" x2="1" y2="1"><stop stop-color="#dba6a0"/><stop offset="1" stop-color="#805c6a"/></linearGradient>
 <clipPath id="${e}-eye-l"><ellipse cx="119" cy="143" rx="23" ry="26"/></clipPath>
 <clipPath id="${e}-eye-r"><ellipse cx="198" cy="143" rx="23" ry="26"/></clipPath>
</defs>
<path data-part="tail-shadow" d="M207 286 C270 312 294 260 265 238 C246 224 242 245 255 253" stroke="#211508" stroke-width="22" stroke-linecap="round" opacity=".2" filter="url(#${e}-cast-soft)"/>
<path data-part="cast-shadow" d="M105 307Q162 300 212 308Q240 315 286 325Q301 336 263 335L162 325Q104 324 105 307Z" fill="#27190d" opacity=".2" filter="url(#${e}-cast-soft)"/>
<ellipse data-part="shadow" cx="160" cy="312" rx="65" ry="7" fill="#1c1209" opacity=".35" filter="url(#${e}-contact-soft)"/>
<g data-part="root">
<path data-part="tail" d="M207 286 C270 312 294 260 265 238 C246 224 242 245 255 253" stroke="var(--cat-tail,#171512)" stroke-width="24" stroke-linecap="round"/>
<path data-part="tail-light" d="M207 282 C270 308 294 256 265 234 C246 220 242 241 255 249" stroke="var(--cat-tail-light,#45403a)" stroke-opacity=".4" stroke-width="3" stroke-linecap="round"/>
<g data-part="body">
 <path data-part="torso" d="M129 190 C119 192 115 203 111 214 Q102 224 101 239 C90 251 85 272 91 290 C95 306 119 311 157 311 C193 313 221 306 225 290 C232 273 221 248 215 238 Q214 223 204 213 C201 201 193 192 187 190 Q158 203 129 190Z" fill="url(#${e}-fur)"/>
 <path data-part="torso-light" d="M129 190 C119 192 115 203 111 214 Q102 224 101 239 C90 251 85 272 91 290 C95 306 119 311 157 311 C193 313 221 306 225 290 C232 273 221 248 215 238 Q214 223 204 213 C201 201 193 192 187 190 Q158 203 129 190Z" fill="url(#${e}-side-light)" opacity="var(--cat-light-opacity,0)"/>
 <path d="M112 252 C94 253 86 272 91 289 Q85 300 96 306 Q111 313 129 305 Q141 298 131 281 C129 265 124 254 112 252Z" fill="var(--cat-fur-detail,#211e1b)"/><path d="M96 301 Q97 297 99 297 M104 305 Q104 300 107 300" stroke="var(--cat-toe,#796c5e)" stroke-opacity=".4" stroke-width="1.3" stroke-linecap="round"/>
 <path d="M207 253 C224 252 233 275 226 289 Q232 301 223 306 Q209 313 191 305 Q182 299 188 282 C189 267 196 256 207 253Z" fill="var(--cat-fur-shadow,#191613)"/><path d="M218 302 Q218 298 215 298 M210 306 Q210 302 208 301" stroke="var(--cat-toe,#796c5e)" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/>
 <path d="M133 211 Q148 225 161 215 Q174 223 186 209" stroke="#3c404c" stroke-width="1.5" opacity=".65"/>
 <path d="M122 232 Q116 266 125 298 M192 232 Q199 269 190 298" stroke="var(--cat-line,#0d0c0a)" stroke-width="3" stroke-linecap="round"/>
 <g data-part="paw-l"><path d="M124 245 C123 260 119 278 121 291 Q119 297 114 299 C108 303 109 311 116 314 Q122 318 129 315 Q137 320 146 315 C155 315 157 307 152 301 Q147 296 148 288 L149 248" fill="var(--cat-fur-detail,#211e1b)"/><path d="M119 303 Q116 308 119 313 M131 304 Q127 311 130 315 M143 303 Q140 309 143 314" stroke="var(--cat-toe,#65594e)" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <g data-part="paw-r"><path d="M172 248 L173 287 Q176 296 171 300 C164 306 167 315 176 315 Q184 319 191 315 Q202 319 208 312 C213 305 207 299 202 296 Q198 283 197 272 L194 245" fill="var(--cat-paw,#1f1c18)"/><path d="M176 304 Q172 310 176 315 M188 305 Q184 311 188 316 M201 303 Q198 309 202 314" stroke="var(--cat-toe,#65594e)" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <path d="M101 245 Q94 266 99 274 M213 245 Q222 270 216 282" stroke="var(--cat-body-light,#6a5f53)" stroke-opacity=".4" stroke-linecap="round" stroke-width="2"/>
</g>
<g data-part="head">
 <g data-part="ear-l"><path d="M84 123 Q65 91 77 46 Q80 40 86 47 L128 85Z" fill="var(--cat-fur-detail,#211e1b)" stroke="var(--cat-edge,#3d3730)" stroke-width="1.5"/><path d="M88 91 L83 60 Q100 73 109 89 L98 100Z" fill="url(#${e}-ear)"/><path d="M83 90 L92 82 L88 100" fill="var(--cat-tuft,#29241f)"/></g>
 <g data-part="ear-r"><path d="M191 86 L230 46 Q236 39 240 46 Q253 89 234 124Z" fill="var(--cat-ear,#1b1815)" stroke="var(--cat-edge,#3d3730)" stroke-width="1.5"/><path d="M213 88 Q221 72 232 60 L231 97 L220 101Z" fill="url(#${e}-ear)"/><path d="M229 86 L236 96 L225 102" fill="var(--cat-tuft,#26211c)"/></g>
 <path d="M81 122 C86 97 103 84 128 82 Q135 75 142 76 Q137 80 140 83 Q151 78 158 76 Q153 80 155 82 C195 76 225 89 236 120 Q238 127 243 131 L239 132 Q243 141 249 145 Q245 147 241 146 Q244 156 249 161 Q244 163 240 160 C238 181 226 194 207 200 Q191 213 161 214 Q128 213 110 202 C91 196 79 183 77 165 Q72 166 68 162 Q74 156 76 149 Q71 152 67 148 Q74 140 77 134 L73 134 Q78 128 81 122Z" fill="url(#${e}-head)"/>
 <path d="M81 122 C86 97 103 84 128 82 Q135 75 142 76 Q137 80 140 83 Q151 78 158 76 Q153 80 155 82 C195 76 225 89 236 120 Q238 127 243 131 L239 132 Q243 141 249 145 Q245 147 241 146 Q244 156 249 161 Q244 163 240 160 C238 181 226 194 207 200 Q191 213 161 214 Q128 213 110 202 C91 196 79 183 77 165 Q72 166 68 162 Q74 156 76 149 Q71 152 67 148 Q74 140 77 134 L73 134 Q78 128 81 122Z" fill="url(#${e}-side-light)" opacity="var(--cat-light-opacity,0)"/>
 <path d="M102 105 Q115 97 129 101 M188 101 Q203 96 216 105" stroke="var(--cat-brow,#645b50)" stroke-width="2" stroke-linecap="round" opacity=".55"/>
 <g data-part="eye-l"><ellipse cx="119" cy="143" rx="26" ry="29" fill="var(--cat-line,#0d0c0a)"/><ellipse cx="119" cy="143" rx="23" ry="26" fill="url(#${e}-iris)"/><g clip-path="url(#${e}-eye-l)"><g data-part="pupil-l"><ellipse cx="122" cy="142" rx="13.5" ry="22" fill="#16120e"/><ellipse cx="116" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="130" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M99 152 Q103 165 115 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/><g clip-path="url(#${e}-eye-l)"><path data-part="lid-upper-l" d="M94 110H144V117Q119 117 94 117Z" fill="var(--cat-head-mid,#1b1917)"/><path data-part="lid-lower-l" d="M94 176H144V169Q119 169 94 169Z" fill="var(--cat-head-mid,#1b1917)"/></g></g>
 <g data-part="eye-r"><ellipse cx="198" cy="143" rx="26" ry="29" fill="var(--cat-line,#0d0c0a)"/><ellipse cx="198" cy="143" rx="23" ry="26" fill="url(#${e}-iris)"/><g clip-path="url(#${e}-eye-r)"><g data-part="pupil-r"><ellipse cx="195" cy="142" rx="13.5" ry="22" fill="#16120e"/><ellipse cx="189" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="203" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M179 152 Q182 164 193 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/><g clip-path="url(#${e}-eye-r)"><path data-part="lid-upper-r" d="M173 110H223V117Q198 117 173 117Z" fill="var(--cat-head-mid,#1b1917)"/><path data-part="lid-lower-r" d="M173 176H223V169Q198 169 173 169Z" fill="var(--cat-head-mid,#1b1917)"/></g></g>
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
 <g data-part="sleep-z-0" filter="url(#${e}-dream-blur)"><text x="233" y="133" font-size="14">z</text></g>
 <g data-part="sleep-z-1" filter="url(#${e}-dream-blur)"><text x="233" y="133" font-size="18">z</text></g>
 <g data-part="sleep-z-2" filter="url(#${e}-dream-blur)"><text x="233" y="133" font-size="22">z</text></g>
</g>
<g data-part="dream-cloud" opacity="0" aria-hidden="true">
 <circle cx="213" cy="146" r="3" fill="#fffaf0" fill-opacity=".8"/>
 <circle cx="224" cy="129" r="5" fill="#fffaf0" fill-opacity=".85"/>
 <path d="M224 111C211 114 203 104 208 95C193 91 200 76 210 75C207 60 222 51 234 56C243 41 262 44 267 55C280 52 292 63 287 75C302 81 297 99 285 101C285 114 269 119 259 112C247 124 229 123 224 111Z" fill="#fffaf0" fill-opacity=".94" stroke="#c6c4b3" stroke-width="1"/>
 <path d="M250 62Q249 50 261 48Q276 47 272 36" stroke="#8d9888" stroke-width="2" stroke-linecap="round"/>
 <g transform="rotate(20 250 87)"><rect x="235" y="66" width="30" height="40" rx="14" fill="#a7b49a" stroke="#718568" stroke-width="1.3"/><path d="M250 67V83 M235 82H265" stroke="#718568" stroke-width="1.2"/><rect x="247.8" y="71" width="4.4" height="9" rx="2.2" fill="#e7d396"/><path d="M241 89Q239 96 243 99" stroke="#d2ddc6" stroke-width="2" stroke-linecap="round"/></g>
 <path d="M221 66L223 61 M217 63L227 64 M280 101L281 96 M277 98L285 99" stroke="#c9b67b" stroke-width="1.5" stroke-linecap="round"/>
</g>
<text data-part="credit" x="160" y="335" text-anchor="middle" font-family="sans-serif" font-size="8" fill="var(--cat-credit,#85877b)" letter-spacing=".4">${dt}</text>
</svg>`;
}
const xt = `
:host([coat="cream"]){--cat-fur-top:#f5e8d2;--cat-fur-mid:#e5d2ae;--cat-fur-base:#bfa783;--cat-head-top:#fff2db;--cat-head-mid:#e9d6b5;--cat-head-base:#c5ab87;--cat-tail:#ceb58f;--cat-tail-light:#f5e4c9;--cat-fur-detail:#e3c9a3;--cat-fur-shadow:#c9af89;--cat-paw:#dcc29d;--cat-line:#a98f6d;--cat-ear:#d5ba97;--cat-edge:#bd9f7b;--cat-tuft:#e3c8a4;--cat-brow:#b99d7b;--cat-muzzle:#f4e6d0;--cat-whisker:#8e7b68;--cat-nose:#b88283;--cat-mouth:#886a65;--cat-chin:#aa8e72;--cat-toe:#9a8064;--cat-body-light:#f4e4c8;--cat-iris-top:#e4efbd;--cat-iris-mid:#a6bb72;--cat-iris-base:#6b8849;--cat-credit:#9d9d8b}
:host([coat="smoke"]){--cat-fur-top:#a39b8f;--cat-fur-mid:#82786a;--cat-fur-base:#594f43;--cat-head-top:#b2a799;--cat-head-mid:#908576;--cat-head-base:#645749;--cat-tail:#746555;--cat-tail-light:#baaa96;--cat-fur-detail:#928471;--cat-fur-shadow:#6c5d4d;--cat-paw:#887763;--cat-line:#514333;--cat-ear:#87745f;--cat-edge:#77644f;--cat-tuft:#9a8870;--cat-brow:#cfbfa9;--cat-muzzle:#b5a48e;--cat-whisker:#e5d5b9;--cat-nose:#d0a093;--cat-mouth:#d7b8a1;--cat-chin:#cab79e;--cat-toe:#d9c7ae;--cat-body-light:#e1d0b6}
@media(prefers-color-scheme:dark){:host([coat="auto"]),:host(:not([coat])){--cat-fur-top:#f5e8d2;--cat-fur-mid:#e5d2ae;--cat-fur-base:#bfa783;--cat-head-top:#fff2db;--cat-head-mid:#e9d6b5;--cat-head-base:#c5ab87;--cat-tail:#ceb58f;--cat-tail-light:#f5e4c9;--cat-fur-detail:#e3c9a3;--cat-fur-shadow:#c9af89;--cat-paw:#dcc29d;--cat-line:#a98f6d;--cat-ear:#d5ba97;--cat-edge:#bd9f7b;--cat-tuft:#e3c8a4;--cat-brow:#b99d7b;--cat-muzzle:#f4e6d0;--cat-whisker:#8e7b68;--cat-nose:#b88283;--cat-mouth:#886a65;--cat-chin:#aa8e72;--cat-toe:#9a8064;--cat-body-light:#f4e4c8;--cat-iris-top:#e4efbd;--cat-iris-mid:#a6bb72;--cat-iris-base:#6b8849;--cat-credit:#9d9d8b}}
:host([lighting="day"]){--cat-light-opacity:.065}
:host([lighting="night"]){--cat-light-opacity:.15}
:host([lighting="night"][coat="black"]){--cat-fur-top:#3e3225;--cat-head-top:#443626;--cat-edge:#51432f;--cat-brow:#6d5b42;--cat-body-light:#736047;--cat-whisker:#c0a782}
`, $ = (e, t, a) => Math.max(t, Math.min(a, e)), g = (e, t, a, i) => t + (e - t) * Math.exp(-a * i);
function $t(e, t, a = 0.62) {
  return e >= t ? "sleeping" : e >= t * a ? "drowsy" : "curious";
}
const Mt = { curious: "Neugierig", drowsy: "Schläfrig", sleeping: "Im Traumland", waking: "Wird langsam wach", petting: "Genießt die Streicheleinheit", stretching: "Streckt sich", grooming: "Putzt sich in aller Ruhe", watching: "Schaut sich um", swatting: "Oh! Eine Maus vor der Nase" }, N = (e) => {
  const t = $(e, 0, 1);
  return t * t * (3 - 2 * t);
};
function x(e, t) {
  if (e <= t[0][0]) return t[0][1];
  for (let a = 1; a < t.length; a++) if (e <= t[a][0]) {
    const [i, c] = t[a - 1], [p, o] = t[a];
    return c + (o - c) * N((e - i) / (p - i));
  }
  return t.at(-1)[1];
}
function Qt(e, t, a = 0) {
  if (e === "stretching") return {
    stretch: x(t, [[0, 0], [0.6, 0.08], [1.7, 1], [3.2, 1], [4.5, 0.15], [5.4, 0]]),
    reach: x(t, [[0, 0], [0.45, 0], [1.3, 1], [3.3, 1], [4.9, 0]]),
    toes: x(t, [[0, 0], [1.5, 0], [2, 1], [3.2, 0.7], [4.5, 0]])
  };
  if (e === "grooming") {
    const i = a !== 2, c = x(t, i ? [[0, 0], [0.4, 0], [1.1, 1], [6.9, 1], [7.8, 0]] : [[0, 0], [0.4, 0], [1.1, 1], [4.5, 1], [5.3, 0]]), p = i ? [[1.25, 2.65], [4.5, 5.65]] : [[1.25, 2.65]];
    let o = 0;
    for (const [n, D] of p) if (t >= n && t <= D) {
      const w = N((t - n) / 0.2) * N((D - t) / 0.2);
      o = Math.pow(Math.max(0, Math.sin((t - n) * 10)), 2) * w;
    }
    const h = x(t, i ? [[0, 0], [2.8, 0], [3.3, 1], [3.8, 0.12], [4.15, 0.8], [4.5, 0], [5.75, 0], [6.2, 1], [6.7, 0.1], [7.1, 0.75], [7.5, 0]] : [[0, 0], [2.8, 0], [3.3, 1], [3.9, 0.1], [4.3, 0.9], [4.7, 0]]), m = x(t, i ? [[0, 0], [7.6, 0], [8.2, 1], [9.5, 1], [10.3, 0]] : [[0, 0], [5.3, 0], [6, 1], [8, 1], [8.6, 0]]), E = a === 2 ? x(t, [[0, 0], [8.25, 0], [8.9, 1], [10, 1], [10.6, 0]]) : 0, I = (m + E) * Math.pow(Math.max(0, Math.sin(t * 8)), 2), Z = t > 10.5 && t < 11.3 ? Math.sin((t - 10.5) * 18) * Math.sin((t - 10.5) / 0.8 * Math.PI) : 0;
    return { lift: c, lick: Math.max(o, I), wipe: h, chest: m, flank: E, shake: Z, side: a === 1 ? 1 : 0 };
  }
  return e === "swatting" ? {
    left: x(t, [[0, 0], [0.25, 0.05], [0.8, 1], [1.45, 1], [1.85, 0.9], [2.25, 1], [2.7, 0.65], [3.5, 0]]),
    right: x(t, [[0, 0], [0.45, 0], [1.2, 1], [1.75, 0.92], [2.15, 1], [2.8, 0.65], [3.65, 0]]),
    rise: x(t, [[0, 0], [0.25, -0.1], [0.95, 1], [2.6, 1], [3.7, 0]]),
    press: x(t, [[0, 0], [0.85, 0], [1.1, 1], [1.45, 0], [1.85, 0.75], [2.2, 0], [2.5, 0.5], [2.85, 0]])
  } : {};
}
function O(e, t, a, i, c = 0) {
  const p = e + (a - e) * 0.3 + c, o = t + (i - t) * 0.55;
  return `M${e - 9} ${t} Q${p - 10} ${o} ${a - 10} ${i + 7} Q${a} ${i + 17} ${a + 10} ${i + 7} Q${p + 10} ${o + 3} ${e + 9} ${t + 3}Z`;
}
function At(e, t) {
  return `M${129 - e * 4 + t * 3} ${190 + e * 12 - t * 7} C${119 - e * 8 + t * 3} ${192 + e * 10 - t * 6} ${115 - e * 10} ${203 + e * 12 - t * 4} ${111 - e * 8} ${214 + e * 8} Q${102 - e * 4} ${224 + e * 6} 101 239 C90 251 85 272 91 290 C95 306 119 311 157 311 C193 313 221 306 225 290 C232 273 221 248 215 238 Q214 223 ${204 + e * 6} ${213 + e * 8} C${201 + e * 7 - t * 3} ${201 + e * 10 - t * 4} ${193 + e * 5 - t * 3} ${192 + e * 10 - t * 6} ${187 + e * 3 - t * 3} ${190 + e * 12 - t * 7} Q158 ${203 + e * 10 - t * 7} ${129 - e * 4 + t * 3} ${190 + e * 12 - t * 7}Z`;
}
const q = {
  avoidance: { enabled: !0, delay: 3, distance: 0, sizeFactor: 0.5, minDistance: 75, maxDistance: 145, returnDelay: 8, speed: 2.5, margin: 45 },
  gaze: { enabled: !0, smoothing: 6, horizontalRange: 9, verticalRange: 6, headRange: 5 },
  blink: { minInterval: 3.5, maxInterval: 8.5, duration: 0.26 },
  idle: { sleepAfter: 35, drowsyRatio: 0.62, wakeDuration: 2.2 },
  reactions: { swatEnabled: !0, swatDelay: 1.3, swatCooldown: 10 },
  spontaneous: { enabled: !0, minInterval: 12, maxInterval: 27 },
  actions: { petting: 4.2, stretching: 5.6, grooming: 12.2, swatting: 3.9 },
  motion: { enabled: !0, bodyAmplitude: 1, breathingAmplitude: 1, earAmplitude: 1, tailAmplitude: 1, heartScale: 1, stepHeight: 5 },
  dreams: { enabled: !0, delay: 8, interval: 24, duration: 7 },
  audio: { volume: 35 }
}, Ct = {
  "avoidance.speed": [0.2, 30],
  "avoidance.delay": [0, 3600],
  "avoidance.returnDelay": [0, 3600],
  "idle.sleepAfter": [5, 3600],
  "idle.drowsyRatio": [0.05, 0.95],
  "idle.wakeDuration": [0.1, 30],
  "blink.duration": [0.08, 3],
  "blink.minInterval": [0.2, 120],
  "blink.maxInterval": [0.2, 120],
  "gaze.smoothing": [0.1, 60],
  "audio.volume": [0, 100],
  "dreams.duration": [1, 120],
  "dreams.interval": [1, 3600],
  "actions.petting": [0.5, 120],
  "actions.stretching": [0.5, 120],
  "actions.grooming": [0.5, 120],
  "actions.swatting": [0.5, 120]
};
function U(e = {}, t = q) {
  const a = {};
  for (const [i, c] of Object.entries(q)) {
    a[i] = {};
    for (const [p, o] of Object.entries(c)) {
      const h = t[i]?.[p] ?? o, m = e?.[i]?.[p];
      if (typeof o == "boolean") a[i][p] = typeof m == "boolean" ? m : h;
      else {
        const [E, I] = Ct[`${i}.${p}`] || [0, 1e3];
        a[i][p] = typeof m == "number" && Number.isFinite(m) ? Math.max(E, Math.min(I, m)) : h;
      }
    }
  }
  return a.blink.maxInterval = Math.max(a.blink.minInterval, a.blink.maxInterval), a.spontaneous.maxInterval = Math.max(a.spontaneous.minInterval, a.spontaneous.maxInterval), a.avoidance.maxDistance = Math.max(a.avoidance.minDistance, a.avoidance.maxDistance), a.dreams.interval = Math.max(a.dreams.duration, a.dreams.interval), a;
}
function zt(e, t, a = "top-right", i = 0, c = 0) {
  const p = a.endsWith("left") ? e.left : a.endsWith("right") ? e.right - t.width : e.left + (e.width - t.width) / 2, o = a.startsWith("bottom") ? e.bottom : a === "center" ? e.top + e.height / 2 : e.top;
  return { x: p + i, y: o - t.height * (312 / 340) + c };
}
function Et(e, t = "16px") {
  if (e == null || e === "") return t;
  const a = String(e).trim();
  return /^-?(?:\d+\.?\d*|\.\d+)$/.test(a) ? `${a}px` : a;
}
let Pt = 0;
const It = ':host{position:relative;display:block;width:var(--cat-size,170px);height:auto;aspect-ratio:320/340;contain:layout style;isolation:isolate;line-height:0;touch-action:pan-y;user-select:none}:host([position]){position:fixed;z-index:var(--cat-z-index,10000);transform:translate3d(var(--cat-avoid-x,0px),0,0);margin:var(--cat-offset,16px);pointer-events:none}:host([position="bottom-right"]){bottom:env(safe-area-inset-bottom,0px);right:env(safe-area-inset-right,0px)}:host([position="bottom-left"]){bottom:env(safe-area-inset-bottom,0px);left:env(safe-area-inset-left,0px)}:host([position="top-right"]){top:env(safe-area-inset-top,0px);right:env(safe-area-inset-right,0px)}:host([position="top-left"]){top:env(safe-area-inset-top,0px);left:env(safe-area-inset-left,0px)}:host([data-placement="free"]),:host([data-placement="anchor"]){position:fixed;left:var(--cat-position-x,16px);top:var(--cat-position-y,16px);right:auto;bottom:auto;margin:0;transform:none;z-index:var(--cat-z-index,10000);pointer-events:none}:host([data-placement="missing"]){visibility:hidden;position:fixed;left:0;top:0}:host([data-placement="free"]) button,:host([data-placement="anchor"]) button{pointer-events:auto}button{all:unset;display:block;width:100%;height:100%;cursor:pointer;pointer-events:auto;border-radius:40%;-webkit-tap-highlight-color:transparent}button:focus-visible{outline:2px solid #b8a061;outline-offset:-8px}svg{display:block;width:100%;height:100%;overflow:visible}button:hover{cursor:pointer}.credit{position:absolute;left:0;right:0;bottom:0;text-align:center;font:9px/1.3 sans-serif;color:var(--cat-credit,#7b7c6c);letter-spacing:.25px;pointer-events:none}svg [data-part="credit"]{opacity:0}:host([credit-mode="external"]) .credit{display:none}@media(max-width:600px){:host([position]){width:min(var(--cat-size,170px),35vw)}}';
class Lt extends HTMLElement {
  static observedAttributes = ["sleep-after", "paused", "sound-src", "cat-name", "anchor", "anchor-align", "x", "y", "offset-x", "offset-y", "position"];
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `<style>${It}${xt}</style><button type="button" aria-label="${W} streicheln">${kt(`samt-${++Pt}`)}</button><span class="credit">${dt}</span>`, this.parts = Object.fromEntries([...this.shadowRoot.querySelectorAll("[data-part]")].map((t) => [t.dataset.part, t])), this.options = U(), this._anchorElement = null, this._anchorObserver = null, this._observedAnchor = null, this.state = "curious", this.lastActivity = 0, this.lastPointerWake = 0, this.lastFrame = 0, this.time = 0, this.gaze = { x: 0, y: 0 }, this.target = { x: 0, y: 0 }, this.pose = { sleep: 0, blink: 1, pet: 0, stretch: 0, groom: 0, headX: 0, headY: 0 }, this.nextBlink = this.options.blink.minInterval + Math.random() * (this.options.blink.maxInterval - this.options.blink.minInterval), this.blinkStart = -100, this.nextAction = this.options.spontaneous.minInterval + Math.random() * (this.options.spontaneous.maxInterval - this.options.spontaneous.minInterval), this.actionUntil = 0, this.override = null, this.wakeUntil = 0, this.sleepElapsed = 0, this.nearTime = 0, this.swatCooldown = 0, this.pointer = null, this.audioVolume = 0, this.actionStarted = 0, this.groomVariant = 0, this.groomCount = 0, this.avoid = { x: 0, target: 0, dwell: 0, clear: 0, enteredAt: 0 }, this.frame = this.frame.bind(this);
  }
  connectedCallback() {
    this.abort?.abort(), this.abort = new AbortController();
    const t = this.abort.signal;
    this.media = matchMedia("(prefers-reduced-motion: reduce)"), this.lastActivity = performance.now(), this.lastFrame = 0, window.addEventListener("pointermove", (a) => {
      if (a.pointerType === "touch") return;
      this.pointer = { x: a.clientX, y: a.clientY };
      const i = this.getBoundingClientRect();
      this.target = { x: $((a.clientX - i.left - i.width * 0.5) / Math.max(120, innerWidth * 0.32), -1, 1), y: $((a.clientY - i.top - i.height * 0.43) / Math.max(100, innerHeight * 0.3), -1, 1) };
      const c = performance.now();
      c - this.lastPointerWake > 120 && (this.activity(), this.lastPointerWake = c);
    }, { passive: !0, signal: t }), window.addEventListener("scroll", () => {
      this.updatePlacement(), this.activity();
    }, { passive: !0, signal: t, capture: !0 }), window.addEventListener("keydown", () => this.activity(), { signal: t }), window.addEventListener("pointerdown", () => this.activity(), { passive: !0, signal: t }), document.addEventListener("visibilitychange", () => {
      cancelAnimationFrame(this.raf), this.lastFrame = 0, document.hidden ? this.stopPurr() : this.start();
    }, { signal: t }), window.addEventListener("resize", () => this.updatePlacement(), { signal: t, passive: !0 }), this.updatePlacement(), this.media.addEventListener("change", () => {
      this.lastFrame = 0, this.start();
    }, { signal: t }), this.shadowRoot.querySelector("button").addEventListener("click", () => this.perform("petting"), { signal: t }), this.start();
  }
  disconnectedCallback() {
    this.abort?.abort(), cancelAnimationFrame(this.raf), this.stopPurr(), this._anchorObserver?.disconnect(), this._observedAnchor = null;
  }
  attributeChangedCallback(t) {
    if ((t === "sound-src" || t === "paused") && this.stopPurr(), t === "cat-name") {
      const a = this.getAttribute("cat-name") || W;
      this.shadowRoot.querySelector("button").setAttribute("aria-label", `${a} streicheln`), this.shadowRoot.querySelector("svg").setAttribute("aria-label", `${a}, eine kleine Katze mit großen Augen`);
    }
    this.isConnected && (this.updatePlacement(), this.start());
  }
  set anchorElement(t) {
    this._anchorElement = t instanceof Element ? t : null, this.isConnected && this.updatePlacement();
  }
  get anchorElement() {
    return this._anchorElement;
  }
  updatePlacement() {
    const t = this.getAttribute("anchor");
    let a = this._anchorElement;
    if (!a && t)
      try {
        a = document.querySelector(t);
      } catch {
        a = null;
      }
    if (a && a !== this && a.isConnected) {
      this.dataset.placement = "anchor";
      const i = a.getBoundingClientRect(), c = this.getBoundingClientRect(), p = zt(i, c, this.getAttribute("anchor-align") || "top-right", Number(this.getAttribute("offset-x")) || 0, Number(this.getAttribute("offset-y")) || 0);
      this.style.setProperty("--cat-position-x", `${p.x.toFixed(2)}px`), this.style.setProperty("--cat-position-y", `${p.y.toFixed(2)}px`), this._observedAnchor !== a && (this._anchorObserver?.disconnect(), this._observedAnchor = a, this._anchorObserver = new ResizeObserver(() => this.updatePlacement()), this._anchorObserver.observe(a));
    } else if (t || this._anchorElement)
      this.dataset.placement = "missing";
    else if (this.getAttribute("position") === "free" || this.hasAttribute("x") || this.hasAttribute("y")) {
      this.dataset.placement = "free";
      for (const i of ["x", "y"]) {
        const c = Et(this.getAttribute(i));
        this.style.setProperty(`--cat-position-${i}`, CSS.supports(i === "x" ? "left" : "top", c) ? c : "16px");
      }
    } else this.dataset.placement && (delete this.dataset.placement, this.style.removeProperty("--cat-position-x"), this.style.removeProperty("--cat-position-y"));
  }
  configure(t = {}) {
    return this.options = U(t, this.options), t?.blink && (this.nextBlink = this.time + this.options.blink.minInterval + Math.random() * (this.options.blink.maxInterval - this.options.blink.minInterval)), t?.spontaneous && (this.nextAction = this.time + this.options.spontaneous.minInterval + Math.random() * (this.options.spontaneous.maxInterval - this.options.spontaneous.minInterval)), this.isConnected && this.start(), this;
  }
  get behavior() {
    return U({}, this.options);
  }
  set behavior(t) {
    this.configure(t);
  }
  get sleepAfter() {
    const t = Number(this.getAttribute("sleep-after") ?? this.options.idle.sleepAfter);
    return Number.isFinite(t) ? $(t, 5, 3600) : this.options.idle.sleepAfter;
  }
  start() {
    cancelAnimationFrame(this.raf), document.hidden || (this.raf = requestAnimationFrame(this.frame));
  }
  activity() {
    const t = performance.now();
    t < (this.ignoreActivityUntil || 0) || (this.lastActivity = t, (this.override === "sleeping" || this.override === "drowsy") && (this.override = null), (this.state === "sleeping" || this.state === "drowsy") && (this.wakeUntil = t + this.options.idle.wakeDuration * 1e3, this.blinkStart = this.time + 0.7));
  }
  perform(t) {
    ["curious", "sleeping", "drowsy", "stretching", "grooming", "petting", "swatting", "auto"].includes(t) && (this.lastActivity = performance.now(), this.override = t === "auto" ? null : t, this.ignoreActivityUntil = t === "sleeping" ? performance.now() + 900 : 0, this.actionStarted = performance.now(), t === "grooming" && (this.groomVariant = this.groomCount++ % 3), ["petting", "stretching", "grooming", "swatting"].includes(t) && (this.actionUntil = performance.now() + this.options.actions[t] * 1e3), t === "petting" && this.playPurr(), t === "curious" && (this.wakeUntil = performance.now() + this.options.idle.wakeDuration * 1e3), this.start());
  }
  playPurr() {
    const t = this.getAttribute("sound-src");
    t && ((!this.audio || this.audio.dataset.source !== t) && (this.stopPurr(), this.audio?.remove(), this.audio = new Audio(t), this.audio.dataset.source = t, this.audio.loop = !0, this.audio.preload = "none", this.audio.hidden = !0, this.audio.setAttribute("aria-hidden", "true"), this.shadowRoot.append(this.audio)), this.audio.paused && (this.audio.volume = 0, this.audioVolume = 0, this.audio.play().catch(() => this.dispatchEvent(new CustomEvent("cataudio", { detail: { playing: !1, label: "Das Schnurren konnte nicht gestartet werden." }, bubbles: !0, composed: !0 })))));
  }
  stopPurr() {
    this.audio && (this.audio.pause(), this.audio.volume = 0, this.audioVolume = 0);
  }
  setState(t) {
    t !== this.state && (this.state = t, this.dispatchEvent(new CustomEvent("catstate", { detail: { state: t, label: Mt[t] }, bubbles: !0, composed: !0 })));
  }
  frame(t) {
    const a = this.lastFrame ? $((t - this.lastFrame) / 1e3, 0, 0.05) : 0.016666666666666666;
    this.lastFrame = t;
    const i = this.options, c = this.media.matches || !i.motion.enabled, p = this.hasAttribute("paused");
    p || (this.time += a);
    const o = this.time;
    (this.hasAttribute("anchor") || this._anchorElement || this.hasAttribute("x") || this.hasAttribute("y") || this.getAttribute("position") === "free") && this.updatePlacement(), this.override && !["sleeping", "drowsy", "curious"].includes(this.override) && t > this.actionUntil && (this.override = null);
    let h = this.override || $t((t - this.lastActivity) / 1e3, this.sleepAfter, i.idle.drowsyRatio);
    if (!this.override && t < this.wakeUntil && (h = "waking"), i.spontaneous.enabled && !this.override && h === "curious" && o > this.nextAction && !c && !p && Math.abs(this.avoid.target - this.avoid.x) < 0.5 && (this.override = Math.random() < 0.55 ? "watching" : Math.random() < 0.5 ? "grooming" : "stretching", this.actionStarted = t, this.override === "grooming" && (this.groomVariant = Math.floor(Math.random() * 3)), this.actionUntil = t + (i.actions[this.override] || 4.2) * 1e3, this.nextAction = o + i.spontaneous.minInterval + Math.random() * (i.spontaneous.maxInterval - i.spontaneous.minInterval), h = this.override), i.reactions.swatEnabled && this.pointer && !this.override && !["sleeping", "drowsy", "waking"].includes(h) && !p && !c && t > this.swatCooldown) {
      const s = this.shadowRoot.querySelector("svg").getBoundingClientRect(), l = Math.min(s.width, s.height * 320 / 340), v = l * 340 / 320, z = { x: s.left + (s.width - l) / 2 + l * 0.5, y: s.top + (s.height - v) / 2 + v * 0.51 }, S = Math.hypot((this.pointer.x - z.x) / (l * 0.25), (this.pointer.y - z.y) / (v * 0.18)) < 1;
      this.nearTime = S ? this.nearTime + a : 0, this.nearTime > i.reactions.swatDelay && (this.perform("swatting"), this.swatCooldown = t + i.reactions.swatCooldown * 1e3, this.nearTime = 0, h = "swatting");
    } else this.nearTime = 0;
    if (this.setState(h), p) return;
    const m = h === "sleeping", E = h === "drowsy", I = this.getAttribute("position"), Z = /^(top|bottom)-(left|right)$/.test(I || "") && !this.hasAttribute("anchor") && !this._anchorElement ? I : null, n = this.avoid;
    if (Z && this.pointer && !c && i.avoidance.enabled) {
      const s = this.getBoundingClientRect(), l = s.left - n.x, v = this.pointer.x > l - i.avoidance.margin && this.pointer.x < l + s.width + i.avoidance.margin && this.pointer.y > s.top + s.height * 0.18 && this.pointer.y < s.bottom + 15, z = !["sleeping", "petting", "grooming", "stretching", "swatting"].includes(h);
      if (v ? (n.enteredAt || (n.enteredAt = t), n.dwell = (t - n.enteredAt) / 1e3) : (n.enteredAt = 0, n.dwell = 0), n.clear = v ? 0 : n.clear + a, n.dwell >= i.avoidance.delay && n.target === 0 && h !== "sleeping") {
        this.override = null, this.actionUntil = 0, this.nextAction = o + 7, h = "curious", this.setState(h);
        const S = Z.endsWith("right") ? s.left - 12 : innerWidth - s.right - 12, bt = i.avoidance.distance || $(s.width * i.avoidance.sizeFactor, i.avoidance.minDistance, i.avoidance.maxDistance);
        n.target = (Z.endsWith("right") ? -1 : 1) * Math.max(0, Math.min(bt, S)), n.dwell = 0;
      }
      n.clear > i.avoidance.returnDelay && z && (n.target = 0);
    } else
      n.target = 0, n.dwell = 0, n.clear = 0, n.enteredAt = 0;
    const D = n.x;
    n.x = g(n.x, n.target, i.avoidance.speed, a), Math.abs(n.x - n.target) < 0.05 && (n.x = n.target), this.style.setProperty("--cat-avoid-x", `${n.x.toFixed(2)}px`);
    const w = c ? 0 : $(Math.abs(n.x - D) / Math.max(a, 1e-3) / 50, 0, 1), Q = Math.sin(o * 8), pt = Math.max(0, Q) * i.motion.stepHeight * w, ut = Math.max(0, -Q) * i.motion.stepHeight * w;
    if (this.sleepElapsed = m || this.sleepElapsed > 0 && this.pose.sleep > 0.05 ? this.sleepElapsed + a : 0, this.audio) {
      const s = h === "petting" ? $(Number(this.getAttribute("volume") ?? i.audio.volume) / 100, 0, 1) : 0;
      this.audioVolume = g(this.audioVolume, s, h === "petting" ? 3 : 5, a), this.audio.volume = $(this.audioVolume, 0, 1), s === 0 && this.audioVolume < 2e-3 && this.audio.pause();
    }
    o > this.nextBlink && (this.blinkStart = o, this.nextBlink = o + i.blink.minInterval + Math.random() * (i.blink.maxInterval - i.blink.minInterval));
    const T = o - this.blinkStart, _ = T >= 0 && T < i.blink.duration ? 1 - Math.sin(T / i.blink.duration * Math.PI) : 1, r = this.pose;
    r.sleep = g(r.sleep, m ? 1 : E ? 0.36 : 0, m ? 1.2 : h === "waking" ? 1.05 : 2.5, a), r.blink = g(r.blink, m ? 0 : E ? 0.3 : h === "petting" ? 0.1 : h === "grooming" ? _ * 0.55 : h === "stretching" ? _ * 0.7 : _, 30, a), r.pet = g(r.pet, h === "petting" ? 1 : 0, 3, a);
    const ft = (t - this.actionStarted) / 1e3, f = Qt(h, ft * ((q.actions[h] || 1) / (i.actions[h] || 1)), this.groomVariant);
    r.stretch = g(r.stretch, f.stretch || 0, 10, a), r.groom = g(r.groom, f.lift || 0, 12, a), r.wipe = g(r.wipe || 0, f.wipe || 0, 14, a), r.chest = g(r.chest || 0, f.chest || 0, 9, a), r.flank = g(r.flank || 0, f.flank || 0, 9, a), r.reach = g(r.reach || 0, f.reach || 0, 10, a);
    const X = h === "grooming" ? { x: -0.25 + (f.side || 0) * 0.6 + r.flank * 0.7, y: 0.6 + r.chest * 0.3 } : h === "watching" ? { x: Math.sin(o * 0.8) * 0.7, y: -0.4 } : i.gaze.enabled ? this.target : { x: 0, y: 0 };
    this.gaze.x = g(this.gaze.x, X.x, i.gaze.smoothing, a), this.gaze.y = g(this.gaze.y, X.y, i.gaze.smoothing, a);
    const L = this.gaze.x * (1 - r.sleep), B = this.gaze.y * (1 - r.sleep), b = c ? 0 : 1, j = Math.sin(o * (m ? 1.7 : 2.2)) * (m ? 1.6 : 0.65) * b * i.motion.breathingAmplitude, d = r.sleep, M = r.stretch, k = r.groom, F = r.pet;
    (t - this.actionStarted) / 1e3;
    const gt = Math.max(f.left || 0, f.right || 0);
    r.swat = g(r.swat || 0, gt, 12, a);
    const R = r.swat, V = (f.rise || 0) * 3 * b;
    r.leftReach = g(r.leftReach || 0, f.left || 0, 14, a), r.rightReach = g(r.rightReach || 0, f.right || 0, 14, a);
    const u = (s, l) => this.parts[s].setAttribute("transform", l), y = (s, l) => this.parts[s].setAttribute("opacity", String(l));
    u("root", `translate(${b * Math.sin(o * 0.44) * 0.7 * i.motion.bodyAmplitude} ${-V - Math.sin(o * 16) * w * 0.6}) rotate(${Q * w * 0.8} 158 285)`), u("body", `translate(${158 + k * 3 + M * 1.5} 310) scale(${1 + d * 0.28 + M * 0.06 - R * 0.04} ${1 - d * 0.47 - M * 0.08 + R * 0.03 + j * 4e-3}) translate(-158 -310)`);
    const Y = At(M, R);
    this.parts.torso.setAttribute("d", Y), this.parts["torso-light"].setAttribute("d", Y);
    const mt = (L * i.gaze.headRange + Math.sin(o * 0.65) * 1.1 * b) * (1 - d) - d * 17 + F * -8 + k * 10 - r.wipe * 7 - M * 4 + r.chest * 13 + r.flank * 24 + (f.shake || 0) * 2 - Q * w * 1.2;
    u("head", `translate(${L * i.gaze.headRange - d * 26 - M * 3 - k * 8 + r.flank * 15} ${B * 3 + d * 83 + M * 25 + j + k * 9 - r.wipe * 10 - V * 3 + r.chest * 27 + r.flank * 23 + (f.lick || 0) * 1.2 * b}) rotate(${mt} 158 175)`);
    const K = $(r.blink * (1 - d), 0.015, 1), H = 1 - K;
    for (const [s, l] of [["l", 119], ["r", 198]]) {
      const v = 117 + 32 * H, z = 169 - 20 * H, S = H * 8;
      this.parts[`lid-upper-${s}`].setAttribute("d", `M${l - 25} 110H${l + 25}V${v}Q${l} ${v + S} ${l - 25} ${v}Z`), this.parts[`lid-lower-${s}`].setAttribute("d", `M${l - 25} 176H${l + 25}V${z}Q${l} ${z + S} ${l - 25} ${z}Z`);
    }
    y("closed-eyes", 1 - $(K * 5, 0, 1)), u("pupil-l", `translate(${L * i.gaze.horizontalRange} ${B * i.gaze.verticalRange})`), u("pupil-r", `translate(${L * i.gaze.horizontalRange} ${B * i.gaze.verticalRange})`);
    const J = Math.pow(Math.max(0, Math.sin(o * 1.13)), 18) * 9 * b * i.motion.earAmplitude;
    u("ear-l", `rotate(${-J + F * 9 - d * 7} 103 105)`), u("ear-r", `rotate(${J * 0.6 - F * 8 + d * 7} 219 105)`), u("paw-l", `translate(${-r.reach * 10 + Q * w * 2} ${r.reach * 2 - pt}) rotate(${r.reach * 6 + Q * w * 3} 132 248) scale(${1 + (f.toes || 0) * 0.025} 1)`), u("paw-r", `translate(${r.reach * 10 - Q * w * 2} ${r.reach * 2 - ut}) rotate(${-r.reach * 6 - Q * w * 3} 185 248)`);
    const tt = Math.sin(o * 1.25) * b * (1 - d) * 13 * i.motion.tailAmplitude, G = `M207 286 C${270 + d * 14} ${312 - d * 5} ${294 + d * 5} ${260 + d * 41} ${265 - d * 26 + tt} ${238 + d * 61} C${246 - d * 26 + tt} ${224 + d * 75} ${242 - d * 30} ${245 + d * 51} ${255 - d * 39} ${253 + d * 48}`;
    this.parts.tail.setAttribute("d", G), this.parts["tail-light"].setAttribute("d", G), this.parts["tail-shadow"].setAttribute("d", G), y("sleep-marks", d);
    for (let s = 0; s < 3; s++) {
      const l = (this.sleepElapsed + s * 1.7) % 5.1 / 5.1, v = Math.pow(Math.sin(l * Math.PI), 2) * 0.7;
      y(`sleep-z-${s}`, v), u(`sleep-z-${s}`, `translate(${l * 29 * b} ${26 - l * 65 * b}) scale(${0.8 + l * 0.3})`);
    }
    this.parts["sleep-blur"].setAttribute("stdDeviation", String(c ? 0 : this.sleepElapsed % 5.1 / 5.1 * 1.5));
    const et = this.sleepElapsed - i.dreams.delay, at = et >= 0 ? et % i.dreams.interval / i.dreams.duration : 2, it = at <= 1 ? Math.pow(Math.sin(at * Math.PI), 2) : 0;
    y("dream-cloud", i.dreams.enabled ? it * d : 0), u("dream-cloud", `translate(${Math.sin(o * 0.6) * 2 * b} ${7 - it * 10 + Math.sin(o * 0.7) * 2 * b})`), y("hearts", F);
    for (let s = 0; s < 4; s++) {
      const l = (o + s * 0.67) % 2.7 / 2.7, v = s % 2 === 0 ? -1 : 1;
      y(`heart-${s}`, Math.pow(Math.sin(l * Math.PI), 0.8)), u(`heart-${s}`, `translate(${158 + v * (70 + l * 30) + Math.sin(o * 2 + s) * 6 * b} ${145 - l * 110 * b}) rotate(${v * (12 + Math.sin(o + s) * 10 * b)}) scale(${(0.6 + s * 0.12) * (0.7 + l * 0.35) * i.motion.heartScale})`);
    }
    y("glass-paws", Math.min(1, R * 3));
    const A = r.leftReach, C = r.rightReach, rt = 130 - A * 11 + L * 7 * A, st = 299 - A * 127 - V * 2, ot = 188 + C * 13 + L * 7 * C, nt = 299 - C * 122 - V * 2;
    this.parts["raised-arm-l"].setAttribute("d", O(132, 238, rt, st, -7 * A)), this.parts["raised-arm-r"].setAttribute("d", O(188, 238, ot, nt, 7 * C)), u("glass-paw-l", `translate(${rt} ${st}) rotate(${-A * 9}) scale(${0.75 + A * 0.32} ${0.78 + A * 0.26})`), u("glass-paw-r", `translate(${ot} ${nt}) rotate(${C * 9}) scale(${0.75 + C * 0.32} ${0.78 + C * 0.26})`), y("glass-ripples", (f.press || 0) * 0.22), u("glass-ripples", "translate(0 -18)"), y("paw-l", 1 - Math.max(A, k)), y("paw-r", 1 - C), u("shadow", `translate(160 312) scale(${1 + d * 0.35 + M * 0.08} ${1 - R * 0.2}) translate(-160 -312)`);
    const P = this.getAttribute("lighting") === "night", lt = P ? 0.4 : 0.24;
    u("tail-shadow", `matrix(1 0 ${-lt} -.16 ${312 * lt} ${312 * 1.16 + 2})`), y("tail-shadow", P ? 0.27 : 0.18), y("shadow", (P ? 0.43 : 0.33) - R * 0.05), y("cast-shadow", (P ? 0.23 : 0.16) + M * 0.03), u("cast-shadow", `translate(160 312) skewX(${P ? 22 : 10}) scale(${P ? 1.18 : 1} ${P ? 1.15 : 0.85}) translate(-160 -312)`);
    const ht = 133 + k * 14 + r.wipe * (f.side ? 29 : -24), ct = 300 - k * 108 - r.wipe * 39;
    y("groom-limb", Math.min(1, k * 4)), this.parts["groom-arm"].setAttribute("d", O(133, 237, ht, ct, -13 * k)), u("groom-hand", `translate(${ht} ${ct}) rotate(${-k * 12 - r.wipe * 17}) scale(1.12)`), y("tongue", (f.lick || 0) * Math.max(k, r.chest, r.flank)), u("tongue", `translate(-3 ${(f.lick || 0) * 2})`), u("whiskers", `translate(0 ${Math.sin(o * 2.2) * 0.4 * b})`), this.raf = requestAnimationFrame(this.frame);
  }
}
customElements.get("samt-pfote") || customElements.define("samt-pfote", Lt);
export {
  Lt as Samtpfote
};
