//execute_module.js
const cal = require('./calculator.js');// .같은 경로 .. 상위 경로
const {add} = require('./calculator.js');// add만 필요하면 이 방식

let result = cal.add(10,5);
console.log(result);

result = add(20,50);
console.log(result);