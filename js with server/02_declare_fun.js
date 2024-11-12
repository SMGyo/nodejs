// 02_declare.fun.js
// 1) 함수선언문 => var
/* //함수 호이스팅
var plus = function(x,y,z){
    return (x+y+z);
}
*/
function plus(x,y){//사라짐
    return (x+y);
}
console.log(plus(1,2,3));//6
function plus(x,y,z){
    return (x+y+z);
}
console.log(plus(1,2,3));//6
// var plus = function(x,y,z){
//     return (x+y+z);
// }
console.log(plus(5,6));//NaN
console.log(plus(1,2,3));//6

// 2) 함수표현식 => let, const 방식으로 함수를 선언
const printMsg = function(keyword){
    return "result : " + keyword;
}

// 3) 화살표 함수 => 자바스크립트 : () => {} 자바 : ()->{} 
//this => window
let aray = [1,2,3,4,5];
aray.forEach( val => console.log(val) );

aray.forEach((val,idx,array)=>{
    let msg = `${idx} : ${val}, ${array}`;//적혀진 형식으로 나옴
    console.log(msg);
});

const multi = (x,y) => x*y;
console.log(multi(10,5));