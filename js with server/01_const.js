// const.js
const user = {
    "id" : "Hong",
    "age" : 25
};

user.id = "Kang";
user.age = 20;
user.ssn = "981015";

// user = {}; //const로 선언된 변수는 재할당 할수없음 
//재할당 하려하면 오류 발생

console.log(user);