import { mkdir,copyFile,cp } from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const f of ['index.html','styles.css','app.js','events-ui.js','events.js','data.js','quiz.js','matching.js','routing.js','venue-info.js','venue-photos.js'])await copyFile(f,'dist/'+f);
await cp('public','dist',{recursive:true});
console.log('Built FunGoWhere static app in dist/');
