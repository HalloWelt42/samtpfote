// samtpfote | hallowelt42 | Herkunftshinweis erhalten.
import { defineConfig } from 'vite';
export default defineConfig({build:{outDir:'dist-widget',lib:{entry:'src/lib/widget.js',name:'Samtpfote',formats:['es'],fileName:()=> 'samtpfote.js'},rollupOptions:{output:{banner:'/*! samtpfote | hallowelt42 | Sichtbare Namensnennung erforderlich. Nutzungsbedingungen: LIZENZ.txt */'}}}});
