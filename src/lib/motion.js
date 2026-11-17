// samtpfote | hallowelt42 | Herkunftshinweis erhalten.
import { clamp } from './behavior.js';
export const smooth = (n) => {const x=clamp(n,0,1);return x*x*(3-2*x);};
export function keyframe(time, frames) {
  if(time<=frames[0][0])return frames[0][1];
  for(let i=1;i<frames.length;i++)if(time<=frames[i][0]){
    const [a,x]=frames[i-1],[b,y]=frames[i];return x+(y-x)*smooth((time-a)/(b-a));
  }
  return frames.at(-1)[1];
}
export function choreography(action, seconds, variant = 0) {
  if(action==='stretching')return {
    stretch:keyframe(seconds,[[0,0],[.6,.08],[1.7,1],[3.2,1],[4.5,.15],[5.4,0]]),
    reach:keyframe(seconds,[[0,0],[.45,0],[1.3,1],[3.3,1],[4.9,0]]),
    toes:keyframe(seconds,[[0,0],[1.5,0],[2.0,1],[3.2,.7],[4.5,0]])
  };
  if(action==='grooming'){
    const secondWipe=variant!==2;
    const lift=keyframe(seconds,secondWipe?[[0,0],[.4,0],[1.1,1],[6.9,1],[7.8,0]]:[[0,0],[.4,0],[1.1,1],[4.5,1],[5.3,0]]);
    const lickWindows=secondWipe?[[1.25,2.65],[4.5,5.65]]:[[1.25,2.65]];
    let lick=0;
    for(const [start,end] of lickWindows)if(seconds>=start&&seconds<=end){
      const fade=smooth((seconds-start)/.2)*smooth((end-seconds)/.2);
      lick=Math.pow(Math.max(0,Math.sin((seconds-start)*10)),2)*fade;
    }
    const wipe=keyframe(seconds,secondWipe?[[0,0],[2.8,0],[3.3,1],[3.8,.12],[4.15,.8],[4.5,0],[5.75,0],[6.2,1],[6.7,.1],[7.1,.75],[7.5,0]]:[[0,0],[2.8,0],[3.3,1],[3.9,.1],[4.3,.9],[4.7,0]]);
    const chest=keyframe(seconds,secondWipe?[[0,0],[7.6,0],[8.2,1],[9.5,1],[10.3,0]]:[[0,0],[5.3,0],[6,1],[8,1],[8.6,0]]);
    const flank=variant===2?keyframe(seconds,[[0,0],[8.25,0],[8.9,1],[10,1],[10.6,0]]):0;
    const bodyLick=(chest+flank)*Math.pow(Math.max(0,Math.sin(seconds*8)),2);
    const shake=seconds>10.5&&seconds<11.3?Math.sin((seconds-10.5)*18)*Math.sin((seconds-10.5)/.8*Math.PI):0;
    return {lift,lick:Math.max(lick,bodyLick),wipe,chest,flank,shake,side:variant===1?1:0};
  }
  if(action==='swatting')return {
    left:keyframe(seconds,[[0,0],[.25,.05],[.8,1],[1.45,1],[1.85,.9],[2.25,1],[2.7,.65],[3.5,0]]),
    right:keyframe(seconds,[[0,0],[.45,0],[1.2,1],[1.75,.92],[2.15,1],[2.8,.65],[3.65,0]]),
    rise:keyframe(seconds,[[0,0],[.25,-.1],[.95,1],[2.6,1],[3.7,0]]),
    press:keyframe(seconds,[[0,0],[.85,0],[1.1,1],[1.45,0],[1.85,.75],[2.2,0],[2.5,.5],[2.85,0]])
  };
  return {};
}
export function armPath(sx,sy,wx,wy,bend=0) {
  const ex=sx+(wx-sx)*.3+bend,ey=sy+(wy-sy)*.55;
  return `M${sx-9} ${sy} Q${ex-10} ${ey} ${wx-10} ${wy+7} Q${wx} ${wy+17} ${wx+10} ${wy+7} Q${ex+10} ${ey+3} ${sx+9} ${sy+3}Z`;
}
export function torsoPath(stretch, rise) {
  return `M${129-stretch*4+rise*3} ${190+stretch*12-rise*7} C${119-stretch*8+rise*3} ${192+stretch*10-rise*6} ${115-stretch*10} ${203+stretch*12-rise*4} ${111-stretch*8} ${214+stretch*8} Q${102-stretch*4} ${224+stretch*6} 101 239 C90 251 85 272 91 290 C95 306 119 311 157 311 C193 313 221 306 225 290 C232 273 221 248 215 238 Q214 223 ${204+stretch*6} ${213+stretch*8} C${201+stretch*7-rise*3} ${201+stretch*10-rise*4} ${193+stretch*5-rise*3} ${192+stretch*10-rise*6} ${187+stretch*3-rise*3} ${190+stretch*12-rise*7} Q158 ${203+stretch*10-rise*7} ${129-stretch*4+rise*3} ${190+stretch*12-rise*7}Z`;
}
