// 07_Destructuring.js
// 1) Object
let person = {
    firstName : "John",
    lastName : "Doe",
    age : 37,
    email : "john@gmail.com",
    country : "USA"
};

let {lastName, email} = person; //필드값
console.log(lastName);
console.log(email);

function getFullName({firstName, lastName}){
    console.log( `${lastName}, ${firstName}`);
}

getFullName(person);

// 2) Array
let scores = [70,80,90];

let [a,b,c] = scores;

console.log(a);
console.log(b);
console.log(c);