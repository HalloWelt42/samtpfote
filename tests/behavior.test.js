// samtpfote | hallowelt42 | Herkunftshinweis erhalten.
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

import { CAT_NAME, possessive, safeText } from '../src/lib/config.js';
import { catArt } from '../src/lib/art.js';
test('Der zentrale Name und seine Beugung bleiben einheitlich',()=>{
 assert.ok(CAT_NAME.length>0);assert.equal(possessive('Miso'),'Misos');assert.equal(possessive('Max'),"Max'");
 assert.ok(catArt('probe').includes(`${CAT_NAME}, eine kleine Katze`));
});
test('Eigene Namen werden als Text behandelt und die Herkunft bleibt sichtbar',()=>{
 assert.equal(safeText('<Katze>'),'&lt;Katze&gt;');
 const svg=catArt('probe','<Katze>');assert.ok(!svg.includes('<Katze>'));assert.ok(svg.includes('hallowelt42 / samtpfote'));
 assert.ok(svg.includes('data-part="glass-paw-l"'));assert.ok(svg.includes('data-part="dream-cloud"'));
});

import { choreography, armPath, keyframe } from '../src/lib/motion.js';
test('Die Bewegungsabläufe beginnen und enden in der Grundhaltung',()=>{
 for(const [action,end] of [['stretching',5.6],['grooming',12.2],['swatting',3.9]]){
   for(const v of Object.values(choreography(action,0)))assert.equal(v,0);
   for(const v of Object.values(choreography(action,end)))assert.equal(v,0);
 }
 assert.equal(keyframe(-1,[[0,0],[1,1]]),0);
 assert.equal(keyframe(2,[[0,0],[1,1]]),1);
});
test('Die Pfoten erreichen die Scheibe versetzt und bleiben am Arm befestigt',()=>{
 const pose=choreography('swatting',.8);assert.ok(pose.left>pose.right);
 const path=armPath(132,238,120,172,-7);assert.ok(path.startsWith('M123 238'));assert.ok(!path.includes('NaN'));
});

import { resolveBehavior } from '../src/lib/options.js';
test('Entwicklereinstellungen sind unabhängig und unvollständige Änderungen erhalten bestehende Werte',()=>{
 const first=resolveBehavior({avoidance:{delay:3,distance:100}});
 const second=resolveBehavior({avoidance:{returnDelay:12}},first);
 assert.equal(second.avoidance.delay,3);assert.equal(second.avoidance.distance,100);assert.equal(second.avoidance.returnDelay,12);
 second.avoidance.delay=99;assert.equal(first.avoidance.delay,3);assert.equal(resolveBehavior().avoidance.delay,3);
});
test('Ungültige Konfigurationen erzeugen keine ungültigen Bewegungswerte',()=>{
 const config=resolveBehavior({avoidance:{speed:NaN},blink:{minInterval:10,maxInterval:2},idle:{drowsyRatio:9}});
 assert.equal(config.avoidance.speed,2.5);assert.equal(config.blink.maxInterval,10);assert.equal(config.idle.drowsyRatio,.95);
});

import { anchorPlacement, coordinate, cornerShift } from '../src/lib/placement.js';
test('Elementanker hält die Pfoten auf der gewünschten Kante',()=>{
 const p=anchorPlacement({left:100,right:500,top:300,bottom:500,width:400,height:200},{width:170,height:180.625},'top-right',-12,0);
 assert.equal(p.x,318);assert.ok(Math.abs(p.y+180.625*(312/340)-300)<1e-9);
 assert.equal(coordinate(120),'120px');assert.equal(coordinate('50vw'),'50vw');
});

test('Ein Wechsel zur linken Ecke übernimmt keine negative Ausweichverschiebung',()=>{
 for(const position of ['top-left','bottom-left']){
   assert.equal(cornerShift(position,-85,16,170,800),0);
   assert.equal(cornerShift(position,85,16,170,800),85);
   assert.equal(cornerShift(position,900,16,170,800),614);
 }
});
test('Die rechten Ecken bleiben auch nach Größenänderungen innerhalb des Bildes',()=>{
 for(const position of ['top-right','bottom-right']){
   assert.equal(cornerShift(position,85,614,170,800),0);
   assert.equal(cornerShift(position,-900,614,170,800),-614);
 }
});
