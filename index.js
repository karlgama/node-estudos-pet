const express = require('express')
const res = require('express/lib/response')
const app = express()

app.listen(3000,()=>{
    console.log('server running')
})

app.get('/atendimentos',(req,rest)=> res.send('funcionando'))