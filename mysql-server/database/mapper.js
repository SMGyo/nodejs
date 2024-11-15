//mapper.js
const mysql = require('mysql');
const sql = require('./sqls/sql.js');
//커넥션 : server 와 db 사이에 있는 통로
//커넥션 풀 : 커넥션 저장소

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST, // ip
    port : process.env.MYSQL_PORT, // port번호는 3306
    user : process.env.MYSQL_USER, // 계정
    password : process.env.MYSQL_PWD, // 비밀번호
    database : process.env.MYSQL_DB, // 계정으로 접속하려고 하는 데이터 베이스
    connectionLimit : process.env.MYSQL_LIMIT // 선점
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