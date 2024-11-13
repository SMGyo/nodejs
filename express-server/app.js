const express = require('express');
const server = express();

server.listen(3000, ()=>{
    console.log('Server Start');
    console.log('http://localhost:3000');
});

// 루트경로
server.get('/', (req, res)=>{
    // res.send('Server Connect!');//값을 받아오지않고 출력만
    // res.render('./index.html')
    res.sendFile('강아지용품.html',{root : __dirname});
});

// 전체조회 : GET , emps
server.get('/emps',(req,res)=>{
    res.send('Emp All List');
});
// 단건조회 : GET , emps/:id => pathvariable
server.get('/emps/:id', (req,res)=>{
    res.send('Emp Info');
});
// 등록 : POST , emps
server.post('/emps', (req,res)=>{
    res.send('Emp Insert');
});
// 수정 : PUT , emps/:id

// 삭제 : DELETE , emps


