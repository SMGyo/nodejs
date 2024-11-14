// app.js
const express = require('express');
const app = express();
const mysql = require('./mapper.js');

// content-type : application/json
app.use(express.json());//미들웨어 등록

app.listen(3000, ()=>{
    console.log('Server start');
    console.log('http://localhost:3000');
});

// 전체조회
app.get('/customers', async (req,res) => { //async , await 안쓰면 res.send(list)가 먼저 실행이 되기때문에 아무결과도 안나옴
    let list = await mysql.query('customerList');
    res.send(list);
});

// 단건조회
app.get('/customers/:id',async (req,res)=>{
    let selected = req.params.id;
    let info = (await mysql.query('customerInfo', selected))[0]; //배열을 1개로 강제변환
    res.send(info);
}); //(rest)프라이머리키를 경로에 붙임
// 등록
app.post('/customers', async (req,res)=>{
    let newObj = req.body;
    console.log(newObj);
    let info = await mysql.query('customerInsert' , newObj);
    res.send(info);
});
/*
{
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 88, <- 이 값은 같지 않을수 있음
  "serverStatus": 2,
  "warningCount": 0,
  "message": "",
  "protocol41": true,
  "changedRows": 0
}
*/
// 수정
app.put('/customers/:id',(req,res)=>{
    
});
// 삭제
app.delete('/customers/:id',async(req,res)=>{
    let selected = req.params.id;
    let info = await mysql.query('customerDelete', selected);
    res.send(info);
});