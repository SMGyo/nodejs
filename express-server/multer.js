const multer = require('multer');
const path = require('path');
//한글깨짐 고치는 코드 file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
const express = require('express');
const app = express();

const storage = multer.diskStorage({ // 디스크 저장소 정의
  destination : function(req, file, cb){ //파일, 경로
    cb(null, 'uploads/'); // cb 콜백 함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename : function(req, file, cb){
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
    cb(null, new Date().valueOf() + path.basename(file.originalname));
  }
});

const upload = multer({ storage : storage });

//싱글 파일 업로드
app.post('/profile', upload.single('avatar'), (req, res,next)=>{
  console.log(req.file); // avatar 이름의 싱글 파일
  console.log(req.body); // 일반적인 폼 데이터
});

//다중 파일 업로드
app.post('/photos', upload.array('photos', 12), (req,res)=>{//최대크기지정
  for(let file of req.files){ // photos 이름의 멀티 파일
    console.log(file);
  }
})

app.listen(5000, ()=>{
  console.log('Server Start!!');
})