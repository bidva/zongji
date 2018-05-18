// Replication logs will be cleared!
// Database will be recreated!
module.exports = {
  connection: {
    host     : 'localhost',
    user     : 'root',
    password : '123',
    charset  : 'utf8mb4_unicode_ci',
    port     : process.env.TEST_MYSQL_PORT,
    dateStrings : process.env.TEST_DATE_STRINGS === 'true',
    // debug: true
  },
  database: 'zongji_test',
  sessionSqlMode: process.env.TEST_SESSION_SQL_MODE || ''
}

