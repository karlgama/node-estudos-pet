const conexao = require('../infraestrutura/conexao')

class Atendimento {
    async create(atendimento) {
        const sql = 'INSERT INTO atendimentos set ?'

        conexao.query(sql,atendimento,(error,result)=>{
            if(error)
                console.log(error)
            console.log(result)
            return result
        })
    }
}

module.exports = new Atendimento