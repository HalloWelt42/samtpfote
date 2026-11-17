// samtpfote | hallowelt42 | Freie Positionierung und Elementanker.
export function anchorPlacement(rect, size, alignment = 'top-right', offsetX = 0, offsetY = 0) {
  const horizontal=alignment.endsWith('left')?rect.left:alignment.endsWith('right')?rect.right-size.width:rect.left+(rect.width-size.width)/2;
  const baseline=alignment.startsWith('bottom')?rect.bottom:alignment==='center'?rect.top+rect.height/2:rect.top;
  return {x:horizontal+offsetX,y:baseline-size.height*(312/340)+offsetY};
}
export function coordinate(value, fallback = '16px') {
  if(value===null || value===undefined || value==='')return fallback;
  const text=String(value).trim();
  return /^-?(?:\d+\.?\d*|\.\d+)$/.test(text)?`${text}px`:text;
}

export function cornerShift(position, shift, homeLeft, width, viewportWidth) {
  if(position.endsWith('left'))return Math.min(Math.max(0,shift),Math.max(0,viewportWidth-homeLeft-width));
  return Math.max(Math.min(0,shift),-Math.max(0,homeLeft));
}
