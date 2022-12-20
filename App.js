//carregando modulos 
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require('./routers/admin')
//Configurações
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
    const ehbs = handlebars.create({
        defaultLayout:'handlebars'
    })
    
    app.engine('handlesbar', handlebars.engine)
    app.set('view egine', handlebars)
    //Configuracao do mongoose

    //Public 
        app.use(express.static(path.join(__dirname, "public")))
//Rotas
    app.use('/admin', admin)
//Outros

const port = 8080
app.listen(port, ()=> {
    console.log('Servidor esta rodando ...')
})