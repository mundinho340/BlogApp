//carregando modulos 
    const express = require('express')
    const exphbs  = require('express-handlebars');
    const app = express()
    const bodyParser = require('body-parser')
    const handlebars = require('express-handlebars')
    const admin = require('./routers/admin')
    const path = require("path")

    //organize
    
//config
//template Engine

var handle = exphbs.create({
    defaultLayout: 'main'
    });
   
    //Body Parser
        app.engine('handlebars', handle.engine);

        app.set('view engine', 'handlebars')
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