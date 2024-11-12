const express = require('express');
const app = express();

app.get('/',(req, res)=>{ // 서버가 제공하는 서비스
    res.send('Server Connect');
});

app.listen(3000, ()=>{ //실제로 서버가 실행되는곳
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
})
//노드에서 만들어진 서버는 페이지가 없음