import { defineConfig } from 'vite';
export default defineConfig({build:{outDir:'dist-widget',lib:{entry:'src/lib/widget.js',name:'Samtpfote',formats:['es'],fileName:()=> 'samtpfote.js'}}});
