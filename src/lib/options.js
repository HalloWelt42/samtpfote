// samtpfote | hallowelt42 | Entwicklereinstellungen, keine zusätzlichen Demo-Bedienelemente.
export const DEFAULT_BEHAVIOR = {
  avoidance: { enabled:true, delay:3, distance:0, sizeFactor:.5, minDistance:75, maxDistance:145, returnDelay:8, speed:2.5, margin:45 },
  gaze: { enabled:true, smoothing:6, horizontalRange:9, verticalRange:6, headRange:5 },
  blink: { minInterval:3.5, maxInterval:8.5, duration:.26 },
  idle: { sleepAfter:35, drowsyRatio:.62, wakeDuration:2.2 },
  reactions: { swatEnabled:true, swatDelay:1.3, swatCooldown:10 },
  spontaneous: { enabled:true, minInterval:12, maxInterval:27 },
  actions: { petting:4.2, stretching:5.6, grooming:12.2, swatting:3.9 },
  motion: { enabled:true, bodyAmplitude:1, breathingAmplitude:1, earAmplitude:1, tailAmplitude:1, heartScale:1, stepHeight:5 },
  dreams: { enabled:true, delay:8, interval:24, duration:7 },
  audio: { volume:35 }
};
const limits={
 'avoidance.speed':[.2,30],'avoidance.delay':[0,3600],'avoidance.returnDelay':[0,3600],
 'idle.sleepAfter':[5,3600],'idle.drowsyRatio':[.05,.95],'idle.wakeDuration':[.1,30],
 'blink.duration':[.08,3],'blink.minInterval':[.2,120],'blink.maxInterval':[.2,120],
 'gaze.smoothing':[.1,60],'audio.volume':[0,100],
 'dreams.duration':[1,120],'dreams.interval':[1,3600],
 'actions.petting':[.5,120],'actions.stretching':[.5,120],'actions.grooming':[.5,120],'actions.swatting':[.5,120]
};
export function resolveBehavior(patch = {}, current = DEFAULT_BEHAVIOR) {
  const result={};
  for(const [group,fields] of Object.entries(DEFAULT_BEHAVIOR)){
    result[group]={};
    for(const [key,fallback] of Object.entries(fields)){
      const previous=current[group]?.[key]??fallback,value=patch?.[group]?.[key];
      if(typeof fallback==='boolean')result[group][key]=typeof value==='boolean'?value:previous;
      else {
        const [min,max]=limits[`${group}.${key}`]||[0,1000];
        result[group][key]=typeof value==='number'&&Number.isFinite(value)?Math.max(min,Math.min(max,value)):previous;
      }
    }
  }
  result.blink.maxInterval=Math.max(result.blink.minInterval,result.blink.maxInterval);
  result.spontaneous.maxInterval=Math.max(result.spontaneous.minInterval,result.spontaneous.maxInterval);
  result.avoidance.maxDistance=Math.max(result.avoidance.minDistance,result.avoidance.maxDistance);
  result.dreams.interval=Math.max(result.dreams.duration,result.dreams.interval);
  return result;
}
