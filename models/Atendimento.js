const conexao = require('../infraestrutura/conexao')

class Atendimento {
    create(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql,atendimento,(error,result)=>{
            if(error)
                console.log(error)
            console.log(result)
        })
    }
}

module.exports = new Atendimento