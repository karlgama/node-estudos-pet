module.exports = (app) => {
    app.get('/atendimentos', (req, res) => res.send( 'funcionando')) 

    app.post('/atendimentos', (req, res) =>{
        const body = req.body
        console.log(body)
        res.send('postado')
    })
} 
