const pool = requires ("mysql2");

const db = pool.createPool ({
  host     : "localhost",
  user     : "root",
  password : "password",
  ports:    5555
});

module.exports = db;