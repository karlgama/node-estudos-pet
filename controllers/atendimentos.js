const Atendimento  = require('../models/Atendimento')

module.exports = (app) => {
    app.get('/atendimentos', (req, res) => res.send( 'funcionando')) 

    app.post('/atendimentos', (req, res) =>{        
        const atendimento = req.body
        Atendimento.create(atendimento)
        res.json(atendimento)
    })
} 
