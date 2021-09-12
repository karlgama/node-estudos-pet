module.exports = (app) => {
    app.get( '/atendimentos ', (req, res) => res.send( 'funcionando ')) 

    app.post( '/atendimentos ', (req, res) =>{
        res.send( 'postado ')
    })
} 
