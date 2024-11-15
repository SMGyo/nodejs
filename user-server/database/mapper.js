const mysql = require('mysql'); //추가한 모듈 불러오기
const sqlList = require('./sqls/users.js');

const connectionPool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT,
    debug : true //MySQL 디버그 모듈
});

const query = (alias, values)=> {
    return new Promise((resolve,reject)=>{
        let executeSql = sqlList[alias];
        connectionPool.query(executeSql, values , (err, results, fields) => {//자신이 가지고 있는 커넥션 중에 놀고있는 커넥션으로 배정함
            // console.log(fields);
            if(err){//실패
                console.log(err);
                reject({err});
            }else{//성공
                resolve(results);
            }
        });
    });
};

module.exports = {
    query,
}