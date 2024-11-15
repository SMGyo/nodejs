// sql.js
// 전체조회
const customerList = // ``을 써야 줄바꿈
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers
ORDER BY id`;

// 단건조회
const customerInfo = 
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers
WHERE id = ?`; //id가 가져야하는 단일값 ?에 들어가야함

// 등록
const customerInsert = 
`INSERT INTO customers
 SET ?`; // { 'name' = 'Hong', 'phone' = '010-1234-1234' } SET 절에는 객체 타입이 들어간다

// 수정
const customerUpdate = 
`UPDATE customers
 SET ?  //if태그가 없음 
 WHERE id = ?`; //id에는 자릿값이 들어간다 
 //[ { 'name' = 'Hong', 'phone' = '010-1234-1234' }, 1 ]

// 삭제
const customerDelete = 
`DELETE FROM customers
 WHERE id = ?`;

 /*
 1) ? 갯수
 1-1) 1개 : 단일 값
 1-2) 2개 이상 : 배열
 2) ? 앞에 컬럼의 유무
 2-1 ) 컬럼이 존재하는 경우 기본 데이터 값(문자,숫자,날짜 등)
 2-2) 컬럼이 없는 경우 객체
 */

module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdate,
    customerDelete

};