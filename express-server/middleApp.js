// middleApp.js
//모듈을 읽는 부분
const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();

// app.use(cors()); // 제한없이 모든 요청에 응답

const corsOptions = {// 모든 요청이 아닌 지정한 요청에 대해서만 응답
    origin : 'http://192.168.0.11:5500',
    optionsSuccessStatus : 200
}
app.use(cors(corsOptions));

// application/x-www-form-urlencoded
// json이 아닌 쿼리스트링으로 데이터 보내기 , json은 get 방식으로 데이터 못넘김
app.use(express.urlencoded({extended : false})); // 고유의 미들웨어가 있음

app.post('/info', (req, res)=>{
    res.send(`keyword : ${req.body.search}`);
});

app.listen(3000, ()=>{ //먼저 접근하기
    console.log('http://localhost:3000');
})

let sessionSetting = session({// 세션을 기반으로 어떤식으로 생성하고 관리할건지 객체를 기반으로 전달
    secret : '$#@1235TSecdx', // 'secret key' 암호화할때 사용하는 키 , 아무렇게나 적어도됨
    reseave : false, 
    saveUninitialized : true, // 값을 저장하기 전에 미리 세션을 생성
    cookie : { //쿠키는 기본적으로 보안이 안됨
        httpOnly : true, // 자바스크립트 접근 막음
        secure : false, // 보안강화 
        maxAge : 60000 // 유효 기간 : 넘어서면 자동으로 삭제됨
    }
});
app.use(sessionSetting); //세션 등록

//login(세션에 값 담음) , logout(세션값 삭제)
app.post('/login', (req, res)=>{
    const {id,pwd} = req.body; // { id : 'Hong', pwd : '1234' }
    req.session.user = id;
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/');
    })
})

app.get('/', (req, res)=>{
    res.send(req.session);
});

app.get('/logout', (req,res)=>{
    req.session.destroy();
    res.redirect('/');
})