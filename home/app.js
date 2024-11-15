// app.js
const express = require('express');
const app = express();
const mysql = require('./mapper.js');

app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server start');
    console.log('http://localhost:3000');
});

// 전체조회
app.get('/users', async (req,res) => { 
    let list = await mysql.query('t_usersList');
    res.send(list);
});

// 단건조회
app.get('/users/:no',async (req,res)=>{
    let selected = req.params.no;
    let info = (await mysql.query('t_usersInfo', selected))[0];
    res.send(info);
});
// 등록
app.post('/users', async (req,res)=>{
    let newObj = req.body;
    console.log(newObj);
    let info = await mysql.query('t_usersInsert' , newObj);
    res.send(info);
});

// 수정
app.put('/users/:no', async(req,res)=>{
    let newObj = req.body; // 수정할 내용
    let selected = req.params.no; //단일값 1 2 3 4 5 6 7 8 9
    console.log(newObj);
    let info = await mysql.query('t_usersUpdate' , [newObj,selected]);
    res.send(info);
});

// 삭제
app.delete('/users/:no',async(req,res)=>{
    let selected = req.params.no;
    let info = await mysql.query('t_usersDelete', selected);
    res.send(info);
});