// samtpfote | hallowelt42 | Getrennte Augenstudie, Hauptkatze unverändert.
import { catArt } from './art.js';
export function eyeStudyArt(id, revised = false) {
  let art=catArt(id).replace('viewBox="0 0 320 340"','viewBox="55 55 210 165"');
  if(!revised)return art;
  const defs=['l','r'].map(side=>`<clipPath id="${id}-lid-${side}"><path data-study="lid-${side}"/></clipPath>`).join('');
  art=art.replace('</defs>',defs+'</defs>');
  const eye=(side,cx)=>{
    const px=cx+(side==='l'?3:-3),reflection=px-6;
    return `<g><path data-study="socket-${side}" fill="#100f0b"/><g clip-path="url(#${id}-lid-${side})"><g data-study="iris-${side}"><ellipse cx="${cx}" cy="143" rx="23" ry="26" fill="url(#${id}-iris)"/><ellipse cx="${px}" cy="142" rx="13.5" ry="22" fill="#16120e"/></g><g data-study="reflection-${side}"><ellipse cx="${reflection}" cy="131" rx="5.5" ry="7" fill="#fffef0"/><circle cx="${px+8}" cy="151" r="2.4" fill="#fffef0" opacity=".8"/></g><path d="M${cx-20} 152Q${cx-16} 165 ${cx-4} 167" stroke="#fff5b8" stroke-width="1.5" opacity=".6" stroke-linecap="round"/></g><path data-study="upper-${side}" stroke="#514532" stroke-width="1.5" stroke-linecap="round"/><path data-study="lower-${side}" stroke="#796747" stroke-width=".8" stroke-opacity=".45" stroke-linecap="round"/></g>`;
  };
  const start=art.indexOf('<g data-part="eye-l">'),end=art.indexOf('<g data-part="closed-eyes"',start);
  return art.slice(0,start)+eye('l',119)+eye('r',198)+art.slice(end);
}
export function lidPath(cx, openness) {
  const top=143-27*openness,bottom=143+25*openness;
  return `M${cx-24} 143Q${cx-15} ${top} ${cx} ${top}Q${cx+15} ${top} ${cx+24} 143Q${cx+15} ${bottom} ${cx} ${bottom}Q${cx-15} ${bottom} ${cx-24} 143Z`;
}
