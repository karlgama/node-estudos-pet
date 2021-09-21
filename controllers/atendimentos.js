const Atendimento  = require('../models/Atendimento')

module.exports = (app) => {
    app.get('/atendimentos', (req, res) => res.send( 'funcionando')) 

    app.post('/atendimentos',async (req, res) =>{        
        const atendimento = req.body
        try{
            const result = await Atendimento.create(atendimento)            
            return res.status(201).json(result)           
            
        }catch(e){
            return res.status(400).json(e)
        }
    })
} 
