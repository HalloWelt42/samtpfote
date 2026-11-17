// samtpfote | hallowelt42 | Herkunftshinweis erhalten.
import { CAT_NAME, ATTRIBUTION, safeText } from './config.js';
export function catArt(id, name = CAT_NAME) {
return `<svg viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${safeText(name)}, eine kleine Katze mit großen Augen">
<defs>
 <filter id="${id}-contact-soft" x="-60%" y="-120%" width="220%" height="340%"><feGaussianBlur stdDeviation="2"/></filter>
 <filter id="${id}-cast-soft" x="-60%" y="-120%" width="220%" height="340%"><feGaussianBlur stdDeviation="4"/></filter>
 <filter id="${id}-dream-blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur data-part="sleep-blur" stdDeviation="0"/></filter>
 <radialGradient id="${id}-fur" cx=".3" cy=".15" r=".9"><stop stop-color="var(--cat-fur-top,#35312e)"/><stop offset=".5" stop-color="var(--cat-fur-mid,#191715)"/><stop offset="1" stop-color="var(--cat-fur-base,#0e0d0c)"/></radialGradient>
 <radialGradient id="${id}-head" cx=".32" cy=".12" r="1"><stop stop-color="var(--cat-head-top,#38332f)"/><stop offset=".55" stop-color="var(--cat-head-mid,#1b1917)"/><stop offset="1" stop-color="var(--cat-head-base,#11100e)"/></radialGradient>
 <radialGradient id="${id}-iris" cx=".4" cy=".3" r=".8"><stop stop-color="var(--cat-iris-top,#fff3b8)"/><stop offset=".48" stop-color="var(--cat-iris-mid,#e8d77c)"/><stop offset="1" stop-color="var(--cat-iris-base,#b29440)"/></radialGradient>
 <linearGradient id="${id}-ear" x2="1" y2="1"><stop stop-color="#dba6a0"/><stop offset="1" stop-color="#805c6a"/></linearGradient>
 <clipPath id="${id}-eye-l"><ellipse cx="119" cy="143" rx="23" ry="26"/></clipPath>
 <clipPath id="${id}-eye-r"><ellipse cx="198" cy="143" rx="23" ry="26"/></clipPath>
</defs>
<path data-part="cast-shadow" d="M105 307Q162 300 212 308Q240 315 286 325Q301 336 263 335L162 325Q104 324 105 307Z" fill="#27190d" opacity=".2" filter="url(#${id}-cast-soft)"/>
<ellipse data-part="shadow" cx="160" cy="312" rx="65" ry="7" fill="#1c1209" opacity=".35" filter="url(#${id}-contact-soft)"/>
<g data-part="root">
<path data-part="tail" d="M207 286 C270 312 294 260 265 238 C246 224 242 245 255 253" stroke="var(--cat-tail,#171512)" stroke-width="24" stroke-linecap="round"/>
<path data-part="tail-light" d="M207 282 C270 308 294 256 265 234 C246 220 242 241 255 249" stroke="var(--cat-tail-light,#45403a)" stroke-opacity=".4" stroke-width="3" stroke-linecap="round"/>
<g data-part="body">
 <path data-part="torso" d="M129 190 C119 192 115 203 111 214 Q102 224 101 239 C90 251 85 272 91 290 C95 306 119 311 157 311 C193 313 221 306 225 290 C232 273 221 248 215 238 Q214 223 204 213 C201 201 193 192 187 190 Q158 203 129 190Z" fill="url(#${id}-fur)"/>
 <path d="M112 252 C94 253 86 272 91 289 Q85 300 96 306 Q111 313 129 305 Q141 298 131 281 C129 265 124 254 112 252Z" fill="var(--cat-fur-detail,#211e1b)"/><path d="M96 301 Q97 297 99 297 M104 305 Q104 300 107 300" stroke="var(--cat-toe,#796c5e)" stroke-opacity=".4" stroke-width="1.3" stroke-linecap="round"/>
 <path d="M207 253 C224 252 233 275 226 289 Q232 301 223 306 Q209 313 191 305 Q182 299 188 282 C189 267 196 256 207 253Z" fill="var(--cat-fur-shadow,#191613)"/><path d="M218 302 Q218 298 215 298 M210 306 Q210 302 208 301" stroke="var(--cat-toe,#796c5e)" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/>
 <path d="M133 211 Q148 225 161 215 Q174 223 186 209" stroke="#3c404c" stroke-width="1.5" opacity=".65"/>
 <path d="M122 232 Q116 266 125 298 M192 232 Q199 269 190 298" stroke="var(--cat-line,#0d0c0a)" stroke-width="3" stroke-linecap="round"/>
 <g data-part="paw-l"><path d="M124 245 C123 260 120 277 122 291 Q121 296 118 299 C113 304 115 310 120 312 Q125 315 130 313 Q137 317 143 312 C149 312 151 307 148 302 Q145 297 147 288 L149 248" fill="var(--cat-fur-detail,#211e1b)"/><path d="M123 302 Q120 305 122 310 M132 303 Q129 308 131 313 M141 303 Q139 308 141 312" stroke="var(--cat-toe,#65594e)" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <g data-part="paw-r"><path d="M172 248 L174 287 Q177 297 174 301 C168 309 173 314 180 313 Q187 317 192 313 Q200 315 203 310 C207 304 203 300 199 297 Q197 285 197 272 L194 245" fill="var(--cat-paw,#1f1c18)"/><path d="M180 303 Q177 307 180 312 M188 304 Q186 309 188 314 M197 302 Q195 306 197 312" stroke="var(--cat-toe,#65594e)" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <path d="M101 245 Q94 266 99 274 M213 245 Q222 270 216 282" stroke="var(--cat-body-light,#6a5f53)" stroke-opacity=".4" stroke-linecap="round" stroke-width="2"/>
</g>
<g data-part="head">
 <g data-part="ear-l"><path d="M84 123 Q65 91 77 46 Q80 40 86 47 L128 85Z" fill="var(--cat-fur-detail,#211e1b)" stroke="var(--cat-edge,#3d3730)" stroke-width="1.5"/><path d="M88 91 L83 60 Q100 73 109 89 L98 100Z" fill="url(#${id}-ear)"/><path d="M83 90 L92 82 L88 100" fill="var(--cat-tuft,#29241f)"/></g>
 <g data-part="ear-r"><path d="M191 86 L230 46 Q236 39 240 46 Q253 89 234 124Z" fill="var(--cat-ear,#1b1815)" stroke="var(--cat-edge,#3d3730)" stroke-width="1.5"/><path d="M213 88 Q221 72 232 60 L231 97 L220 101Z" fill="url(#${id}-ear)"/><path d="M229 86 L236 96 L225 102" fill="var(--cat-tuft,#26211c)"/></g>
 <path d="M81 122 C86 97 103 84 128 82 Q135 75 142 76 Q137 80 140 83 Q151 78 158 76 Q153 80 155 82 C195 76 225 89 236 120 Q238 127 243 131 L239 132 Q243 141 249 145 Q245 147 241 146 Q244 156 249 161 Q244 163 240 160 C238 181 226 194 207 200 Q191 213 161 214 Q128 213 110 202 C91 196 79 183 77 165 Q72 166 68 162 Q74 156 76 149 Q71 152 67 148 Q74 140 77 134 L73 134 Q78 128 81 122Z" fill="url(#${id}-head)"/>
 <path d="M102 105 Q115 97 129 101 M188 101 Q203 96 216 105" stroke="var(--cat-brow,#645b50)" stroke-width="2" stroke-linecap="round" opacity=".55"/>
 <g data-part="eye-l"><ellipse cx="119" cy="143" rx="26" ry="29" fill="var(--cat-line,#0d0c0a)"/><ellipse cx="119" cy="143" rx="23" ry="26" fill="url(#${id}-iris)"/><g clip-path="url(#${id}-eye-l)"><g data-part="pupil-l"><ellipse cx="122" cy="142" rx="13.5" ry="22" fill="#16120e"/><ellipse cx="116" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="130" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M99 152 Q103 165 115 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/></g>
 <g data-part="eye-r"><ellipse cx="198" cy="143" rx="26" ry="29" fill="var(--cat-line,#0d0c0a)"/><ellipse cx="198" cy="143" rx="23" ry="26" fill="url(#${id}-iris)"/><g clip-path="url(#${id}-eye-r)"><g data-part="pupil-r"><ellipse cx="195" cy="142" rx="13.5" ry="22" fill="#16120e"/><ellipse cx="189" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="203" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M179 152 Q182 164 193 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/></g>
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
 <g data-part="sleep-z-0" filter="url(#${id}-dream-blur)"><text x="233" y="133" font-size="14">z</text></g>
 <g data-part="sleep-z-1" filter="url(#${id}-dream-blur)"><text x="233" y="133" font-size="18">z</text></g>
 <g data-part="sleep-z-2" filter="url(#${id}-dream-blur)"><text x="233" y="133" font-size="22">z</text></g>
</g>
<g data-part="dream-cloud" opacity="0" aria-hidden="true">
 <circle cx="213" cy="146" r="3" fill="#fffaf0" fill-opacity=".8"/>
 <circle cx="224" cy="129" r="5" fill="#fffaf0" fill-opacity=".85"/>
 <path d="M224 111C211 114 203 104 208 95C193 91 200 76 210 75C207 60 222 51 234 56C243 41 262 44 267 55C280 52 292 63 287 75C302 81 297 99 285 101C285 114 269 119 259 112C247 124 229 123 224 111Z" fill="#fffaf0" fill-opacity=".94" stroke="#c6c4b3" stroke-width="1"/>
 <path d="M250 62Q249 50 261 48Q276 47 272 36" stroke="#8d9888" stroke-width="2" stroke-linecap="round"/>
 <g transform="rotate(20 250 87)"><rect x="235" y="66" width="30" height="40" rx="14" fill="#a7b49a" stroke="#718568" stroke-width="1.3"/><path d="M250 67V83 M235 82H265" stroke="#718568" stroke-width="1.2"/><rect x="247.8" y="71" width="4.4" height="9" rx="2.2" fill="#e7d396"/><path d="M241 89Q239 96 243 99" stroke="#d2ddc6" stroke-width="2" stroke-linecap="round"/></g>
 <path d="M221 66L223 61 M217 63L227 64 M280 101L281 96 M277 98L285 99" stroke="#c9b67b" stroke-width="1.5" stroke-linecap="round"/>
</g>
<text data-part="credit" x="160" y="335" text-anchor="middle" font-family="sans-serif" font-size="8" fill="var(--cat-credit,#85877b)" letter-spacing=".4">${ATTRIBUTION}</text>
</svg>`;
}
