const mariadb = require('mariadb/callback')

const conexao = mariadb.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'petshop',
    password:'123'
})

module.exports = conexao