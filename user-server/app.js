require('dotenv').config({ path : './database/mysql.env' })

const express = require('express');
const app = express();
const userRouter = require('./router/user_router.js');

// 미들웨어 등록
app.use(express.json()); //application/json

// 라우터 등록
app.use('/', userRouter); // 나중에 수정

app.listen(3000, ()=>{
    console.log('Server Start');
    console.log('http://localhost:3000');
})

// 라우팅
app.get('/', (req,res)=>{
    res.send('Welcome!!');
})