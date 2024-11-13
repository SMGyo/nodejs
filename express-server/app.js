const fs = require('fs');
const express = require('express');
const server = express();

const userRouter = require('./router/user.js');
server.use('/user',userRouter);

server.use('/img', express.static('./images')); // express.static 지정된 폴더를 통째로 불러내는 메소드 , 폴더이름이 사라지고 img로 바뀜
//예외처리 **
server.use(function(err, req,res,next){
    res.status(500).json({statusCode: res.statusCOde,//에러메시지를 뜨게 하기
                          errMessage : err.message});
});

server.get('/error', (req,res,next)=>{
    next(new Error('Process Fail! Check Data!'));
});
// 미들웨어 등록 - 익스프레스기반의 보조기능
server.use(express.json());


// DB 설정
const jsonFile = fs.readFileSync('data.json');//파일 분리 잘해야함
const jsonData = JSON.parse(jsonFile); // 제이슨을 객체배열로 변환시킬때 사용함

const query = (crud, target, where = null)=>{
    let result = null;
  
    let emps = jsonData;
    switch(crud){
    // 조회
    case 'SELECT' :
      result = (where == null) ? emps :  emps.filter(emp => {
        return findEmp(emp, where);
      });
      break;  
  
    // 등록
    case 'INSERT' :
      emps.push(target);
      break;
    // 수정
    case 'UPDATE' :
      emps.forEach(emp => {
        if(findEmp(emp, where)){
          for(let field in target){ //UPDATE는 target 사용
            emp[field] = target[field];
          }
        }
      });
      break;
    // 삭제
    case 'DELETE' :
      let selected = null;
      emps.forEach((emp, idx) => {
        if(findEmp(emp, where)){
          selected = idx;
        }
      });
  
      emps.splice(selected, 1);
      break;
    }
    return result;
  };
  
  function findEmp(emp, where){
    let selected = 0; // 총 검색조건 갯수
    let fieldNum = 0; // true인 검색조건 갯수

    for(let field in where){ //for in 객체 순환
      fieldNum++;
      if(emp[field] == where[field]){
        selected++;
      }
    }
    return (fieldNum == selected); // 하나라도 만족이 안되면 false 
  }


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

// 전체조회 : GET , emps | 주소 - http://localhost:3000/emps
server.get('/emps',(req,res)=>{
    // res.send(jsonData);
    res.send(query('SELECT'));
});
/*
    req.params => pathvariable
    req.body   => JSON 
    req.query  => QueryString
*/
// 단건조회 : GET , emps/:id => pathvariable | 주소 - http://localhost:3000/emps/10
server.get('/emps/:id', (req,res)=>{
    // res.send('Emp Info');
    res.send(query('SELECT',null,{id:req.params.id}));//params로 접근
});
// 등록 : POST , emps
server.post('/emps', (req,res)=>{
    console.log(req.body);
    res.send(query('INSERT', req.body));
    // res.send('Emp Insert');
});
// 수정 : PUT , emps/:id
server.put('/emps/:id',(req,res)=>{
    res.send(query('UPDATE', req.body, {id : req.params.id }));
    // res.send('Emp Update');
});
// 삭제 : DELETE , emps
server.delete('/emps/:id', (req,res)=>{
    // res.send('Emp Delete');
    res.send(query('DELETE', null, { id : req.params.id}));
});

//chrome boomerang extension | 크롬에 추가 확장프로그램 