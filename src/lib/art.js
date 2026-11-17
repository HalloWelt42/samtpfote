export function catArt(id) {
return `<svg viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eine kleine schwarze Katze mit goldenen Augen">
<defs>
 <radialGradient id="${id}-fur" cx=".3" cy=".15" r=".9"><stop stop-color="#343844"/><stop offset=".5" stop-color="#1c1e28"/><stop offset="1" stop-color="#11121b"/></radialGradient>
 <radialGradient id="${id}-head" cx=".32" cy=".12" r="1"><stop stop-color="#343845"/><stop offset=".55" stop-color="#20222c"/><stop offset="1" stop-color="#13151e"/></radialGradient>
 <radialGradient id="${id}-iris" cx=".4" cy=".3" r=".8"><stop stop-color="#fff3b8"/><stop offset=".48" stop-color="#e8d77c"/><stop offset="1" stop-color="#b29440"/></radialGradient>
 <linearGradient id="${id}-ear" x2="1" y2="1"><stop stop-color="#dba6a0"/><stop offset="1" stop-color="#805c6a"/></linearGradient>
 <clipPath id="${id}-eye-l"><ellipse cx="119" cy="143" rx="23" ry="26"/></clipPath>
 <clipPath id="${id}-eye-r"><ellipse cx="198" cy="143" rx="23" ry="26"/></clipPath>
</defs>
<ellipse data-part="shadow" cx="166" cy="312" rx="86" ry="9" fill="#292139" opacity=".12"/>
<g data-part="root">
<path data-part="tail" d="M207 286 C270 312 294 260 265 238 C246 224 242 245 255 253" stroke="#191b25" stroke-width="24" stroke-linecap="round"/>
<path data-part="tail-light" d="M207 282 C270 308 294 256 265 234 C246 220 242 241 255 249" stroke="#3a3e4a" stroke-opacity=".4" stroke-width="3" stroke-linecap="round"/>
<g data-part="body">
 <path d="M128 188 C110 195 95 228 89 267 C83 298 104 311 158 311 C211 312 232 299 224 269 C217 235 209 203 189 188Z" fill="url(#${id}-fur)"/>
 <ellipse cx="111" cy="282" rx="26" ry="28" fill="#20222d"/>
 <ellipse cx="208" cy="282" rx="26" ry="28" fill="#171923"/>
 <path d="M133 211 Q148 225 161 215 Q174 223 186 209" stroke="#3c404c" stroke-width="1.5" opacity=".65"/>
 <path d="M122 232 Q116 266 125 298 M192 232 Q199 269 190 298" stroke="#0d1018" stroke-width="3" stroke-linecap="round"/>
 <g data-part="paw-l"><path d="M123 257 Q116 272 119 295 Q113 303 118 309 Q127 316 146 310 L148 259" fill="#242733"/><path d="M125 305 L125 310 M133 305 L133 311" stroke="#52515c" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <g data-part="paw-r"><path d="M174 258 L174 302 Q169 312 180 313 Q201 316 204 308 Q204 303 198 298 L195 257" fill="#20232e"/><path d="M182 306 L182 312 M191 306 L191 312" stroke="#52515c" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/></g>
 <path d="M101 245 Q94 266 99 274 M213 245 Q222 270 216 282" stroke="#565765" stroke-opacity=".4" stroke-linecap="round" stroke-width="2"/>
</g>
<g data-part="head">
 <g data-part="ear-l"><path d="M84 123 Q65 91 77 46 Q80 40 86 47 L128 85Z" fill="#242733" stroke="#3b3d49" stroke-width="1.5"/><path d="M88 91 L83 60 Q100 73 109 89 L98 100Z" fill="url(#${id}-ear)"/><path d="M83 90 L92 82 L88 100" fill="#292b37"/></g>
 <g data-part="ear-r"><path d="M191 86 L230 46 Q236 39 240 46 Q253 89 234 124Z" fill="#1b1e28" stroke="#3b3d49" stroke-width="1.5"/><path d="M213 88 Q221 72 232 60 L231 97 L220 101Z" fill="url(#${id}-ear)"/><path d="M229 86 L236 96 L225 102" fill="#252733"/></g>
 <path d="M82 121 Q89 83 126 80 L139 72 L145 79 L157 69 L165 78 Q219 73 236 116 L248 132 L241 138 L252 151 L241 155 Q248 186 216 201 Q198 213 162 215 Q121 213 101 200 Q70 187 76 157 L65 151 L76 139 L69 133Z" fill="url(#${id}-head)"/>
 <path d="M102 105 Q115 97 129 101 M188 101 Q203 96 216 105" stroke="#535662" stroke-width="2" stroke-linecap="round" opacity=".55"/>
 <g data-part="eye-l"><ellipse cx="119" cy="143" rx="26" ry="29" fill="#0d1018"/><ellipse cx="119" cy="143" rx="23" ry="26" fill="url(#${id}-iris)"/><g clip-path="url(#${id}-eye-l)"><g data-part="pupil-l"><ellipse cx="122" cy="142" rx="13.5" ry="22" fill="#10131a"/><ellipse cx="116" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="130" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M99 152 Q103 165 115 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/></g>
 <g data-part="eye-r"><ellipse cx="198" cy="143" rx="26" ry="29" fill="#0d1018"/><ellipse cx="198" cy="143" rx="23" ry="26" fill="url(#${id}-iris)"/><g clip-path="url(#${id}-eye-r)"><g data-part="pupil-r"><ellipse cx="195" cy="142" rx="13.5" ry="22" fill="#10131a"/><ellipse cx="189" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="203" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g></g><path d="M179 152 Q182 164 193 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/></g>
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
