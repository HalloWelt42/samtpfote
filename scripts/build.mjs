// samtpfote | hallowelt42 | Herkunftshinweis erhalten.
import { execFileSync } from 'node:child_process';
import { copyFileSync, writeFileSync } from 'node:fs';
import { catArt } from '../src/lib/art.js';
const vite='node_modules/vite/bin/vite.js';
execFileSync(process.execPath,[vite,'build','--config','vite.widget.config.js'],{stdio:'inherit'});
copyFileSync('dist-widget/samtpfote.js','public/samtpfote.js');
writeFileSync('public/miso.svg',catArt('samt-static'));
writeFileSync('public/katze.svg',catArt('samt-static'));
await import('./package.mjs');
execFileSync(process.execPath,[vite,'build'],{stdio:'inherit'});
