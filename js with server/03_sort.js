// 03_sort.js

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // "Apple", "Banana", "Mango", "Orange"

let points = [40, 100, 1, 5 , 25 , 10];
points.sort();//첫글자 기준으로 정렬
console.log(points); //1, 10, 100, 25, 40, 5

points.sort(function(a,b){
    return a - b ;
});//a - b가 0보다 작으면 a가 b보다 먼저 오고,
//a - b가 0보다 크면 b가 a보다 먼저 오며,
//a - b가 0이면 두 값은 변하지 않습니다.
console.log(points);

let emps = [
    { 
        eid : 200,
        name : "King"
    },
    {
        eid : 100,
        name : "Edward"
    },
    {
        eid : 300,
        name : "Han"
    }
];

emps.sort((pre, next)=>{
    return pre.eid - next.eid;
});

console.log(emps);