const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    create(atendimento,res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:SS')
        
        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        //exemplo Ho, nome asiático
        const clientValido = atendimento.cliente.length >= 2

        const validacoes = [
            {
                nome:data,
                valido:dataValida,
                mensagem: 'Data deve ser maior ou igual a data atual.'
            },
            {
                nome:'cliente',
                valido: clientValido,
                mensagem: 'cliente deve ter pelo menos 2 caracteres'
            }
        ]

        const erros = validacoes.filter(campo =>!campo.valido)
        const existemErros = erros.length > 0

        if(existemErros)
            return res.json(erros).status(400)
        
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO atendimentos set ?'

        conexao.query(sql,atendimentoDatado,(error,result)=>{
            if(error)
                return res.status(400).json(error)
            return res.json(atendimento).status(201)
        })
    }

    list(res) {
        const sql = 'select * from atendimentos';

        conexao.query(sql,(erro,resultados)=>{
            if(erro)return res.status(400).json(erro)
            return res.status(200).json(resultados)
        })
    }

    buscaPorId(id, res) {
        const sql = `select * from atendimentos where id=${id}`;

        conexao.query(sql, (erro,resultados)=>{
            if(erro)return res.json(erro).status(400)
            return res.json(resultados[0]).status(200);
        })
    }

    alterar(id, valores, res) {
        if(valores.data)valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:SS');

        const sql = 'UPDATE atendimentos set ? where id=?';
        

        conexao.query(sql,[valores, id],(erro, resultados)=>{
            return erro? res.status(400).json(erro):res.status(200).json(valores)
        })
    }

    delete(id, res) {
        const sql = 'delete from atendimentos where id=?';

        conexao.query(sql,id,(erro, resultados)=>{
            return erro ? res.status(400).json(erro):
            res.status(204).json(resultados)
        })
    }
}

module.exports = new Atendimento