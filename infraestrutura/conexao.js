const mariadb = require("mariadb/callback");

const conexao = mariadb.createConnection({
  host: "localhost",
  port: 3306,
  user: "petshop",
  password: "123",
  database: "petshop",
});

module.exports = conexao;
