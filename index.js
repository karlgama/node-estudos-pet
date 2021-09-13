const customExpress = require('./config/customExpress') 
const conexao = require('./infraestrutura/conexao')

const app = customExpress()
conexao.connect((erro)=>{
    console.log(erro)
})
app.listen(3000, () => {
    console.log('server running 3000') 
}) 
