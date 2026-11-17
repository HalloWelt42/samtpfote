// samtpfote | hallowelt42 | Getrennte Augenstudie, Hauptkatze unverändert.
import { catArt } from './art.js';
export function eyeStudyArt(id, revised = false) {
  let art=catArt(id).replace('viewBox="0 0 320 340"','viewBox="55 55 210 165"');
  if(!revised)return art;
  const defs=['l','r'].map(side=>`<clipPath id="${id}-lid-${side}"><path data-study="lid-${side}"/></clipPath><radialGradient id="${id}-gold-${side}"><stop stop-color="#f3cb64"/><stop offset=".5" stop-color="#ddbf60"/><stop offset=".84" stop-color="#b49c4c"/><stop offset="1" stop-color="#706139"/></radialGradient>`).join('');
  art=art.replace('</defs>',defs+'</defs>');
  const eye=(side,cx)=>{
    const fibers=Array.from({length:40},(_,i)=>{
      const angle=i/40*Math.PI*2,inner=12+(i%3),outer=22;
      return `<path d="M${cx+Math.cos(angle)*inner} ${143+Math.sin(angle)*(inner+2)} Q${cx+Math.cos(angle+.025)*18} ${143+Math.sin(angle+.025)*20} ${cx+Math.cos(angle)*outer} ${143+Math.sin(angle)*25}" stroke="${i%2?'#6c642f':'#fff0a0'}" stroke-opacity="${i%2?.28:.45}" stroke-width=".55"/>`;
    }).join('');
    return `<g><path data-study="socket-${side}" fill="#100f0b"/><g clip-path="url(#${id}-lid-${side})"><g data-study="iris-${side}"><ellipse cx="${cx}" cy="143" rx="23" ry="26" fill="url(#${id}-gold-${side})"/>${fibers}<path data-study="pupil-${side}" fill="#100e0a"/><ellipse cx="${cx}" cy="143" rx="22.6" ry="25.6" stroke="#3d3721" stroke-opacity=".6" stroke-width="1.1"/></g><path d="M${cx-23} 125Q${cx} 116 ${cx+23} 126L${cx+23} 133Q${cx} 124 ${cx-23} 133Z" fill="#211b11" opacity=".22"/><g data-study="reflection-${side}"><ellipse cx="${cx-7}" cy="133" rx="4" ry="5.3" fill="#fff6dc" opacity=".95" transform="rotate(-25 ${cx-7} 133)"/><path d="M${cx+10} 155Q${cx+14} 150 ${cx+14} 145" stroke="#fff4ca" stroke-width="1.2" stroke-linecap="round" opacity=".48"/><circle cx="${cx+6}" cy="152" r="1.6" fill="#fff6dc" opacity=".7"/></g></g><path data-study="upper-${side}" stroke="#514532" stroke-width="1.5" stroke-linecap="round"/><path data-study="lower-${side}" stroke="#796747" stroke-width=".8" stroke-opacity=".45" stroke-linecap="round"/></g>`;
  };
  const start=art.indexOf('<g data-part="eye-l">'),end=art.indexOf('<g data-part="closed-eyes"',start);
  return art.slice(0,start)+eye('l',119)+eye('r',198)+art.slice(end);
}
export function lidPath(cx, openness) {
  const top=143-27*openness,bottom=143+25*openness;
  return `M${cx-24} 143Q${cx-15} ${top} ${cx} ${top}Q${cx+15} ${top} ${cx+24} 143Q${cx+15} ${bottom} ${cx} ${bottom}Q${cx-15} ${bottom} ${cx-24} 143Z`;
}
