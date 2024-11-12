// 06_crypto.js
const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512') // 알고리즘
                    .update(data) // 출력하는 길이
                    .digest('base64'); // < hex
console.log(encData);

//솔트 기법