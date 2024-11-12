// 04_path.js
console.log(__filename);//언더바 두개_+_
console.log(__dirname);

const path = require('path');

console.log('폴더정보', path.dirname(__filename));

console.log('실제 파일명 : %s', path.basename(__filename));

console.log('확장자 : %s', path.extname(__filename));