//mapper.js
const mysql = require('mysql');
const sql = require('./sql.js');
//커넥션 : server 와 db 사이에 있는 통로
//커넥션 풀 : 커넥션 저장소

const pool = mysql.createPool({
    host : `localhost`, // ip
    port : `3306`, // port번호는 3306
    user : `dev01`, // 계정
    password : `1234`, // 비밀번호
    database : `dev`, // 계정으로 접속하려고 하는 데이터 베이스
    connectionLimit : 10 // 선점
});

const query = (alias, values) => { 
    return new Promise((resolve,reject)=>{
        let excuteSql = sql[alias];//sql['customerInfo']
        console.log(excuteSql);
        pool.query(excuteSql,values,(err,results)=>{
            // 실제로 실행한 결과를 반환
            if(err){
                console.log(err);
                reject({err});//실패 호출 : reject
            }else{
                resolve(results);//성공 호출 : resolve
            }
        });
    });
}

module.exports = {
    query
};