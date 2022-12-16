//carregando modulos 
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
//Configurações

//Outros

const port = 8080
app.listen(port, ()=> {
    console.log('Servidor esta rodando ...')
})