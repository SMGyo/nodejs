// router/user.js
const express = require('express');
const router = express.Router();
// /user + / => /user/
router.get('/', (req,res)=>{
    res.send('회원 정보 조회');
});

router.post('/insert', (req,res)=>{
    res.send('회원등록');
});

module.exports = router;//마지막은 항상 module.exports로 끝나야함 마침표 느낌 |밑에 코드 더쓰면 안됨