// sql.js
// 전체조회
const t_usersList = 
`SELECT   user_no
        , user_id
        , user_pwd
        , user_name
        , user_gender
        , user_age
        , join_date
FROM t_users
ORDER BY user_id`;

// 단건조회
const t_usersInfo = 
`SELECT user_no
        , user_id
        , user_pwd
        , user_name
        , user_gender
        , user_age
        , join_date
FROM t_users
WHERE user_no = ?`;

// 등록
const t_usersInsert = 
`INSERT INTO t_users
 SET ?`;

// 수정
const t_usersUpdate = 
`UPDATE t_users
 SET ? 
 WHERE user_no = ?`;

// 삭제
const t_usersDelete = 
`DELETE FROM t_users
 WHERE user_no = ?`;

module.exports = {
    t_usersList,
    t_usersInfo,
    t_usersInsert,
    t_usersUpdate,
    t_usersDelete
};