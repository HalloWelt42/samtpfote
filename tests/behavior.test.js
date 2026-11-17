import { test } from 'node:test';
import assert from 'node:assert/strict';
import { follow, idleState, clamp } from '../src/lib/behavior.js';
test('Die Blickbewegung bleibt bei unterschiedlichen Bildraten gleich',()=>{
  let fast=0,slow=0;
  for(let i=0;i<120;i++)fast=follow(fast,1,6,1/120);
  for(let i=0;i<30;i++)slow=follow(slow,1,6,1/30);
  assert.ok(Math.abs(fast-slow)<1e-12);
  assert.ok(fast<1 && fast>.99);
});
test('Ruhe führt über Schläfrigkeit zum Schlaf',()=>{
  assert.equal(idleState(0,35),'curious');
  assert.equal(idleState(24,35),'drowsy');
  assert.equal(idleState(35,35),'sleeping');
});
test('Extreme Mauspositionen überschreiten den Blickbereich nicht',()=>{
 assert.equal(clamp(10,-1,1),1);assert.equal(clamp(-10,-1,1),-1);
});
