//carregando modulos 
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
//Configurações
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Configuracao do mongoose
//Rotas

//Outros

const port = 8080
app.listen(port, ()=> {
    console.log('Servidor esta rodando ...')
})