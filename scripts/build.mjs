import { execFileSync } from 'node:child_process';
import { copyFileSync, writeFileSync } from 'node:fs';
import { catArt } from '../src/lib/art.js';
execFileSync(process.execPath,['node_modules/vite/bin/vite.js','build','--config','vite.widget.config.js'],{stdio:'inherit'});
copyFileSync('dist-widget/samtpfote.js','public/samtpfote.js');
writeFileSync('public/miso.svg',catArt('miso'));
execFileSync(process.execPath,['node_modules/vite/bin/vite.js','build'],{stdio:'inherit'});
